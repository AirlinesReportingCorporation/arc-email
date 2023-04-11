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
                    <b>{props.title}</b>
                  </span>
                  <br />
                  <span style={{ fontSize: "15px" }}>{props.date}</span>
                  <br />
                  <span style={{ fontSize: "15px" }}>{props.time}</span>
                  <br />
                  <span style={{ paddingTop: "15px", fontFamily: "Arial, helvetica,sans-serif" }} dangerouslySetInnerHTML={{ __html: props.body }}></span>

                  {!props.link_copy ? (
                    ""
                  ) : (
                    <a
                      href={props.link}
                      name="__12"
                      style={{
                        textDecoration: "none",
                        color: "#189bb0",
                        fontSize: "12px",
                      }}
                      target="_blank"
                      xt="SPCLICK"
                    >
                      {props.link_copy} &nbsp;&nbsp;
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
