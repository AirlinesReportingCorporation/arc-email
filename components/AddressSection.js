import React from "react";

export default function AddressSection(props) {
  return (
    <tr style={{backgroundColor: (props.color == "teal" ? "#189bb0" : props.color)}}>
      <td align="center">
        <table
          role="presentation"
          border="0"
          cellpadding="0"
          cellspacing="0"
          style={{
            textAlign: "center",
            width: "100%",
          }}
        >
          <tbody>
            <tr>
              <td
                align="center"
                className="em_aside"
                style={{ paddingLeft: "24px", paddingRight: "24px"}}
                valign="top"
              >
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td className="em_height" height="40">
                        &nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td align="center" valign="top">
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                        >
                          <tbody>
                            <tr>
                              <td
                                align="center"
                                style={{
                                  fontFamily: "Arial, sans-serif",
                                  fontSize: "11px",
                                  color: (props.color == "white" ? "#189bb0" : "#fff"),
                                  lineHeight: "14px",
                                }}
                                valign="top"
                              >
                                <span className="address_item">
                                  <strong>Customer Care Center</strong>
                                </span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span className="address_item">
                                  Phone&nbsp;1-855-816-8003
                                </span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span className="address_item">
                                  Fax&nbsp;1-703-816-8039
                                </span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a
                                  href="mailto:ccchelp@arccorp.com"
                                  className="address_item"
                                  style={{
                                    textDecoration: "none",
                                    color: (props.color == "white" ? "#189bb0 !important" : "#fff !important") 
                                  }}
                                >
                                  ccchelp@arccorp.com
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td className="em_height" height="40">
                        &nbsp;
                      </td>
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
