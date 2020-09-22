import React, { Component } from "react";
import Social from "component/Social";
import "assets/css/Main.css";

class Main extends Component {
  render() {
    return (
      <main className="main">
        <div className="main-con">
          <p className="main-text">
            ― Hi there, My name is Jayoung Lee.
            <br />
            I'am a Web Developer based in Seoul, South Korea
          </p>
          <Social />
        </div>
      </main>
    );
  }
}

export default Main;
