import {
  Close,
  Favorite,
  FlashOn,
  Replay,
  StarRate,
} from '@mui/icons-material';
import { Container, IconButton } from '@mui/material';
import React from 'react';
import './Controls.css';
function Controls() {
  return (
    <div className="Controls">
      <IconButton className="undo">
        <Replay fontSize="large" />
      </IconButton>
      <IconButton className="reject">
        <Close fontSize="large" />
      </IconButton>
      <IconButton className="star">
        <StarRate fontSize="large" />
      </IconButton>
      <IconButton className="match">
        <Favorite fontSize="large" />
      </IconButton>
      <IconButton className="surge">
        <FlashOn fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Controls;
