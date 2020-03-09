import React from "react";

function ExoHeader(props) {
  const { title } = props;

  return (
    <header className="header-wrapper">
      <h1>{title}</h1>
    </header>
  );
}

export default ExoHeader;
