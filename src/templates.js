const emailTemplates = [
  {
    name: "TAC",
    id: "tac-template2",
    template: [
      {
        id: "1",
        name: "ARC Logo Header",
        componentSave: ["ARCLogo", { link: "https://www2.arccorp.com" }],
      },
    ],
    footer: "long",
    backgroundColor: "#f5f5f5",
  },
  {
    name: "TAC",
    id: "tac-template",
    backgroundColor: "#f5f5f5",
    template: [
      {
        id: "1",
        name: "ARC Logo Header",
        componentSave: ["ARCLogo", { link: "https://www2.arccorp.com" }],
      },
      {
        id: "6",
        name: "TAC Jumbo",
        componentSave: [
          "TACJumbo",
          {
            title: "Travel Agent Communications",
            link: "https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/",
            date: "01/01/2023",
          },
        ],
      },
      {
        id: "8",
        name: "TAC Link",
        componentSave: [
          "TACLink",
          {
            link: "https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
      },
      {
        id: "9",
        name: "TAC Link",
        componentSave: [
          "TACLink",
          {
            link: "https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
      },
      {
        id: "10",
        name: "TAC Link",
        componentSave: [
          "TACLink",
          {
            link: "https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
      },
      {
        id: "11",
        name: "TAC Bottom",
        componentSave: [
          "TACBottom",
          {
            TIP_Title: "Tip of the Week",
            TIP_Text: "Lorem ipsum dolor sit amet consectetur",
            TIP_Link:
              "https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/",
            Training_Title: "Events and Trainings",
            Training_Text:
              "Stay up to date with the latest industry and knowledge.",
            Training_Link: "https://www2.arccorp.com/about-us/events/",
            Fraud_Title: "Fraud Alert",
            Fraud_Text:
              "Cybercrime is on the Rise | Phishing Email Schemes Continue",
            Fraud_Link:
              "https://www2.arccorp.com/support-training/fraud-prevention/schemes/",
          },
        ],
      },
    ],
    footer: "long",
  },
  {
    name: "Operational",
    id: "operational",
    backgroundColor: "#f5f5f5",
    template: [
      {
        id: "2",
        name: "Standard Header",
        componentSave: ["StandardHeader", { color: "teal" }],
      },
      {
        id: "3",
        name: "Text Block",
        componentSave: [
          "TextBlock",
          {
            text: '<h1 style="text-align: center;">Place story two headline<br class="em_hide">in this position</h1><p>&nbsp;</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dolor nisl, gravida semper faucibus non, interdum sed metus. Etiam consequat lacus arcu, sed accumsan tellus imperdiet nec. Cras nec lectus vel sem dignissim volutpat. Etiam sodales bibendum ipsum, vel tristique tortor commodo at. Vivamus tempor mauris non turpis suscipit, ac lacinia leo condimentum. Vestibulum nec sollicitudin sapien, sit amet bibendum est. Vivamus magna libero, semper vitae sem sit amet, scelerisque scelerisque nulla.<br><br>Suspendisse semper eros eget iaculis venenatis. Integer ultricies tempus sem id tempor. Fusce maximus ullamcorper tortor, sed varius purus porta sit amet. Vivamus in nunc sodales, sagittis augue sit amet, sollicitudin augue. Nulla sit amet lacus neque. Nullam nec risus nunc. Curabitur id lorem ac mi pharetra laoreet.</p>',
            padding: "50px",
          },
        ],
      },
      {
        id: "4",
        name: "Button",
        componentSave: ["Button", { text: "LEARN MORE" }],
      },
      {
        id: "5",
        name: "Address Footer",
        componentSave: ["AddressSection", { color: "teal" }],
      },
    ],
    footer: "operational",
  },
  {
    name: "AeroGram",
    id: "aerogram",
    backgroundColor: "#f5f5f5",
    template: [
      {
        id: "12",
        name: "Aerogram Header",
        componentSave: ["AerogramLogo", {}],
      },
      {
        id: "13",
        name: "Aerogram Image",
        componentSave: ["AeroImage", {}],
      },
      {
        id: "14",
        name: "Spacer",
        componentSave: ["Spacer", { height: "30" }],
      },
      {
        id: "15",
        name: "Text Block",
        componentSave: [
          "TextBlock",
          {
            text: '<h1 style="text-align: center;">Place story two headline<br class="em_hide">in this position</h1><p>&nbsp;</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dolor nisl, gravida semper faucibus non, interdum sed metus. Etiam consequat lacus arcu, sed accumsan tellus imperdiet nec. Cras nec lectus vel sem dignissim volutpat. Etiam sodales bibendum ipsum, vel tristique tortor commodo at. Vivamus tempor mauris non turpis suscipit, ac lacinia leo condimentum. Vestibulum nec sollicitudin sapien, sit amet bibendum est. Vivamus magna libero, semper vitae sem sit amet, scelerisque scelerisque nulla.<br><br>Suspendisse semper eros eget iaculis venenatis. Integer ultricies tempus sem id tempor. Fusce maximus ullamcorper tortor, sed varius purus porta sit amet. Vivamus in nunc sodales, sagittis augue sit amet, sollicitudin augue. Nulla sit amet lacus neque. Nullam nec risus nunc. Curabitur id lorem ac mi pharetra laoreet.</p>',
            padding: "50px",
          },
        ],
      },
      {
        id: "16",
        name: "Spacer",
        componentSave: ["Spacer", { height: "60" }],
      },
    ],
    footer: "aerogram",
  },
  {
    name: "Webinar",
    id: "webinar",
    backgroundColor: "#f5f5f5",
    template: [
      {
        id: "17",
        name: "Standard Header",
        componentSave: ["StandardHeader", { color: "white" }],
      },
      {
        id: "18",
        name: "Image",
        componentSave: ["Image", { height: "268" }],
      },
      {
        id: "19",
        name: "Spacer",
        componentSave: ["Spacer", { height: "30" }],
      },
      {
        id: "20",
        name: "Text Block",
        componentSave: [
          "TextBlock",
          {
            text: '<h1 style="text-align: center;">Place story two headline<br class="em_hide">in this position</h1><p>&nbsp;</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dolor nisl, gravida semper faucibus non, interdum sed metus. Etiam consequat lacus arcu, sed accumsan tellus imperdiet nec. Cras nec lectus vel sem dignissim volutpat. Etiam sodales bibendum ipsum, vel tristique tortor commodo at. Vivamus tempor mauris non turpis suscipit, ac lacinia leo condimentum. Vestibulum nec sollicitudin sapien, sit amet bibendum est. Vivamus magna libero, semper vitae sem sit amet, scelerisque scelerisque nulla.<br><br>Suspendisse semper eros eget iaculis venenatis. Integer ultricies tempus sem id tempor. Fusce maximus ullamcorper tortor, sed varius purus porta sit amet. Vivamus in nunc sodales, sagittis augue sit amet, sollicitudin augue. Nulla sit amet lacus neque. Nullam nec risus nunc. Curabitur id lorem ac mi pharetra laoreet.</p>',
            padding: "50px",
          },
        ],
      },
      {
        id: "21",
        name: "Spacer",
        componentSave: ["Spacer", { height: "30" }],
      },
      {
        id: "22",
        name: "Webinar",
        componentSave: [
          "Webinar",
          {
            title: "Webinar Title",
            date: "Monday, January 1, 2023",
            time: "2 - 3 p.m. EDT",
            link_copy: "Remove me to hide this Link",
          },
        ],
      },
      {
        id: "23",
        name: "Button",
        componentSave: ["Button", { text: "REGISTER NOW" }],
      },
      {
        id: "24",
        name: "Spacer",
        componentSave: ["Spacer", { height: "30" }],
      },
    ],
    footer: "long",
  },
  {
    name: "ETC",
    id: "etc",
    template: [
      {
        id: 6,
        name: "ETC Header",
        componentSave: [
          "ETCHeader",
          {
            color: "teal",
          },
        ],
      },
      {
        id: 1,
        name: "Image",
        componentSave: [
          "Image",
          {
            height: "400",
            link: "https://www2.arccorp.com/globalassets/email/elevate/etc-register-now.png",
            ctaLink: "https://elevate-travelconnect.com/",
            color: "#212A76",
          },
        ],
      },
      {
        id: 2,
        name: "Spacer",
        componentSave: [
          "Spacer",
          {
            height: "10px",
            color: "White",
          },
        ],
      },
      {
        id: "3",
        name: "Text Block",
        componentSave: [
          "TextBlock",
          {
            text: '<h1 style="text-align: center;">[First Name],&nbsp;you&nbsp;can now register to attend Elevate + TravelConnect!</h1>\n<p style="text-align: center;">&nbsp;</p>\n<p style="text-align: center;">ATPCO and ARC are thrilled to bring you this jointly hosted conference on April 9-11, 2024, in Washington, DC. Register before January 31, 2024, to receive the advanced discounted rate!&nbsp;<br><br><a href="https://elevate-travelconnect.com/"><img src="https://www2.arccorp.com/globalassets/email/elevate/registernow.png" alt=""></a><br><br>From two times the amount of networking opportunities to over 22 hours of programming planned by over 60 speakers, this is the can&rsquo;t-miss event for the industry. You&rsquo;ll explore a new world of industry thought leadership, offers, orders, data, distribution, payments, and more&mdash;all under one roof!&nbsp;<br><br><a href="https://www.youtube.com/watch?v=PrGLmh6g8wg"><img src="https://www2.arccorp.com/globalassets/email/elevate/videstill.jpeg" alt="" width="486" height="275"></a></p>',
            padding: "50px",
            color: "white",
          },
        ],
      },
      {
        id: 4,
        name: "Spacer",
        componentSave: ["Spacer", { height: "60px", color: "White" }],
      },
      {
        id: 5,
        name: "Text Block",
        componentSave: [
          "TextBlock",
          {
            text: '<h1 style="text-align: center; line-height: 1;"><span style="font-size: 24px; color: rgb(0, 0, 0);"><span style="color: rgb(255, 201, 18);"><a style="color: rgb(255, 201, 18);" href="https://elevate-travelconnect.com/"><span style="text-decoration: underline;">Register for the event</span></a> </span><span style="color: rgb(255, 255, 255);">before January 31, 2024, </span><br><span style="color: rgb(255, 255, 255);">to receive the advanced discounted rate.</span></span></h1>\n<p style="text-align: center;">&nbsp;</p>\n<p style="text-align: center;"><span style="color: rgb(255, 255, 255);">We look forward to seeing you at the conference, where you will gain <br>new perspectives and take home actionable insights!&nbsp;</span><br><br><br><a href="https://elevate-travelconnect.com/"><span style="color: rgb(255, 255, 255);"><img src="https://www2.arccorp.com/globalassets/email/etc/seeyouthere-illustration.png" alt=""></span></a><br><br><br><br><br></p>',
            padding: "25px",
            color: "#29AFD8",
          },
        ],
      },
    ],
    footer: "etc",
    backgroundColor: "#212A76",
  },
];

export default emailTemplates;
