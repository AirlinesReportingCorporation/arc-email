import React from "react";

export default function Webinar(props) {
  return (
    <tr bgcolor="#ffffff">
      <td
        align="center"
        class="em_aside"
        style={{ paddingLeft: "84px", paddingRight: "84px" }}
        valign="top"
      >
        <table
          align="center"
          border="0"
          cellpadding="10"
          cellspacing="0"
          width="100%"
        >
          <tbody>
            <tr>
              <td
                width="112"
                style={{ textAlign: "center", verticalAlign: "top" }}
              >
                <img
                  height="104"
                  src="http://contentz.mkt8039.com/ra/2023/30008/03/22191414/SEP-15-icon.png"
                  width="112"
                />
              </td>
              <td>
                <p
                  style={{
                    fontFamily: "Arial, sans-serif",
                    color: "rgb(56, 53, 82)",
                    textAlign: "left",
                    lineHeight: "20px",
                  }}
                >
                  <span style={{ fontSize: "18px" }}>
                    <b>{props.webinarTitle}</b>
                  </span>
                  <br />
                  <span style={{ fontSize: "15px" }}>{props.webinarDate}</span>
                  <br />
                  <span style={{ fontSize: "15px" }}>{props.webinarTime}</span>
                  <br />
                  {!props.linkCopy ? (
                    ""
                  ) : (
                    <a
                      href={props.webinarLink}
                      name="__12"
                      style={{
                        textDecoration: "none",
                        color: "#189bb0",
                        fontSize: "12px",
                      }}
                      target="_blank"
                      xt="SPCLICK"
                    >
                      {props.linkCopy} &nbsp;&nbsp;
                      <span style={{ fontSize: "16px" }}>›</span>
                    </a>
                  )}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}
