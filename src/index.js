import React, { useState, useEffect } from "react"

const ORIENTATION = Object.freeze({
  "top-left": {
    polygonPoints: "165,0 110,0 0,110 0,165",
    groupTransform: "translate(66,66) rotate(-45)",
  },
  "top-right": {
    polygonPoints: "15,0 70,0 180,110 180,165",
    groupTransform: "translate(110,66) rotate(45)",
  },
  "bottom-left": {
    polygonPoints: "0,15 0,70 110,180 165,180",
    groupTransform: "translate(66,110) rotate(45)",
  },
  "bottom-right": {
    polygonPoints: "15,180 70,180 180,70 180,15",
    groupTransform: "translate(110,110) rotate(-45)",
  },
});

function handleHover(callback, userCallback, value, e) {
  const resolve = () => {
    callback(value);
    userCallback(e);
  };
  const prev = e.relatedTarget;
  e.stopPropagation();
  e.preventDefault();

  if (!prev) {
    resolve();
  } else {
    const parent = prev.parentElement;
    if (parent && parent.classList.contains("rgr-alt")) {
      resolve();
    }
  }
}

function GithubRibbon({
  href        = "/",
  className   = "",
  orientation = "top-right",
  primary     = "#ffffff",
  secondary   = "#000000",
  outline     = "#58a6ff",
  onClick     = () => {},
  onMouseOver = () => {},
  onMouseOut  = () => {},
  onFocus     = () => {},
  onBlur      = () => {},
  hoverFilter = "brightness(0.95)",
  ...props
}) {
  const { polygonPoints, groupTransform } = ORIENTATION[orientation];
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Navigate to the link when the component is focused and the return key is
    // pressed.
    function onKeyDown(e) {
      if (focused && e.code === "Enter") {
        window.location.href = href;
      }
    }
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [href, focused]);

  return (
    <div
      className={"rgr-alt " + className}
      dataHref={href}
      role="link"
      tabIndex="0"
      onFocus={e => {
        setFocused(true);
        onFocus(e);
      }}
      onBlur={e => {
        setFocused(false);
        onBlur(e);
      }}
      style={{ outline: "none" }}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 180 180"
        {...props}
      >
        <defs>
          <filter id="rgr-alt-shadow">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="3"
            />
          </filter>
        </defs>
        <a
          href={href}
          onClick={onClick}
          onMouseOver={handleHover.bind(null, setHovered, onMouseOver, true)}
          onMouseOut={handleHover.bind(null, setHovered, onMouseOut, false)}
        >
          <g style={{ filter: hovered ? hoverFilter : "none" }}>
            <polygon
              fill={secondary}
              points={polygonPoints}
              filter="url(#rgr-alt-shadow)"
            />
            <g transform={groupTransform}>
              <path
                fill={outline}
                opacity={+focused * 0.5}
                pointerEvents="none"
                d="M45.1,45.1C20.2,70-20.2,70-45.1,45.1s-24.9-65.3,0-90.2s65.3-24.9,90.2,0C70.1-20.3,70,20.2,45.1,45.1z"
                />
              <circle
                fill={secondary}
                filter="url(#rgr-alt-shadow)"
                cx="0"
                cy="0"
                r="43"
              />
              <circle
                fill="none"
                stroke={primary}
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="1.003,4.0119"
                cx="0"
                cy="0"
                r="39.1"
              />
              <path
                fill={primary}
                d="M10.9,4.2c3.1-0.1,4.4,4,4.5,6.6c0,2.5-1.3,6.6-4.5,6.6c-3.1,0.1-4.5-4.2-4.5-6.6C6.5,8.4,7.8,4.2,10.9,4.2z M-29.2,4.8c0.1-5.2,1.5-10,4.7-14c-0.6-1.8-0.9-3.8-0.9-5.8c0-2.6,0.6-4,1.8-6.3c5.4,0,9.1,1,13.2,4.2c3.3-0.7,6.4-1,9.8-1 c3.6-0.1,7.2,0.3,10.8,1.1c4.1-3.2,7.7-4.3,13.2-4.3c1.3,2.3,1.8,3.6,1.8,6.3c0,2-0.3,4.1-0.9,5.9c3.4,4,5,8.9,5,13.8 c0,3.9-0.6,8.1-2.4,11.5c-4.8,9.4-18.3,9-27.4,9s-21.7,0.3-26.3-9C-28.8,12.8-29.2,8.7-29.2,4.8L-29.2,4.8z M-3.1,23.2h5.8 C11.2,23.1,21,21.5,21,10.9c0-5.4-3.3-10.1-8.9-10.1c-2.3,0-4.5,0.3-6.8,0.7C3.5,1.9,1.6,2-0.2,2C-2,1.9-3.9,1.9-5.6,1.5 c-2.3-0.3-4.6-0.7-6.8-0.7c-5.7,0.1-8.9,4.7-8.9,10.1C-21.3,21.4-11.6,23.1-3.1,23.2z M-15.8,10.9c0,2.5,1.3,6.6,4.5,6.6 c3.1,0.1,4.4-4,4.5-6.6c0-2.5-1.3-6.6-4.5-6.6S-15.7,8.4-15.8,10.9z"
              />
            </g>
          </g>
        </a>
      </svg>
    </div>
  );
}
export { GithubRibbon };
