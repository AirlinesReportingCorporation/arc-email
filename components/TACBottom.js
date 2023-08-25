import React from "react";

export default function TACBottom(props) {
  return (
    <>
      <tr>
        <td
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
                <td width="650">
                  <table
                    role="presentation"
                    border="0"
                    bgcolor="#d4d4d4"
                    cellpadding="0"
                    cellspacing="0"
                    width="650"
                    style={{
                      textAlign: "center",
                      backgroundColor: "#d4d4d4",
                      background: "#d4d4d4",
                    }}
                  >
                    <tr>
                      <td
                        class="em_height"
                        align="left"
                        colSpan={2}
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

                    <tr
                      style={{
                        backgroundColor: "#d4d4d4",
                        background: "#d4d4d4",
                      }}
                    >
                      <td align="center" width="100">
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
                      <td
                        align="left"
                        width="450px"
                        style={{
                          fontFamily: "SourceSansPro, Arial, sans-serif",
                          fontSize: "15px",
                          lineHeight: "18px",
                          fontWeight: "light",
                          color: "#2a2b2c",
                          width: "550px",
                          paddingRight: "50px",
                          paddingLeft: "15px",
                        }}
                        valign="center"
                      >
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                        >
                          <tr>
                            <td width="100" align="left">
                              <p
                                style={{
                                  fontFamily:
                                    "SourceSansPro, Arial, sans-serif",
                                  fontSize: "18px",
                                  lineHeight: "20px",
                                  fontWeight: "bold",
                                  color: "#2a2b2c",
                                  width: "100%",
                                  padding: "0",
                                  margin: "0",
                                }}
                                valign="middle"
                              >
                                {props.TIP_Title
                                  ? props.TIP_Title
                                  : "Tip of the Week"}
                              </p>
                            </td>
                            <tr>
                              <td
                                class="em_height"
                                align="left"
                                valign="top"
                                width="100%"
                                height="6"
                                style={{
                                  "border-collapse": "collapse",
                                  "mso-table-lspace": "0pt",
                                  "mso-table-rspace": "0pt",
                                  "mso-line-height-rule": "exactly",
                                  "line-height": "6px",
                                }}
                              >
                                &nbsp;
                              </td>
                            </tr>

                            <tr>
                              <td>
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

                            <tr>
                              <td
                                class="em_height"
                                align="left"
                                valign="top"
                                width="100%"
                                height="6"
                                style={{
                                  "border-collapse": "collapse",
                                  "mso-table-lspace": "0pt",
                                  "mso-table-rspace": "0pt",
                                  "mso-line-height-rule": "exactly",
                                  "line-height": "6px",
                                }}
                              >
                                &nbsp;
                              </td>
                            </tr>

                            <tr>
                              <td>
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
                          </tr>
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
                        height="10"
                        style={{
                          "border-collapse": "collapse",
                          "mso-table-lspace": "0pt",
                          "mso-table-rspace": "0pt",
                          "mso-line-height-rule": "exactly",
                          "line-height": "10px",
                        }}
                      >
                        &nbsp;
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
          <table
            role="presentation"
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
          >
            <tbody>
              <tr>
                <td
                  class="em_height"
                  align="left"
                  valign="top"
                  width="100%"
                  height="10"
                  style={{
                    "border-collapse": "collapse",
                    "mso-table-lspace": "0pt",
                    "mso-table-rspace": "0pt",
                    "mso-line-height-rule": "exactly",
                    "line-height": "10px",
                  }}
                >
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td width="315">
                  <table
                    role="presentation"
                    border="0"
                    bgcolor="#d4d4d4"
                    cellpadding="0"
                    cellspacing="0"
                    width="315"
                    style={{
                      textAlign: "center",
                      backgroundColor: "#d4d4d4",
                      background: "#d4d4d4",
                    }}
                  >
                    <tr>
                      <td
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
                    <tr
                      style={{
                        backgroundColor: "#d4d4d4",
                        background: "#d4d4d4",
                      }}
                    >
                      <td align="center">
                        <img
                          src="https://www2.arccorp.com/globalassets/email/fraudprevention_matrix2_231x170.png"
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

                    <tr>
                      <td
                        class="em_height"
                        align="left"
                        valign="top"
                        width="100%"
                        height="10"
                        style={{
                          "border-collapse": "collapse",
                          "mso-table-lspace": "0pt",
                          "mso-table-rspace": "0pt",
                          "mso-line-height-rule": "exactly",
                          "line-height": "10px",
                        }}
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
                        valign="middle"
                      >
                        {props.Fraud_Title ? props.Fraud_Title : "Fraud Alert"}
                      </td>
                    </tr>

                    <tr>
                      <td
                        class="em_height"
                        align="left"
                        valign="top"
                        width="100%"
                        height="10"
                        style={{
                          "border-collapse": "collapse",
                          "mso-table-lspace": "0pt",
                          "mso-table-rspace": "0pt",
                          "mso-line-height-rule": "exactly",
                          "line-height": "10px",
                        }}
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
                          fontSize: "15px",
                          lineHeight: "18px",
                          fontWeight: "light",
                          color: "#2a2b2c",
                          width: "100%",
                          paddingRight: "50px",
                          paddingLeft: "50px",
                        }}
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
                          {props.Fraud_Text
                            ? props.Fraud_Text
                            : "Lorem Ipsum Dolor Sit Amet"}
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td
                        class="em_height"
                        align="left"
                        valign="top"
                        width="100%"
                        height="10"
                        style={{
                          "border-collapse": "collapse",
                          "mso-table-lspace": "0pt",
                          "mso-table-rspace": "0pt",
                          "mso-line-height-rule": "exactly",
                          "line-height": "10px",
                        }}
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
                            props.Fraud_Link
                              ? props.Fraud_Link
                              : "https://www2.arccorp.com/support-training/fraud-prevention/schemes/"
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

                    <tr>
                      <td
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
                  </table>
                </td>

                <td width="24" style={{ width: "24px" }}>
                  &nbsp;
                </td>

                <td width="315" height="210">
                  <table
                    role="presentation"
                    border="0"
                    bgcolor="#d4d4d4"
                    cellpadding="0"
                    cellspacing="0"
                    width="315"
                    style={{
                      textAlign: "center",
                      backgroundColor: "#d4d4d4",
                      background: "#d4d4d4",
                    }}
                  >
                    <tr>
                      <td
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

                    <tr>
                      <td
                        class="em_height"
                        align="left"
                        valign="top"
                        width="100%"
                        height="10"
                        style={{
                          "border-collapse": "collapse",
                          "mso-table-lspace": "0pt",
                          "mso-table-rspace": "0pt",
                          "mso-line-height-rule": "exactly",
                          "line-height": "10px",
                        }}
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
                        valign="middle"
                      >
                        {props.Training_Title
                          ? props.Training_Title
                          : "Events and Trainings"}
                      </td>
                    </tr>

                    <tr>
                      <td
                        class="em_height"
                        align="left"
                        valign="top"
                        width="100%"
                        height="10"
                        style={{
                          "border-collapse": "collapse",
                          "mso-table-lspace": "0pt",
                          "mso-table-rspace": "0pt",
                          "mso-line-height-rule": "exactly",
                          "line-height": "10px",
                        }}
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
                          fontSize: "15px",
                          lineHeight: "18px",
                          fontWeight: "light",
                          color: "#2a2b2c",
                          width: "100%",
                          paddingLeft: "30px",
                          paddingRight: "30px",
                        }}
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

                    <tr>
                      <td
                        class="em_height"
                        align="left"
                        valign="top"
                        width="100%"
                        height="10"
                        style={{
                          "border-collapse": "collapse",
                          "mso-table-lspace": "0pt",
                          "mso-table-rspace": "0pt",
                          "mso-line-height-rule": "exactly",
                          "line-height": "10px",
                        }}
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

                    <tr>
                      <td
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
            <tr
              width="650"
              height="71"
              style={{ width: "650px", height: "71px" }}
            >
              <td align="center" height="71">
                <table
                  role="presentation"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="650"
                  height="71"
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
