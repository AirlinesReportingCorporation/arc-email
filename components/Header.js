import React from "react";

export default function Header(props) {
  return (
    <table
      role="presentation"
      border="0"
      cellpadding="0"
      cellspacing="0"
    >
      <tbody>
        <tr>
          <td>
            <table
              role="presentation"
              border="0"
              cellpadding="0"
              cellspacing="0"
              align={props.position}
              style={{ width: "360px"}}
              width="350"
            >
              <tbody>
                <tr>
                  <td>
                    {props.heading === "h1" ? 
                    <h1 style={{fontFamily: "Arial, sans-serif", fontWeight: "bold", fontSize: "30px", lineHeight: "34px", textAlign: props.position}}>{props.text}</h1> : props.heading === "h2" ? 
                    <h2 style={{fontFamily: "Arial, sans-serif", fontSize: "30px", lineHeight: "34px", textAlign: props.position}}>{props.text}</h2> : props.heading === "h3" ? 
                    <h3 style={{fontFamily: "Arial, sans-serif", fontSize: "20px", lineHeight: "22px", textAlign: props.position}}>{props.text}</h3> : ""}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
