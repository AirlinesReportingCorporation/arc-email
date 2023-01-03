import React from "react";

export default function ARCFooter(props) {
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
                  <td class="em_height" style={{ height: "20" }}>
                    &nbsp;
                  </td>
                </tr>
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
                        src="https://www2.arccorp.com/globalassets/email-parts/linkedin.png"
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
                        src="https://www2.arccorp.com/globalassets/email-parts/twitter.png"
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
                        src="https://www2.arccorp.com/globalassets/email-parts/facebook.png"
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
                      name="youtube-social"
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      xt="SPCLICK"
                    >
                      <img
                        alt="YouTube"
                        height="25"
                        name="youtube4.png"
                        src="https://www2.arccorp.com/globalassets/email-parts/youtube.png"
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
                <tr>
                  <td class="em_height" style={{ height: "10" }}>
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
                <tr>
                  {props.type === "short" ? (
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
                      <a
                        href="#LPWEBFORMOPTOUT"
                        name="Unsubscribe"
                        style={{ color: "#189bb0", textDecoration: "none" }}
                        xt="LPWEBFORMOPTOUT"
                        xtwebform="7620755"
                      >
                        <strong>Unsubscribe</strong>
                      </a>
                      <br />
                      <br />
                      ARC&nbsp;&nbsp;&nbsp;&nbsp;3000 Wilson Blvd., Suite
                      300&nbsp;&nbsp;&nbsp;&nbsp;Arlington, VA
                      22201&nbsp;&nbsp;&nbsp;&nbsp;USA&nbsp;&nbsp;&nbsp;&nbsp;
                      <a
                        href="https://www.arccorp.com"
                        name="www_arccorp_com"
                        style={{ color: "#189bb0", textDecoration: "none" }}
                        xt="SPCLICK"
                      >
                        <strong>www.arccorp.com</strong>
                      </a>
                      <br />
                      <br />© Airlines Reporting Corporation (ARC). All rights
                      reserved.
                    </td>
                  ) : (
                    <td
                      align="center"
                      style={{
                        fontFamily: "Arial, sans-serif",
                        fontSize: "11px",
                        color: "#a2a3a5",
                        lineHeight: "14px",
                        width: "650px",
                      }}
                      width="650"
                      valign="top"
                    >
                      <a
                        style={{ color: "#189bb0", textDecoration: "none" }}
                        href="#SPONECLICKOPTOUT"
                        name="__26"
                        xt="SPONECLICKOPTOUT"
                      >
                        <strong>Unsubscribe</strong>
                      </a>
                      <br />
                      <br />
                      ARC&nbsp;&nbsp;&nbsp;&nbsp;3000 Wilson Blvd., Suite
                      300&nbsp;&nbsp;&nbsp;&nbsp;Arlington, VA
                      22201&nbsp;&nbsp;&nbsp;&nbsp;USA&nbsp;&nbsp;&nbsp;&nbsp;
                      <a
                        href="https://www.arccorp.com"
                        name="www_arccorp_com"
                        style={{ color: "#189bb0", textDecoration: "none" }}
                        xt="SPCLICK"
                      >
                        <strong>www.arccorp.com</strong>
                      </a>
                      <br />
                      <br />
                      ARC accelerates the growth of global air travel by
                      delivering forward-looking travel data, flexible
                      distribution services and other innovative industry
                      solutions. We are a leading travel intelligence company
                      that possesses the world’s largest, most comprehensive
                      global airline ticket dataset, including more than 15
                      billion passenger flights representing 490 airlines and
                      230 countries and territories. Our solutions and expertise
                      strengthen economies and enrich lives by connecting
                      stakeholders across the travel ecosystem. For more
                      information, please visit
                      <a
                        href="https://www.arccorp.com"
                        name="www_arccorp_com"
                        style={{ color: "#189bb0", textDecoration: "none" }}
                        xt="SPCLICK"
                      >
                        <strong> www.arccorp.com</strong>
                      </a>
                      .
                      <br />
                      <br />© Airlines Reporting Corporation (ARC). All rights
                      reserved.
                    </td>
                  )}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
