import { AcUnit, Email, Lock, Password } from '@mui/icons-material';
import {
  AppBar,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
} from '@mui/material';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import React, { useState } from 'react';
import './Register.css';
function Register() {
  const [currentTab, setCurrentTab] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [error, setError] = useState('');

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    // extract this into validation function
    if (!email || !password || !passwordRepeat) {
      console.log('missing fields');
      setError('Some fields are empty');
      return;
    }

    // register new user
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setEmail('');
        setPassword('');
        setPasswordRepeat('');
        setError('Account created!');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError(errorMessage);
      });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // extract this into validation function
    if (!email || !password) {
      console.log('missing fields');
      setError('Some fields are empty');
      return;
    }

    // login this user
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setError('User signed in!');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError(errorMessage);
      });
  };

  const handleTabChange = (event, newTab) => {
    setCurrentTab(newTab);
  };

  return (
    <Container maxWidth="sm">
      <form className="register-form">
        {/* <ToggleButtonGroup
          color="primary"
          value={currentToggle}
          exclusive
          onChange={handleToggleChange}
        >
          <ToggleButton value="register">Register</ToggleButton>
          <ToggleButton value="login">Login</ToggleButton>
        </ToggleButtonGroup> */}

        <AppBar
          color="transparent"
          position="static"
          sx={{ borderTopLeftRadius: 25, borderTopRightRadius: 25 }}
        >
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            // textColor="primary"
            // indicatorColor="primary"
            variant="fullWidth"
          >
            <Tab label="Register" sx={{ fontWeight: 'bold' }} />
            <Tab label="Login" sx={{ fontWeight: 'bold' }} />
          </Tabs>
        </AppBar>

        {currentTab === 0 ? (
          <div className="field-set-container">
            <TextField
              fullWidth
              required
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="register-field"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email fontSize="medium" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              required
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="register-field"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock fontSize="medium" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              required
              label="Repeat Password"
              variant="outlined"
              value={passwordRepeat}
              onChange={(e) => setPasswordRepeat(e.target.value)}
              className="register-field"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Password fontSize="medium" />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              className="register-button"
              onClick={handleRegisterSubmit}
              variant="contained"
            >
              Sign Up
            </Button>
          </div>
        ) : (
          <div className="field-set-container">
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-field"
            />
            <TextField
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-field"
              type="password"
            />
            <Button
              className="login-button"
              onClick={handleLoginSubmit}
              variant="contained"
            >
              Login
            </Button>
          </div>
        )}

        <IconButton>
          <AcUnit
            className="header-icon"
            color="primary"
            sx={{ fontSize: 75 }}
          />
        </IconButton>
        <p className="auth-message">{error}</p>
      </form>
    </Container>
  );
}

export default Register;
