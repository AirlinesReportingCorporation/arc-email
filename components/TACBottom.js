import React from "react";

export default function TACBottom(props) {
  return (
    <>
      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
        <tbody>
          <tr>
            <td class="em_height" style={{ height: "30px", fontSize: "0" }}>
              &nbsp;
            </td>
          </tr>
          <tr>
            <td
              width="313"
              height="210"
              style={{ height: "210px", width: "313px" }}
            >
              <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
                height="210"
                width="313"
                style={{
                  textAlign: "center",
                  width: "100%",
                  height: "210px",
                  width: "313px",
                }}
              >
                <tr>
                  <td align="center" height="9" style={{ height: "9px" }}>
                    <img
                      src="https://www2.arccorp.com/globalassets/email-parts/tacbottomtop.png?1"
                      width="313px"
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
                  <td align="center">
                    <img
                      src="https://www2.arccorp.com/globalassets/email-parts/tip-icon.png"
                      width="50"
                      style={{
                        width: "50px",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        paddingTop: "16px",
                        paddingBottom: "10px",
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
                      fontFamily: "Arial, sans-serif",
                      fontSize: "18px",
                      lineHeight: "18px",
                      fontWeight: "bold",
                      color: "#2a2b2c",
                      width: "100%",
                      paddingBottom: "10px",
                    }}
                    valign="top"
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
                      fontFamily: "Arial, sans-serif",
                      fontSize: "15px",
                      lineHeight: "18px",
                      fontWeight: "light",
                      color: "#2a2b2c",
                      width: "100%",
                    }}
                    valign="top"
                  >
                    <p
                      style={{
                        marginBottom: "10px",
                        paddingLeft: "25px",
                        paddingRight: "25px",
                        fontSize: "15px",
                        lineHeight: "18px",
                      }}
                    >
                      {props.TIP_Text ? props.TIP_Text : ""}
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
                      fontFamily: "Arial, sans-serif",
                      fontSize: "16px",
                      lineHeight: "18px",
                      fontWeight: "light",
                      color: "#2a2b2c",
                      width: "100%",
                    }}
                    valign="top"
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
                        paddingBottom: "16px",
                      }}
                      href={
                        props.TIP_Link
                          ? props.TIP_Link
                          : "https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/"
                      }
                    >
                      LEARN MORE{" "}
                      <img
                        height="11"
                        src="https://www2.arccorp.com/globalassets/email-parts/caret-black.png?1"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center" height="9" style={{ height: "9px" }}>
                    <img
                      src="https://www2.arccorp.com/globalassets/email-parts/tacbottombottom.png?1"
                      width="313px"
                      height="9"
                      style={{
                        width: "313px",
                        height: "9px",
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
              style={{ height: "210px", width: "313px" }}
            >
              <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
                height="210"
                width="313"
                style={{
                  textAlign: "center",
                  width: "313px",
                  height: "210px",
                }}
              >
                <tr>
                  <td align="center" height="9" style={{ height: "9px" }}>
                    <img
                      src="https://www2.arccorp.com/globalassets/email-parts/tacbottomtop.png?1"
                      width="313px"
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
                  <td align="center">
                    <img
                      src="https://www2.arccorp.com/globalassets/email-parts/events-icon.png"
                      width="50"
                      style={{
                        width: "50px",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        paddingTop: "16px",
                        paddingBottom: "10px",
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
                      fontFamily: "Arial, sans-serif",
                      fontSize: "18px",
                      lineHeight: "18px",
                      fontWeight: "bold",
                      paddingBottom: "10px",
                      color: "#2a2b2c",
                      width: "100%",
                    }}
                    valign="top"
                  >
                    {props.Events_Title
                      ? props.Events_Title
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
                      fontFamily: "Arial, sans-serif",
                      fontSize: "15px",
                      lineHeight: "18px",
                      fontWeight: "light",
                      color: "#2a2b2c",
                      width: "100%",
                    }}
                    valign="top"
                  >
                    <p
                      style={{
                        marginBottom: "10px",
                        paddingLeft: "25px",
                        paddingRight: "25px",
                        fontSize: "15px",
                        lineHeight: "18px",
                      }}
                    >
                      {props.Events_Text
                        ? props.Events_Text
                        : "Stay up to to date with the latest industry knowlege"}
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
                      fontFamily: "Arial, sans-serif",
                      fontSize: "16px",
                      lineHeight: "18px",
                      fontWeight: "light",
                      color: "#2a2b2c",
                      backgroundColor: "#d4d4d4",
                      background: "#d4d4d4",
                      width: "100%",
                    }}
                    valign="top"
                  >
                    <a
                      style={{
                        color: "#2a2b2c",
                        fontWeight: "bold",
                        fontSize: "16px",
                        lineHeight: "18px",
                        textDecoration: "none",
                        verticalAlign: "middle",
                        display: "block",
                        paddingBottom: "16px",
                        backgroundColor: "#d4d4d4",
                        background: "#d4d4d4",
                      }}
                      href={
                        props.Events_Link
                          ? props.Events_Link
                          : "https://www2.arccorp.com/about-us/events/"
                      }
                    >
                      LEARN MORE{" "}
                      <img
                        height="11"
                        src="https://www2.arccorp.com/globalassets/email-parts/caret-black.png?1"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center" height="9" style={{ height: "9px" }}>
                    <img
                      src="https://www2.arccorp.com/globalassets/email-parts/tacbottombottom.png?1"
                      width="313px"
                      height="9"
                      style={{
                        width: "313px",
                        height: "9px",
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
          <td class="em_height" style={{ height: "30px", fontSize: "0" }}>
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
        <tr width="648" height="59" style={{ width: "648px", height: "59px" }}>
          <td align="center">
            <table
              role="presentation"
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="648"
              height="59"
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
                      fontFamily: "Arial, sans-serif",
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
                      fontFamily: "Arial, sans-serif",
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
                      fontFamily: "Arial, sans-serif",
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
                      fontFamily: "Arial, sans-serif",
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
        <tr align="top" height="13" style={{ height: "13px" }}>
          <td align="top">
            <table
              role="presentation"
              border="0"
              cellpadding="0"
              cellspacing="0"
            >
              <tr align="top">
                <td align="top">
                  <td align="center" height="13" style={{ height: "13px" }}>
                    <img
                      src="https://www2.arccorp.com/globalassets/email-parts/tacinfobottom.png?1"
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
      </table>
    </>
  );
}
