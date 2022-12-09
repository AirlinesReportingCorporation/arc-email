import React from "react";

export default function Header(props) {
  return (
    <table
      role="presentation"
      border="0"
      cellpadding="0"
      cellspacing="0"
    >
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
                  <td>
                    <h1>Test Header</h1>
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
