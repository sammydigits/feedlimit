import React, { Component } from "react";
import "./App.css";

class App extends Component {
  openPopup = url => {
    console.log(this);

    const width = window.innerWidth - 100;
    const height = window.innerHeight * 5;
    const left = 100;
    const top = 0;

    console.log(width, height, left, top);

    //const url = `https://www.twitter.com`;

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
  };

  render() {
    return (
      <div className="App">
        <div>
          <button onClick={() => this.openPopup("https://www.twitter.com")}>
            Twitter
          </button>
        </div>
        <div>
          <button
            onClick={() => this.openPopup("https://news.ycombinator.com/news")}
          >
            Hacker News
          </button>
        </div>
        <div>
          <button onClick={() => this.openPopup("https://old.reddit.com")}>
            Reddit
          </button>
        </div>{" "}
        <div>
          <button
            onClick={() =>
              this.openPopup(
                "https://www.youtube.com/feed/subscriptions?flow=2"
              )
            }
          >
            YouTube
          </button>
        </div>
      </div>
    );
  }
}

export default App;
