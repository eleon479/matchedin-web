import { AcUnit, Forum, Person, ArrowBack } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import './Header.css';

function Header({ backButton }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout().then(() => navigate('/register'));
  }

  return (
    <div className="Header">
      {backButton ? (
        <Link to={backButton}>
          <IconButton>
            <ArrowBack className="header-icon" fontSize="medium" />
          </IconButton>
        </Link>
      ) : (
        <IconButton onClick={handleLogout}>
          <Person className="header-icon" fontSize="medium" />
        </IconButton>
      )}

      <Link to="/">
        <IconButton>
          <AcUnit
            className="header-icon"
            sx={{ color: 'white' }}
            fontSize="large"
          />
        </IconButton>
      </Link>

      <Link to="/inbox">
        <IconButton>
          <Forum className="header-icon" fontSize="medium" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
