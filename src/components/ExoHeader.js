import React from "react";
import logo from "../img/exozet.svg";

function ExoHeader() {
  return (
    <header>
      <div className="logo-wrapper">
        <img src={logo} alt="exozet graphic" />
      </div>
    </header>
  );
}

export default ExoHeader;
