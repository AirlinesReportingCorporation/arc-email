import React from "react";

export default function TACJumbo(props) {
  return (
    <table
      background="#ffffff"
      style={{ background: "#ffffff", backgroundColor: "#ffffff" }}
      role="presentation"
      border="0"
      cellpadding="0"
      cellspacing="0"
    >
      <tbody>
        <tr>
          <td align="center">
            <table
              role="presentation"
              background="#ffffff"
              border="0"
              cellpadding="0"
              cellspacing="0"
              style={{ textAlign: "center", background: "#ffffff" }}
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
                          width: "650px",
                          display: "block",
                        }}
                        src="https://www2.arccorp.com/globalassets/email-parts/tac-jumbo-top.jpg"
                      />
                    </a>{" "}
                  </td>
                </tr>
                <tr
                  width="600"
                  style={{
                    textAlign: "center",
                    width: "600px",
                    background: "#ffffff",
                    backgroundColor: "#ffffff",
                  }}
                  align="center"
                >
                  <td align="center">
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      background="#ffffff"
                      style={{
                        textAlign: "center",
                        width: "600px",
                        background: "#ffffff",
                      }}
                    >
                      <tr>
                        <td>
                          <table
                            role="presentation"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            width="600"
                            background="#189bb0"
                            style={{
                              textAlign: "center",
                              width: "600px",
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
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table
                            role="presentation"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            width="600"
                            background="#189bb0"
                            style={{
                              textAlign: "center",
                              width: "600px",
                              background: "#189bb0",
                            }}
                          >
                            <tr>
                              <td
                                style={{
                                  fontFamily: "Arial, sans-serif",
                                  fontSize: "15px",
                                  lineHeight: "18px",
                                  fontWeight: "regular",
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
                        style={{ maxWidth: "600px", width: "600px" }}
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
