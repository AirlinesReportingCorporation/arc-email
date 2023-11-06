import React from "react";

export default function StandardHeader(props) {
  return (
    <>
      <tr
        style={{
          backgroundColor: "#212A76",
        }}
      >
        <td align="center" className="em_aside" valign="top">
          <table
            align="left"
            border="0"
            cellPadding="0"
            cellSpacing="0"
            className="em_wrapper"
            style={{ width: "700px" }}
            width="700"
          >
            <tbody>
              <tr>
                <td
                  colSpan={2}
                  class="em_height"
                  align="left"
                  valign="top"
                  width="100%"
                  height="30"
                  style={{
                    "border-collapse": "collapse",
                    "mso-table-lspace": "0pt",
                    "mso-table-rspace": "0pt",
                    "mso-line-height-rule": "exactly",
                    "line-height": "30px",
                  }}
                >
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td width="314" align="center" valign="middle">
                  <table
                    align="left"
                    border="0"
                    cellPadding="0"
                    cellSpacing="0"
                    className="em_wrapper"
                    style={{ width: "314px" }}
                    width="314"
                  >
                    <tbody>
                      <tr>
                        <td
                          align="left"
                          className="em_pad_bottom"
                          valign="middle"
                        >
                          <table align="left" valign="middle" cellpadding="5">
                            <tr>
                              <td>
                                <a
                                  href="https://www.atpco.net/"
                                  name="www2_arccorp_com_"
                                  style={{
                                    display: "inline",
                                    textDecoration: "none !important",
                                  }}
                                  target="_blank"
                                >
                                  <img
                                    alt="ARC"
                                    height="27"
                                    name="ARC-logo-header"
                                    src={
                                      "https://www2.arccorp.com/globalassets/email/elevate/ATPCO-logo-email.png"
                                    }
                                    style={{
                                      display: "block",
                                      border: "none",
                                    }}
                                    title="ARC"
                                    width="79"
                                  />
                                </a>
                              </td>
                              <td>
                                <a
                                  href="https://www2.arccorp.com/"
                                  name="www2_arccorp_com_"
                                  style={{
                                    display: "inline-block",
                                    textDecoration: "none !important",
                                  }}
                                  target="_blank"
                                >
                                  <img
                                    alt="ARC"
                                    height="27"
                                    name="ARC-logo-header"
                                    src={
                                      "https://www2.arccorp.com/globalassets/email/elevate/Logo-Divider-Line-Email.png"
                                    }
                                    style={{
                                      display: "block",
                                      border: "none",
                                    }}
                                    title="ARC"
                                    width="3"
                                  />
                                </a>
                              </td>
                              <td>
                                <a
                                  href="https://www2.arccorp.com/"
                                  name="www2_arccorp_com_"
                                  style={{
                                    display: "inline-block",
                                    textDecoration: "none !important",
                                  }}
                                  target="_blank"
                                >
                                  <img
                                    alt="ARC"
                                    height="20"
                                    name="ARC-logo-header"
                                    src={
                                      "https://www2.arccorp.com/globalassets/email/elevate/ARC-logo-Email.png"
                                    }
                                    style={{
                                      display: "block",
                                      border: "none",
                                    }}
                                    title="ARC"
                                    width="52"
                                  />
                                </a>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="em_hide" width="25">
                          &nbsp;
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td width="314" align="right" valign="middle">
                  <table
                    align="right"
                    border="0"
                    cellPadding="0"
                    cellSpacing="0"
                    className="em_wrapper"
                    width="314"
                  >
                    <tbody>
                      <tr>
                        <td
                          className="title_center"
                          align="right"
                          valign="middle"
                        >
                          <a
                            name="THE INTELLIGENCE BEHIND AIR TRAVEL"
                            style={{
                              display: "inline-block",
                              textDecoration: "none !important",
                            }}
                            href="https://elevate-travelconnect.com"
                          >
                            <img
                              alt="ARC"
                              height="11"
                              name="ARC-logo-header"
                              src={
                                "https://www2.arccorp.com/globalassets/email/elevate/elevate-tc-tag.png"
                              }
                              style={{
                                display: "block",
                                border: "none",
                              }}
                              title="ARC"
                              width="228"
                            />
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
    </>
  );
}
