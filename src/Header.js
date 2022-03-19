import { AcUnit, Forum, Person } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <IconButton>
        <Person className="header-icon" fontSize="medium" />
      </IconButton>
      <AcUnit className="header-icon" color="primary" fontSize="large" />
      <IconButton>
        <Forum className="header-icon" fontSize="medium" />
      </IconButton>
    </div>
  );
}

export default Header;
