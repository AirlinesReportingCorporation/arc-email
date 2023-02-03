import React, { useCallback } from "react";

export default function Button(props) {
  return (
    <tr>
      <td
        style={{
          paddingLeft: "25px",
          paddingRight: "25px",
        }}
      >
        <table
          role="presentation"
          border="0"
          cellpadding="0"
          cellspacing="0"
          className="btn btn-primary"
          width="100%"
        >
          <tbody>
            {/* Built-m Spacer */} 
            <tr>
              <td
                class="em_height"
                align="left"
                valign="top"
                width="100%"
                height="45"
                style={{
                  "border-collapse": "collapse",
                  "mso-table-lspace": "0pt",
                  "mso-table-rspace": "0pt",
                  "mso-line-height-rule": "exactly",
                  "line-height": "45px",
                }}
              >
                &nbsp;
              </td>
            </tr>
            <tr>
              <td>
                <table
                  role="presentation"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  align="center"
                  style={{
                    width: "135px",
                    height: "50px",
                    border: "2px solid #189bb0",
                    backgroundColor:
                      props.buttonStyle == "outlineBtn" ? "#fff" : "#189bb0",
                  }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          color:
                            props.buttonStyle == "outlineBtn"
                              ? "#189bb0"
                              : "#fff",
                          fontFamily: "Arial, sans-serif",
                          fontSize: "13px",
                        }}
                        align="center"
                      >
                        {" "}
                        <a
                          href={props.link}
                          style={{
                            textDecoration: "none",
                            display: "block",
                            lineHeight: "48px",
                            fontWeight: "bold",
                            color:
                              props.buttonStyle == "outlineBtn"
                                ? "#189bb0"
                                : "#fff",
                          }}
                          target="_blank"
                        >
                          {props.text}
                        </a>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            {/* Built-in Spacer */}
            <tr>
              <td
                class="em_height"
                align="left"
                valign="top"
                width="100%"
                height="45"
                style={{
                  "border-collapse": "collapse",
                  "mso-table-lspace": "0pt",
                  "mso-table-rspace": "0pt",
                  "mso-line-height-rule": "exactly",
                  "line-height": "45px",
                }}
              >
                &nbsp;
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}
