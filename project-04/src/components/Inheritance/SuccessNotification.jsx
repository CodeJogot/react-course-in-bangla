import React, { Component } from 'react'
import Notification from './Notification'

export default class SuccessNotification extends Notification {
    displayIcon() {
        return <span>✅</span>;
      }
      displayMessage() {
        return <p>Success! Your operation completed successfully.</p>;
      }
}
