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
import { Editor } from "@tinymce/tinymce-react";

import emailTemplates from "./templates";

import { ViewToggle } from "../components/ViewToggle";
import StandardHeader from "../components/StandardHeader";

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
import TealHeader from "../components/TealHeader";
import AddressSection from "../components/AddressSection";

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
      props: [["text", "text"], ["position", "select"], ["heading", "select"]], //name, input
    },
    {
      name: "Paragraph Text",
      icon: <i class="fas fa-paragraph"></i>,
      component: <Paragraph text="<p>Lorem Ipsum</p>"/>,
      props: [["text", "textarea"]],
    },
    {
      name: "Button",
      icon: <i class="fas fa-square"></i>,
      component: <Button />,
      props: [
        ["text", "text"],
        ["link", "text"],
<<<<<<< HEAD
        ["position", "select"]
=======
        ["buttonStyle", "select"]
>>>>>>> c5fdd44ad98066cc1ba868f012668f6791f396ce
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
        ["jumbobackground", "select"],
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
    {
      name: "Standard Header",
      icon: <i class="far fa-newspaper"></i>,
      component: <StandardHeader />,
      props: [
        ["color", "select"],
      ],
    },
    {
      name: "Teal Header",
      icon: <i class="far fa-newspaper"></i>,
      component: <TealHeader />,
      props: [["link", "text"]],
    },
  ];

  const [activeForm, setActiveForm] = useState();

<<<<<<< HEAD
  const [items, setItems] = useState([
    {
      id: "1",
      name: "ARC Logo Header",
      component: <ARCLogo link="https://www2.arccorp.com" />,
    },
    {
      id: "5",
      name: "Spacer",
      component: <Spacer height="10px" />,
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
      component: <TACLink height="20px" />,
    },
    {
      id: "9",
      name: "TAC Link",
      component: <TACLink height="20px" />,
    },
    {
      id: "10",
      name: "TAC Link",
      component: <TACLink height="20px" />,
    },
    {
      id: "11",
      name: "Teal Header",
      component: <TealHeader />,
    },
    {
      id: "12",
      name: "Header",
      component: <Header position="left"  heading="h1" text="Lorem Ipsum"/>,
    },
    {
      id: "13",
      name: "AddressSection",
      component: <AddressSection/>,
    },
  ]);
=======
  const [items, setItems] = useState(emailTemplates[0].template);
  const [templateSelection, setTemplateSelection] = useState('');

  const getTemplate = (event) => {
    var prevTemplateSelection = templateSelection;
    var selectedTemplate = event.target.value;
    console.log(emailTemplates);
    var choice = confirm('Do you want to continue? Any changes will not be saved');
    if (choice == false) {
      event.preventDefault()
      setTemplateSelection(prevTemplateSelection);
    }
    else {
      for (let i = 0; i < emailTemplates.length; i++) {
        const element = emailTemplates[i];
        if (element.id === selectedTemplate) {
          setItems(element.template);
          setTemplateSelection(element.id);
          break;
        }
      }
    }
  }
>>>>>>> c5fdd44ad98066cc1ba868f012668f6791f396ce

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

  // set the state using a hook:
  const [isToggled, toggle] = useState(false);

  // Function to run when clicked
  const toggleView = () => {
    toggle(!isToggled);
    console.log(isToggled);
  };

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
<<<<<<< HEAD
      '<!doctype html> <html> <head> <meta name="viewport" content="width=device-width, initial-scale=1.0"/> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> <title>Simple Transactional Email</title> <style> /* ------------------------------------- GLOBAL RESETS ------------------------------------- */ /*All the styling goes here*/ img { border: none; -ms-interpolation-mode: bicubic; max-width: 100%; } body { background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; } table { border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; } table td { font-family: sans-serif; font-size: 14px; vertical-align: top; } /* ------------------------------------- BODY & CONTAINER ------------------------------------- */ .body { background-color: #f6f6f6; width: 100%; } /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */ .container { display: block; margin: 0 auto !important; /* makes it centered */ max-width: 724px; padding: 10px; width: 724px; } /* This should also be a block element, so that it will fill 100% of the .container */ .content { box-sizing: border-box; display: block; margin: 0 auto; max-width: 724px; padding: 10px; } /* ------------------------------------- HEADER, FOOTER, MAIN ------------------------------------- */ .main { background: #ffffff; border-radius: 3px; width: 100%; } .wrapper { box-sizing: border-box; padding: 25px; } .content-block { padding-bottom: 10px; padding-top: 10px; } .footer { clear: both; margin-top: 10px; text-align: center; width: 100%; } .footer td, .footer p, .footer span, .footer a { color: #999999; font-size: 12px; text-align: center; } /* ------------------------------------- TYPOGRAPHY ------------------------------------- */ h1, h2, h3, h4 { color: #000000; font-family: sans-serif; font-weight: 400; line-height: 1.4; margin: 0; margin-bottom: 30px; } h1 { font-size: 35px; font-weight: 300; text-align: center; text-transform: capitalize; } p, ul, ol { font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px; } p li, ul li, ol li { list-style-position: inside; margin-left: 5px; } a { color: #189bb0; text-decoration: underline; } /* ------------------------------------- BUTTONS ------------------------------------- */ .btn { box-sizing: border-box; width: 100%; } .btn > tbody > tr > td { padding-bottom: 15px; } .btn table { width: auto; } .btn table td { background-color: #ffffff; border-radius: 5px; text-align: center; } .btn a { background-color: #ffffff; border: solid 1px #189bb0; border-radius: 5px; box-sizing: border-box; color: #189bb0; cursor: pointer; display: inline-block; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-decoration: none; text-transform: capitalize; } .btn-primary table td { background-color: #189bb0; } .btn-primary a { background-color: #189bb0; border-color: #189bb0; color: #ffffff; } /* ------------------------------------- OTHER STYLES THAT MIGHT BE USEFUL ------------------------------------- */ .last { margin-bottom: 0; } .first { margin-top: 0; } .align-center { text-align: center; } .align-right { text-align: right; } .align-left { text-align: left; } .clear { clear: both; } .mt0 { margin-top: 0; } .mb0 { margin-bottom: 0; } .preheader { color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0; } .powered-by a { text-decoration: none; } hr { border: 0; border-bottom: 1px solid #f6f6f6; margin: 20px 0; } /* ------------------------------------- RESPONSIVE AND MOBILE FRIENDLY STYLES ------------------------------------- */ @media only screen and (max-width: 724px) { table.body h1 { font-size: 28px !important; margin-bottom: 10px !important; } table.body p, table.body ul, table.body ol, table.body td, table.body span, table.body a { font-size: 16px !important; } table.body .wrapper, table.body .article { padding: 10px !important; } table.body .content { padding: 0 !important; } table.body .container { padding: 0 !important; width: 100% !important; } table.body .main { border-left-width: 0 !important; border-radius: 0 !important; border-right-width: 0 !important; } table.body .btn table { width: 100% !important; } table.body .btn a { width: 100% !important; } table.body .img-responsive { height: auto !important; max-width: 100% !important; width: auto !important; } } /* ------------------------------------- PRESERVE THESE STYLES IN THE HEAD ------------------------------------- */ @media all { .ExternalClass { width: 100%; } .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; } .apple-link a { color: inherit !important; font-family: inherit !important; font-size: inherit !important; font-weight: inherit !important; line-height: inherit !important; text-decoration: none !important; } #MessageViewBody a { color: inherit; text-decoration: none; font-size: inherit; font-family: inherit; font-weight: inherit; line-height: inherit; } .btn-primary table td:hover { background-color: #189bb0 !important; } .btn-primary a:hover { background-color: #189bb0 !important; border-color: #189bb0 !important; } } </style> </head> <body> <span class="preheader">This is preheader text. Some clients will show this text as a preview.</span> <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body"> <tr> <td> </td> <td class="container"> <div class="content">  <table role="presentation" class="main">  <tr> <td class="wrapper"> <table role="presentation" border="0" cellpadding="0" cellspacing="0">' +
=======
      '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html   xmlns="http://www.w3.org/1999/xhtml"   xmlns:o="urn:schemas-microsoft-com:office:office"   xmlns:v="urn:schemas-microsoft-com:vml" >   <head>     <title>ARC</title>     <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />     <meta http-equiv="X-UA-Compatible" content="IE=edge" />     <meta name="viewport" content="width=device-width, initial-scale=1.0 " />     <meta name="format-detection" content="telephone=no" />     <link       href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900"       rel="stylesheet"     />     <style type="text/css">       body {         margin: 0 !important;         padding: 0 !important;         -webkit-text-size-adjust: 100% !important;         -ms-text-size-adjust: 100% !important;         -webkit-font-smoothing: antialiased !important;       }       img {         border: 0 !important;         outline: none !important;       }       p {         margin: 0px !important;         padding: 0px !important;       }       table {         border-collapse: collapse;         mso-table-lspace: 0px;         mso-table-rspace: 0px;       }       td,       a,       span {         border-collapse: collapse;         mso-line-height-rule: exactly;       }       .ExternalClass * {         line-height: 100%;       }       .em_defaultlink a {         color: inherit !important;         text-decoration: none !important;       }       span.MsoHyperlink {         mso-style-priority: 99;         color: inherit;       }       span.MsoHyperlinkFollowed {         mso-style-priority: 99;         color: inherit;       }       @media only screen and (min-width: 481px) and (max-width: 699px) {         .title_center {           text-align: center;         }         .em_main_table {           width: 100% !important;         }         .em_wrapper {           width: 100% !important;         }         .em_aside {           padding: 0px 20px !important;         }         .em_hide {           display: none !important;         }         .em_full_img img {           width: 100% !important;           height: auto !important;           max-width: none !important;         }         .em_align_cent {           text-align: center !important;         }         .em_height {           height: 20px !important;           font-size: 1px !important;           line-height: 1px !important;         }         .em_pad_top {           padding-top: 20px !important;         }         .em_spacer {           width: 10px !important;         }         .em_pad_bottom {           padding-bottom: 20px !important;         }         .em_hauto {           height: auto !important;         }         span[class="em_divhide"] {           display: none !important;         }       }       @media only screen and (max-width: 480px) {         .title_center {           text-align: center;         }         .address_item {           text-align: center;           display: block;         }         .em_main_table {           width: 100% !important;         }         .em_wrapper {           width: 100% !important;         }         .em_aside {           padding: 0px 20px !important;         }         .em_hide {           display: none !important;         }         .em_full_img img {           width: 100% !important;           height: auto !important;           max-width: none !important;         }         .icon-center {           text-align: center;           text-align: -webkit-center;         }         .icon-center img {           padding-bottom: 10px;         }         .em_align_cent {           text-align: center !important;         }         .em_height {           height: 20px !important;           font-size: 1px !important;           line-height: 1px !important;         }         .em_pad_top {           padding-top: 20px !important;         }         .em_spacer {           width: 10px !important;         }         .em_pad_bottom {           padding-bottom: 20px !important;         }         .em_hauto {           height: auto !important;         }         span[class="em_divhide"] {           display: none !important;         }       }       a[x-apple-data-detectors] {  color: #77d6fc !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; } u + #body a { color: #77d6fc !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; } </style>  <!--[if gte mso 9]>       <xml>         <o:OfficeDocumentSettings>           <o:AllowPNG />           <o:PixelsPerInch>96</o:PixelsPerInch>         </o:OfficeDocumentSettings>       </xml>     <![endif]-->   </head>   <body bgcolor="#f7f5f5" style="margin: 0px; padding: 0px">     <table       bgcolor="#f7f5f5"       border="0"       cellpadding="0"       cellspacing="0"       width="100%"     >       <tbody>         <tr>           <td align="center">             <table               align="center"               bgcolor="#ffffff"               border="0"               cellpadding="0"               cellspacing="0"               class="em_main_table"               style="table-layout: fixed; width: 700px"               width="700"             >' +
>>>>>>> c5fdd44ad98066cc1ba868f012668f6791f396ce
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
      newItem.component = <Paragraph text="<p>Lorem Ipsum</p>"/>;
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
    } else if (blockName == "Standard Header") {
      newItem.component = <StandardHeader color="teal" />;
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
    console.log(event);
    event.persist();
    setFormProps((formProps) => ({
      ...formProps,
      [event.target.name]: event.target.value,
    }));
  };

  const handleTinyMCE = (value, name) => {
    setFormProps((formProps) => ({
      ...formProps,
      [name]: value,
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
            <Editor
            apiKey="vxzm27e0040c8l1dlo5x5m7z3m9rgvfw8s1b1n3eev9eqciv"
            name={item[0]}
            initialValue={tempFormProps[item[0]]}
            init={{
              height: 300,
              menubar: false,
              branding:false,
              plugins:  'link lists',
              toolbar: [
                { name: 'history', items: [ 'undo', 'redo' ] },
                { name: 'styles', items: [ 'styles' ] },
                { name: 'lists', items: [ 'numlist', 'bullist' ] },
                { name: 'indentation', items: [ 'outdent', 'indent' ] },
                {name: 'link', items: ['link']},
              ]
            }}
            onEditorChange={(value) => handleTinyMCE(value, item[0])}
            />
            // <textarea
            //   name={item[0]}
            //   type={item[1]}
            //   rows="10"
            //   defaultValue={tempFormProps[item[0]]}
            //   value={formProps[i]}
            //   onChange={handleInputChange}
            // />
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
                <option value="annoucement">Announcement</option>
                <option value="holidays">Holidays</option>
                <option value="newairline">New Airline</option>
                <option value="scheduled">Scheduled</option>
              </select>
            ) : (
              ""
            )
          ) : (
            ""
          )}
          {/* Style of Button */}
          {item[1] === "select" ? (
            item[0] === "buttonStyle" ? (
              <select
                name={item[0]}
                defaultValue={tempFormProps[item[0]]}
                value={formProps[i]}
                onChange={handleInputChange}
              >
                <option value="solidBtn">Solid</option>
                <option value="outlineBtn">Outline</option>
              </select>
            ) : (
              ""
            )
          ) : (
            ""
          )}

          {item[1] === "select" ? (
            item[0] === "jumbobackground" ? (
              <select
                name={item[0]}
                defaultValue={tempFormProps[item[0]]}
                value={formProps[i]}
                onChange={handleInputChange}
              >
                <option value="https://www2.arccorp.com/globalassets/email-parts/header/header-012x.jpg">
                  1
                </option>
                <option value="https://www2.arccorp.com/globalassets/email-parts/header/header-022x.jpg">
                  2
                </option>
                <option value="https://www2.arccorp.com/globalassets/email-parts/header/header-032x.jpg">
                  3
                </option>
                <option value="https://www2.arccorp.com/globalassets/email-parts/header/header-042x.jpg">
                  4
                </option>
              </select>
            ) : (
              ""
            )
          ) : (
            ""
          )}
          {console.log("Item 1: " + item[1] + "Item 0: " + item[0])}
          {item[1] === "select" ? 
          (
              item[0] === "position" ?
            <select
              name={item[0]}
              defaultValue={tempFormProps[item[0]]}
              value={formProps[i]}
              onChange={handleInputChange}
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select> : 
              item[0] === "heading" ?
            <select
              name={item[0]}
              defaultValue={tempFormProps[item[0]]}
              value={formProps[i]}
              onChange={handleInputChange}
            >
              <option value="h1">H1</option>
              <option value="h2">H2</option>
              <option value="h3">H3</option>
            </select> : ""
          ): ""}
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
                  color: "#ffffff",
                  padding: "0px 30px 15px",
                }}
              >
                <h2 style={{
                    color: "#fff",
                    fontFamily:
                      "SourceSansPro-Bold, SourceSansPro-Regular, arial, helvetica, sans-serif",
                  }}>Settings View</h2>
                <div style={{margin: "0 30px", justifyContent:"center"}}>
                <p style={{color:"#fff"}}>Choose a template</p>
                <select name="template" value={templateSelection} onChange={getTemplate}>
                  <option>-- Choose a template --</option>
                  <option value="tac-template">TAC</option>
                  <option value="other-template">Option 2</option>
                  <option value="template-3">Option 3</option>
                </select>
                </div>
                <ViewToggle onClick={toggleView} toggled={!isToggled} />
              </div>
            </div>
          </div>
          <div className="col-lg-8" style={{backgroundColor: "#f7f5f5"}}>
            <div style={{margin: "0 auto", maxWidth: isToggled ? "450px": "100%"}}>
              <iframe
                style={{ width: "100%", minHeight: "100vh", border: "none" }}
                srcDoc={markup}
              ></iframe>
            </div>
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
