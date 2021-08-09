import React from "react"

import { GithubRibbon } from "react-github-ribbon-alt"
import "./index.css";

const commonProps = Object.freeze({
  href: "/",
  width: 200,
  height: 200,
});

const App = () => {
  return (
    <div className="container">
      <GithubRibbon
        className="ribbon-top-left"
        primary="white"
        secondary="hotpink"
        orientation="top-left"
        {...commonProps}
      />
      <GithubRibbon
        className="ribbon-top-right"
        primary="white"
        secondary="orange"
        orientation="top-right"
        {...commonProps}
      />
      <GithubRibbon
        className="ribbon-bottom-left"
        primary="white"
        secondary="black"
        orientation="bottom-left"
        {...commonProps}
      />
      <GithubRibbon
        className="ribbon-bottom-right"
        primary="white"
        secondary="limegreen"
        orientation="bottom-right"
        {...commonProps}
      />
      <div className="content">
        <h1>react-github-ribbon-alt</h1>
        <p>An alternate GitHub ribbon style for React</p>
      </div>
    </div>
  );
}

export default App
