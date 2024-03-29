import React, { useCallback } from "react";

export default function Twocolumn(props) {
  return (
    <tr>
      <td>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td
              align="left"
              class="em_align_cent"
              valign="top"
              width="50%"
              style={{
                fontFamily: "Arial, helvetica,sans-serif",
                width: "50%"
              }}
              dangerouslySetInnerHTML={{ __html: props.text }}
            ></td>
            <td
              align="left"
              class="em_align_cent"
              valign="top"
              width="50%"
              style={{
                fontFamily: "Arial, helvetica,sans-serif",
                width: "50%"
              }}
              dangerouslySetInnerHTML={{ __html: props.text2 }}
            ></td>
          </tr>
        </table>
      </td>
    </tr>
  );
}
