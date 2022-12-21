import React from "react";

export default function TealHeader(props) {
  return (
    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
      <tbody>
        <tr>
          <td align="center">
            <table
              role="presentation"
              border="0"
              cellpadding="0"
              cellspacing="0"
              style={{ textAlign: "center" }}
            >
              <tbody>
                <tr bgcolor="#189bb0" style={{ background: "#189bb0" }}>
                  <td
                    align="center"
                    class="em_aside"
                    style={{ paddingLeft: "34px", paddingRight: "34px" }}
                    valign="top"
                  >
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      width="100%"
                    >
                      <tr>
                        <td class="em_height" height="20">
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                          <table
                            align="left"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="em_wrapper"
                            style={{width:"629px"}}
                            width="478"
                          >
                            <tbody>
                              <tr>
                                <td width="478" align="center" valign="middle">
                                  <table
                                    align="left"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="em_wrapper"
                                    style={{width:"96px", verticalAlign: "middle"}}
                                    width="96"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          align="center"
                                          class="em_pad_bottom"
                                          valign="top"
                                        >
                                          <a
                                            href={props.link ? props.link : "https://www2.arccorp.com/"}
                                            name="www2_arccorp_com_"
                                            style={{textDecoration:"none"}}
                                            target="_blank"
                                          >
                                            <img
                                              alt="ARC"
                                              height="20"
                                              name="ARC-logo-header.png"
                                              src="https://www2.arccorp.com/globalassets/email/ARC-logo-header.png"
                                              style={{
                                                display: "block",
                                                border: "none",
                                                fontFamily: "Arial, sans-serif",
                                                fontSize: "16px",
                                                lineHeight: "27px",
                                                color: "#000000",
                                              }}
                                              title="ARC"
                                              width="52"
                                            />
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
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="em_wrapper"
                                    width="275"
                                    style={{width: "275px"}}
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          class="title_center"
                                          align="right"
                                          height="20"
                                          style={{
                                            fontFamily: "Arial, sans-serif",
                                            fontSize: "12px",
                                            color: "#ffffff",
                                            lineHeight: "14px",
                                            verticalAlign: "middle"
                                          }}
                                          valign="middle"
                                        >
                                          <a
                                            href="https://www2.arccorp.com/articles-trends/the-latest/"
                                            style={{
                                              fontFamily: "Arial, sans-serif",
                                              fontSize: "12px",
                                              color: "#ffffff",
                                              lineHeight: "14px",
                                              textDecoration: "none",
                                            }}
                                          >
                                            THE INTELLIGENCE BEHIND AIR TRAVEL
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td class="em_height" height="20">
                                  &nbsp;
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </table>
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
