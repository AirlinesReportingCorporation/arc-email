import React from "react";

export default function StandardHeader(props) {
  return (
    <tr style={{backgroundColor: props.color == "white" ? "#fff" : "#189bb0"}}>
      <td
        valign="top"
        align="center"
        style={{ paddingLeft: "34px", paddingRight: "34px" }}
      >
        <table align="center" border="0" cellSpacing="0" cellPadding="0">
          <tbody>
            <tr height="20"></tr>
            <tr>
              <td align="center" valign="top">
                <table
                  align="left"
                  border="0"
                  cellSpacing="0"
                  cellPadding="0"
                  width="629px"
                >
                  <tbody>
                    <tr>
                      <td width="478" align="center" valign="top">
                        <table
                          align="left"
                          border="0"
                          cellSpacing="0"
                          cellPadding="0"
                          width="96"
                        >
                          <tbody>
                            <tr>
                              <td align="center" valign="top">
                                <a
                                  href="https://www2.arccorp.com"
                                  style={{ textDecoration: "none" }}
                                  target="_blank"
                                >
                                  {/* If white is selected use the blue logo, otherwise use the white one */}
                                  <img
                                    alt="ARC Logo"
                                    height="20"
                                    width="52"
                                    name="ARC-logo-header.pgn"
                                    style={{
                                      display: "block",
                                      border: "none",
                                      fontFamily: "Arial, sans-serif",
                                      fontSize: "16px",
                                      lineHeight: "27px",
                                    }}
                                    src={
                                      props.color == "white"
                                        ? "https://www2.arccorp.com/globalassets/email/ARC-logo-header.jpg"
                                        : "https://www2.arccorp.com/globalassets/email/ARC-logo-header.png"
                                    }
                                  ></img>
                                </a>
                              </td>
                              <td class="em_hide" width="25">
                                &nbsp;
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          align="right"
                          border="0"
                          cellSpacing="0"
                          cellPadding="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                align="right"
                                height="20"
                                style={{fontFamily:"Arial, sans-serif", fontSize:"12px", color: (props.color == "white" ? "#189bb0" : "#fff"), lineHeight:"14px"}}
                                valign="middle"
                              >
                                <a
                                  href="https://www2.arccorp.com/articles-trends/the-latest/"
                                  style={{fontFamily:"Arial, sans-serif", fontSize:"12px", color: (props.color == "white" ? "#189bb0" : "#fff"), lineHeight:"14px", textDecoration:"none"}}
                                >
                                  THE INTELLIGENCE BEHIND AIR TRAVEL
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr height="20"></tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}
