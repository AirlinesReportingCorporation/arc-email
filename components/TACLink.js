import React from "react";

export default function TACLink(props) {
  return (
    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
      <tbody>
        <tr>
          <td align="center">
            <table
              role="presentation"
              border="0"
              cellpadding="0"
              cellspacing="0"
              style={{ textAlign: "center" }}
            >
              <tbody>
                <tr>
                  <td align="center">
                    {" "}
                    <a
                      href={
                        props.link ? props.link : "https://www2.arccorp.com"
                      }
                      target="_blank"
                      style={{ display: "block" }}
                    >
                      <img
                        width="650"
                        style={{
                          maxWidth: "650px",
                          width: "100%",
                          display: "block",
                        }}
                        src="https://www2.arccorp.com/globalassets/email-parts/tac-jumbo-top.jpg"
                      />
                    </a>{" "}
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      background="#189bb0"
                      style={{
                        textAlign: "center",
                        width: "600px",
                        backgroundColor: "#189bb0",
                        background: "#189bb0",
                      }}
                    >
                      <tr>
                        <td
                          style={{
                            fontFamily: "Arial, sans-serif",
                            fontSize: "22px",
                            lineHeight: "26px",
                            fontWeight: "Bold",
                            color: "#ffffff",
                          }}
                          valign="top"
                        >
                          {props.title
                            ? props.title
                            : "Travel Agent Communications"}
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontFamily: "Arial, sans-serif",
                            fontSize: "15px",
                            lineHeight: "18px",
                            fontWeight: "light",
                            color: "#ffffff",
                          }}
                          valign="top"
                        >
                          PED {props.date ? props.date : "01/01/2023"}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    {" "}
                    <a
                      href={
                        props.link ? props.link : "https://www2.arccorp.com"
                      }
                      target="_blank"
                    >
                      <img
                        width="600"
                        style={{ maxWidth: "600px", width: "100%" }}
                        src="https://www2.arccorp.com/globalassets/email-parts/tac-jumbo-bottom.jpg"
                      />
                    </a>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
