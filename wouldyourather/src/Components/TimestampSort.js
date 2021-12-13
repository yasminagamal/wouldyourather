import React, { Component } from 'react'

class TimestampSort extends Component{

  render(){
    function formatDate (timestamp) {
        const d = new Date(timestamp)
        const time = d.toLocaleTimeString('en-US')
        return time + ' | ' + d.toLocaleDateString()
      }
    return (
      <div>
        {formatDate(this.props.timestamp)}
      </div>
    )
  }
}

export default TimestampSort



