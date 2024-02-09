import React from "react";

export default function AeroImage(props) {
  return (
    <tr>
      <td align="center" class="em_full_img" valign="top">
        <a
          href={props.link ? props.link : "https://www2.arccorp.com"}
          target="_blank"
        >
          <img
          width="700"
            class="em_full_img"
            style={{
              width: "700px",
              display: "block",
            }}
            src={
              "https://www2.arccorp.com/globalassets/email/aerogram-image.jpg"
            }
          />
        </a>
      </td>
    </tr>
  );
}
