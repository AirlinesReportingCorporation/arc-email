import React from "react";

export default function InfoBox(props) {
  return (
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
          style={{
            backgroundColor: "#d4d4d4",
            background: "#d4d4d4",
          }}
        >
          <tbody>
            <tr>
              <td
                class="em_height"
                align="left"
                colspan={2}
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
                width="650px"
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
                          fontFamily: "SourceSansPro, Arial, sans-serif",
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
                        {props.TIP_Title ? props.TIP_Title : "Tip of the Month"}
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
                class="em_height"
                align="left"
                valign="top"
                colspan={2}
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
  );
}
