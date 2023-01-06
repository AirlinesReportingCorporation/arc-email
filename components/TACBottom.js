import React from "react";

export default function TACBottom(props) {
  return (
    <tr>
      <td
        align="center"
        class="em_aside"
        style={{ paddingLeft: "25px", paddingRight: "25px" }}
        valign="top"
      >
        {" "}
        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td
                class="em_height"
                style={{
                  height: "30px",
                  fontSize: "0",
                  lineHeight: "0",
                }}
              >
                &nbsp;
              </td>
            </tr>
            <tr>
              <td
                width="313"
                height="210"
                style={{ width: "313px", height: "210px" }}
              >
                <table
                  role="presentation"
                  border="0"
                  width="313"
                  height="210"
                  cellpadding="0"
                  cellspacing="0"
                  style={{
                    textAlign: "center",
                  }}
                >
                  <tr
                    size="9"
                    style={{
                      height: "9px",
                      lineHeight: "9px",
                      fontSize: "9px",
                    }}
                  >
                    <td
                      height="9"
                      size="9"
                      style={{
                        height: "9px",
                        lineHeight: "9px",
                        fontSize: "9px",
                      }}
                    >
                      <img
                        src="https://www2.arccorp.com/globalassets/email-parts/tacbottomtop.png?1"
                        width="313px"
                        height="9"
                        style={{
                          width: "313px",
                          display: "block",
                        }}
                      />
                    </td>
                  </tr>
                  <tr
                    style={{
                      backgroundColor: "#d4d4d4",
                      background: "#d4d4d4",
                    }}
                  >
                    <td
                      style={{
                        backgroundColor: "#d4d4d4",
                        background: "#d4d4d4",
                        lineHeight: "0",
                        fontSize: "0",
                      }}
                      class="em_height"
                      height="10"
                    >
                      &nbsp;
                    </td>
                  </tr>

                  <tr
                    style={{
                      backgroundColor: "#d4d4d4",
                      background: "#d4d4d4",
                    }}
                  >
                    <td align="center" height="50">
                      <img
                        src="https://www2.arccorp.com/globalassets/email-parts/tip-icon.png"
                        width="50"
                        height="48.36"
                        style={{
                          width: "50px",
                          height: "48.36px",
                          display: "block",
                          margin: "0",
                          padding: "0",
                        }}
                      />
                    </td>
                  </tr>
                  <tr
                    style={{
                      backgroundColor: "#d4d4d4",
                      background: "#d4d4d4",
                    }}
                  >
                    <td
                      style={{
                        backgroundColor: "#d4d4d4",
                        background: "#d4d4d4",
                        lineHeight: "0",
                        fontSize: "0",
                      }}
                      class="em_height"
                      height="10"
                    >
                      &nbsp;
                    </td>
                  </tr>
                  <tr
                    style={{
                      backgroundColor: "#d4d4d4",
                      background: "#d4d4d4",
                    }}
                  >
                    <td
                      style={{
                        fontFamily: "SourceSansPro, Arial, sans-serif",
                        fontSize: "18px",
                        lineHeight: "18px",
                        fontWeight: "bold",
                        color: "#2a2b2c",
                        width: "100%",
                        padding: "0",
                        margin: "0",
                      }}
                      valign="center"
                    >
                      {props.TIP_Title ? props.TIP_Title : "Tip of the Week"}
                    </td>
                  </tr>
                  <tr
                    style={{
                      backgroundColor: "#d4d4d4",
                      background: "#d4d4d4",
                    }}
                  >
                    <td
                      style={{
                        fontFamily: "SourceSansPro, Arial, sans-serif",
                        fontSize: "15px",
                        lineHeight: "18px",
                        fontWeight: "light",
                        color: "#2a2b2c",
                        width: "100%",
                      }}
                      height="45"
                      valign="center"
                    >
                      <p
                        style={{
                          padding: "0",
                          margin: "0",
                          fontSize: "14px",
                          lineHeight: "18px",
                          backgroundColor: "#d4d4d4",
                          background: "#d4d4d4",
                        }}
                      >
                        {props.TIP_Text
                          ? props.TIP_Text
                          : "Lorem Ipsum Dolor Sit Amet"}
                      </p>
                    </td>
                  </tr>
                  <tr
                    style={{
                      backgroundColor: "#d4d4d4",
                      background: "#d4d4d4",
                    }}
                  >
                    <td
                      style={{
                        fontFamily: "SourceSansPro, Arial, sans-serif",
                        fontSize: "16px",
                        lineHeight: "18px",
                        fontWeight: "light",
                        color: "#2a2b2c",
                        width: "100%",
                      }}
                      //valign="top"
                    >
                      <a
                        style={{
                          color: "#2a2b2c",
                          fontWeight: "bold",
                          fontSize: "16px",
                          lineHeight: "18px",
                          textDecoration: "none",
                          backgroundColor: "#d4d4d4",
                          background: "#d4d4d4",
                          verticalAlign: "middle",
                          display: "block",
                          padding: "0",
                        }}
                        href={
                          props.TIP_Link
                            ? props.TIP_Link
                            : "https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/"
                        }
                      >
                        LEARN MORE{" "}
                        <img
                          height="10"
                          width="6.36"
                          src="https://www2.arccorp.com/globalassets/email-parts/caret-black.png?1"
                        />
                      </a>
                    </td>
                  </tr>

                  <tr
                    style={{
                      backgroundColor: "#d4d4d4",
                      background: "#d4d4d4",
                    }}
                  >
                    <td
                      style={{
                        backgroundColor: "#d4d4d4",
                        background: "#d4d4d4",
                        lineHeight: "0",
                        fontSize: "0",
                      }}
                      class="em_height"
                      height="10"
                    >
                      &nbsp;
                    </td>
                  </tr>

                  <tr
                    size="9"
                    style={{
                      height: "9px",
                      lineHeight: "9px",
                      fontSize: "9px",
                    }}
                  >
                    <td
                      height="9"
                      size="9"
                      style={{
                        height: "9px",
                        lineHeight: "9px",
                        fontSize: "9px",
                      }}
                    >
                      <img
                        src="https://www2.arccorp.com/globalassets/email-parts/tacbottombottom.png?1"
                        width="313px"
                        height="9"
                        style={{
                          width: "313px",
                          display: "block",
                        }}
                      />
                    </td>
                  </tr>
                </table>
              </td>

              <td width="20" style={{ width: "20px" }}>
                &nbsp;
              </td>
              <td
                width="313"
                height="210"
                style={{ width: "313px", height: "210px" }}
              >
                <table
                  role="presentation"
                  border="0"
                  width="313"
                  height="210"
                  cellpadding="0"
                  cellspacing="0"
                  style={{
                    textAlign: "center",
                  }}
                >
                  <tr
                    size="9"
                    style={{
                      height: "9px",
                      lineHeight: "9px",
                      fontSize: "9px",
                    }}
                  >
                    <td
                      height="9"
                      size="9"
                      style={{
                        height: "9px",
                        lineHeight: "9px",
                        fontSize: "9px",
                      }}
                    >
                      <img
                        src="https://www2.arccorp.com/globalassets/email-parts/tacbottomtop.png?1"
                        width="313px"
                        height="9"
                        style={{
                          width: "313px",
                          display: "block",
                        }}
                      />
                    </td>
                  </tr>

                  <tr
                    style={{
                      backgroundColor: "#d4d4d4",
                      background: "#d4d4d4",
                    }}
                  >
                    <td
                      style={{
                        backgroundColor: "#d4d4d4",
                        background: "#d4d4d4",
                        lineHeight: "0",
                        fontSize: "0",
                      }}
                      class="em_height"
                      height="10"
                    >
                      &nbsp;
                    </td>
                  </tr>

                  <tr
                    style={{
                      backgroundColor: "#d4d4d4",
                      background: "#d4d4d4",
                    }}
                  >
                    <td align="center" height="50">
                      <img
                        src="https://www2.arccorp.com/globalassets/email-parts/events-icon.png"
                        width="50"
                        height="48.36"
                        style={{
                          width: "50px",
                          height: "48.36px",
                          display: "block",
                          margin: "0",
                          padding: "0",
                        }}
                      />
                    </td>
                  </tr>
                  <tr
                    style={{
                      backgroundColor: "#d4d4d4",
                      background: "#d4d4d4",
                    }}
                  >
                    <td
                      style={{
                        backgroundColor: "#d4d4d4",
                        background: "#d4d4d4",
                        lineHeight: "0",
                        fontSize: "0",
                      }}
                      class="em_height"
                      height="10"
                    >
                      &nbsp;
                    </td>
                  </tr>
                  <tr
                    style={{
                      backgroundColor: "#d4d4d4",
                      background: "#d4d4d4",
                    }}
                  >
                    <td
                      style={{
                        fontFamily: "SourceSansPro, Arial, sans-serif",
                        fontSize: "18px",
                        lineHeight: "18px",
                        fontWeight: "bold",
                        color: "#2a2b2c",
                        width: "100%",
                        padding: "0",
                        margin: "0",
                      }}
                      valign="center"
                    >
                      {props.Training_Title
                        ? props.Training_Title
                        : "Events and Trainings"}
                    </td>
                  </tr>
                  <tr
                    style={{
                      backgroundColor: "#d4d4d4",
                      background: "#d4d4d4",
                    }}
                  >
                    <td
                      style={{
                        fontFamily: "SourceSansPro, Arial, sans-serif",
                        fontSize: "15px",
                        lineHeight: "18px",
                        fontWeight: "light",
                        color: "#2a2b2c",
                        width: "100%",
                      }}
                      height="45"
                      valign="center"
                    >
                      <p
                        style={{
                          padding: "0",
                          margin: "0",
                          fontSize: "15px",
                          lineHeight: "18px",
                          backgroundColor: "#d4d4d4",
                          background: "#d4d4d4",
                        }}
                      >
                        {props.Training_Text
                          ? props.Training_Text
                          : "Stay up to date with the latest industry and knowledge."}
                      </p>
                    </td>
                  </tr>
                  <tr
                    style={{
                      backgroundColor: "#d4d4d4",
                      background: "#d4d4d4",
                    }}
                  >
                    <td
                      style={{
                        fontFamily: "SourceSansPro, Arial, sans-serif",
                        fontSize: "16px",
                        lineHeight: "18px",
                        fontWeight: "light",
                        color: "#2a2b2c",
                        width: "100%",
                      }}
                      //valign="top"
                    >
                      <a
                        style={{
                          color: "#2a2b2c",
                          fontWeight: "bold",
                          fontSize: "16px",
                          lineHeight: "18px",
                          textDecoration: "none",
                          backgroundColor: "#d4d4d4",
                          background: "#d4d4d4",
                          verticalAlign: "middle",
                          display: "block",
                          paddingBottom: "0",
                        }}
                        href={
                          props.Training_Link
                            ? props.Training_Link
                            : "https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/"
                        }
                      >
                        LEARN MORE{" "}
                        <img
                          height="10"
                          width="6.36"
                          src="https://www2.arccorp.com/globalassets/email-parts/caret-black.png?1"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr
                    style={{
                      backgroundColor: "#d4d4d4",
                      background: "#d4d4d4",
                    }}
                  >
                    <td
                      style={{
                        backgroundColor: "#d4d4d4",
                        background: "#d4d4d4",
                        lineHeight: "0",
                        fontSize: "0",
                      }}
                      class="em_height"
                      height="10"
                    >
                      &nbsp;
                    </td>
                  </tr>
                  <tr
                    size="9"
                    style={{
                      height: "9px",
                      lineHeight: "9px",
                      fontSize: "9px",
                    }}
                  >
                    <td
                      height="9"
                      size="9"
                      style={{
                        height: "9px",
                        lineHeight: "9px",
                        fontSize: "9px",
                      }}
                    >
                      <img
                        src="https://www2.arccorp.com/globalassets/email-parts/tacbottombottom.png?1"
                        width="313px"
                        height="9"
                        style={{
                          width: "313px",
                          display: "block",
                        }}
                      />
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
          <tr>
            <td
              class="em_height"
              style={{
                height: "30px",
                fontSize: "0",
                lineHeight: "0",
              }}
            >
              &nbsp;
            </td>
          </tr>
          <tr>
            <td height="13">
              <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
              >
                <tr>
                  <td>
                    <td align="center" height="13" style={{ height: "13px" }}>
                      <img
                        src="https://www2.arccorp.com/globalassets/email-parts/tacinfotop.png?1"
                        width="648"
                        style={{
                          width: "648px",
                          display: "block",
                        }}
                      />
                    </td>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr
            width="648"
            height="47"
            style={{ width: "648px", height: "47px" }}
          >
            <td align="center" height="47">
              <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="648"
                height="47"
                background="#189bb0"
                style={{ backgroundColor: "#189bb0", width: "648px" }}
              >
                <tr>
                  <td
                    style={{
                      paddingTop: "20px;",
                      paddingBottom: "20px;",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    <span
                      style={{
                        fontFamily: "SourceSansPro, Arial, sans-serif",
                        fontSize: "12px",
                        lineHeight: "18px",
                        fontWeight: "regular",
                        color: "#ffffff",
                        textAlign: "center",
                      }}
                    >
                      Customer Care Center
                    </span>
                  </td>
                  <td
                    style={{
                      paddingTop: "20px;",
                      paddingBottom: "20px;",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "SourceSansPro, Arial, sans-serif",
                        fontSize: "12px",
                        lineHeight: "18px",
                        fontWeight: "regular",
                        color: "#ffffff",
                        textAlign: "center",
                      }}
                    >
                      Phone: 1-855-816-8003
                    </span>
                  </td>
                  <td
                    style={{
                      paddingTop: "20px;",
                      paddingBottom: "20px;",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "SourceSansPro, Arial, sans-serif",
                        fontSize: "12px",
                        lineHeight: "18px",
                        fontWeight: "regular",
                        color: "#ffffff",
                        textAlign: "center",
                      }}
                    >
                      Fax: 1-703-816-8039
                    </span>
                  </td>
                  <td
                    style={{
                      paddingTop: "20px;",
                      paddingBottom: "20px;",
                      textAlign: "center",
                    }}
                  >
                    <a
                      style={{
                        fontFamily: "SourceSansPro, Arial, sans-serif",
                        fontSize: "12px",
                        lineHeight: "18px",
                        fontWeight: "regular",
                        color: "#ffffff",
                        textDecoration: "none",
                        textAlign: "center",
                      }}
                      href="mailto:ccchelp@arccorp.com"
                    >
                      ccchelp@arccorp.com
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr align="center" height="13" style={{ height: "13px" }}>
            <td height="13" align="center">
              <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
                style={{ borderCollapse: "collapse", lineHeight: "13px" }}
              >
                <tr valign="top">
                  <td align="center" height="13" style={{ height: "13px" }}>
                    <img
                      src="https://www2.arccorp.com/globalassets/email-parts/tacinfobottom.png?1"
                      width="648"
                      style={{
                        width: "648px",
                        display: "block",
                        verticalAlign: "bottom",
                      }}
                    />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td
              class="em_height"
              style={{
                height: "30px",
                fontSize: "0",
                lineHeight: "0",
              }}
            >
              &nbsp;
            </td>
          </tr>
        </table>
      </td>
    </tr>
  );
}
