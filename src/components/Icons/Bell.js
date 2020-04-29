import React from "react";

const Bell = ({ fillColor = "#000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="22"
    viewBox="0 0 18 22"
  >
    <defs>
      <clipPath id="rsa1a">
        <path fill="#fff" d="M0 16h18v2H0z" />
      </clipPath>
      <clipPath id="rsa1b">
        <path fill="#fff" d="M8 0h2v3H8z" />
      </clipPath>
    </defs>
    <g>
      <g>
        <g>
          <path
            fill="none"
            stroke={fillColor}
            strokeWidth="2"
            d="M0 16v0h18v2H0v0z"
            clipPath='url("#rsa1a")'
          />
        </g>
        <g>
          <path
            fill="none"
            stroke={fillColor}
            strokeWidth="2"
            d="M8 0v0h2v3H8v0z"
            clipPath='url("#rsa1b")'
          />
        </g>
        <g>
          <path
            fill="none"
            stroke={fillColor}
            strokeWidth="2"
            d="M2.143 17v0S1 3 9 3s6.857 14 6.857 14v0z"
          />
        </g>
        <g>
          <path
            fill="none"
            stroke={fillColor}
            strokeWidth="2"
            d="M5.92 17v0s.41 4 3.077 4 3.077-4 3.077-4v0z"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default Bell;
