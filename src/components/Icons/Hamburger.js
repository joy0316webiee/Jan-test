import React from "react";

const Hamburger = ({ fillColor = "#000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="14"
    viewBox="0 0 15 14"
  >
    <g>
      <g>
        <path fill="none" stroke={fillColor} strokeWidth="2" d="M0 7h15" />
      </g>
      <g>
        <path fill="none" stroke={fillColor} strokeWidth="2" d="M0 1h15" />
      </g>
      <g>
        <path fill="none" stroke={fillColor} strokeWidth="2" d="M0 13h15" />
      </g>
    </g>
  </svg>
);

export default Hamburger;
