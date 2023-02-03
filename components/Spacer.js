import React from "react";

export default function Spacer(props) {
  return (
    <tr>
      <td
        class="em_height"
        align="left"
        valign="top"
        width="100%"
        height={props.height ? props.height.replace("px", "") : "60"}
        colspan="3"
        style={{
          "border-collapse": "collapse",
          "mso-table-lspace": "0pt",
          "mso-table-rspace": "0pt",
          "mso-line-height-rule": "exactly",
          "line-height": props.height ? props.height.replace("px", "") : "60" + "px",
        }}
      >
        &nbsp;
      </td>
    </tr>
  );
}
