import React from "react";

export default function TACJumbo(props) {
  return (
    <>
      <tr>
        <td
          align="center"
          class="em_aside"
          style={{ paddingLeft: "25px", paddingRight: "25px" }}
          valign="top"
        >
          <a
            href={props.link ? props.link : "https://www2.arccorp.com"}
            target="_blank"
          >
            <img
              width="650"
              style={{
                width: "650px",
                display: "block",
              }}
              src={
                props.jumbobackground
                  ? props.jumbobackground
                  : "https://www2.arccorp.com/globalassets/email-parts/header/tac-header-dec2023.png"
              }
            />
          </a>{" "}
        </td>
      </tr>
      <tr>
        <td
          class=""
          style={{
            height: "25px",
          }}
        >
          &nbsp;
        </td>
      </tr>
      <tr>
        <td
          align="center"
          class="em_aside"
          style={{ paddingLeft: "50px", paddingRight: "50px" }}
          valign="top"
        >
          <table
            style={{
              width: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            role="presentation"
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="600"
            align="center"
          >
            <tr>
              <td
                width="600"
                height="40"
                style={{
                  textAlign: "center",
                  width: "600px",
                  fontFamily: "SourceSansPro, Arial, sans-serif",
                  fontSize: "24px",
                  lineHeight: "35px",
                  fontWeight: "Bold",
                  color: "#2a2b2c",
                }}
              >
                {props.title ? props.title : "Travel Agent Communications"}
              </td>
            </tr>
            <tr>
              <td
                height="20"
                style={{
                  fontFamily: "SourceSansPro, Arial, sans-serif",
                  fontSize: "18px",
                  lineHeight: "19px",
                  fontWeight: "regular",
                  color: "#2a2b2c",
                  textAlign: "center",
                }}
              >
                PED {props.date ? props.date : "01/01/2023"}
              </td>
            </tr>
          </table>
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
              <td style={{ height:"35px", borderBottom: "1px solid #2a2b2d" }}>&nbsp;</td>
            </tr>
          </table>
        </td>
      </tr>
    </>
  );
}
