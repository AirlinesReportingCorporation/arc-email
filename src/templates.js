const emailTemplates = [
  {
    name: "board",
    id: "board-template",
    template: [
      {
        id: "1",
        name: "Image",
        componentSave: [
          "Image",
          {
            height: "268",
            link: "https://www2.arccorp.com/globalassets/email-parts/board/board-header23-holiday.jpg",
          },
        ],
      },
      { id: "2", name: "Spacer", componentSave: ["Spacer", { height: "30" }] },
      {
        id: "3",
        name: "Text Block",
        componentSave: [
          "TextBlock",
          {
            text: "<p style='text-align: center;'><strong>May 31, 2023</strong></p><p style='text-align: center;'>&nbsp;</p><p class='xxxxmsonormal'>Dear Board Directors,</p><p class='xxxxmsonormal'>&nbsp;&nbsp;</p><p class='MsoNormal'>It’s been an extra busy and exciting month of May, with several customer and partner events and our quarterly in-person Connection Week. More details on all these activities found below. Additionally, a major focus in May has been the strategic planning work with our partners from ZS Associates. Thanks again to all Directors for their recommendations and introductions to key contacts from your airlines to engage in this critical effort for ARC. The ZS team reports they’ve already conducted 30+ customer and stakeholder interviews.</p>",
            padding: "50px",
          },
        ],
      },
      {
        id: 4,
        name: "Twocolumn",
        componentSave: [
          "Twocolumn",
          {
            text: '<p><img src="https://www2.arccorp.com/globalassets/email/rb_headshot.png" alt="" width="318" height="318"></p>',
            text2:
              "<h2>Board Director News</h2>\n<p>We are pleased to formally announce the appointment of Rob Brown, Managing Director, B2B Strategy &amp; Services, Southwest Airlines, to ARC&rsquo;s Board. Rob brings a wealth of industry experience across key areas within the Board&rsquo;s purview&ndash;strategy, risk, and operational oversight.<br>Welcome Rob!</p>",
          },
        ],
      },
      {
        id: "5",
        name: "Button",
        componentSave: ["Button", { text: "LEARN MORE" }],
      },
    ],
  },

  // {
  //   name: "TAC",
  //   id: "tac-template",
  //   template: [
  //     {
  //       id: "1",
  //       name: "ARC Logo Header",
  //       componentSave: ["ARCLogo", { link: "https://www2.arccorp.com" }],
  //     },
  //     {
  //       id: "6",
  //       name: "TAC Jumbo",
  //       componentSave: [
  //         "TACJumbo",
  //         {
  //           title: "Travel Agent Communications",
  //           link: "https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/",
  //           date: "01/01/2023",
  //         },
  //       ],
  //     },
  //     {
  //       id: "8",
  //       name: "TAC Link",
  //       componentSave: [
  //         "TACLink",
  //         {
  //           link: "https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/",
  //           title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //         },
  //       ],
  //     },
  //     {
  //       id: "9",
  //       name: "TAC Link",
  //       componentSave: [
  //         "TACLink",
  //         {
  //           link: "https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/",
  //           title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //         },
  //       ],
  //     },
  //     {
  //       id: "10",
  //       name: "TAC Link",
  //       componentSave: [
  //         "TACLink",
  //         {
  //           link: "https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/",
  //           title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //         },
  //       ],
  //     },
  //     {
  //       id: "11",
  //       name: "TAC Bottom",
  //       componentSave: [
  //         "TACBottom",
  //         {
  //           TIP_Title: "Tip of the Week",
  //           TIP_Text: "Lorem ipsum dolor sit amet consectetur",
  //           TIP_Link:
  //             "https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/",
  //           Events_Title: "Events and Trainings",
  //           Events_Text:
  //             "Stay up to date with the latest industry and knowledge.",
  //           Events_Link: "https://www2.arccorp.com/about-us/events/",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   name: "Operational",
  //   id: "operational",
  //   template: [
  //     {
  //       id: "2",
  //       name: "Standard Header",
  //       componentSave: ["StandardHeader", { color: "teal" }],
  //     },
  //     {
  //       id: "3",
  //       name: "Text Block",
  //       componentSave: [
  //         "TextBlock",
  //         {
  //           text: '<h1 style="text-align: center;">Place story two headline<br class="em_hide">in this position</h1><p>&nbsp;</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dolor nisl, gravida semper faucibus non, interdum sed metus. Etiam consequat lacus arcu, sed accumsan tellus imperdiet nec. Cras nec lectus vel sem dignissim volutpat. Etiam sodales bibendum ipsum, vel tristique tortor commodo at. Vivamus tempor mauris non turpis suscipit, ac lacinia leo condimentum. Vestibulum nec sollicitudin sapien, sit amet bibendum est. Vivamus magna libero, semper vitae sem sit amet, scelerisque scelerisque nulla.<br><br>Suspendisse semper eros eget iaculis venenatis. Integer ultricies tempus sem id tempor. Fusce maximus ullamcorper tortor, sed varius purus porta sit amet. Vivamus in nunc sodales, sagittis augue sit amet, sollicitudin augue. Nulla sit amet lacus neque. Nullam nec risus nunc. Curabitur id lorem ac mi pharetra laoreet.</p>',
  //           padding: "50px",
  //         },
  //       ],
  //     },
  //     {
  //       id: "4",
  //       name: "Button",
  //       componentSave: ["Button", { text: "LEARN MORE" }],
  //     },
  //     {
  //       id: "5",
  //       name: "Address Footer",
  //       componentSave: ["AddressSection", { color: "teal" }],
  //     },
  //   ],
  // },
  // {
  //   name: "AeroGram",
  //   id: "aerogram",
  //   template: [
  //     {
  //       id: "12",
  //       name: "Aerogram Header",
  //       componentSave: ["AerogramLogo", {}],
  //     },
  //     {
  //       id: "13",
  //       name: "Aerogram Image",
  //       componentSave: ["AeroImage", {}],
  //     },
  //     {
  //       id: "14",
  //       name: "Spacer",
  //       componentSave: ["Spacer", { height: "30" }],
  //     },
  //     {
  //       id: "15",
  //       name: "Text Block",
  //       componentSave: [
  //         "TextBlock",
  //         {
  //           text: '<h1 style="text-align: center;">Place story two headline<br class="em_hide">in this position</h1><p>&nbsp;</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dolor nisl, gravida semper faucibus non, interdum sed metus. Etiam consequat lacus arcu, sed accumsan tellus imperdiet nec. Cras nec lectus vel sem dignissim volutpat. Etiam sodales bibendum ipsum, vel tristique tortor commodo at. Vivamus tempor mauris non turpis suscipit, ac lacinia leo condimentum. Vestibulum nec sollicitudin sapien, sit amet bibendum est. Vivamus magna libero, semper vitae sem sit amet, scelerisque scelerisque nulla.<br><br>Suspendisse semper eros eget iaculis venenatis. Integer ultricies tempus sem id tempor. Fusce maximus ullamcorper tortor, sed varius purus porta sit amet. Vivamus in nunc sodales, sagittis augue sit amet, sollicitudin augue. Nulla sit amet lacus neque. Nullam nec risus nunc. Curabitur id lorem ac mi pharetra laoreet.</p>',
  //           padding: "50px",
  //         },
  //       ],
  //     },
  //     {
  //       id: "16",
  //       name: "Spacer",
  //       componentSave: ["Spacer", { height: "60" }],
  //     },
  //   ],
  // },
  // {
  //   name: "Webinar",
  //   id: "webinar",
  //   template: [
  //     {
  //       id: "17",
  //       name: "Standard Header",
  //       componentSave: ["StandardHeader", { color: "white" }],
  //     },
  //     {
  //       id: "18",
  //       name: "Image",
  //       componentSave: ["Image", { height: "268" }],
  //     },
  //     {
  //       id: "19",
  //       name: "Spacer",
  //       componentSave: ["Spacer", { height: "30" }],
  //     },
  //     {
  //       id: "20",
  //       name: "Text Block",
  //       componentSave: [
  //         "TextBlock",
  //         {
  //           text: '<h1 style="text-align: center;">Place story two headline<br class="em_hide">in this position</h1><p>&nbsp;</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dolor nisl, gravida semper faucibus non, interdum sed metus. Etiam consequat lacus arcu, sed accumsan tellus imperdiet nec. Cras nec lectus vel sem dignissim volutpat. Etiam sodales bibendum ipsum, vel tristique tortor commodo at. Vivamus tempor mauris non turpis suscipit, ac lacinia leo condimentum. Vestibulum nec sollicitudin sapien, sit amet bibendum est. Vivamus magna libero, semper vitae sem sit amet, scelerisque scelerisque nulla.<br><br>Suspendisse semper eros eget iaculis venenatis. Integer ultricies tempus sem id tempor. Fusce maximus ullamcorper tortor, sed varius purus porta sit amet. Vivamus in nunc sodales, sagittis augue sit amet, sollicitudin augue. Nulla sit amet lacus neque. Nullam nec risus nunc. Curabitur id lorem ac mi pharetra laoreet.</p>',
  //           padding: "50px",
  //         },
  //       ],
  //     },
  //     {
  //       id: "21",
  //       name: "Spacer",
  //       componentSave: ["Spacer", { height: "30" }],
  //     },
  //     {
  //       id: "22",
  //       name: "Webinar",
  //       componentSave: [
  //         "Webinar",
  //         {
  //           title: "Webinar Title",
  //           date: "Monday, January 1, 2023",
  //           time: "2 - 3 p.m. EDT",
  //           link_copy: "Remove me to hide this Link",
  //         },
  //       ],
  //     },
  //     {
  //       id: "23",
  //       name: "Button",
  //       componentSave: ["Button", { text: "REGISTER NOW" }],
  //     },
  //     {
  //       id: "24",
  //       name: "Spacer",
  //       componentSave: ["Spacer", { height: "30" }],
  //     },
  //   ],
  // },
];

export default emailTemplates;
