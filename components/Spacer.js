import React from "react";

export default function Spacer(props) {
  return (
    <tr>
      <td class="em_height" style={{lineHeight: "0", fontSize: "0"}} height={props.height ? props.height : "60"}>
        &nbsp;
      </td>
    </tr>
  );
}
