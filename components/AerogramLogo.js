import React from "react";

export default function AerogramLogo(props) {
  return (
    <tr>
      <td>
        <tr>
          <td class="em_height" height="20">
            &nbsp;
          </td>
        </tr>
        <tr>
          <td height="75" valign="middle">
            <a
              href={props.link ? props.link : "https://www2.arccorp.com"}
              target="_blank"
              style={{
                display: "block",
              }}
            >
              <img
                height="75"
                style={{
                  height: "75px",
                  display: "block",
                  marginRight: "auto",
                  paddingLeft: "25px",
                }}
                src={
                  "https://www2.arccorp.com/globalassets/email/aerogram-logo.jpg"
                }
              />
            </a>
          </td>
          <td height="75" valign="middle">
            <a
              href={props.link ? props.link : "https://www2.arccorp.com"}
              target="_blank"
              style={{
                display: "block",
              }}
            >
              <img
                height="23"
                width="58"
                style={{
                  height: "23px",
                  width: "58px",
                  display: "block",
                  marginLeft: "auto",
                  paddingRight: "25px",
                }}
                src={
                  "https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-l-" +
                  (props.color ? props.color : "teal") +
                  ".png"
                }
              />
            </a>
          </td>
        </tr>
        <tr>
          <td class="em_height" height="20">
            &nbsp;
          </td>
        </tr>
      </td>
    </tr>
  );
}
