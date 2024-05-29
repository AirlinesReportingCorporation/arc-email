import React, { useCallback } from "react";

export default function Twocolumn(props) {
  return (
    <>
      <tr>
        <td>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
            <tbody>
              <tr>
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
                          style={{
                            paddingLeft: "50px",
                            paddingRight: "50px",
                            fontFamily: "Arial, helvetica,sans-serif",
                          }}
                        >
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td valign="top">
                                  <table
                                    align="right"
                                    bgcolor="#ffffff"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="em_wrapper"
                                    style={{ width: "200px" }}
                                    width="200"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          align="center"
                                          class="em_hauto"
                                          style={{
                                            paddingLeft: "10px",
                                            paddingRight: "10px",
                                            fontFamily:
                                              "Arial, helvetica,sans-serif",
                                          }}
                                          valign="top"
                                        >
                                          <table
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  class="em_height"
                                                  height="40"
                                                >
                                                  &nbsp;
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  align="left"
                                                  class="em_align_cent"
                                                  valign="top"
                                                  style={{
                                                    fontFamily:
                                                      "Arial, helvetica,sans-serif",
                                                  }}
                                                  dangerouslySetInnerHTML={{
                                                    __html: props.text,
                                                  }}
                                                ></td>
                                              </tr>

                                              <tr>
                                                <td
                                                  class="em_height"
                                                  align="left"
                                                  valign="top"
                                                  width="100%"
                                                  height={"10"}
                                                  style={{
                                                    "border-collapse":
                                                      "collapse",
                                                    "mso-table-lspace": "0pt",
                                                    "mso-table-rspace": "0pt",
                                                    "mso-line-height-rule":
                                                      "exactly",
                                                    "line-height": "10px",
                                                  }}
                                                >
                                                  &nbsp;
                                                </td>
                                              </tr>

                                              <tr>
                                                <td
                                                  class="em_height"
                                                  align="left"
                                                  valign="top"
                                                  width="100%"
                                                  height={"20"}
                                                  style={{
                                                    "border-collapse":
                                                      "collapse",
                                                    "mso-table-lspace": "0pt",
                                                    "mso-table-rspace": "0pt",
                                                    "mso-line-height-rule":
                                                      "exactly",
                                                    "line-height": "20px",
                                                  }}
                                                >
                                                  &nbsp;
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                        <td
                                          class="em_height"
                                          align="left"
                                          valign="top"
                                          width="100%"
                                          height={"40"}
                                          style={{
                                            "border-collapse": "collapse",
                                            "mso-table-lspace": "0pt",
                                            "mso-table-rspace": "0pt",
                                            "mso-line-height-rule": "exactly",
                                            "line-height": "40px",
                                          }}
                                        >
                                          &nbsp;
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                                <td valign="top">
                                  <table
                                    align="right"
                                    bgcolor="#ffffff"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="em_wrapper"
                                    style={{ width: "380px" }}
                                    width="380"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          align="center"
                                          class="em_hauto"
                                          style={{
                                            paddingLeft: "10px",
                                            paddingRight: "10px",
                                            fontFamily:
                                              "Arial, helvetica,sans-serif",
                                          }}
                                          valign="top"
                                        >
                                          <table
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  class="em_height"
                                                  height="40"
                                                >
                                                  &nbsp;
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  align="left"
                                                  class="em_align_cent"
                                                  valign="top"
                                                  style={{
                                                    fontFamily:
                                                      "Arial, helvetica,sans-serif",
                                                  }}
                                                  dangerouslySetInnerHTML={{
                                                    __html: props.text2,
                                                  }}
                                                ></td>
                                              </tr>

                                              <tr>
                                                <td
                                                  class="em_height"
                                                  align="left"
                                                  valign="top"
                                                  width="100%"
                                                  height={"10"}
                                                  style={{
                                                    "border-collapse":
                                                      "collapse",
                                                    "mso-table-lspace": "0pt",
                                                    "mso-table-rspace": "0pt",
                                                    "mso-line-height-rule":
                                                      "exactly",
                                                    "line-height": "10px",
                                                  }}
                                                >
                                                  &nbsp;
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  class="em_height"
                                  align="left"
                                  valign="top"
                                  width="100%"
                                  height={"10"}
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
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </>
  );
}
