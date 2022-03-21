import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      console.log('missing fields');
      return;
    }

    // log user in
    // const auth = getAuth();
  };

  return (
    <div className="Login">
      <form className="login-form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-field"
          type="text"
          placeholder="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-field"
          type="password"
          placeholder="pass123"
        />
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
}

export default Login;
