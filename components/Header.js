import React from "react";

export default function Header(props) {
  return (
    <tr>
      <td align={props.align ? props.align : "center"} style={{ paddingLeft: "25px", paddingRight: "25px"}}>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td>
                <h1>{props.text}</h1>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}
