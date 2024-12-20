import React from 'react'

function Notification({icon, message}) {
    return (
        <div>
          <span>{icon}</span>
          <p>{message}</p>
        </div>
      );
}

export default Notification;