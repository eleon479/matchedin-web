import React from 'react';
import './Inbox.css';
import MessagePreview from './MessagePreview';
function Inbox() {
  return (
    <div className="Inbox">
      <MessagePreview
        name="Jared"
        message="check these out"
        timestamp="40 seconds ago"
        profilePic="https://firebasestorage.googleapis.com/v0/b/matchedin-43d61.appspot.com/o/images%2Fjared.jpg?alt=media&token=9afebd15-5341-4fc9-8daa-1a8932d73533"
      />
      <MessagePreview
        name="Jeff"
        message="$$$"
        timestamp="10 minutes ago"
        profilePic="https://imageio.forbes.com/specials-images/imageserve/5f469ea85cc82fc8d6083f05/0x0.jpg?format=jpg&width=1200&fit=bounds"
      />
      <MessagePreview
        name="Monica"
        message="ayo"
        timestamp="2 days ago"
        profilePic="https://firebasestorage.googleapis.com/v0/b/matchedin-43d61.appspot.com/o/images%2Fmonica.jpg?alt=media&token=3c25c29b-08e5-42de-b8bc-a844e990ec36"
      />
    </div>
  );
}

export default Inbox;
