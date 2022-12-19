import React from "react";

export default function Spacer(props) {
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
                  <td
                    class="em_height"
                    style={{ height: props.height ? props.height : "60" }}
                  >
                    &nbsp;
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
