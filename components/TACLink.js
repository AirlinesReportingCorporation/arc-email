import React from "react";

export default function TACLink(props) {
  return (
    <>
      <tr>
        <td class="em_height" style={{ height: "30px", fontSize: "0" }}>
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
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
          >
            <tr>
              <td width="100" align="center">
                <img
                  width="45"
                  height="45"
                  src={
                    "https://www2.arccorp.com/globalassets/email-parts/icons/" +
                    (props.icon ? props.icon : "creditcard") +
                    "-icon.png"
                  }
                />
              </td>
              <td align="left">
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                >
                  <tr>
                    <td>
                      <p
                        style={{
                          fontFamily: "SourceSansPro, Arial, sans-serif",
                          fontSize: "18px",
                          lineHeight: "20px",
                          fontWeight: "Bold",
                          color: "#2a2b2c",
                          marginBottom: "8px",
                          padding: 0,
                        }}
                      >
                        {props.title
                          ? props.title
                          : "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
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
                        target="_blank"
                        href={
                          props.link
                            ? props.link
                            : "https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/"
                        }
                        style={{
                          fontFamily: "SourceSansPro, Arial, sans-serif",
                          fontSize: "14px",
                          lineHeight: "18px",
                          fontWeight: "Bold",
                          color: props.icon === "fraud" ? "#F78000" : "#189bb0",
                          textDecoration: "none",
                          textTransform: "uppercase",
                          verticalAlign: "middle",
                        }}
                      >
                        {props.cta ? props.cta : "READ MORE"}{" "}
                        {props.icon === "fraud" ? (
                          <img
                            height="10"
                            width="6.36"
                            src="https://www2.arccorp.com/globalassets/email-parts/caret-fraud.png"
                          />
                        ) : (
                          <img
                            height="10"
                            width="6.36"
                            src="https://www2.arccorp.com/globalassets/email-parts/caret.png"
                          />
                        )}
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td class="em_height" style={{ height: "15px", fontSize: "0" }}>
          &nbsp;
        </td>
      </tr>

      <tr>
        <td
          style={{
            paddingLeft: "25px",
            paddingRight: "25px",
          }}
        >
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
          >
            <tr>
              <td style={{ borderBottom: "1px solid #2a2b2d" }}>&nbsp;</td>
            </tr>
          </table>
        </td>
      </tr>
    </>
  );
}
