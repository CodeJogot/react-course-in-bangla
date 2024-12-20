import React from 'react'
import Notification from './Notification';



function ErrorNotification() {
    return (
      <Notification
        icon="❌"
        message="Something went wrong!"
      />
    );
  }

export default ErrorNotification;