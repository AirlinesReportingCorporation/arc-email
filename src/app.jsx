import React, {
  useState,
  useMemo,
  useEffect,
  useRef,
  useCallback,
} from "react";

import Modal from "react-bootstrap/Modal";
import Button from "../components/Button";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import ARCLogo from "../components/ARCLogo";
import Spacer from "../components/Spacer";
import TACJumbo from "../components/TACJumbo";
import TACLink from "../components/TACLink";
import ARCFooter from "../components/ARCFooter";
import TACBottom from "../components/TACBottom";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import * as ReactDOMServer from "react-dom/server";
import { SortableItem } from "../components/SortableItem";

function alertMe(items, activeAdd) {
  console.log(items, activeAdd);
  alert("You've deleted " + items[activeAdd].name);
}

function App() {
  var blockPreviews = [
    {
      name: "Header",
      icon: <i className="fas fa-heading" aria-hidden="true"></i>,
      component: <Header />,
      props: [["text", "text"]], //name, input
    },
    {
      name: "Paragraph Text",
      icon: <i class="fas fa-paragraph"></i>,
      component: <Paragraph />,
      props: [["text", "textarea"]],
    },
    {
      name: "Button",
      icon: <i class="fas fa-square"></i>,
      component: <Button />,
      props: [
        ["text", "text"],
        ["link", "text"],
      ],
    },
    {
      name: "ARC Logo Header",
      icon: (
        <img
          src="https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-l-teal.png"
          width="64"
        />
      ),
      component: <ARCLogo />,
      props: [
        ["link", "text"],
        ["color", "select"],
      ],
    },
    {
      name: "Spacer",
      icon: <i class="far fa-square"></i>,
      component: <Spacer />,
      props: [["height", "text"]],
    },
    {
      name: "TAC Jumbo",
      icon: <i class="far fa-square"></i>,
      component: <TACJumbo />,
      props: [
        ["background", "text"],
        ["title", "text"],
        ["date", "text"],
      ],
    },
    {
      name: "TAC Link",
      icon: <i class="far fa-newspaper"></i>,
      component: <TACLink />,
      props: [
        ["icon", "select"],
        ["title", "text"],
        ["link", "text"],
        ["cta", "text"],
      ],
    },
    {
      name: "TAC Bottom",
      icon: <i class="far fa-newspaper"></i>,
      component: <TACLink />,
      props: [
        ["TIP_Title", "text"],
        ["TIP_Text", "text"],
        ["TIP_Link", "text"],
        ["Training_Title", "text"],
        ["Training_Text", "text"],
        ["Training_Link", "text"],
      ],
    },
  ];

  const [activeForm, setActiveForm] = useState();

  const [items, setItems] = useState([
    {
      id: "1",
      name: "ARC Logo Header",
      component: <ARCLogo color="" link="https://www2.arccorp.com" />,
    },
    {
      id: "6",
      name: "TAC Jumbo",
      component: (
        <TACJumbo
          title="Travel Agent Communications"
          link="https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/"
          date="01/01/2023"
        />
      ),
    },
    {
      id: "8",
      name: "TAC Link",
      component: (
        <TACLink
          link="https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit.
      "
        />
      ),
    },
    {
      id: "9",
      name: "TAC Link",
      component: (
        <TACLink
          link="https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit.
      "
        />
      ),
    },
    {
      id: "10",
      name: "TAC Link",
      component: (
        <TACLink
          link="https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      ),
    },
    {
      id: "11",
      name: "TAC Bottom",
      component: (
        <TACBottom
          TIP_Title="Tip of the Week"
          TIP_Text="Lorem ipsum dolor sit amet consectetur "
          TIP_Link="https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/"
          Events_Title="Events and Trainings"
          Events_Text="Stay up to date with the latest industry and knowledge."
          Events_Link="https://www2.arccorp.com/about-us/events/"
        />
      ),
    },
  ]);

  //console.log(items[1].component.props);
  const [itemAddID, setItemAddID] = useState(1000);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showModify, setShowModify] = useState(false);

  const [activeView, setActiveView] = useState("design");
  const [activeHover, setActiveHover] = useState("");
  const [activeAdd, setActiveAdd] = useState("");
  const [activePosition, setActivePosition] = useState("");
  const [formProps, setFormProps] = useState({});
  const [hoverRef, isHovered] = useHover();
  const [formInputs, setFormInputs] = useState("");
  const [buttonText, buttonLink, setButtonText, setButtonLink] = useState("");

  const handleCloseModify = () => setShowModify(false);
  const handleShowModify = (index) => {
    generateFormProps(index);
  };

  const setActiveAddIndex = (index, action) => {
    setActiveAdd(index);
    if (action == "top" || action == "bottom") {
      setActivePosition(action);
      handleShow();
    } else if (action == "modify") {
      handleShowModify(index);
    }
    console.log("active add " + index + ", action: " + action);
  };

  const [markup, setMarkup] = useState("");

  const email = items.map((item, i) => <div key={item.id}>{item.id}</div>);

  //useEffect is for functions that need to run on every render
  useEffect(() => {
    const email = items.map((item) => item.component);

    //console.log(sensors);

    setMarkup(
      '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n<html\n  xmlns="http://www.w3.org/1999/xhtml"\n  xmlns:o="urn:schemas-microsoft-com:office:office"\n  xmlns:v="urn:schemas-microsoft-com:vml"\n>\n  <head>\n    <title>ARC</title>\n    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0 " />\n    <meta name="format-detection" content="telephone=no" />\n    <link\n      href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900"\n      rel="stylesheet"\n    />\n    <style type="text/css">\n      body {\n        margin: 0 !important;\n        padding: 0 !important;\n        -webkit-text-size-adjust: 100% !important;\n        -ms-text-size-adjust: 100% !important;\n        -webkit-font-smoothing: antialiased !important;\n      }\n      img {\n        border: 0 !important;\n        outline: none !important;\n      }\n      p {\n        margin: 0px !important;\n        padding: 0px !important;\n      }\n      table {\n        border-collapse: collapse;\n        mso-table-lspace: 0px;\n        mso-table-rspace: 0px;\n      }\n      td,\n      a,\n      span {\n        border-collapse: collapse;\n        mso-line-height-rule: exactly;\n      }\n      .ExternalClass * {\n        line-height: 100%;\n      }\n      .em_defaultlink a {\n        color: inherit !important;\n        text-decoration: none !important;\n      }\n      span.MsoHyperlink {\n        mso-style-priority: 99;\n        color: inherit;\n      }\n      span.MsoHyperlinkFollowed {\n        mso-style-priority: 99;\n        color: inherit;\n      }\n\n\n      @media only screen and (min-width: 481px) and (max-width: 699px) {\n        .title_center {\n          text-align: center;\n        }\n        .em_main_table {\n          width: 100% !important;\n        }\n        .em_wrapper {\n          width: 100% !important;\n        }\n        .em_aside {\n          padding: 0px 20px !important;\n        }\n        .em_hide {\n          display: none !important;\n        }\n        .em_full_img img {\n          width: 100% !important;\n          height: auto !important;\n          max-width: none !important;\n        }\n\n        .em_align_cent {\n          text-align: center !important;\n        }\n        .em_height {\n          height: 20px !important;\n          font-size: 1px !important;\n          line-height: 1px !important;\n        }\n        .em_pad_top {\n          padding-top: 20px !important;\n        }\n        .em_spacer {\n          width: 10px !important;\n        }\n        .em_pad_bottom {\n          padding-bottom: 20px !important;\n        }\n        .em_hauto {\n          height: auto !important;\n        }\n        span[class="em_divhide"] {\n          display: none !important;\n        }\n      }\n\n\n      @media only screen and (max-width: 480px) {\n        .title_center {\n          text-align: center;\n        }\n        .address_item {\n          text-align: center;\n          display: block;\n        }\n        .em_main_table {\n          width: 100% !important;\n        }\n        .em_wrapper {\n          width: 100% !important;\n        }\n        .em_aside {\n          padding: 0px 20px !important; \n        }\n        .em_hide {\n          display: none !important;\n        }\n        .em_full_img img {\n          width: 100% !important;\n          height: auto !important;\n          max-width: none !important;\n        }\n        .icon-center {\n          text-align: center;\n          text-align: -webkit-center;\n        }\n        .icon-center img {\n          padding-bottom: 10px;\n        }\n        .em_align_cent {\n          text-align: center !important;\n        }\n        .em_height {\n          height: 20px !important;\n          font-size: 1px !important;\n          line-height: 1px !important;\n        }\n        .em_pad_top {\n          padding-top: 20px !important;\n        }\n        .em_spacer {\n          width: 10px !important;\n        }\n        .em_pad_bottom {\n          padding-bottom: 20px !important;\n        }\n        .em_hauto {\n          height: auto !important;\n        }\n        span[class="em_divhide"] {\n          display: none !important;\n        }\n      }\n    </style>\n\n    <xml>\n      <o:OfficeDocumentSettings>\n        <o:AllowPNG />\n        <o:PixelsPerInch>96</o:PixelsPerInch>\n      </o:OfficeDocumentSettings>\n    </xml>\n  </head>\n  <body bgcolor="#f7f5f5" style="margin: 0px; padding: 0px">\n\n\n    <table\n      bgcolor="#f7f5f5"\n      border="0"\n      cellpadding="0"\n      cellspacing="0"\n      width="100%"\n    >\n      <tbody>\n        <tr>\n          <td align="center">\n\n            <table\n              align="center"\n              bgcolor="#ffffff"\n              border="0"\n              cellpadding="0"\n              cellspacing="0"\n              class="em_main_table"\n              style="table-layout: fixed; width: 700px"\n              width="700"\n            >' +
        ReactDOMServer.renderToStaticMarkup(email) +
        '</table> </td> </tr> <tr> <td align="center"> <table align="center" bgcolor="#f7f5f5" border="0" cellpadding="0" cellspacing="0" class="em_main_table" style="table-layout: fixed; width: 700px" width="700" > <tbody>' +
        ReactDOMServer.renderToStaticMarkup(<ARCFooter />) +
        '</tbody> </table> </td> </tr> </tbody> </table><div style="white-space: nowrap; font: 20px courier; color: #ffffff"> <span class="em_divhide" >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span > &nbsp; </div> </body> </html> '
    );

    //console.log(items);
  });

  const itemIds = useMemo(() => items.map((item) => item.id, [items]));

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  //TODO addItem(index) create a function that will add a component object to the items list either before or after the index depending on the bottom that was clicked
  // index is the current index of the item you want to add to
  const addItem = (blockName) => {
    console.log(
      "Add " +
        blockName +
        " at the " +
        activePosition +
        " of index " +
        activeAdd
    );

    var newId = itemAddID + 1;

    var tempItems = [...items];

    var newItem = {
      id: newId,
      name: blockName,
      component: "asdf",
    };

    if (blockName == "Header") {
      newItem.component = <Header />;
    } else if (blockName == "Button") {
      newItem.component = <Button text="Learn More" />;
    } else if (blockName == "Paragraph Text") {
      newItem.component = <Paragraph />;
    } else if (blockName == "ARC Logo Header") {
      newItem.component = <ARCLogo />;
    } else if (blockName == "Spacer") {
      newItem.component = <Spacer height="60px" />;
    } else if (blockName == "TAC Jumbo") {
      newItem.component = (
        <TACJumbo title="Travel Agent Communcations" date="01/01/2024" />
      );
    } else if (blockName == "TAC Link") {
      newItem.component = <TACLink />;
    } else if (blockName == "TAC Bottom") {
      newItem.component = <TACBottom />;
    }

    if (activePosition == "top") {
      if (activeAdd == 0) {
        tempItems = prepend(newItem, tempItems);
      } else {
        tempItems.splice(activeAdd, 0, newItem);
      }
    } else if (activePosition == "bottom") {
      tempItems.splice(activeAdd + 1, 0, newItem);
    }

    setItems(tempItems);
    setItemAddID(newId);

    //close add modal
    handleClose();

    //TODO should bring up a the modifyItem modal to edit the newly added block
  };

  const handleInputChange = (event) => {
    event.persist();
    setFormProps((formProps) => ({
      ...formProps,
      [event.target.name]: event.target.value,
    }));
  };

  const generateFormProps = (activeIndex) => {
    //code to set initial form props
    var tempFormProps = {};

    if (items[activeIndex]) {
      var propList =
        blockPreviews[
          blockPreviews.findIndex((x) => x.name === items[activeIndex].name)
        ].props;

      for (let i = 0; i < propList.length; i++) {
        const element = propList[i][0];
        tempFormProps[element] = items[activeIndex].component.props[element];
      }
    }

    setFormProps(tempFormProps);

    setFormInputs(
      blockPreviews[
        blockPreviews.findIndex((x) => x.name === items[activeIndex].name)
      ].props.map((item, i) => (
        <>
          <label>{item[0]}</label>

          {item[1] === "text" ? (
            <input
              name={item[0]}
              type={item[1]}
              defaultValue={tempFormProps[item[0]]}
              value={formProps[i]}
              onChange={handleInputChange}
            />
          ) : (
            ""
          )}

          {item[1] === "textarea" ? (
            <textarea
              name={item[0]}
              type={item[1]}
              rows="10"
              defaultValue={tempFormProps[item[0]]}
              value={formProps[i]}
              onChange={handleInputChange}
            />
          ) : (
            ""
          )}
          {item[1] === "select" ? (
            item[0] === "color" ? (
              <select
                name={item[0]}
                defaultValue={tempFormProps[item[0]]}
                value={formProps[i]}
                onChange={handleInputChange}
              >
                <option value="teal">Teal</option>
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="gray">Gray</option>
              </select>
            ) : (
              ""
            )
          ) : (
            ""
          )}

          {item[1] === "select" ? (
            item[0] === "type" ? (
              <select
                name={item[0]}
                defaultValue={tempFormProps[item[0]]}
                value={formProps[i]}
                onChange={handleInputChange}
              >
                <option value="short">Short</option>
                <option value="standard">Standard</option>
              </select>
            ) : (
              ""
            )
          ) : (
            ""
          )}

          {item[1] === "select" ? (
            item[0] === "icon" ? (
              <select
                name={item[0]}
                defaultValue={tempFormProps[item[0]]}
                value={formProps[i]}
                onChange={handleInputChange}
              >
                <option value="creditcard">Credit Card</option>
                <option value="events">Events</option>
                <option value="feesannouncement">Fees Announcement</option>
                <option value="holidays">Holidays</option>
                <option value="important">Important</option>
                <option value="newairline">New Airline</option>
                <option value="scheduledmaintenance">
                  Scheduled Maintenance
                </option>
              </select>
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </>
      ))
    );

    setShowModify(true);
  };

  //TODO modifyItem be able to modify a component after adding it to the list, it should be able to figure out what component it is and pull the corresponding custom form to edit
  const modifyItem = (event) => {
    event.preventDefault();
    var tempItems = [...items];

    var updatedItem = {
      id: tempItems[activeAdd].id,
      name: tempItems[activeAdd].name,
      component: React.cloneElement(tempItems[activeAdd].component, formProps),
    };

    console.log(updatedItem);

    tempItems[activeAdd] = updatedItem;

    //replace item list
    setItems(tempItems);

    handleCloseModify();
  };

  const deleteItem = () => {
    //use splice function to remove at activeItemIndex and items, similar to add Item but removal intead and more simple

    var tempItems = [...items];
    console.log("deleteItems:" + tempItems);
    tempItems.splice(activeAdd, 1);
    console.log(tempItems);

    setItems(tempItems);
    setActiveAdd("");
    handleCloseModify();
  };

  return (
    <div className="arc-email-page">
      <div className="">
        <div className="row no-gutters" style={{ maxWidth: "100%" }}>
          <div className="col-lg-1 arc-email-tools">
            <div className="arc-email-tool-container text-center">
              <div
                className={
                  activeView == "design"
                    ? "arc-email-tool-icon active"
                    : "arc-email-tool-icon"
                }
                style={{ fontSize: "2rem" }}
                onClick={() => setActiveView("design")}
              >
                <i class="fas fa-stream"></i>
              </div>
              <div
                className={
                  activeView == "download"
                    ? "arc-email-tool-icon active"
                    : "arc-email-tool-icon"
                }
                style={{ fontSize: "2rem" }}
                onClick={() => setActiveView("download")}
              >
                <i class="fas fa-download"></i>
              </div>
              <div
                className={
                  activeView == "settings"
                    ? "arc-email-tool-icon active"
                    : "arc-email-tool-icon"
                }
                style={{ fontSize: "2rem" }}
                onClick={() => setActiveView("settings")}
              >
                <i class="fas fa-cog"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 arc-email-tool-items">
            <div className="arc-email-sidebar-container">
              <div
                className="arc-email-sidebar-email-parts"
                style={{ display: activeView === "design" ? "block" : "none" }}
              >
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                >
                  <SortableContext
                    items={itemIds}
                    strategy={verticalListSortingStrategy}
                  >
                    {items.map((item, i) => (
                      <div
                        className="arc-email-sortable-item-container"
                        onMouseOver={() => setActiveHover(item.id)}
                        onMouseOut={() => setActiveHover("")}
                      >
                        <div
                          className="arc-email-template-add add-top"
                          onClick={() => setActiveAddIndex(i, "top")}
                          style={{
                            display: activeHover == item.id ? "block" : "none",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>

                        <SortableItem
                          key={item.id}
                          id={item.id}
                          name={item.name}
                          modifyFunction={() => setActiveAddIndex(i, "modify")}
                        ></SortableItem>

                        <div
                          className="arc-email-template-add add-bottom"
                          style={{
                            display: activeHover == item.id ? "block" : "none",
                          }}
                          onClick={() => setActiveAddIndex(i, "bottom")}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </SortableContext>
                </DndContext>
              </div>
              <div
                className="arc-email-sidebar-download-container"
                style={{
                  display: activeView === "download" ? "block" : "none",
                }}
              >
                <h2>Download Code</h2>
                <p>
                  Copy the code below to your clipboard and upload to the HTML
                  section of Acoustic.
                </p>
                <textarea name="" id="" rows="10" value={markup}></textarea>
              </div>
              <div
                className="arc-email-sidebar-email-parts"
                style={{
                  display: activeView === "settings" ? "block" : "none",
                }}
              >
                Settings View
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <iframe
              style={{ width: "100%", minHeight: "100vh", border: "none" }}
              srcDoc={markup}
            ></iframe>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Email Component</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            {blockPreviews.map((block) => (
              <div className="col-lg-auto">
                <div
                  className="arc-email-component-add-container"
                  onClick={() => addItem(block.name)}
                >
                  <div className="arc-email-component-icon">{block.icon}</div>
                  <div className="arc-email-component-name">{block.name}</div>
                </div>
              </div>
            ))}
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <a className="ctaBtn" onClick={handleClose}>
            Close
          </a>
          <a className="ctaBtn" onClick={handleClose}>
            Save Changes
          </a>
        </Modal.Footer> */}
      </Modal>

      <Modal show={showModify} onHide={handleCloseModify}>
        <form onSubmit={modifyItem}>
          <Modal.Header closeButton>
            <Modal.Title>
              Edit {items[activeAdd] ? items[activeAdd].name + " " : "Email "}
              Component
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-12">{formInputs}</div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <a className="ctaBtn ctaBtn--close" onClick={deleteItem}>
              <i class="fas fa-trash-alt"></i>
            </a>
            <input type="submit" className="ctaBtn" value="Save Changes" />
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}

// Hook
function useHover() {
  const [value, setValue] = useState(false);

  // Wrap in useCallback so we can use in dependencies below
  const handleMouseOver = useCallback(() => setValue(true), []);
  const handleMouseOut = useCallback(() => setValue(false), []);

  // Keep track of the last node passed to callbackRef
  // so we can remove its event listeners.
  const ref = useRef();

  // Use a callback ref instead of useEffect so that event listeners
  // get changed in the case that the returned ref gets added to
  // a different element later. With useEffect, changes to ref.current
  // wouldn't cause a rerender and thus the effect would run again.
  const callbackRef = useCallback(
    (node) => {
      if (ref.current) {
        ref.current.removeEventListener("mouseover", handleMouseOver);
        ref.current.removeEventListener("mouseout", handleMouseOut);
      }

      ref.current = node;

      if (ref.current) {
        ref.current.addEventListener("mouseover", handleMouseOver);
        ref.current.addEventListener("mouseout", handleMouseOut);
      }
    },
    [handleMouseOver, handleMouseOut]
  );

  return [callbackRef, value];
}

function prepend(value, array) {
  var newArray = array.slice();
  newArray.unshift(value);
  return newArray;
}

export default App;
