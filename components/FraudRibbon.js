import React from "react";

export default function FraudRibbon(props) {
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
            bgcolor="#F78000"
            cellpadding="0"
            cellspacing="0"
            width="650"
            style={{
              textAlign: "center",
              backgroundColor: "#F78000",
              background: "#F78000",
            }}
          >
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
              <td
                width="100"
                align="center"
                style={{ paddingLeft: "25px", paddingRight: "25px" }}
              >
                <a
                  style={{
                    fontFamily: "SourceSansPro, Arial, sans-serif",
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: "bold",
                    color: "#ffffff",
                    width: "100%",
                    padding: "0",
                    margin: "0",
                    display: "block",
                    textDecoration: "none !important"
                  }}
                  href={
                    props.Fraud_Link
                      ? props.Fraud_Link
                      : "https://www2.arccorp.com/support-training/fraud-prevention/schemes/"
                  }
                  valign="middle"
                >
                  {props.Fraud_Title ? props.Fraud_Title : "Important Fraud Alert"}{" "}
                  &nbsp; &nbsp;
                  <img
                    height="10"
                    width="6.36"
                    src="https://www2.arccorp.com/globalassets/email-parts/dot-white.png?1"
                  />{" "}
                  &nbsp;&nbsp;
                  {props.Fraud_Subtitle ? props.Fraud_Subtitle : "Latest Updates"}{" "}&nbsp;
                  <img
                    height="10"
                    width="6.36"
                    src="https://www2.arccorp.com/globalassets/email-parts/caret-white.png?1"
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
          </table>
        </td>
      </tr>
    </>
  );
}
