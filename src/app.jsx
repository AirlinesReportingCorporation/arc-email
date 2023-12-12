import React, {
  useState,
  useMemo,
  useEffect,
  useRef,
  useCallback,
} from "react";

import ReactModal from "react-modal";
import Button from "../components/Button";
import TextBlock from "../components/TextBlock";
import ARCLogo from "../components/ARCLogo";
import Spacer from "../components/Spacer";
import TACJumbo from "../components/TACJumbo";
import TACLink from "../components/TACLink";
import ARCFooter from "../components/ARCFooter";
import TACBottom from "../components/TACBottom";
import { Editor } from "@tinymce/tinymce-react";
import AerogramLogo from "../components/AerogramLogo";
import Image from "../components/Image";
import Webinar from "../components/Webinar";
import Twocolumn from "../components/Twocolumn";
import HTML from "../components/HTML";

import emailTemplates from "./templates";

import { ViewToggle } from "../components/ViewToggle";
import StandardHeader from "../components/StandardHeader";

import { useLocalStorage } from "../components/useLocalStorage";

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
import AddressSection from "../components/AddressSection";
import AeroImage from "../components/AeroImage";

var componentsMap = {
  AddressSection: AddressSection,
  AerogramLogo: AerogramLogo,
  AeroImage: AeroImage,
  ARCFooter: ARCFooter,
  ARCLogo: ARCLogo,
  Button: Button,
  Image: Image,
  Spacer: Spacer,
  StandardHeader: StandardHeader,
  TACLink: TACLink,
  TACJumbo: TACJumbo,
  TACBottom: TACBottom,
  TextBlock: TextBlock,
  Webinar: Webinar,
  Twocolumn: Twocolumn,
  HTML: HTML,
};

function alertMe(items, activeAdd) {
  console.log(items, activeAdd);
  alert("You've deleted " + items[activeAdd].name);
}

function App() {
  var blockPreviews = [
    {
      name: "Text Block",
      icon: <i className="fas fa-paragraph"></i>,
      component: <TextBlock />,
      props: [
        ["text", "textarea"],
        ["padding", "select"],
        ["color", "select"],
      ],
    },
    {
      name: "Button",
      icon: <i className="fas fa-square"></i>,
      component: <Button />,
      props: [
        ["text", "text"],
        ["link", "text"],
        ["buttonStyle", "select"],
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
      icon: <i className="far fa-square"></i>,
      component: <Spacer />,
      props: [
        ["height", "text"],
        ["color", "select"],
      ],
    },
    {
      name: "TAC Jumbo",
      icon: <i className="far fa-square"></i>,
      component: <TACJumbo />,
      props: [
        ["jumbobackground", "select"],
        ["title", "text"],
        ["date", "text"],
      ],
    },
    {
      name: "TAC Link",
      icon: <i className="far fa-newspaper"></i>,
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
      icon: <i className="far fa-newspaper"></i>,
      component: <TACBottom />,
      props: [
        ["TIP_Title", "text"],
        ["TIP_Text", "text"],
        ["TIP_Link", "text"],
        ["Training_Title", "text"],
        ["Training_Text", "text"],
        ["Training_Link", "text"],
        ["Fraud_Title", "text"],
        ["Fraud_Text", "text"],
        ["Fraud_Link", "text"],
      ],
    },
    {
      name: "Standard Header",
      icon: <i className="far fa-newspaper"></i>,
      component: <StandardHeader />,
      props: [["color", "select"]],
    },
    {
      name: "Address Footer",
      icon: <i className="far fa-newspaper"></i>,
      component: <AddressSection />,
      props: [["color", "select"]],
    },
    {
      name: "Aerogram Header",
      icon: (
        <img src="https://www2.arccorp.com/globalassets/email/aerogram-logo.jpg"></img>
      ),
      component: <AerogramLogo />,
      props: [],
    },
    {
      name: "Aerogram Image",
      icon: <i className="far fa-image" />,
      component: <AeroImage />,
      props: [],
    },
    {
      name: "Image",
      icon: <i className="far fa-image" />,
      component: <Image />,
      props: [
        ["height", "select"],
        ["link", "text"],
        ["ctaLink", "text"],
        ["color", "select"],
        ["padding", "select"],
        ["width", "text"],
      ],
    },
    {
      name: "Webinar",
      icon: <i className="far fa-image" />,
      component: <Webinar />,
      props: [
        ["title", "text"],
        ["date", "text"],
        ["time", "text"],
        ["body", "textarea"],
        ["link_copy", "text"],
        ["link", "text"],
      ],
    },
    {
      name: "Twocolumn",
      icon: <i className="fas fa-square"></i>,
      component: <Twocolumn />,
      props: [
        ["text", "textarea"],
        ["text2", "textarea"],
      ],
    },
    {
      name: "HTML",
      icon: <i className="fas fa-paragraph"></i>,
      component: <HTML />,
      props: [
        ["data", "textarea"],
        ["align", "select"],
      ],
    },
  ];

  const [activeForm, setActiveForm] = useState();

  const [items, setItems] = useLocalStorage(
    "tempTemplate",
    emailTemplates[0].template
  );

  const [footer, setFooter] = useLocalStorage("tempFooter", "short");
  const [unsub, setUnsub] = useLocalStorage("tempUnsub", "false");

  const [templateSelection, setTemplateSelection] = useState("");
  const [footerSelection, setFooterSelection] = useState("");
  const [unsubSelection, setUnsubSelection] = useState("");

  const getTemplate = (event) => {
    var prevTemplateSelection = templateSelection;
    var selectedTemplate = event.target.value;
    console.log(emailTemplates);
    var choice = confirm(
      "Do you want to continue? Any changes will not be saved"
    );
    if (choice == false) {
      event.preventDefault();
      setTemplateSelection(prevTemplateSelection);
    } else {
      for (let i = 0; i < emailTemplates.length; i++) {
        const element = emailTemplates[i];
        if (element.id === selectedTemplate) {
          console.log(element.template);
          setItems(element.template);
          setTemplateSelection(element.id);
          console.log(element);
          console.log(element.footer);
          setFooter(element.footer);
          setFooterSelection(element.footer);
          break;
        }
      }
    }
  };

  const changeFooter = (event) => {
    setFooter(event.target.value);
    setFooterSelection(event.target.value);
    console.log(event.target.value);
  };

  const changeUnsub = (event) => {
    setUnsub(event.target.value);
    setUnsubSelection(event.target.value);
    console.log(event.target.value);
  };

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
  const [emlIndex, setemlIndex] = useState(0);

  const email = items
    ? items.map((item, i) => <div key={item.id}>{item.id}</div>)
    : "";

  //useEffect is for functions that need to run on every render
  useEffect(() => {
    var email = "";

    if (items) {
      email = items.map((item) =>
        React.createElement(
          componentsMap[item.componentSave[0]],
          item.componentSave[1]
        )
      );
      if (footer) {
        setFooterSelection(footer);
      }
      if (unsub) {
        setUnsubSelection(unsub);
      }
    }

    //console.log(sensors);

    setMarkup(
      '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html xmlns="http://www.w3.org/1999/xhtml"> <head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> <title>Season\'s Greetings</title> <style type="text/css"> <!-- a { text-decoration: none; } a:link { text-decoration: none; font-weight: strong; color: #189BB0; } a:visited { text-decoration: none; color: #189BB0; } a:hover { color: #189BB0; text-decoration: none; } a:active { color: #189BB0; } a img { border: none; } body { background-color: #CCC; margin-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; } h1 { font-family: Arial, Helvetica, sans-serif; font-size: 18px; color: #333132; font-weight: bold; text-align: left; line-height: 24px; vertical-align: 12%; } h2 { font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #333132; font-weight: normal; line-height: 22px; padding-left: 0px; padding-right: 0px; } p { font-family: Arial, Helvetica, sans-serif; font-size: 12px; line-height: 20px; color: #333132; font-weight: normal; } h4 { font-family: Arial, Helvetica, sans-serif; font-size: 10px; font-weight: normal; color: #333132; line-height: 14px; letter-spacing: 2px; text-transform: uppercase; } .hr { color: #999; } h3 { font-family: Arial, Helvetica, sans-serif; font-size: 11px; font-weight: normal; color: #333132; font-style: normal; line-height: 15px; } ul { list-style-type: circle; color: #333132; font-size: 13px; font-family: Arial, Helvetica, sans-serif; font-style: italic; padding-left: 55px; line-height: 18px; } h5 { font-family: Arial, Helvetica, sans-serif; font-size: 9px; color: #333132; line-height: 12px; font-weight: normal; } .terms { font-size: 9px; text-decoration: underline; } ol { font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #333132; line-height: 18px; font-weight: bold; } --> </style> </head><body> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="center" style="border-collapse: collapse; font: 11px Verdana, Arial, Helvetica, sans-serif; padding-bottom: 10px;"><table width="570" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="470" align="center" valign="top" bgcolor="#CCCCCC"><table bgcolor="#ffffff" style="background: #ffffff" width="599" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="center" valign="top" style="border-collapse: collapse;"><img src="https://www2.arccorp.com/globalassets/email/Holiday23-OFT-Header.jpg" alt="Seasons Greetings from ARC" width="602" style="display:block; width: 602""  title="Seasons Greetings from ARC" /></td> </tr> <tr> <td height="100" align="center" valign="top" bgcolor="#FFFFFF"> <table width="87%" border="0" cellspacing="30" cellpadding="0"> <tr> <td height="40" align="left" valign="top"><p style="font-family: Arial, Helvetica, sans-serif; font-size:16px; color: #333132; line-height:1.5;"><strong>One of the real joys of the holiday season is the opportunity to say thank you and to wish you the very best for the New Year.</strong><br/><br/>Body Content - Replace this text with your text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dapibus. Nunc elementum convallis erat. Curabitur sit amet est vel est iaculis porta. Aliquam rhoncus. Sed ut felis.<br/><br/>Thanks,<br/><br/>Name<br/>Position</p></td> </tr> </table> </td> </tr>  <tr> <td align="center" valign="top" bgcolor="#FFFFFF"><table width="100%" border="0" cellspacing="0" cellpadding="0">  <tr> <td align="center" valign="top"><p><a href="http://www.arccorp.com" target="_blank"><img src="https://www2.arccorp.com/globalassets/email/bottom-arc-logo-2.png" alt="ARC" width="600" height="70" /></a></p> </td> </tr> <tr> <td align="center" valign="middle" style="background-color: #006879" bgcolor="#006879;">&nbsp;</td> </tr> <tr> <td align="center" valign="middle" bgcolor="#CCCCCC"><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td class="em_height" align="left" valign="top" width="100%" height="20" style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;mso-line-height-rule:exactly;line-height:20px">&nbsp;</td></tr><tr><td align="center"><table role="presentation" border="0" cellpadding="0" cellspacing="0" style="text-align:center;width:160px;height:25px;margin-left:auto;margin-right:auto" width="160" height="25"><tbody><tr><td class="em_height" style="height:20">&nbsp;</td></tr><tr><td align="center" valign="top" style="text-align:center"><a href="https://www.linkedin.com/company/arc" style="text-decoration:none" target="_blank"><img alt="IN" height="25" name="in4.png" src="https://www2.arccorp.com/globalassets/email-parts/icons/linkedin_logo.png" style="display:block;border:none;font-family:Arial, sans-serif;font-size:12px;line-height:18px;color:#000000" title="IN" width="25"></a></td><td width="5"><img alt="" height="1" name="Cont_0" src="https://www2.arccorp.com/globalassets/email/spacer.gif" style="display:block;border:none" width="1"></td><td align="center" valign="top"><a href="https://twitter.com/ARCtalk" style="text-decoration:none" target="_blank" xt="SPCLICK"><img height="25" name="tw5.png" src="https://www2.arccorp.com/globalassets/email-parts/icons/twitter_logo.png" style="display:block;border:none;font-family:Arial, sans-serif;font-size:12px;line-height:18px;color:#000000" width="25"></a></td><td width="5"><img alt="" height="1" name="Cont_0" src="https://www2.arccorp.com/globalassets/email/spacer.gif" style="display:block;border:none" width="1"></td><td align="center" valign="top"><a href="https://www.facebook.com/ARCtalk" style="text-decoration:none" target="_blank" xt="SPCLICK"><img height="25" name="fb3.png" src="https://www2.arccorp.com/globalassets/email-parts/icons/facebook_logo.png" style="display:block;border:none;font-family:Arial, sans-serif;font-size:12px;line-height:18px;color:#000000" title="FB" width="25"></a></td><td width="5"><img alt="" height="1" name="Cont_0" src="https://www2.arccorp.com/globalassets/email/spacer.gif" style="display:block;border:none" width="1"></td><td align="center" valign="top"><a href="https://www.youtube.com/channel/UCWHZsoCDNhjorop892EVETw/" name="youtube_social" style="text-decoration:none" target="_blank" xt="SPCLICK"><img alt="YouTube" height="25" name="youtube4.png" src="https://www2.arccorp.com/globalassets/email-parts/icons/youtube_logo.png" style="display:block;border:none;font-family:Arial, sans-serif;font-size:12px;line-height:18px;color:#000000" title="YouTube" width="25"></a></td></tr><tr><td class="em_height" style="height:10">&nbsp;</td></tr></tbody></table></td></tr><tr><td><table><tbody><tr><td align="center" style="font-family:Arial, sans-serif;font-size:11px;color:#a2a3a5;line-height:14px;width:650px" valign="top"><br><br></td></tr><tr><td align="center" style="font-family:Arial, sans-serif;font-size:11px;color:#a2a3a5;line-height:14px" valign="top">ARC&nbsp;&nbsp;&nbsp;&nbsp;3000 Wilson Blvd., Suite 300&nbsp;&nbsp;&nbsp;&nbsp;Arlington, VA 22201&nbsp;&nbsp;&nbsp;&nbsp;USA&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.arccorp.com" name="www_arccorp_com" style="color:#189bb0;text-decoration:none" xt="SPCLICK"><strong>www.arccorp.com</strong></a></td></tr><tr><td align="center" style="font-family:Arial, sans-serif;font-size:11px;color:#a2a3a5;line-height:14px" valign="top"><br>© Airlines Reporting Corporation (ARC). All rights reserved.</td></tr></tbody></table></td></tr></tbody></table></td> </tr> </table></td> </tr> </table></td> </tr> </table> </td> </tr> </table></map> </body> </html>'
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

  const emlExport = () => {
    var emlContent = "data:message/rfc822 eml;charset=utf-8,";
    emlContent += "To: " + "test@test.com" + "\n";
    emlContent += "Subject: Season's Greetings" + "" + "\n";
    emlContent += "X-Unsent: 1" + "\n";
    emlContent += "Content-Type: text/html;charset=utf-8" + "\n";
    emlContent += "" + "\n";
    emlContent += markup.replace(/\n/g, "");

    console.log(emlContent);

    var textFile = {};
    var data = new Blob([emlContent], { type: "text/html" });
    textFile = window.URL.createObjectURL(data);

    var encodedUri = textFile; //encode spaces etc like a url
    console.log(encodedUri);
    var a = document.createElement("a"); //make a link in document
    var linkText = document.createTextNode("fileLink");
    a.appendChild(linkText);
    a.href = encodedUri;
    a.id = "fileLink" + emlIndex;
    a.download = "emailTemplate.emltpl";
    a.style = "display:none;"; //hidden link

    //console.log(encodedUri);

    document.getElementById("app").appendChild(a);
    document.getElementById("fileLink" + emlIndex).click(); //click the link
    setemlIndex(emlIndex + 1);
  };

  const oftExport = () => {
    var emlContent = "data:message/rfc822 eml;charset=utf-8,";
    emlContent += "To: " + "test@test.com" + "\n";
    emlContent += "Subject: Season's Greetings" + "" + "\n";
    emlContent += "X-Unsent: 1" + "\n";
    emlContent += "Content-Type: text/html;charset=utf-8" + "\n";
    emlContent += "" + "\n";
    emlContent += markup.replace(/\n/g, "");

    console.log(emlContent);

    var textFile = {};
    var data = new Blob([emlContent], { type: "text/html" });
    textFile = window.URL.createObjectURL(data);

    var encodedUri = textFile; //encode spaces etc like a url
    console.log(encodedUri);
    var a = document.createElement("a"); //make a link in document
    var linkText = document.createTextNode("fileLink");
    a.appendChild(linkText);
    a.href = encodedUri;
    a.id = "fileLink" + emlIndex;
    a.download = "emailTemplate.eml";
    a.style = "display:none;"; //hidden link

    //console.log(encodedUri);

    document.getElementById("app").appendChild(a);
    document.getElementById("fileLink" + emlIndex).click(); //click the link
    setemlIndex(emlIndex + 1);
  };

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
      componentSave: "asdf",
    };

    if (blockName == "Button") {
      newItem.componentSave = ["Button", { text: "Learn More" }];
    } else if (blockName == "Text Block") {
      newItem.componentSave = [
        "TextBlock",
        {
          text: '<p style="text-align: left">Lorem Ipsum</p>',
          padding: "25px",
          color: "white",
        },
      ];
    } else if (blockName == "ARC Logo Header") {
      newItem.componentSave = ["ARCLogo", { color: "teal" }];
    } else if (blockName == "Spacer") {
      newItem.componentSave = ["Spacer", { height: "60px", color: "White" }];
    } else if (blockName == "TAC Jumbo") {
      newItem.componentSave = [
        "TACJumbo",
        { title: "<p>Travel Agent Communcations</p>", date: "01/01/2024" },
      ];
    } else if (blockName == "TAC Link") {
      newItem.componentSave = ["TACLink", {}];
    } else if (blockName == "TAC Bottom") {
      newItem.componentSave = [
        "TACBottom",
        {
          TIP_Title: "Tip of the Week",
          TIP_Text: "Lorem ipsum dolor sit amet consectetur",
          TIP_Link:
            "https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/",
          Training_Title: "Events and Trainings",
          Training_Text:
            "Stay up to date with the latest industry knowledge.",
          Training_Link: "https://www2.arccorp.com/about-us/events/",
          Fraud_Title: "Fraud Alert",
          Fraud_Text:
            "Cybercrime is on the Rise | Phishing Email Schemes Continue",
          Fraud_Link:
            "https://www2.arccorp.com/support-training/fraud-prevention/schemes/",
        },
      ];
    } else if (blockName == "Standard Header") {
      newItem.componentSave = ["StandardHeader", { color: "teal" }];
    } else if (blockName == "Address Footer") {
      newItem.componentSave = ["AddressSection", { color: "teal" }];
    } else if (blockName == "Aerogram Header") {
      newItem.componentSave = ["AerogramLogo", {}];
    } else if (blockName == "Aerogram Image") {
      newItem.componentSave = ["AeroImage", {}];
    } else if (blockName == "Image") {
      newItem.componentSave = ["Image", { height: "400", color: "white" }];
    } else if (blockName == "Webinar") {
      newItem.componentSave = [
        "Webinar",
        {
          title: "ARC Fraud Awareness Webinar:Travel Industry Fraud & Scams",
          date: "Mon, April 3",
          time: "3pm",
          link_copy: "",
          webinarLink: "www2.arccorp.com",
        },
      ];
    } else if (blockName == "Twocolumn") {
      newItem.componentSave = [
        "Twocolumn",
        {
          text: "<h2>Title 1</h2><p>Lorem Ipsum</p>",
          text2: "<h2>Title 1</h2><p>Lorem Ipsum</p>",
        },
      ];
    } else if (blockName == "HTML") {
      newItem.componentSave = [
        "HTML",
        {
          data: "<h2>Title 1</h2><p>Lorem Ipsum</p>",
        },
      ];
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
        console.log(element);
        tempFormProps[element] = items[activeIndex].componentSave[1][element];
      }
    }

    setFormProps(tempFormProps);

    setFormInputs(
      blockPreviews[
        blockPreviews.findIndex((x) => x.name === items[activeIndex].name)
      ].props.map((item, i) => (
        <>
          <label key={i}>{item[0]}</label>
          {console.log(item)}

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
            item[0] === "data" ? (
              <textarea name={item[0]} onChange={handleInputChange}>
                {tempFormProps[item[0]]}
              </textarea>
            ) : (
              <Editor
                apiKey="rxgjtgwy00je8q2vhiw6sczk5wa2ttcgnwsyp2i23bk81nah"
                name={item[0]}
                initialValue={tempFormProps[item[0]]}
                init={{
                  paste_auto_cleanup_on_paste: true,
                  paste_remove_styles: true,
                  paste_remove_styles_if_webkit: true,
                  paste_strip_class_attributes: "all",
                  forced_root_block: false,
                  style_formats: [
                    {
                      title: "Paragraph",
                      format: "p",
                      styles: { margin: "0" },
                    },
                    { title: "Heading 1", format: "h1" },
                    { title: "Heading 2", format: "h2" },
                    { title: "", }
                  ],
                  height: 300,
                  menubar: false,
                  branding: false,
                  plugins: "link lists image",
                  automatic_uploads: true,
                  file_picker_types: "file image media",
                  contextmenu:
                    "copy paste | link image inserttable | cell row column deletetable",
                  toolbar: [
                    { name: "history", items: ["undo", "redo"] },
                    { name: "styles", items: ["styles", "fontsize", "forecolor", "align", "lineheight"] },
                    { name: "lists", items: ["numlist", "bullist"] },
                    { name: "indentation", items: ["outdent", "indent"] },
                    { name: "link", items: ["link"] },
                    { name: "image", items: ["image"] },
                  ],
                  color_map: [
                    '2a2b2c', 'Black',
                    'DDDDDD', 'Gray',
                    'FFFFFF', 'White',
                    '189bb0', 'Teal',
                  ],
                  font_size_formats: "8px 10px 12px 16px 14px 18px 20px 24px 36px",
                  images_upload_url: "",
                  paste_preprocess: function (plugin, args) {
                    console.log(args.content);
                    var str = args.content
                      .replace(/<p>/g, "")
                      .replace(/<\/p>/g, "<br/>");
                    console.log(str);
                    args.content = str;
                  },
                  force_br_newlines: true,
                  force_p_newlines: false,
                  convert_newlines_to_brs: true,
                  newline_behavior: "linebreak",
                }}
                onEditorChange={(value) => handleTinyMCE(value, item[0])}
              />
            )
          ) : (
            // <textarea
            //   name={item[0]}
            //   type={item[1]}
            //   rows="10"
            //   defaultValue={tempFormProps[item[0]]}
            //   value={formProps[i]}
            //   onChange={handleInputChange}
            // />
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
                <option value="#29AFD8">Light Blue</option>
                <option value="#212A76">Dark Blue</option>
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
            item[0] === "align" ? (
              <select
                name={item[0]}
                defaultValue={tempFormProps[item[0]]}
                value={formProps[i]}
                onChange={handleInputChange}
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">right</option>
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
            item[0] === "padding" ? (
              <select
                name={item[0]}
                defaultValue={tempFormProps[item[0]]}
                value={formProps[i]}
                onChange={handleInputChange}
              >
                <option value="0">0</option>
                <option value="25px">25px</option>
                <option value="50px">50px</option>
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
          {item[1] === "select" ? (
            item[0] === "position" ? (
              <select
                name={item[0]}
                defaultValue={tempFormProps[item[0]]}
                value={formProps[i]}
                onChange={handleInputChange}
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
            ) : item[0] === "heading" ? (
              <select
                name={item[0]}
                defaultValue={tempFormProps[item[0]]}
                value={formProps[i]}
                onChange={handleInputChange}
              >
                <option value="h1">H1</option>
                <option value="h2">H2</option>
                <option value="h3">H3</option>
              </select>
            ) : (
              ""
            )
          ) : (
            ""
          )}
          {item[1] === "select" ? (
            item[0] === "height" ? (
              <select
                name={item[0]}
                defaultValue={tempFormProps[item[0]]}
                value={formProps[i]}
                onChange={handleInputChange}
              >
                <option value="400">400</option>
                <option value="268">268</option>
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

    console.log(tempItems);
    var updatedItem = {
      id: tempItems[activeAdd].id,
      name: tempItems[activeAdd].name,
      componentSave: [tempItems[activeAdd].componentSave[0], formProps],
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
    // console.log("deleteItems:" + tempItems);
    tempItems.splice(activeAdd, 1);
    // console.log(tempItems);

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
                <i className="fas fa-stream"></i>
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
                <i className="fas fa-download"></i>
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
                <i className="fas fa-cog"></i>
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
                        key={i}
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
                <br />
                <hr />
                <div style={{ margin: "0 30px", justifyContent: "center" }}>
                  <p style={{ color: "#fff" }}>Choose a template</p>
                  <select
                    name="template"
                    value={templateSelection}
                    onChange={getTemplate}
                  >
                    <option>-- Choose a template --</option>
                    <option value="tac-template">TAC</option>
                    <option value="operational">Operational</option>
                    <option value="aerogram">AeroGram</option>
                    <option value="webinar">Webinar</option>
                  </select>
                </div>
                <div style={{ margin: "0 30px", justifyContent: "center" }}>
                  <p style={{ color: "#fff" }}>Change Footer Type</p>
                  <select
                    name="footer"
                    value={footerSelection}
                    onChange={changeFooter}
                  >
                    <option value="short">Short</option>
                    <option value="long">Long</option>
                    <option value="aerogram">Aerogram</option>
                    <option value="operational">Operational</option>
                  </select>
                </div>
                <div style={{ margin: "0 30px", justifyContent: "center" }}>
                  <p style={{ color: "#fff" }}>Remove Footer Unsubscribe?</p>
                  <select
                    name="unsub"
                    value={unsubSelection}
                    onChange={changeUnsub}
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
              </div>
              <div
                className="arc-email-sidebar-download-container"
                style={{
                  display: activeView === "download" ? "block" : "none",
                }}
              >
                <h2>Download Code</h2>

                <h3>OUTLOOK TEMPLATE</h3>

                <p>Save this email to send through your Outlook email.</p>

                <btn className="ctaBtn emlExportBtn" onClick={oftExport}>
                  Windows: Export as Outlook Template
                </btn>

                <btn className="ctaBtn emlExportBtn" onClick={emlExport}>
                  Mac: Export as Outlook Template
                </btn>

                <h3>ACOUSTIC</h3>
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
                <h2
                  style={{
                    color: "#fff",
                    fontFamily:
                      "SourceSansPro-Bold, SourceSansPro-Regular, arial, helvetica, sans-serif",
                  }}
                >
                  Settings View
                </h2>
                <ViewToggle onClick={toggleView} toggled={!isToggled} />
              </div>
            </div>
          </div>
          <div className="col-lg-8" style={{ backgroundColor: "#f7f5f5" }}>
            <div
              style={{
                margin: "0 auto",
                maxWidth: isToggled ? "450px" : "100%",
              }}
            >
              <iframe
                style={{ width: "100%", minHeight: "100vh", border: "none" }}
                srcDoc={markup}
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <ReactModal isOpen={show} onRequestClose={handleClose}>
        <div className="modal-header">
          <div className="modal-title">Add Email Component</div>
          <div onClick={handleClose} className="modal-close text-right">
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>

        <div className="modal-body">
          <div className="row">
            {blockPreviews.map((block, i) => (
              <div key={i} className="col-lg-auto">
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
        </div>
      </ReactModal>

      <ReactModal isOpen={showModify} onRequestClose={handleCloseModify}>
        <form onSubmit={modifyItem}>
          <div className="modal-header">
            <div className="modal-title">
              Edit {items[activeAdd] ? items[activeAdd].name + " " : "Email "}
              Component
            </div>
            <div onClick={handleCloseModify} className="modal-close text-right">
              <i className="fa fa-times" aria-hidden="true"></i>
            </div>
          </div>

          <div className="modal-body">
            <div className="row">
              <div className="col-lg-12">{formInputs}</div>
            </div>
          </div>

          <div className="modal-footer">
            <a className="ctaBtn ctaBtn--close" onClick={deleteItem}>
              <i className="fas fa-trash-alt"></i>
            </a>
            <input type="submit" className="ctaBtn" value="Save Changes" />
          </div>
        </form>
      </ReactModal>
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
