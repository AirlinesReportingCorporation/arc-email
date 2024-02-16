import React from "react";

export default function ARCLogo(props) {
  return (
    <>
      <tr>
        <td className="em_height" height="20">
          &nbsp;
        </td>
      </tr>
      <tr>
        <td
          height="23"
          align="center"
          valign="middle"
          style={{ textAlign: "center" }}
        >
          <a
            href={props.link ? props.link : "https://www2.arccorp.com"}
            target="_blank"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {props.logo === "arcpay" ? (
              <img
                height="23"
                style={{
                  height: "23px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                src={
                  "https://www2.arccorp.com/globalassets/products--participation/arc-pay/arc-pay-logo.png"
                }
              />
            ) : (
              <img
                height="23"
                width="58"
                style={{
                  height: "23px",
                  width: "58px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                src={
                  "https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-l-" +
                  (props.color ? props.color : "teal") +
                  ".png"
                }
              />
            )}
          </a>
        </td>
      </tr>
      <tr>
        <td className="em_height" height="20">
          &nbsp;
        </td>
      </tr>
    </>
  );
}
