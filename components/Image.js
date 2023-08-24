import React from "react";

export default function Image(props) {
  var imgSrc = props.link ? props.link : "";
  var padding = props.padding ? props.padding : 0;
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
        paddingLeft: padding,
        paddingRight: padding,
      }}
    >
      <td align="center">
        <a
          href={props.ctaLink ? props.ctaLink : "https://www2.arccorp.com"}
          target="_blank"
        >
          <img
            class="em_full_img"
            width={props.width ? props.width : "100%"}
            style={{
              width: props.width ? props.width : "100%",
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
