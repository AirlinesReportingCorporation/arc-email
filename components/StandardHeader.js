import React from "react";

export default function StandardHeader(props) {
  return (
    <>
      <tr
        style={{
          backgroundColor: props.color == "teal" ? "#189bb0" : props.color,
        }}
      >
        <td
          align="center"
          className="em_aside"
          style={{ paddingLeft: "34px", paddingRight: "34px" }}
          valign="top"
        >
          <table
            align="left"
            border="0"
            cellPadding="0"
            cellSpacing="0"
            className="em_wrapper"
            style={{ width: "629px" }}
            width="629"
          >
            <tbody>
              <tr>
                <td
                  colSpan={2}
                  class="em_height"
                  align="left"
                  valign="top"
                  width="100%"
                  height="20"
                  style={{
                    "border-collapse": "collapse",
                    "mso-table-lspace": "0pt",
                    "mso-table-rspace": "0pt",
                    "mso-line-height-rule": "exactly",
                    "line-height": "20px",
                  }}
                >
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td width="314" align="left" valign="top">
                  <table
                    align="left"
                    border="0"
                    cellPadding="0"
                    cellSpacing="0"
                    className="em_wrapper"
                    style={{ width: "96px" }}
                    width="96"
                  >
                    <tbody>
                      <tr>
                        <td
                          align="center"
                          className="em_pad_bottom"
                          valign="top"
                        >
                          <a
                            href="https://www2.arccorp.com/"
                            name="www2_arccorp_com_"
                            style={{
                              textDecoration: "none !important",
                            }}
                            target="_blank"
                          >
                            <img
                              alt="ARC"
                              height="20"
                              name="ARC-logo-header"
                              src={
                                "https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-l-" +
                                (props.color == "white" || props.color == ""
                                  ? "teal"
                                  : "white") +
                                ".png"
                              }
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
                        <td className="em_hide" width="25">
                          &nbsp;
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td width="314" align="right" valign="top">
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
                          height="20"
                          style={{
                            fontFamily: "Arial, sans-serif",
                            fontSize: "12px",
                            color:
                              props.color == "white" ? "#189bb0" : "#FFFFFF",
                            lineHeight: "14px",
                            textAlign: "right",
                          }}
                          valign="middle"
                        >
                          <a
                            name="THE INTELLIGENCE BEHIND AIR TRAVEL"
                            style={{
                              fontFamily: "Arial, sans-serif",
                              fontSize: "12px",
                              color:
                                props.color === "white"
                                  ? "#189bb0"
                                  : "#FFFFFF !important",
                              lineHeight: "14px",
                              textDecoration: "none !important",
                            }}
                            href="https://www2.arccorp.com/articles-trends/the-latest/"
                          >
                            <span
                              style={{
                                fontFamily: "Arial, sans-serif",
                                fontSize: "12px",
                                color:
                                  props.color === "white"
                                    ? "#189bb0"
                                    : "#FFFFFF !important",
                                lineHeight: "14px",
                                textDecoration: "none !important",
                              }}
                            >
                              <font
                                style={{
                                  fontFamily: "Arial, sans-serif",
                                  fontSize: "12px",
                                  color:
                                    props.color === "white"
                                      ? "#189bb0"
                                      : "#FFFFFF !important",
                                  lineHeight: "14px",
                                  textDecoration: "none !important",
                                }}
                              >
                                THE INTELLIGENCE BEHIND AIR TRAVEL
                              </font>
                            </span>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  class="em_height"
                  align="left"
                  valign="top"
                  width="100%"
                  height="20"
                  style={{
                    "border-collapse": "collapse",
                    "mso-table-lspace": "0pt",
                    "mso-table-rspace": "0pt",
                    "mso-line-height-rule": "exactly",
                    "line-height": "20px",
                  }}
                >
                  &nbsp;
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </>
  );
}
