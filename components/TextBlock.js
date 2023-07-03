import React from "react";

export default function TextBlock(props) {
  return (
    <tr>
      <td>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td
                style={{
                  width: "700px",
                  paddingLeft: props.padding,
                  paddingRight: props.padding,
                  fontFamily: "Arial, helvetica,sans-serif",
                }}
                dangerouslySetInnerHTML={{ __html: props.text }}
              ></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}
