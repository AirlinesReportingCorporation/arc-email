import React from "react";

export default function Paragraph(props) {
  return (
    <tr>
      <td style={{ paddingLeft: "50px", paddingRight: "50px" }}>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td align="left">
                <table
                  role="presentation"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                >
                  <tbody>
                    <tr>
                      <td dangerouslySetInnerHTML={{ __html: props.text }}></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}
