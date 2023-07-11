import React from "react";

export default function Spacer(props) {
  return (
    <tr
      style={{
        backgroundColor: props.color == "teal" ? "#189bb0" : props.color,
      }}
    >
      <td
        class="em_height"
        align="left"
        valign="top"
        width="100%"
        height={props.height ? props.height.replace("px", "") : "60"}
        style={{
          "border-collapse": "collapse",
          "mso-table-lspace": "0pt",
          "mso-table-rspace": "0pt",
          "mso-line-height-rule": "exactly",
          "line-height": props.height
            ? props.height.replace("px", "") + "px"
            : "60" + "px",
        }}
      >
        &nbsp;
      </td>
    </tr>
  );
}
