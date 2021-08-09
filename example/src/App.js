import { GithubRibbon } from "react-github-ribbon-alt";
import React from "react";
import "./index.css";

const commonProps = {
  href: "https://github.com/andy-byers/react-github-ribbon-alt",
  width: 200,
  height: 200,
};

const App = () => {
  return (
    <div className="container">
      <GithubRibbon
        id="custom-id"
        className="ribbon-top-left"
        primary="white"
        secondary="hotpink"
        outline="#b2f84d"
        orientation="top-left"
        {...commonProps}
      />
      <GithubRibbon
        className="ribbon-top-right"
        primary="white"
        secondary="orange"
        outline="#20ffef"
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
        outline="#d1009d"
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
