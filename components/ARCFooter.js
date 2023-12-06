import React from "react";

export default function ARCFooter(props) {
  return props.footer == "none" ? (
    ""
  ) : (
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
        <td align="center" valign="top">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
            <tbody>
              <tr>
                <td align="center">
                  <table
                    role="presentation"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    style={{
                      textAlign: "center",
                      width: "160px",
                      height: "25px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    width="160"
                    height="25"
                  >
                    <tbody>
                      <tr>
                        <td className="em_height" style={{ height: "20" }}>
                          &nbsp;
                        </td>
                      </tr>

                      {props.footer != "etc" ? (
                        <tr>
                          <td
                            align="center"
                            valign="top"
                            style={{ textAlign: "center" }}
                          >
                            <a
                              href="https://www.linkedin.com/company/arc"
                              style={{ textDecoration: "none" }}
                              target="_blank"
                            >
                              <img
                                alt="IN"
                                height="25"
                                name="in4.png"
                                src="https://www2.arccorp.com/globalassets/email-parts/icons/linkedin_logo.png"
                                style={{
                                  display: "block",
                                  border: "none",
                                  fontFamily: "Arial, sans-serif",
                                  fontSize: "12px",
                                  lineHeight: "18px",
                                  color: "#000000",
                                }}
                                title="IN"
                                width="25"
                              />
                            </a>
                          </td>
                          <td width="5">
                            <img
                              alt=""
                              height="1"
                              name="Cont_0"
                              src="https://www2.arccorp.com/globalassets/email/spacer.gif"
                              style={{ display: "block", border: "none" }}
                              width="1"
                            />
                          </td>
                          <td align="center" valign="top">
                            <a
                              href="https://twitter.com/ARCtalk"
                              style={{ textDecoration: "none" }}
                              target="_blank"
                              xt="SPCLICK"
                            >
                              <img
                                height="25"
                                name="tw5.png"
                                src="https://www2.arccorp.com/globalassets/email-parts/icons/twitter_logo.png"
                                style={{
                                  display: "block",
                                  border: "none",
                                  fontFamily: "Arial, sans-serif",
                                  fontSize: "12px",
                                  lineHeight: "18px",
                                  color: "#000000",
                                }}
                                width="25"
                              />
                            </a>
                          </td>
                          <td width="5">
                            <img
                              alt=""
                              height="1"
                              name="Cont_0"
                              src="https://www2.arccorp.com/globalassets/email/spacer.gif"
                              style={{ display: "block", border: "none" }}
                              width="1"
                            />
                          </td>
                          <td align="center" valign="top">
                            <a
                              href="https://www.facebook.com/ARCtalk"
                              style={{ textDecoration: "none" }}
                              target="_blank"
                              xt="SPCLICK"
                            >
                              <img
                                height="25"
                                name="fb3.png"
                                src="https://www2.arccorp.com/globalassets/email-parts/icons/facebook_logo.png"
                                style={{
                                  display: "block",
                                  border: "none",
                                  fontFamily: "Arial, sans-serif",
                                  fontSize: "12px",
                                  lineHeight: "18px",
                                  color: "#000000",
                                }}
                                title="FB"
                                width="25"
                              />
                            </a>
                          </td>
                          <td width="5">
                            <img
                              alt=""
                              height="1"
                              name="Cont_0"
                              src="https://www2.arccorp.com/globalassets/email/spacer.gif"
                              style={{ display: "block", border: "none" }}
                              width="1"
                            />
                          </td>
                          <td align="center" valign="top">
                            <a
                              href="https://www.youtube.com/channel/UCWHZsoCDNhjorop892EVETw/"
                              name="youtube_social"
                              style={{ textDecoration: "none" }}
                              target="_blank"
                              xt="SPCLICK"
                            >
                              <img
                                alt="YouTube"
                                height="25"
                                name="youtube4.png"
                                src="https://www2.arccorp.com/globalassets/email-parts/icons/youtube_logo.png"
                                style={{
                                  display: "block",
                                  border: "none",
                                  fontFamily: "Arial, sans-serif",
                                  fontSize: "12px",
                                  lineHeight: "18px",
                                  color: "#000000",
                                }}
                                title="YouTube"
                                width="25"
                              />
                            </a>
                          </td>
                        </tr>
                      ) : (
                        ""
                      )}

                      {props.footer == "etc" ? (
                        <tr>
                          <td align="center" valign="top">
                            <a
                              href="https://www.linkedin.com/company/arc"
                              style={{ textDecoration: "none" }}
                              target="_blank"
                            >
                              <img
                                alt="IN"
                                height="35"
                                name="in4.png"
                                src="https://www2.arccorp.com/globalassets/email/etc/linkedin.png"
                                style={{
                                  display: "block",
                                  border: "none",
                                  fontFamily: "Arial, sans-serif",
                                  fontSize: "12px",
                                  lineHeight: "35px",
                                  color: "#000000",
                                }}
                                title="IN"
                                width="35"
                              />
                            </a>
                          </td>
                          <td width="5">
                            <img
                              alt=""
                              height="1"
                              name="Cont_0"
                              src="https://www2.arccorp.com/globalassets/email/spacer.gif"
                              style={{ display: "block", border: "none" }}
                              width="1"
                            />
                          </td>
                          <td align="center" valign="top">
                            <a
                              href="https://twitter.com/ARCtalk"
                              style={{ textDecoration: "none" }}
                              target="_blank"
                              xt="SPCLICK"
                            >
                              <img
                                height="35"
                                name="tw5.png"
                                src="https://www2.arccorp.com/globalassets/email/etc/twitter.png"
                                style={{
                                  display: "block",
                                  border: "none",
                                  fontFamily: "Arial, sans-serif",
                                  fontSize: "12px",
                                  lineHeight: "35px",
                                  color: "#000000",
                                }}
                                width="35"
                              />
                            </a>
                          </td>
                          <td width="5">
                            <img
                              alt=""
                              height="1"
                              name="Cont_0"
                              src="https://www2.arccorp.com/globalassets/email/spacer.gif"
                              style={{ display: "block", border: "none" }}
                              width="1"
                            />
                          </td>
                          <td align="center" valign="top">
                            <a
                              href="https://www.facebook.com/ARCtalk"
                              style={{ textDecoration: "none" }}
                              target="_blank"
                              xt="SPCLICK"
                            >
                              <img
                                height="35"
                                name="fb3.png"
                                src="https://www2.arccorp.com/globalassets/email/etc/facebook.png"
                                style={{
                                  display: "block",
                                  border: "none",
                                  fontFamily: "Arial, sans-serif",
                                  fontSize: "12px",
                                  lineHeight: "35px",
                                  color: "#000000",
                                }}
                                title="FB"
                                width="35"
                              />
                            </a>
                          </td>
                          <td width="5">
                            <img
                              alt=""
                              height="1"
                              name="Cont_0"
                              src="https://www2.arccorp.com/globalassets/email/spacer.gif"
                              style={{ display: "block", border: "none" }}
                              width="1"
                            />
                          </td>
                        </tr>
                      ) : (
                        ""
                      )}
                      <tr>
                        <td className="em_height" style={{ height: "10" }}>
                          &nbsp;
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table>
                    <tbody>
                      {/* Unsub  */}

                      {props.unsub == "true" ? (
                        ""
                      ) : (
                        <tr>
                          <td
                            align="center"
                            style={{
                              fontFamily: "Arial, sans-serif",
                              fontSize: "11px",
                              color: "#a2a3a5",
                              lineHeight: "14px",
                              width: "650px",
                            }}
                            valign="top"
                          >
                            <a
                              href="{{Unsubscribe}}"
                              name="Unsubscribe"
                              style={{
                                color: "#189bb0",
                                textDecoration: "none",
                              }}
                              xt="LPWEBFORMOPTOUT"
                              xtwebform="7620755"
                            >
                              <strong>Unsubscribe</strong>
                            </a>
                            <br />
                            <br />
                          </td>
                        </tr>
                      )}

                      {/* Options */}
                      {/*short */}
                      {props.footer === "short" && (
                        <tr>
                          <td
                            align="center"
                            style={{
                              fontFamily: "Arial, sans-serif",
                              fontSize: "11px",
                              color: "#a2a3a5",
                              lineHeight: "14px",
                            }}
                            valign="top"
                          >
                            ARC&nbsp;&nbsp;&nbsp;&nbsp;3000 Wilson Blvd., Suite
                            300&nbsp;&nbsp;&nbsp;&nbsp;Arlington, VA
                            22201&nbsp;&nbsp;&nbsp;&nbsp;USA&nbsp;&nbsp;&nbsp;&nbsp;
                            <a
                              href="https://www.arccorp.com"
                              name="www_arccorp_com"
                              style={{
                                color: "#189bb0",
                                textDecoration: "none",
                              }}
                              xt="SPCLICK"
                            >
                              <strong>www.arccorp.com</strong>
                            </a>
                          </td>
                        </tr>
                      )}
                      {/* Long footer */}
                      {props.footer == "long" && (
                        <tr>
                          <td
                            align="center"
                            style={{
                              fontFamily: "Arial, sans-serif",
                              fontSize: "11px",
                              color: "#a2a3a5",
                              lineHeight: "14px",
                              width: "650px",
                            }}
                            valign="top"
                          >
                            ARC&nbsp;&nbsp;&nbsp;&nbsp;3000 Wilson Blvd., Suite
                            300&nbsp;&nbsp;&nbsp;&nbsp;Arlington, VA
                            22201&nbsp;&nbsp;&nbsp;&nbsp;USA&nbsp;&nbsp;&nbsp;&nbsp;
                            <a
                              href="https://www.arccorp.com"
                              name="www_arccorp_com"
                              style={{
                                color: "#189bb0",
                                textDecoration: "none",
                              }}
                              xt="SPCLICK"
                            >
                              <strong>www.arccorp.com</strong>
                            </a>
                            <br />
                            <br />
                            ARC accelerates the growth of global air travel by
                            delivering forward-looking travel data, flexible
                            distribution services and other innovative industry
                            solutions. We are a leading travel intelligence
                            company that possesses the world’s largest, most
                            comprehensive global airline ticket dataset,
                            including more than 15 billion passenger flights
                            representing 490 airlines and 230 countries and
                            territories. Our solutions and expertise strengthen
                            economies and enrich lives by connecting
                            stakeholders across the travel ecosystem. For more
                            information, please visit
                            <a
                              href="https://www.arccorp.com"
                              name="www_arccorp_com"
                              style={{
                                color: "#189bb0",
                                textDecoration: "none",
                              }}
                              xt="SPCLICK"
                            >
                              <strong> www.arccorp.com</strong>
                            </a>
                            .
                          </td>
                        </tr>
                      )}
                      {/* Aerogram Footer */}
                      {props.footer == "aerogram" && (
                        <>
                          <tr>
                            <td
                              align="center"
                              style={{
                                fontFamily: "Arial, sans-serif",
                                fontSize: "11px",
                                color: "#a2a3a5",
                                lineHeight: "14px",
                                width: "650px",
                              }}
                              valign="top"
                            >
                              ARC&nbsp;&nbsp;&nbsp;&nbsp;3000 Wilson Blvd.,
                              Suite 300&nbsp;&nbsp;&nbsp;&nbsp;Arlington, VA
                              22201&nbsp;&nbsp;&nbsp;&nbsp;USA&nbsp;&nbsp;&nbsp;&nbsp;
                              <a
                                href="https://www.arccorp.com"
                                name="www_arccorp_com"
                                style={{
                                  color: "#189bb0",
                                  textDecoration: "none",
                                }}
                                xt="SPCLICK"
                              >
                                <strong>www.arccorp.com</strong>
                              </a>
                              <br />
                              <br />
                              ARC accelerates the growth of global air travel by
                              delivering forward-looking travel data, flexible
                              distribution services and other innovative
                              industry solutions. We are a leading travel
                              intelligence company that possesses the world’s
                              largest, most comprehensive global airline ticket
                              dataset, including more than 15 billion passenger
                              flights representing 490 airlines and 230
                              countries and territories. Our solutions and
                              expertise strengthen economies and enrich lives by
                              connecting stakeholders across the travel
                              ecosystem. For more information, please visit
                              <a
                                href="https://www.arccorp.com"
                                name="www_arccorp_com"
                                style={{
                                  color: "#189bb0",
                                  textDecoration: "none",
                                }}
                                xt="SPCLICK"
                              >
                                <strong> www.arccorp.com</strong>
                              </a>
                              .
                            </td>
                          </tr>
                          <br />
                          <tr>
                            <td
                              align="center"
                              style={{
                                fontFamily: "Arial, sans-serif",
                                fontSize: "11px",
                                color: "#a2a3a5",
                                lineHeight: "14px",
                                width: "650px",
                              }}
                              valign="top"
                            >
                              <br />
                              <br />
                              ARC is providing the content in the above
                              hyperlinks on the behalf of ARC travel suppliers.
                              ARC uses reasonable care in compiling and
                              presenting the content of this email and the
                              associated hyperlinks, but ARC gives no guarantee
                              that the content is complete, accurate, error or
                              virus free or up to date. Please note, the
                              information contained in this email or in the
                              hyperlinks is not the sole source of information
                              from ARC travel suppliers and may not include all
                              fare rules/ticketing rules. Therefore, ARC
                              recommends travel agents take care to read all
                              information published by ARC travel suppliers.
                            </td>
                          </tr>
                        </>
                      )}

                      {props.footer == "operational" && (
                        <>
                          <tr>
                            <td
                              align="center"
                              style={{
                                fontFamily: "Arial, sans-serif",
                                fontSize: "11px",
                                color: "#a2a3a5",
                                lineHeight: "14px",
                                width: "650px",
                              }}
                              valign="top"
                            >
                              ARC&nbsp;&nbsp;&nbsp;&nbsp;3000 Wilson Blvd.,
                              Suite 300&nbsp;&nbsp;&nbsp;&nbsp;Arlington, VA
                              22201&nbsp;&nbsp;&nbsp;&nbsp;USA&nbsp;&nbsp;&nbsp;&nbsp;
                              <a
                                href="https://www.arccorp.com"
                                name="www_arccorp_com"
                                style={{
                                  color: "#189bb0",
                                  textDecoration: "none",
                                }}
                                xt="SPCLICK"
                              >
                                <strong>www.arccorp.com</strong>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td
                              align="center"
                              style={{
                                fontFamily: "Arial, sans-serif",
                                fontSize: "11px",
                                color: "#a2a3a5",
                                lineHeight: "14px",
                                width: "650px",
                              }}
                              valign="top"
                            >
                              <br />
                              This is an Airlines Reporting Corporation (ARC)
                              operations email regarding your travel agency's
                              participation with ARC. Even if you are opted out
                              of ARC marketing communications, you may still
                              receive operations emails on occasion regarding
                              necessary updates or changes that are important
                              for your travel agency's participation with ARC.
                              To manage your communication preferences,
                              including unsubscribing from promotional emails
                              from ARC, please click here.
                            </td>
                          </tr>
                        </>
                      )}

                      {props.footer === "etc" && (
                        <tr>
                          <td
                            align="center"
                            style={{
                              fontFamily: "Arial, sans-serif",
                              fontSize: "11px",
                              color: "#a2a3a5",
                              lineHeight: "14px",
                            }}
                            valign="top"
                          >
                            ARC&nbsp;&nbsp;&nbsp;&nbsp;3000 Wilson Blvd., Suite
                            300&nbsp;&nbsp;&nbsp;&nbsp;Arlington, VA
                            22201&nbsp;&nbsp;&nbsp;&nbsp;USA&nbsp;&nbsp;&nbsp;&nbsp;
                            <a
                              href="https://www.arccorp.com"
                              name="www_arccorp_com"
                              style={{
                                color: "#189bb0",
                                textDecoration: "none",
                              }}
                              xt="SPCLICK"
                            >
                              <strong>www.arccorp.com</strong>
                            </a>
                          </td>
                        </tr>
                      )}
                      {/* copyright */}
                      <tr>
                        <td
                          align="center"
                          style={{
                            fontFamily: "Arial, sans-serif",
                            fontSize: "11px",
                            color: "#a2a3a5",
                            lineHeight: "14px",
                          }}
                          valign="top"
                        >
                          <br />© Airlines Reporting Corporation (ARC). All
                          rights reserved.
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
