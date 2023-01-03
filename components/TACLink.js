import React from "react";

export default function TACLink(props) {
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
            <td width="100" align="center">
              <img
                width="45px"
                src={
                  "https://www2.arccorp.com/globalassets/email-parts/" +
                  (props.icon ? props.icon : "creditcard") +
                  "-icon.png"
                }
              />
            </td>

            <td align="left">
              <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
              >
                <tbody>
                  <tr>
                    <td
                      width="100"
                      align="left"
                      style={{
                        fontFamily: "Arial, sans-serif",
                        fontSize: "16px",
                        lineHeight: "18px",
                        fontWeight: "Bold",
                        color: "#2a2b2c",
                      }}
                    >
                      {props.title
                        ? props.title
                        : "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="em_height"
                      style={{ height: "10px", fontSize: "0" }}
                    >
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td width="100" align="left">
                      <a
                        target="_blank"
                        href={
                          props.link
                            ? props.link
                            : "https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/"
                        }
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontSize: "14px",
                          lineHeight: "18px",
                          fontWeight: "Bold",
                          color: "#189bb0",
                          textDecoration: "none",
                          textTransform: "uppercase",
                          verticalAlign: "middle",
                        }}
                      >
                        {props.cta ? props.cta : "READ MORE"}{" "}
                        <img
                          height="10"
                          
                          src="https://www2.arccorp.com/globalassets/email-parts/caret.png"
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
      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td class="em_height" style={{ height: "30px", fontSize: "0" }}>
            &nbsp;
          </td>
        </tr>
        <tr height="1" style={{ height: "1px", lineHeight: "1px" }}>
          <td
            height="1"
            style={{ background: "#aaaaaa;", height: "1px", lineHeight: "1px" }}
          >
            &nbsp;
          </td>
        </tr>
      </table>
    </>
  );
}
