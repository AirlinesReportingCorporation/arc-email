import React from "react";

export default function Button(props) {
  return (
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
                    style={{backgroundColor: "#189bb0", border: "2px solid #189bb0",width:"135px", height: "50px"}}
                  >
                    <tbody>
                      <tr>
                        <td align="center" style={{fontFamily: "Arial, sans-serif", fontSize:"13px", color: "#fff"}}>
                          {" "}
                          <a href={props.link} style={{textDecoration: "none", color: "#fff", display:"block", lineHeight: "48px",fontWeight: "bold"}} target="_blank">
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
  );
}
