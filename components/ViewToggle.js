import React, { useState } from "react";
import "../src/scss/main.scss"

export const ViewToggle = ({ toggled, onClick }) => {
  // set the state using a hook:
  const [isToggled, toggle] = useState(toggled);

  // Function to run when clicked

  const toggleView = () => {
    toggle(!isToggled);
  };

  return (
    <>
      <label style={{textAlign: "center", padding: "5px", color: "#fff"}}>
        {isToggled ? "See Mobile View" : "See Desktop View "}
        <div className="arc-email-tool-icon">
      <i className={ isToggled ? "fas fa-thin fa-mobile" : "fas fa-thin fa-laptop"} style={{fontSize: "20px"}} onClick={toggleView}></i>
      </div>
      </label>
    </>
  );
};
