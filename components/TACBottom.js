import React from "react";

export default function TACBottom(props) {
  return (
    <>
      <tr>
        <td
          align="center"
          class="em_aside"
          style={{ paddingLeft: "25px", paddingRight: "25px" }}
          valign="top"
        >
          <table
            role="presentation"
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
          >
            <tbody>
              <tr>
                <td class="" height="30">
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td width="313">
                  <table
                    role="presentation"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <tr>
                      <td
                        height="9"
                        style={{
                          height: "9px",
                          lineHeight: "9px",
                          fontSize: "9px",
                        }}
                      >
                        <img
                          src="https://www2.arccorp.com/globalassets/email-parts/tacbottomtop.png?1"
                          width="313"
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
                      <td align="center" height="73">
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
                        height="25"
                        style={{
                          fontFamily: "SourceSansPro, Arial, sans-serif",
                          fontSize: "18px",
                          height: "25px",
                          lineHeight: "18px",
                          fontWeight: "bold",
                          color: "#2a2b2c",
                          width: "100%",
                          padding: "0",
                          margin: "0",
                        }}
                        valign="middle"
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
                          paddingRight: "50px",
                          paddingLeft: "50px",
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
                        height="30"
                        style={{
                          fontFamily: "SourceSansPro, Arial, sans-serif",
                          fontSize: "16px",
                          height: "30px",
                          lineHeight: "18px",
                          fontWeight: "light",
                          color: "#2a2b2c",
                          width: "100%",
                        }}
                      >
                        <a
                          style={{
                            color: "#2a2b2c",
                            fontWeight: "bold",
                            fontSize: "14px",
                            lineHeight: "18px",
                            textDecoration: "none",
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
                      bgColor="#d4d4d4"
                      style={{
                        backgroundColor: "#d4d4d4",
                        background: "#d4d4d4",
                      }}
                    >
                      <td
                        bgColor="#d4d4d4"
                        style={{
                          backgroundColor: "#d4d4d4",
                          background: "#d4d4d4",
                        }}
                        height="19"
                      >
                        &nbsp;
                      </td>
                    </tr>

                    <tr width="313" height="9" align="center" valign="top">
                      <td
                        width="313"
                        height="9"
                        valign="top"
                        style={{
                          height: "9px",
                          width: "313px",
                          lineHeight: "8px",
                        }}
                      >
                        <img
                          src="https://www2.arccorp.com/globalassets/email-parts/tacbottombottom.png?1"
                          width="313"
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

                <td width="24" style={{ width: "24px" }}>
                  &nbsp;
                </td>

                <td width="313" height="210">
                  <table
                    role="presentation"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <tr>
                      <td
                        height="9"
                        style={{
                          height: "9px",
                          lineHeight: "9px",
                          fontSize: "9px",
                        }}
                      >
                        <img
                          src="https://www2.arccorp.com/globalassets/email-parts/tacbottomtop.png?1"
                          width="313"
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
                      <td align="center" height="73">
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
                        height="25"
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
                        valign="middle"
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
                          paddingLeft: "30px",
                          paddingRight: "30px",
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
                          }}
                        >
                          {props.Training_Text ? (
                            props.Training_Text
                          ) : (
                            <>
                              Stay up to date with the latest
                              <br /> industry knowledge
                            </>
                          )}
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
                        height="30"
                        style={{
                          fontFamily: "SourceSansPro, Arial, sans-serif",
                          fontSize: "16px",
                          lineHeight: "18px",
                          fontWeight: "light",
                          color: "#2a2b2c",
                          width: "100%",
                        }}
                      >
                        <a
                          style={{
                            color: "#2a2b2c",
                            fontWeight: "bold",
                            fontSize: "14px",
                            lineHeight: "18px",
                            textDecoration: "none",
                            display: "block",
                            padding: "0",
                          }}
                          href={
                            props.Training_Link
                              ? props.Training_Link
                              : "https://www2.arccorp.com/about-us/events/"
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
                      bgColor="#d4d4d4"
                      style={{
                        backgroundColor: "#d4d4d4",
                        background: "#d4d4d4",
                      }}
                    >
                      <td
                        bgColor="#d4d4d4"
                        style={{
                          backgroundColor: "#d4d4d4",
                          background: "#d4d4d4",
                        }}
                        height="19"
                      >
                        &nbsp;
                      </td>
                    </tr>

                    <tr width="313" height="9" align="center" valign="top">
                      <td
                        width="313"
                        height="9"
                        valign="top"
                        style={{
                          height: "9px",
                          width: "313px",
                          lineHeight: "8px",
                        }}
                      >
                        <img
                          src="https://www2.arccorp.com/globalassets/email-parts/tacbottombottom.png?1"
                          width="313"
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
        </td>
      </tr>
      <tr>
        <td
          align="center"
          class="em_aside"
          style={{ paddingLeft: "25px", paddingRight: "25px" }}
          valign="top"
        >
          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td
                class=""
                style={{
                  height: "30px",
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
                      <td
                        align="center"
                        height="13"
                        width="650"
                        style={{ height: "13px" }}
                      >
                        <img
                          src="https://www2.arccorp.com/globalassets/email-parts/tacinfotop.png?1"
                          height="13"
                          width="650"
                          style={{
                            width: "650px",
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
              width="650"
              height="47"
              style={{ width: "650px", height: "47px" }}
            >
              <td align="center" height="47">
                <table
                  role="presentation"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="650"
                  height="47"
                  background="#189bb0"
                  style={{ backgroundColor: "#189bb0", width: "650px" }}
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
            <tr align="center" height="12" style={{ height: "12px" }}>
              <td height="13" align="center">
                <table
                  role="presentation"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  style={{ borderCollapse: "collapse", lineHeight: "12px" }}
                >
                  <tr valign="top">
                    <td
                      align="center"
                      width="650"
                      height="13"
                      style={{ height: "13px", lineHeight: "12px" }}
                      valign="top"
                    >
                      <img
                        src="https://www2.arccorp.com/globalassets/email-parts/tacinfobottom.png?1"
                        width="650"
                        height="13"
                        style={{
                          width: "650px",
                          height: "13px",
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
                class=""
                style={{
                  height: "30px",
                }}
              >
                &nbsp;
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </>
  );
}
