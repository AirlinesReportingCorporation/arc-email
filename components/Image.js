import React from "react";

export default function Image(props) {
  let imgSrc = props.link ? props.link : "";
  if (!props.link) {
    if (props.height == 400) {
      imgSrc = "https://www2.arccorp.com/globalassets/email/hero_700x400.jpg";
    }
    if (props.height == 268) {
      imgSrc =
        "https://www2.arccorp.com/globalassets/email/Hero-Image-700x268.jpg";
    }
  }

  return (
    <tr
      style={{
        backgroundColor: props.color == "teal" ? "#189bb0" : props.color,
      }}
    >
      <td>
        <a
          href={props.ctaLink ? props.ctaLink : "https://www2.arccorp.com"}
          target="_blank"
        >
          <img
            class="em_full_img"
            width="100%"
            
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
            src={imgSrc}
          />
        </a>
      </td>
    </tr>
  );
}
