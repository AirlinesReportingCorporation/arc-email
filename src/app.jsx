import React, {
  useState,
  useMemo,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { serialize, deserialize } from "react-serialize";
import jsxToString from "jsx-to-string";

import ReactModal from "react-modal";
import Modal from "react-bootstrap/Modal";
import Button from "../components/Button";
import Header from "../components/Header";
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
import TealHeader from "../components/TealHeader";
import AddressSection from "../components/AddressSection";
import AeroImage from "../components/AeroImage";

var componentsMap = {
  AddressSection: AddressSection,
  AerogramLogo: AerogramLogo,
  AeroImage: AeroImage,
  ARCFooter: ARCFooter,
  ARCLogo: ARCLogo,
  Button: Button,
  Header: Header,
  Image: Image,
  Spacer: Spacer,
  StandardHeader: StandardHeader,
  TACLink: TACLink,
  TACJumbo: TACJumbo,
  TACBottom: TACBottom,
  TealHeader: TealHeader,
  TextBlock: TextBlock,
  Webinar: Webinar,
  Twocolumn: Twocolumn,
};

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
      props: [
        ["text", "text"],
        ["position", "select"],
        ["heading", "select"],
      ], //name, input
    },
    {
      name: "Text Block",
      icon: <i className="fas fa-paragraph"></i>,
      component: <TextBlock />,
      props: [
        ["text", "textarea"],
        ["padding", "select"],
      ],
    },
    {
      name: "Button",
      icon: <i className="fas fa-square"></i>,
      component: <Button />,
      props: [
        ["text", "text"],
        ["link", "text"],
        ["buttonwidth", "select"],
        ["buttonStyle", "select"],
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
    // {
    //   name: "ARC Logo Header",
    //   icon: (
    //     <img
    //       src="https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-l-teal.png"
    //       width="64"
    //     />
    //   ),
    //   component: <ARCLogo />,
    //   props: [
    //     ["link", "text"],
    //     ["color", "select"],
    //   ],
    // },
    {
      name: "Spacer",
      icon: <i className="far fa-square"></i>,
      component: <Spacer />,
      props: [["height", "text"]],
    },
    // {
    //   name: "TAC Jumbo",
    //   icon: <i className="far fa-square"></i>,
    //   component: <TACJumbo />,
    //   props: [
    //     ["jumbobackground", "select"],
    //     ["title", "text"],
    //     ["date", "text"],
    //   ],
    // },
    // {
    //   name: "TAC Link",
    //   icon: <i className="far fa-newspaper"></i>,
    //   component: <TACLink />,
    //   props: [
    //     ["icon", "select"],
    //     ["title", "text"],
    //     ["link", "text"],
    //     ["cta", "text"],
    //   ],
    // },
    // {
    //   name: "TAC Bottom",
    //   icon: <i className="far fa-newspaper"></i>,
    //   component: <TACLink />,
    //   props: [
    //     ["TIP_Title", "text"],
    //     ["TIP_Text", "text"],
    //     ["TIP_Link", "text"],
    //     ["Training_Title", "text"],
    //     ["Training_Text", "text"],
    //     ["Training_Link", "text"],
    //   ],
    // },
    // {
    //   name: "Standard Header",
    //   icon: <i className="far fa-newspaper"></i>,
    //   component: <StandardHeader />,
    //   props: [["color", "select"]],
    // },
    // {
    //   name: "Teal Header",
    //   icon: <i className="far fa-newspaper"></i>,
    //   component: <TealHeader />,
    //   props: [["link", "text"]],
    // },
    // {
    //   name: "Address Footer",
    //   icon: <i className="far fa-newspaper"></i>,
    //   component: <AddressSection />,
    //   props: [["color", "select"]],
    // },
    // {
    //   name: "Aerogram Header",
    //   icon: (
    //     <img src="https://www2.arccorp.com/globalassets/email/aerogram-logo.jpg"></img>
    //   ),
    //   component: <AerogramLogo />,
    //   props: [],
    // },
    // {
    //   name: "Aerogram Image",
    //   icon: <i className="far fa-image" />,
    //   component: <AeroImage />,
    //   props: [],
    // },
    {
      name: "Image",
      icon: <i className="far fa-image" />,
      component: <Image />,
      props: [
        ["height", "select"],
        ["link", "text"],
        ["ctaLink", "text"],
      ],
    },
    // {
    //   name: "Webinar",
    //   icon: <i className="far fa-image" />,
    //   component: <Webinar />,
    //   props: [
    //     ["title", "text"],
    //     ["date", "text"],
    //     ["time", "text"],
    //     ["body", "textarea"],
    //     ["link_copy", "text"],
    //     ["link", "text"],
    //   ],
    // },
  ];

  const [activeForm, setActiveForm] = useState();

  const [items, setItems] = useLocalStorage(
    "tempTemplateBoard",
    emailTemplates[0].template
  );

  const [templateSelection, setTemplateSelection] = useState("");
  const [footerSelection, setFooterSelection] = useState("long");

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
          if (selectedTemplate == "board-template") {
            setFooterSelection("long");
          }
          break;
        }
      }
    }
  };

  const changeFooter = (event) => {
    setFooterSelection(event.target.value);
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
    }

    //console.log(sensors);

    setMarkup(
      '<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html   xmlns="http://www.w3.org/1999/xhtml"   xmlns:o="urn:schemas-microsoft-com:office:office"   xmlns:v="urn:schemas-microsoft-com:vml" >   <head>     <title>ARC</title>     <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />     <meta http-equiv="X-UA-Compatible" content="IE=edge" />     <meta name="viewport" content="width=device-width, initial-scale=1.0 " />     <meta name="format-detection" content="telephone=no" />     <link       href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900"       rel="stylesheet"     />     <style type="text/css">       body {         margin: 0 !important;         padding: 0 !important;         -webkit-text-size-adjust: 100% !important;         -ms-text-size-adjust: 100% !important;         -webkit-font-smoothing: antialiased !important;       }       img {         border: 0 !important;         outline: none !important;       }       p {         Margin-bottom: 0; Margin: 0px;         padding: 0px !important;       }       table {         border-collapse: collapse;         mso-table-lspace: 0px;         mso-table-rspace: 0px;       }       td,       a,       span {         border-collapse: collapse;         mso-line-height-rule: exactly;       }       .ExternalClass * {         line-height: 100%;       }       .em_defaultlink a {         color: inherit !important;         text-decoration: none !important;       }       span.MsoHyperlink {         mso-style-priority: 99;         color: inherit;       }       span.MsoHyperlinkFollowed {         mso-style-priority: 99;         color: inherit;       }       @media only screen and (min-width: 481px) and (max-width: 699px) {         .title_center {           text-align: center;         }         .em_main_table {           width: 100% !important;         }         .em_wrapper {           width: 100% !important;         }         .em_aside {           padding: 0px 20px !important;         }         .em_hide {           display: none !important;         }         .em_full_img img {           width: 100% !important;           height: auto !important;           max-width: none !important;         }         .em_align_cent {           text-align: center !important;         }         .em_height {           height: 20px !important;           font-size: 1px !important;           line-height: 1px !important;         }         .em_pad_top {           padding-top: 20px !important;         }         .em_spacer {           width: 10px !important;         }         .em_pad_bottom {           padding-bottom: 20px !important;         }         .em_hauto {           height: auto !important;         }         span[class="em_divhide"] {           display: none !important;         }       }       @media only screen and (max-width: 480px) {         .title_center {           text-align: center;         }         .address_item {           text-align: center;           display: block;         }         .em_main_table {           width: 100% !important;         }         .em_wrapper {           width: 100% !important;         }         .em_aside {           padding: 0px 20px !important;         }         .em_hide {           display: none !important;         }         .em_full_img img {           width: 100% !important;           height: auto !important;           max-width: none !important;         }         .icon-center {           text-align: center;           text-align: -webkit-center;         }         .icon-center img {           padding-bottom: 10px;         }         .em_align_cent {           text-align: center !important;         }         .em_height {           height: 20px !important;           font-size: 1px !important;           line-height: 1px !important;         }         .em_pad_top {           padding-top: 20px !important;         }         .em_spacer {           width: 10px !important;         }         .em_pad_bottom {           padding-bottom: 20px !important;         }         .em_hauto {           height: auto !important;         }         span[class="em_divhide"] {           display: none !important;         }       }       a[x-apple-data-detectors] {  color: #77d6fc !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; } u + #body a { color: #77d6fc !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; } </style>  <!--[if gte mso 9]>       <xml>         <o:OfficeDocumentSettings>           <o:AllowPNG />           <o:PixelsPerInch>96</o:PixelsPerInch>         </o:OfficeDocumentSettings>       </xml>     <![endif]-->   </head>   <body bgcolor="#f7f5f5" style="margin: 0px; padding: 0px">     <table       bgcolor="#f7f5f5"       border="0"       cellpadding="0"       cellspacing="0"       width="100%"     >       <tbody>         <tr>           <td align="center">             <table               align="center"               bgcolor="#ffffff"               border="0"               cellpadding="0"               cellspacing="0"               class="em_main_table"               style="table-layout: fixed; width: 700px"               width="700"             >' +
        ReactDOMServer.renderToStaticMarkup(email) +
        '</table> </td> </tr> <tr> <td align="center"> <table align="center" bgcolor="#f7f5f5" border="0" cellpadding="0" cellspacing="0" class="em_main_table" style="table-layout: fixed; width: 700px" width="700" > <tbody>' +
        ReactDOMServer.renderToStaticMarkup(
          <ARCFooter footer={footerSelection} />
        ) +
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

  const emlExport = () => {
    var emlContent = "data:message/rfc822 eml;charset=utf-8,";
    emlContent += "To: " + "test@test.com" + "\n";
    emlContent += "Subject: " + "" + "\n";
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
    emlContent += "Subject: " + "" + "\n";
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

    if (blockName == "Header") {
      newItem.componentSave = ["Header", {}];
    } else if (blockName == "Button") {
      newItem.componentSave = ["Button", { text: "Learn More" }];
    } else if (blockName == "Twocolumn") {
      newItem.componentSave = [
        "Twocolumn",
        {
          text: "<p>Lorem Ipsum</p>",
          text2:
            "<h2>Board Director News</h2><p>We are pleased to formally announce the appointment of Rob Brown, Managing Director, B2B Strategy & Services, Southwest Airlines, to ARC’s Board. Rob brings a wealth of industry experience across key areas within the Board’s purview–strategy, risk, and operational oversight.<br/>Welcome Rob!  </p>",
        },
      ];
    } else if (blockName == "Text Block") {
      newItem.componentSave = [
        "TextBlock",
        { text: "<p>Lorem Ipsum</p>", padding: "25px" },
      ];
    } else if (blockName == "ARC Logo Header") {
      newItem.componentSave = ["ARCLogo", { color: "teal" }];
    } else if (blockName == "Spacer") {
      newItem.componentSave = ["Spacer", { height: "60px" }];
    } else if (blockName == "TAC Jumbo") {
      newItem.componentSave = [
        "TACJumbo",
        { title: "<p>Travel Agent Communcations</p>", date: "01/01/2024" },
      ];
    } else if (blockName == "TAC Link") {
      newItem.componentSave = ["TACLink", {}];
    } else if (blockName == "TAC Bottom") {
      newItem.componentSave = ["TACBottom", {}];
    } else if (blockName == "Standard Header") {
      newItem.componentSave = ["StandardHeader", { color: "teal" }];
    } else if (blockName == "Address Footer") {
      newItem.componentSave = ["AddressSection", { color: "teal" }];
    } else if (blockName == "Aerogram Header") {
      newItem.componentSave = ["AerogramLogo", {}];
    } else if (blockName == "Aerogram Image") {
      newItem.componentSave = ["AeroImage", {}];
    } else if (blockName == "Image") {
      newItem.componentSave = ["Image", { height: "400" }];
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
            <>
              <p>
                To add an image, drag from a folder on you computer into the
                text area below.
              </p>
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
                    { name: "styles", items: ["styles", "fontsize"] },
                    { name: "lists", items: ["numlist", "bullist"] },
                    { name: "indentation", items: ["outdent", "indent"] },
                    { name: "link", items: ["link"] },
                    { name: "image", items: ["image"] },
                  ],
                  font_size_formats: "8px 10px 12px 16px 14px 18px 24px 36px",
                  images_upload_url: "",
                  paste_preprocess: function(plugin, args) {
                    console.log(args.content);
                    var str = args.content.replace(/<p>/g, "").replace(/<\/p>/g, "<br/>");
                    console.log(str);
                    args.content = str;
                  },
                  force_br_newlines: true,
                  force_p_newlines: false,
                  convert_newlines_to_brs : true,
                  newline_behavior: "linebreak",
                  
                }}
                onEditorChange={(value) => handleTinyMCE(value, item[0])}
              />
            </>
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
            item[0] === "padding" ? (
              <select
                name={item[0]}
                defaultValue={tempFormProps[item[0]]}
                value={formProps[i]}
                onChange={handleInputChange}
              >
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
            item[0] === "buttonwidth" ? (
              <select
                name={item[0]}
                defaultValue={tempFormProps[item[0]]}
                value={formProps[i]}
                onChange={handleInputChange}
              >
                <option value="130px">Small</option>
                <option value="230px">Medium</option>
                <option value="330px">Large</option>
                <option value="430px">XL</option>
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
                <div class="arc-email-sidebar-instructions">
                  <h2>Email Parts</h2>
                  This area contains all the parts of your email.{" "}
                  <ul>
                    <li>
                      Click the <strong>pencil</strong> icon next to each part
                      to edit its contents.{" "}
                    </li>
                    <li>
                      <strong>Hover</strong> over a section to reveal a{" "}
                      <strong>+</strong> icon to add new parts to the email.
                      Click the icon to add it in that location.{" "}
                    </li>
                    <li>
                      Click and drag the handle the left of the part to move the
                      part around in the email.
                    </li>
                  </ul>
                </div>
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

                <div class="arc-email-sidebar-instructions mt-3">
                  <h3>Download Email</h3>
                  <p>
                    Download your email by click the download button in the
                    sidebar to the left.
                  </p>
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

                <p>
                  If you are using a Windows computer with Outlook, download the
                  email template using the link below.
                </p>
                <btn class="ctaBtn emlExportBtn" onClick={oftExport}>
                  Export for Windows
                </btn>

                <p>
                  If you are using a Mac computer with Outlook, download the
                  email template using the link below.
                </p>
                <btn class="ctaBtn emlExportBtn" onClick={emlExport}>
                  Export for Mac
                </btn>

                <h3>Sending the Email</h3>
                <p>
                  Click the file you downloaded, and it will open your email
                  within Outlook to send.
                </p>
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
                <div style={{ margin: "0 30px", justifyContent: "center" }}>
                  <p style={{ color: "#fff" }}>Choose a template</p>
                  <select
                    name="template"
                    value={templateSelection}
                    onChange={getTemplate}
                  >
                    <option>-- Choose a template --</option>
                    <option value="board-template">Board</option>
                  </select>
                </div>
                <div style={{ margin: "0 30px", justifyContent: "center" }}>
                  <p style={{ color: "#fff" }}>Change Footer Length</p>
                  <select
                    name="footer"
                    value={footerSelection}
                    onChange={changeFooter}
                  >
                    <option value="short">Short</option>
                    <option value="long">Long</option>
                    <option value="aerogram">Aerogram</option>
                  </select>
                </div>
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
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>

        <div className="modal-body">
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
              <i class="fa fa-times" aria-hidden="true"></i>
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
