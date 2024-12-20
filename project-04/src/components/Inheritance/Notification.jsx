import React, { Component } from 'react'

class Notification extends Component {

    displayIcon(){
        return <span>🔔</span>;
    }
    displayMessage() {
        return <p>Notification message</p>;
      }
  render() {
    return (
      <div>
        {this.displayIcon()} 
        {this.displayMessage()}
      </div>
    )
  }
}

export default Notification;