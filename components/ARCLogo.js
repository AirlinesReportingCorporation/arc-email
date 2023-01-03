import React from "react";

export default function ARCLogo(props) {
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
              style={{ textAlign: "center" }}
            >
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <a
                      href={
                        props.link ? props.link : "https://www2.arccorp.com"
                      }
                      target="_blank"
                    >
                      <img
                        width="64"
                        style={{ width: "64px" }}
                        src={
                          "https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-l-" +
                          (props.color ? props.color : "teal") +
                          ".png"
                        }
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
