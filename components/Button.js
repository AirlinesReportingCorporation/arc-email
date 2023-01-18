import React, { useCallback } from "react";

export default function Button(props) {
  return (
<<<<<<< HEAD
    <table
      role="presentation"
      border="0"
      cellpadding="0"
      cellspacing="0"
      className="btn btn-primary"
    >
      <tbody>
        <tr>
          <td align={props.position? props.position : "left"}>
            <table
              role="presentation"
              border="0"
              cellpadding="0"
              cellspacing="0"
            >
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <a href={props.link} target="_blank">
                      {props.text}
                    </a>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
=======
      <tr>
        <td style={{ paddingLeft: "25px", paddingRight: "25px", paddingTop:"5px", paddingBottom: "5px"}}>
          <table
            role="presentation"
            border="0"
            cellpadding="0"
            cellspacing="0"
            className="btn btn-primary"
            width="100%"
          >
            <tbody>
              <tr height="40px"></tr>
              <tr>
                <td>
                  <table
                    role="presentation"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    align="center"
                    style={{width: "135px", height: "50px", border: "2px solid #189bb0", backgroundColor: (props.buttonStyle == "outlineBtn" ?  "#fff" : "#189bb0")}}
                  >
                    <tbody>
                      <tr>
                        <td style={{color: (props.buttonStyle == "outlineBtn" ?  "#189bb0" : "#fff"), fontFamily: "Arial, sans-serif", fontSize: "13px"}} align="center">
                          {" "}
                          <a href={props.link} style={{textDecoration: "none",display: "block",lineHeight: "48px",fontWeight: "bold", color: (props.buttonStyle == "outlineBtn" ?  "#189bb0" : "#fff")}} target="_blank">
                            {props.text}
                          </a>{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr height="40px"></tr>
            </tbody>
          </table>
        </td>
      </tr>
>>>>>>> c5fdd44ad98066cc1ba868f012668f6791f396ce
  );
}