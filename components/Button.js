import React, { useCallback } from "react";

export default function Button(props) {
  return (
    <tr>
      <td
        style={{
          paddingLeft: "25px",
          paddingRight: "25px"
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
              <td class="em_height" height="40">
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
                      <td class="em_height" height="17">
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
                        {" "}
                        <a
                          href={props.link}
                          style={{
                            textDecoration: "none",
                            display: "block",
                            lineHeight: "15px",
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
                    <tr>
                      <td class="em_height" height="17">
                        &nbsp;
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td class="em_height" height="40">
                &nbsp;
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}
