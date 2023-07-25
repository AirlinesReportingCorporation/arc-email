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
            <tr>
              <td class="em_height" height="40" style={{ lineHeight: "40px" }}>
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
                    width: props.buttonwidth ? props.buttonwidth : "135px",
                    height: "40px",
                    border: "2px solid #189bb0",
                    backgroundColor:
                      props.buttonStyle == "outlineBtn" ? "#fff" : "#189bb0",
                  }}
                >
                  <tbody>
                    <tr>
                      <td
                        class="em_height"
                        height="16"
                        style={{ lineHeight: "16px" }}
                      >
                        &nbsp;
                      </td>
                    </tr>
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
                        <a
                          href={
                            props.link
                              ? props.link
                              : "https://www2.arccorp.com/"
                          }
                          style={{
                            textDecoration: "none",
                            display: "block",
                            lineHeight: "13px",
                            fontWeight: "bold",
                            color:
                              props.buttonStyle == "outlineBtn"
                                ? "#189bb0"
                                : "#fff",
                          }}
                          target="_blank"
                        >
                          {props.text}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="em_height"
                        height="16"
                        style={{ lineHeight: "16px" }}
                      >
                        &nbsp;
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td class="em_height" height="40" style={{ lineHeight: "40px" }}>
                &nbsp;
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}
