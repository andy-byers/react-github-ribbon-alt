# react-github-ribbon-alt

> An alternate GitHub ribbon style for React

[![NPM](https://img.shields.io/npm/v/react-github-ribbon-alt.svg)](https://www.npmjs.com/package/react-github-ribbon-alt) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-github-ribbon-alt
```

## Usage

```jsx
import { GithubRibbon } from "react-github-ribbon-alt";
import React from "react";

function App() {
  return (
    <GithubRibbon
      primary="white"
      secondary="hotpink"
      orientation="top-left"
      width="200"
      height="200"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
      }}
    />
  );
}

export default App;
```

## License

MIT © [andy-byers](https://github.com/andy-byers)
