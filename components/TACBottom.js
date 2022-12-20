import React from "react";

export default function TACBottom(props) {
  return (
    <>
      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
        <tbody>
          <tr>
            <td class="em_height" style={{ height: "30px", fontSize: "0" }}>
              &nbsp;
            </td>
          </tr>
          <tr>
            <td>
              <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
                background="#d4d4d4"
                style={{
                  textAlign: "center",
                  width: "100%",
                  backgroundColor: "#d4d4d4",
                  background: "#d4d4d4",
                }}
              >
                <tr>
                  <td
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "15px",
                      lineHeight: "18px",
                      fontWeight: "light",
                      color: "#2a2b2c",
                      width: "100%",
                    }}
                    valign="top"
                  >
                    {props.TIP_Title ? props.TIP_Title : "Tip of the Week"}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "15px",
                      lineHeight: "18px",
                      fontWeight: "light",
                      color: "#2a2b2c",
                      width: "100%",
                    }}
                    valign="top"
                  >
                    {props.TIP_Text ? props.TIP_Text : ""}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "15px",
                      lineHeight: "18px",
                      fontWeight: "light",
                      color: "#2a2b2c",
                      width: "100%",
                    }}
                    valign="top"
                  >
                    <a style={{ color: "#189bb0", fontWeight: "Bold" }} href="">
                      Learn More
                    </a>
                  </td>
                </tr>
              </table>
            </td>
            <td>
              <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
                background="#d4d4d4"
                style={{
                  textAlign: "center",
                  width: "100%",
                  backgroundColor: "#d4d4d4",
                  background: "#d4d4d4",
                }}
              >
                <tr>
                  <td
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "15px",
                      lineHeight: "18px",
                      fontWeight: "light",
                      color: "#2a2b2c",
                      width: "100%",
                    }}
                    valign="top"
                  >
                    {props.Training_Title
                      ? props.Training_Title
                      : "Events and Trainings"}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "15px",
                      lineHeight: "18px",
                      fontWeight: "light",
                      color: "#2a2b2c",
                      width: "100%",
                    }}
                    valign="top"
                  >
                    {props.TIP_Text
                      ? props.TIP_Text
                      : "Stay up to to date with the latest industry knowlege"}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "15px",
                      lineHeight: "18px",
                      fontWeight: "light",
                      color: "#2a2b2c",
                      width: "100%",
                    }}
                    valign="top"
                  >
                    <a style={{ color: "#189bb0", fontWeight: "Bold" }} href="">
                      Learn More
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
