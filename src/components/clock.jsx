import React, { Component } from "react";

class Clock extends Component {
  format(time) {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
    seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
  }
  render() {
    const { time } = this.props;
    return <div className="timer">{this.format(time)}</div>;
  }
}

export default Clock;
