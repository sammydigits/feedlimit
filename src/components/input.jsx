import React, { Component } from "react";

class Input extends Component {
  onSubmit(event) {
    event.preventDefault();
    const strSeconds = this.refs.seconds.value;
    if (strSeconds.match(/[0-9]/)) {
      this.refs.seconds.value = "";
      this.props.onSetCountdown(parseInt(strSeconds, 10));

      const width = window.innerWidth - 250;
      const height = window.innerHeight * 5;
      const left = 250;
      const top = 0;

      console.log(width, height, left, top);

      const url = this.props.url;

      let mywin = window.open(
        url,
        "feedlimit",
        `toolbar=no, location=no, directories=no, status=no, menubar=no, 
              scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
              height=${height}, top=${top}, left=${left}`
      );

      window.setTimeout(function() {
        mywin.close();
        console.log("closing...");
      }, 3000 * 100);

      /*var windowObjectReference = null; // global variable
        
            function openRequestedPopup(strUrl, strWindowName) {
              if (windowObjectReference == null || windowObjectReference.closed) {
                windowObjectReference = window.open(
                  strUrl,
                  strWindowName,
                  "resizable,scrollbars,status"
                );
              } else {
                windowObjectReference.focus();
              }
            }*/
    }
  }

  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit.bind(this)}>
        <input
          type="hidden"
          ref="seconds"
          placeholder="enter time in seconds"
          value="300"
        />
        <input type="submit" value={this.props.site} />
      </form>
    );
  }
}

export default Input;
