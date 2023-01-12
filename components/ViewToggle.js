import React from "react";
import "../src/scss/main.scss"

export const ViewToggle = ({ toggled, onClick }) => {
  return (
    <>
      <label style={{textAlign: "center", padding: "5px", color: "#fff"}}>
        { toggled ? "See Mobile View" : "See Desktop View "}
        <div className="arc-email-tool-icon">
      <i className={ toggled ? "fas fa-thin fa-mobile" : "fas fa-thin fa-laptop"} style={{fontSize: "20px"}} onClick={onClick}></i>
      </div>
      </label>
    </>
  );
};
