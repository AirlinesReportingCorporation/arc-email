import React from "react";

export default function Image(props) {
    let imgSrc = ''
    if (props.height == 400){ imgSrc="https://www2.arccorp.com/globalassets/email/hero_700x400.jpg"}
    if (props.height == 268){ imgSrc="https://www2.arccorp.com/globalassets/email/Hero-Image-700x268.jpg"}
  return (
    <tr>
      <td>
        <a
          href={props.link ? props.link : "https://www2.arccorp.com"}
          target="_blank"
        >
          <img
            class="em_full_img"
            style={{
              maxWidth: "700px",
              display: "block",
            }}
            src={imgSrc}
          />
        </a>
      </td>
    </tr>
  );
}
