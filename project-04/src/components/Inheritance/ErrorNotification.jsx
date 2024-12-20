import React, { Component } from 'react'
import Notification from './Notification'

export default class ErrorNotification extends Notification {
    displayIcon() {
        return <span>❌</span>;
      }
      displayMessage() {
        return <p>Error! Something went wrong.</p>;
      }
}
