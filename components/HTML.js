import React, { useCallback } from "react";

export default function HTML(props) {
  return (
    <tr>
      <td
        align={props.align ? props.align : "left"}
        dangerouslySetInnerHTML={{ __html: props.data }}
      ></td>
    </tr>
  );
}
