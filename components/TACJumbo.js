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
                maxWidth: "650px",
                width: "650px",
                display: "block",
              }}
              src="https://www2.arccorp.com/globalassets/email-parts/tac-jumbo-top.png"
            />
          </a>{" "}
        </td>
      </tr>
      <tr>
        <td
          align="center"
          class="em_aside"
          style={{ paddingLeft: "50px", paddingRight: "50px" }}
          valign="top"
          height="60"
        >
          <table
            background="#189bb0"
            style={{
              background: "#189bb0",
              backgroundColor: "#189bb0",
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
                  background: "#189bb0",
                  fontFamily: "SourceSansPro, Arial, sans-serif",
                  fontSize: "22px",
                  lineHeight: "26px",
                  fontWeight: "Bold",
                  color: "#ffffff",
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
                  fontSize: "15px",
                  lineHeight: "18px",
                  fontWeight: "regular",
                  color: "#ffffff",
                  background: "#189bb0",
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
          align="center"
          class="em_aside"
          style={{ paddingLeft: "50px", paddingRight: "50px", height: "22px" }}
          valign="top"
          height="22"
        >
          <table
            background="#ffffff"
            style={{
              background: "#ffffff",
              backgroundColor: "#ffffff",
              width: "600px",
              height: "22px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            role="presentation"
            border="0"
            height="22"
            width="600"
            align="center"
            cellpadding="0"
            cellspacing="0"
          >
            <tr>
              <td align="center" height="22">
                {" "}
                <a
                  href={props.link ? props.link : "https://www2.arccorp.com"}
                  target="_blank"
                >
                  <img
                    width="600"
                    height="22"
                    style={{
                      maxWidth: "600px",
                      width: "600px",
                      height: "22px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "block",
                    }}
                    src="https://www2.arccorp.com/globalassets/email-parts/tac-jumbo-bottom.jpg"
                  />
                </a>{" "}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </>
  );
}
