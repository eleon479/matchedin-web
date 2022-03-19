import { AcUnit, Forum, Person, ArrowBack } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ backButton }) {
  return (
    <div className="Header">
      {backButton ? (
        <Link to={backButton}>
          <IconButton>
            <ArrowBack className="header-icon" fontSize="medium" />
          </IconButton>
        </Link>
      ) : (
        <IconButton>
          <Person className="header-icon" fontSize="medium" />
        </IconButton>
      )}

      <Link to="/">
        <IconButton>
          <AcUnit className="header-icon" color="primary" fontSize="large" />
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
