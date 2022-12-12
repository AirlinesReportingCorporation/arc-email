import React from "react";

export default function Button(props) {
  return (
    <table
      role="presentation"
      border="0"
      cellpadding="0"
      cellspacing="0"
      className="btn btn-primary"
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
                    {" "}
                    <a href={props.link} target="_blank">
                      {props.text}
                    </a>{" "}
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