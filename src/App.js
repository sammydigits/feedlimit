import React, { Component } from "react";
import Clock from "./components/clock";
import Button from "./components/button";
import Input from "./components/input";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      running: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.running !== prevState.running) {
      switch (this.state.running) {
        case true:
          this.handleStart();
      }
    }
  }

  handleStart() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState({ count: newCount >= 0 ? newCount : 0 });
    }, 1000);
  }

  handleStop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.setState({ running: false });
    }
  }

  handleReset() {
    this.setState({ count: 0 });
  }

  handleCountdown(seconds) {
    this.setState({
      count: seconds,
      running: true
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <div className="controlBar">
          <h1>FeedLimit</h1>
          <Clock time={count} />
          <Input
            onSetCountdown={this.handleCountdown.bind(this)}
            site="Twitter"
            url="https://www.twitter.com"
          />
          <Input
            onSetCountdown={this.handleCountdown.bind(this)}
            site="HN"
            url="https://news.ycombinator.com/news"
          />{" "}
          <Input
            onSetCountdown={this.handleCountdown.bind(this)}
            site="Reddit"
            url="https://old.reddit.com"
          />
          <Input
            onSetCountdown={this.handleCountdown.bind(this)}
            site="YouTube"
            url="https://www.youtube.com/feed/subscriptions?flow=2"
          />
          <Input
            onSetCountdown={this.handleCountdown.bind(this)}
            site="Hypebeast"
            url="https://www.hypebeast.com"
          />
          <Button label="stop" onClickHandler={this.handleStop.bind(this)} />
          <Button label="reset" onClickHandler={this.handleReset.bind(this)} />
        </div>
        <div
          style={{
            height: `727px`,
            backgroundSize: `contain`,
            backgroundImage: `url(https://images.unsplash.com/photo-1478088913771-e3a36f50bb63?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=793&amp;q=80)`
          }}
        >
          <p style={{ textAlign: `right` }}>
            Photo by{" "}
            <a href="https://unsplash.com/photos/pOWBHdgy1Lo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Neven Krcmarek
            </a>{" "}
            on Unsplash
          </p>
        </div>
        footer here
      </div>
    );
  }
}

export default App;
