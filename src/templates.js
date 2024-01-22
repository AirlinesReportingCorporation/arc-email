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
        id: "12",
        name: "Fraud Ribbon",
        componentSave: [
          "FraudRibbon",
          {
            Fraud_Link:
              "https://www2.arccorp.com/support-training/fraud-prevention/schemes/",
            Fraud_Title: "Important Fraud Alert",
            Fraud_Subtitle: "Latest Updates",
          },
        ],
      },
      {
        id: "8",
        name: "TAC Link",
        componentSave: [
          "TACLink",
          {
            icon: "fraud",
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
  {
    name: "Direct Connect - Still Interseted",
    id: "directconnect-interested",
    template: [
      {
        id: 1001,
        name: "Image",
        componentSave: [
          "Image",
          {
            height: "400",
            link: "https://www2.arccorp.com/globalassets/email/oft/DirectConnect-Email-Header.jpg",
            color: "white",
            width: "",
          },
        ],
      },
      {
        id: 1003,
        name: "Spacer",
        componentSave: ["Spacer", { height: "30px", color: "white" }],
      },
      {
        id: "3",
        name: "Text Block",
        componentSave: [
          "TextBlock",
          {
            text: '<div>Dear [Airline Executive\'s Name],</div>\n<div class="paragraph_break">&nbsp;</div>\n<div>[Custom opening]. It\'s been some time since we last connected about ARC Direct Connect, and I wanted to check in. ARC Direct Connect can significantly enhance your airline\'s workflow by offering a flexible, secure transaction reporting and settlement solution.</div>\n<div class="paragraph_break">&nbsp;</div>\n<div><img style="display: block; margin-left: auto; margin-right: auto;" src="https://www2.arccorp.com/globalassets/email/oft/DirectConnect-Email-Chart.jpg" alt="" width="600" height="364"></div>\n<div class="paragraph_break">&nbsp;</div>\n<div>If you\'re interested in revisiting our previous conversation or have any questions, feel free to reach out to me directly. I\'m here to provide any additional information you might need.</div>\n<div class="paragraph_break">&nbsp;</div>\n<div>I look forward to collaborating with you.<br><br>Best Regards,<br><br>\n<table class="MsoNormalTable" style="width: 346.5pt; border-collapse: collapse; mso-yfti-tbllook: 1184; mso-padding-alt: 0in 0in 0in 0in;" border="0" width="462" cellspacing="0" cellpadding="0">\n<tbody>\n<tr style="mso-yfti-irow: 0; mso-yfti-firstrow: yes; height: 5.75pt;">\n<td style="width: 346.5pt; padding: 1.45pt .3in 1.45pt .3in; height: 5.75pt;" colspan="2" width="462">\n<p class="MsoNormal"><a name="_MailAutoSig"></a><strong><span style="font-size: 12.0pt; mso-ascii-font-family: Calibri; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-bidi-font-family: Calibri; color: #2392a0; mso-font-kerning: 0pt; mso-ligatures: none; mso-no-proof: yes;">&nbsp;</span></strong></p>\n</td>\n</tr>\n<tr style="mso-yfti-irow: 1; mso-yfti-lastrow: yes; height: 12.05pt;">\n<td style="width: 1.25in; border: none; border-right: solid windowtext 1.0pt; padding: 1.45pt .3in 1.45pt .3in; height: 12.05pt;" width="120">\n<p class="MsoNormal" style="text-align: center;" align="center"><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 9.0pt; font-family: \'Times New Roman\',serif; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; color: #262626; mso-font-kerning: 0pt; mso-ligatures: none; mso-no-proof: yes;"><!-- [if gte vml 1]><v:shapetype id="_x0000_t75"\n   coordsize="21600,21600" o:spt="75" o:preferrelative="t" path="m@4@5l@4@11@9@11@9@5xe"\n   filled="f" stroked="f">\n   <v:stroke joinstyle="miter"/>\n   <v:formulas>\n    <v:f eqn="if lineDrawn pixelLineWidth 0"/>\n    <v:f eqn="sum @0 1 0"/>\n    <v:f eqn="sum 0 0 @1"/>\n    <v:f eqn="prod @2 1 2"/>\n    <v:f eqn="prod @3 21600 pixelWidth"/>\n    <v:f eqn="prod @3 21600 pixelHeight"/>\n    <v:f eqn="sum @0 0 1"/>\n    <v:f eqn="prod @6 1 2"/>\n    <v:f eqn="prod @7 21600 pixelWidth"/>\n    <v:f eqn="sum @8 21600 0"/>\n    <v:f eqn="prod @7 21600 pixelHeight"/>\n    <v:f eqn="sum @10 21600 0"/>\n   </v:formulas>\n   <v:path o:extrusionok="f" gradientshapeok="t" o:connecttype="rect"/>\n   <o:lock v:ext="edit" aspectratio="t"/>\n  </v:shapetype><v:shape id="Picture_x0020_5" o:spid="_x0000_i1029" type="#_x0000_t75"\n   alt="Logo&#10;&#10;Description automatically generated" style=\'width:75pt;\n   height:31.5pt;visibility:visible;mso-wrap-style:square\'>\n   <v:imagedata src="file:////Users/ifajardo/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image001.png"\n    o:href="file:////Users/ifajardo/Library/Containers/com.microsoft.Outlook/Data/Library/Caches/Signatures/signature_1231820755"/>\n  </v:shape><![endif]--><!-- [if !vml]--><img src="https://www2.arccorp.com/globalassets/email/oft/email-logo.png" alt="LogoDescription automatically generated" width="150" height="64"><!--[endif]--></span></span><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 9.0pt; font-family: Helvetica; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-bidi-font-family: Calibri; mso-font-kerning: 0pt; mso-ligatures: none; mso-no-proof: yes;"><br></span></span><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 9.0pt; font-family: \'Times New Roman\',serif; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; color: #262626; mso-font-kerning: 0pt; mso-ligatures: none; mso-no-proof: yes;"><br></span></span><a title="https://twitter.com/" href="https://twitter.com/"><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 9.0pt; font-family: Helvetica; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-bidi-font-family: Calibri; color: black; mso-font-kerning: 0pt; mso-no-proof: yes; text-decoration: none; text-underline: none;"><!-- [if gte vml 1]><v:shape\n   id="Picture_x0020_4" o:spid="_x0000_i1028" type="#_x0000_t75" alt="signature_1415726316"\n   href="https://twitter.com/" title="https://twitter.com/" style=\'width:13.5pt;\n   height:13.5pt;visibility:visible;mso-wrap-style:square\' o:button="t">\n   <v:imagedata src="file:////Users/ifajardo/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image002.png"\n    o:title="signature_1415726316"/>\n  </v:shape><![endif]--><!-- [if !vml]--><span style="mso-ignore: vglayout;"><img src="https://www2.arccorp.com/globalassets/email/oft/x.png" alt="signature_1415726316" width="28" height="28" border="0"></span><!--[endif]--></span></span></a><a title="https://www.facebook.com/ARCtalk" href="https://www.facebook.com/ARCtalk"><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 9.0pt; font-family: Helvetica; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-bidi-font-family: Calibri; color: black; mso-font-kerning: 0pt; mso-no-proof: yes; text-decoration: none; text-underline: none;"><!-- [if gte vml 1]><v:shape id="Picture_x0020_3" o:spid="_x0000_i1027"\n   type="#_x0000_t75" alt="unknown_2.png"\n   href="https://www.facebook.com/ARCtalk" title="https://www.facebook.com/ARCtalk"\n   style=\'width:10.5pt;height:13.5pt;visibility:visible;mso-wrap-style:square\'\n   o:button="t">\n   <v:imagedata src="file:////Users/ifajardo/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image003.png"\n    o:title="unknown_2"/>\n  </v:shape><![endif]--><!-- [if !vml]--><span style="mso-ignore: vglayout;"><img src="https://www2.arccorp.com/globalassets/email/oft/fb.png" alt="FB" width="22" height="28" border="0"></span><!--[endif]--></span></span></a><a title="https://www.linkedin.com/company/arc" href="https://www.linkedin.com/company/arc"><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 9.0pt; font-family: Helvetica; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-bidi-font-family: Calibri; color: black; mso-font-kerning: 0pt; mso-no-proof: yes; text-decoration: none; text-underline: none;"><!-- [if gte vml 1]><v:shape id="Picture_x0020_2" o:spid="_x0000_i1026"\n   type="#_x0000_t75" alt="unknown_3.png"\n   href="https://www.linkedin.com/company/arc" title="https://www.linkedin.com/company/arc"\n   style=\'width:13.5pt;height:13.5pt;visibility:visible;mso-wrap-style:square\'\n   o:button="t">\n   <v:imagedata src="file:////Users/ifajardo/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image004.png"\n    o:title="unknown_3"/>\n  </v:shape><![endif]--><!-- [if !vml]--><span style="mso-ignore: vglayout;"><img src="https://www2.arccorp.com/globalassets/email/oft/li.png" alt="LinkedIn" width="28" height="28" border="0"></span><!--[endif]--></span></span></a><a title="https://www.youtube.com/channel/UCWHZsoCDNhjorop892EVETw" href="https://www.youtube.com/channel/UCWHZsoCDNhjorop892EVETw"><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 9.0pt; font-family: Helvetica; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-bidi-font-family: Calibri; color: black; mso-font-kerning: 0pt; mso-no-proof: yes; text-decoration: none; text-underline: none;"><!-- [if gte vml 1]><v:shape\n   id="Picture_x0020_1" o:spid="_x0000_i1025" type="#_x0000_t75" alt="unknown_5.png"\n   href="https://www.youtube.com/channel/UCWHZsoCDNhjorop892EVETw" title="https://www.youtube.com/channel/UCWHZsoCDNhjorop892EVETw"\n   style=\'width:16.5pt;height:13.5pt;visibility:visible;mso-wrap-style:square\'\n   o:button="t">\n   <v:imagedata src="file:////Users/ifajardo/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image005.png"\n    o:title="unknown_5"/>\n  </v:shape><![endif]--><!-- [if !vml]--><span style="mso-ignore: vglayout;"><img src="https://www2.arccorp.com/globalassets/email/oft/yt.png" alt="YouTube" width="34" height="28" border="0"></span><!--[endif]--></span></span></a></p>\n</td>\n<td style="width: 256.5pt; padding: 1.45pt .3in 1.45pt .3in; height: 12.05pt;" width="342">\n<p class="MsoNormal"><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 12.0pt; mso-ascii-font-family: Calibri; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-bidi-font-family: Calibri; color: #262626; mso-font-kerning: 0pt; mso-ligatures: none; mso-no-proof: yes;"><span style="color: #2392a0;"><strong>Full Name Last Name</strong></span><br><span style="color: #262626;">Title In Organization</span></span></span><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 10.0pt; mso-ascii-font-family: Calibri; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-bidi-font-family: Calibri; color: #1a8aa0; mso-font-kerning: 0pt; mso-ligatures: none; mso-no-proof: yes;"><br></span></span><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 10.0pt; mso-ascii-font-family: Calibri; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-bidi-font-family: Calibri; color: #5a5b5e; mso-font-kerning: 0pt; mso-ligatures: none; mso-no-proof: yes;"><br></span></span><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 10.0pt; mso-ascii-font-family: Calibri; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-bidi-font-family: Calibri; color: #7f7f7f; mso-font-kerning: 0pt; mso-ligatures: none; mso-no-proof: yes;">3000 Wilson Blvd., Suite 300<br>Arlington, VA 22201<br></span></span><a title="http://www.arccorp.com/" href="http://www.arccorp.com/"><span style="mso-bookmark: _MailAutoSig;"><strong><span style="font-size: 10.0pt; mso-ascii-font-family: Calibri; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-bidi-font-family: Calibri; color: #1a8aa0; mso-font-kerning: 0pt; mso-ligatures: none; mso-no-proof: yes;">arccorp.com</span></strong></span></a></p>\n<p class="MsoNormal"><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 10.0pt; font-family: \'Segoe UI Symbol\',sans-serif; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-bidi-font-family: Calibri; color: #7f7f7f; mso-font-kerning: 0pt; mso-ligatures: none; mso-no-proof: yes;">☏</span></span><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 10.0pt; mso-ascii-font-family: Calibri; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-bidi-font-family: Calibri; color: #7f7f7f; mso-font-kerning: 0pt; mso-ligatures: none; mso-no-proof: yes;">&nbsp;&nbsp;703.816.8117</span></span></p>\n</td>\n</tr>\n</tbody>\n</table>\n<p class="MsoNormal"><span style="mso-bookmark: _MailAutoSig;"><span style="mso-ascii-font-family: Calibri; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-bidi-font-family: Calibri; color: #212121; mso-font-kerning: 0pt; mso-ligatures: none; mso-no-proof: yes;">&nbsp;</span></span></p>\n</div>',
            padding: "50px",
          },
        ],
      },
      {
        id: 1004,
        name: "Spacer",
        componentSave: ["Spacer", { height: "30px", color: "White" }],
      },
    ],
    footer: "none",
    backgroundColor: "#f5f5f5",
  },
  {
    name: "Direct Connect - Why Join",
    id: "directconnect-whyjoin",
    template: [
      {
        id: 1001,
        name: "Image",
        componentSave: [
          "Image",
          {
            height: "400",
            link: "https://www2.arccorp.com/globalassets/email/oft/DirectConnect-Email-Header.jpg",
            color: "white",
            width: "",
          },
        ],
      },
      {
        id: 1003,
        name: "Spacer",
        componentSave: ["Spacer", { height: "30px", color: "white" }],
      },
      {
        id: "3",
        name: "Text Block",
        componentSave: [
          "TextBlock",
          {
            text: '<div>\n<div>Dear [Airline Executive\'s Name],</div>\n<div class="paragraph_break">&nbsp;</div>\n<div>[Custom opening]. I\'m reaching out today to touch base about the benefits of ARC Direct Connect for [insert airline name].</div>\n<div class="paragraph_break">&nbsp;</div>\n<div>ARC Direct Connect offers a flexible, secure solution for reporting and settling transactions. It provides upfront commission settlement for NDC transactions, the flexibility to handle various payment methods, and the option to distribute content through any aggregator or direct API.</div>\n</div>\n<div class="paragraph_break">&nbsp;</div>\n<div><img style="display: block; margin-left: auto; margin-right: auto;" src="https://www2.arccorp.com/globalassets/email/oft/DirectConnect-Email-Chart.jpg" alt="" width="600" height="364"></div>\n<div class="paragraph_break">&nbsp;</div>\n<div>\n<div>Please reach out directly if you have any questions or wish to explore this further. I\'m here to provide the insights you need to make an informed decision.</div>\n<div class="paragraph_break">&nbsp;</div>\n<div>I look forward to the opportunity of potentially collaborating with you.</div>\n<div class="paragraph_break">&nbsp;</div>\n<div>Best regards,</div>\n</div>\n<div><br>\n<table class="MsoNormalTable" style="width: 346.5pt; border-collapse: collapse; mso-yfti-tbllook: 1184; mso-padding-alt: 0in 0in 0in 0in;" border="0" width="462" cellspacing="0" cellpadding="0">\n<tbody>\n<tr style="mso-yfti-irow: 0; mso-yfti-firstrow: yes; height: 5.75pt;">\n<td style="width: 346.5pt; padding: 1.45pt .3in 1.45pt .3in; height: 5.75pt;" colspan="2" width="462">\n<p class="MsoNormal"><a name="_MailAutoSig"></a><strong><span style="font-size: 12.0pt; mso-ascii-font-family: Calibri; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-bidi-font-family: Calibri; color: #2392a0; mso-font-kerning: 0pt; mso-ligatures: none; mso-no-proof: yes;">&nbsp;</span></strong></p>\n</td>\n</tr>\n<tr style="mso-yfti-irow: 1; mso-yfti-lastrow: yes; height: 12.05pt;">\n<td style="width: 1.25in; border: none; border-right: solid windowtext 1.0pt; padding: 1.45pt .3in 1.45pt .3in; height: 12.05pt;" width="120">\n<p class="MsoNormal" style="text-align: center;" align="center"><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 9.0pt; font-family: \'Times New Roman\',serif; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; color: #262626; mso-font-kerning: 0pt; mso-ligatures: none; mso-no-proof: yes;"><!-- [if gte vml 1]><v:shapetype id="_x0000_t75"\n   coordsize="21600,21600" o:spt="75" o:preferrelative="t" path="m@4@5l@4@11@9@11@9@5xe"\n   filled="f" stroked="f">\n   <v:stroke joinstyle="miter"/>\n   <v:formulas>\n    <v:f eqn="if lineDrawn pixelLineWidth 0"/>\n    <v:f eqn="sum @0 1 0"/>\n    <v:f eqn="sum 0 0 @1"/>\n    <v:f eqn="prod @2 1 2"/>\n    <v:f eqn="prod @3 21600 pixelWidth"/>\n    <v:f eqn="prod @3 21600 pixelHeight"/>\n    <v:f eqn="sum @0 0 1"/>\n    <v:f eqn="prod @6 1 2"/>\n    <v:f eqn="prod @7 21600 pixelWidth"/>\n    <v:f eqn="sum @8 21600 0"/>\n    <v:f eqn="prod @7 21600 pixelHeight"/>\n    <v:f eqn="sum @10 21600 0"/>\n   </v:formulas>\n   <v:path o:extrusionok="f" gradientshapeok="t" o:connecttype="rect"/>\n   <o:lock v:ext="edit" aspectratio="t"/>\n  </v:shapetype><v:shape id="Picture_x0020_5" o:spid="_x0000_i1029" type="#_x0000_t75"\n   alt="Logo&#10;&#10;Description automatically generated" style=\'width:75pt;\n   height:31.5pt;visibility:visible;mso-wrap-style:square\'>\n   <v:imagedata src="file:////Users/ifajardo/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image001.png"\n    o:href="file:////Users/ifajardo/Library/Containers/com.microsoft.Outlook/Data/Library/Caches/Signatures/signature_1231820755"/>\n  </v:shape><![endif]--><!-- [if !vml]--><img src="https://www2.arccorp.com/globalassets/email/oft/email-logo.png" alt="LogoDescription automatically generated" width="150" height="64"><!--[endif]--></span></span><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 9.0pt; font-family: Helvetica; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-bidi-font-family: Calibri; mso-font-kerning: 0pt; mso-ligatures: none; mso-no-proof: yes;"><br></span></span><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 9.0pt; font-family: \'Times New Roman\',serif; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; color: #262626; mso-font-kerning: 0pt; mso-ligatures: none; mso-no-proof: yes;"><br></span></span><a title="https://twitter.com/" href="https://twitter.com/"><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 9.0pt; font-family: Helvetica; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-bidi-font-family: Calibri; color: black; mso-font-kerning: 0pt; mso-no-proof: yes; text-decoration: none; text-underline: none;"><!-- [if gte vml 1]><v:shape\n   id="Picture_x0020_4" o:spid="_x0000_i1028" type="#_x0000_t75" alt="signature_1415726316"\n   href="https://twitter.com/" title="https://twitter.com/" style=\'width:13.5pt;\n   height:13.5pt;visibility:visible;mso-wrap-style:square\' o:button="t">\n   <v:imagedata src="file:////Users/ifajardo/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image002.png"\n    o:title="signature_1415726316"/>\n  </v:shape><![endif]--><!-- [if !vml]--><span style="mso-ignore: vglayout;"><img src="https://www2.arccorp.com/globalassets/email/oft/x.png" alt="signature_1415726316" width="28" height="28" border="0"></span><!--[endif]--></span></span></a><a title="https://www.facebook.com/ARCtalk" href="https://www.facebook.com/ARCtalk"><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 9.0pt; font-family: Helvetica; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-bidi-font-family: Calibri; color: black; mso-font-kerning: 0pt; mso-no-proof: yes; text-decoration: none; text-underline: none;"><!-- [if gte vml 1]><v:shape id="Picture_x0020_3" o:spid="_x0000_i1027"\n   type="#_x0000_t75" alt="unknown_2.png"\n   href="https://www.facebook.com/ARCtalk" title="https://www.facebook.com/ARCtalk"\n   style=\'width:10.5pt;height:13.5pt;visibility:visible;mso-wrap-style:square\'\n   o:button="t">\n   <v:imagedata src="file:////Users/ifajardo/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image003.png"\n    o:title="unknown_2"/>\n  </v:shape><![endif]--><!-- [if !vml]--><span style="mso-ignore: vglayout;"><img src="https://www2.arccorp.com/globalassets/email/oft/fb.png" alt="FB" width="22" height="28" border="0"></span><!--[endif]--></span></span></a><a title="https://www.linkedin.com/company/arc" href="https://www.linkedin.com/company/arc"><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 9.0pt; font-family: Helvetica; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-bidi-font-family: Calibri; color: black; mso-font-kerning: 0pt; mso-no-proof: yes; text-decoration: none; text-underline: none;"><!-- [if gte vml 1]><v:shape id="Picture_x0020_2" o:spid="_x0000_i1026"\n   type="#_x0000_t75" alt="unknown_3.png"\n   href="https://www.linkedin.com/company/arc" title="https://www.linkedin.com/company/arc"\n   style=\'width:13.5pt;height:13.5pt;visibility:visible;mso-wrap-style:square\'\n   o:button="t">\n   <v:imagedata src="file:////Users/ifajardo/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image004.png"\n    o:title="unknown_3"/>\n  </v:shape><![endif]--><!-- [if !vml]--><span style="mso-ignore: vglayout;"><img src="https://www2.arccorp.com/globalassets/email/oft/li.png" alt="LinkedIn" width="28" height="28" border="0"></span><!--[endif]--></span></span></a><a title="https://www.youtube.com/channel/UCWHZsoCDNhjorop892EVETw" href="https://www.youtube.com/channel/UCWHZsoCDNhjorop892EVETw"><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 9.0pt; font-family: Helvetica; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-bidi-font-family: Calibri; color: black; mso-font-kerning: 0pt; mso-no-proof: yes; text-decoration: none; text-underline: none;"><!-- [if gte vml 1]><v:shape\n   id="Picture_x0020_1" o:spid="_x0000_i1025" type="#_x0000_t75" alt="unknown_5.png"\n   href="https://www.youtube.com/channel/UCWHZsoCDNhjorop892EVETw" title="https://www.youtube.com/channel/UCWHZsoCDNhjorop892EVETw"\n   style=\'width:16.5pt;height:13.5pt;visibility:visible;mso-wrap-style:square\'\n   o:button="t">\n   <v:imagedata src="file:////Users/ifajardo/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image005.png"\n    o:title="unknown_5"/>\n  </v:shape><![endif]--><!-- [if !vml]--><span style="mso-ignore: vglayout;"><img src="https://www2.arccorp.com/globalassets/email/oft/yt.png" alt="YouTube" width="34" height="28" border="0"></span><!--[endif]--></span></span></a></p>\n</td>\n<td style="width: 256.5pt; padding: 1.45pt .3in 1.45pt .3in; height: 12.05pt;" width="342">\n<p class="MsoNormal"><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 12.0pt; mso-ascii-font-family: Calibri; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-bidi-font-family: Calibri; color: #262626; mso-font-kerning: 0pt; mso-ligatures: none; mso-no-proof: yes;"><span style="color: #2392a0;"><strong>Full Name Last Name</strong></span><br><span style="color: #262626;">Title In Organization</span></span></span><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 10.0pt; mso-ascii-font-family: Calibri; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-bidi-font-family: Calibri; color: #1a8aa0; mso-font-kerning: 0pt; mso-ligatures: none; mso-no-proof: yes;"><br></span></span><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 10.0pt; mso-ascii-font-family: Calibri; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-bidi-font-family: Calibri; color: #5a5b5e; mso-font-kerning: 0pt; mso-ligatures: none; mso-no-proof: yes;"><br></span></span><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 10.0pt; mso-ascii-font-family: Calibri; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-bidi-font-family: Calibri; color: #7f7f7f; mso-font-kerning: 0pt; mso-ligatures: none; mso-no-proof: yes;">3000 Wilson Blvd., Suite 300<br>Arlington, VA 22201<br></span></span><a title="http://www.arccorp.com/" href="http://www.arccorp.com/"><span style="mso-bookmark: _MailAutoSig;"><strong><span style="font-size: 10.0pt; mso-ascii-font-family: Calibri; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-bidi-font-family: Calibri; color: #1a8aa0; mso-font-kerning: 0pt; mso-ligatures: none; mso-no-proof: yes;">arccorp.com</span></strong></span></a></p>\n<p class="MsoNormal"><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 10.0pt; font-family: \'Segoe UI Symbol\',sans-serif; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-bidi-font-family: Calibri; color: #7f7f7f; mso-font-kerning: 0pt; mso-ligatures: none; mso-no-proof: yes;">☏</span></span><span style="mso-bookmark: _MailAutoSig;"><span style="font-size: 10.0pt; mso-ascii-font-family: Calibri; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-bidi-font-family: Calibri; color: #7f7f7f; mso-font-kerning: 0pt; mso-ligatures: none; mso-no-proof: yes;">&nbsp;&nbsp;703.816.8117</span></span></p>\n</td>\n</tr>\n</tbody>\n</table>\n<p class="MsoNormal"><span style="mso-bookmark: _MailAutoSig;"><span style="mso-ascii-font-family: Calibri; mso-fareast-font-family: \'Times New Roman\'; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-bidi-font-family: Calibri; color: #212121; mso-font-kerning: 0pt; mso-ligatures: none; mso-no-proof: yes;">&nbsp;</span></span></p>\n</div>',
            padding: "50px",
          },
        ],
      },
      {
        id: 1004,
        name: "Spacer",
        componentSave: ["Spacer", { height: "30px", color: "White" }],
      },
    ],
    footer: "none",
    backgroundColor: "#f5f5f5",
  },
  {
    name: "ARC Pay",
    id: "arc-pay",
    backgroundColor: "#f5f5f5",
    template: [
      {
        id: "2",
        name: "Standard Header",
        componentSave: ["StandardHeader", { color: "teal" }],
      },
      {
        id: "19",
        name: "Spacer",
        componentSave: ["Spacer", { height: "30" }],
      },
      {
        id: "3",
        name: "Text Block",
        componentSave: [
          "TextBlock",
          {
            text: '<center><img style="display: block; margin-left: auto; margin-right: auto;" src="https://www2.arccorp.com/globalassets/email-parts/arc-pay.png" alt="" width="350" height="91"></center><p>&nbsp;</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dolor nisl, gravida semper faucibus non, interdum sed metus. Etiam consequat lacus arcu, sed accumsan tellus imperdiet nec. Cras nec lectus vel sem dignissim volutpat. Etiam sodales bibendum ipsum, vel tristique tortor commodo at. Vivamus tempor mauris non turpis suscipit, ac lacinia leo condimentum. Vestibulum nec sollicitudin sapien, sit amet bibendum est. Vivamus magna libero, semper vitae sem sit amet, scelerisque scelerisque nulla.<br><br>Suspendisse semper eros eget iaculis venenatis. Integer ultricies tempus sem id tempor. Fusce maximus ullamcorper tortor, sed varius purus porta sit amet. Vivamus in nunc sodales, sagittis augue sit amet, sollicitudin augue. Nulla sit amet lacus neque. Nullam nec risus nunc. Curabitur id lorem ac mi pharetra laoreet.</p>',
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
];

export default emailTemplates;
