import React from "react";
import ARCFooter from "../components/ARCFooter";
import ARCLogo from "../components/ARCLogo";
import TACJumbo from "../components/TACJumbo";
import TACLink from "../components/TACLink";
import TACBottom from "../components/TACBottom";

const emailTemplates = [
    {
        name: 'TAC',
        id: 'tac-template',
        parts: [
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
          ],
    },
    // {
    //     name: 'Option 2',
    //     id: 'other-template',
    //     template: [
    //         {
    //           id: "1",
    //           name: "ARC Logo Header",
    //           component: <ARCLogo color="" link="https://www2.arccorp.com" />,
    //         },
    //         {
    //           id: "6",
    //           name: "TAC Jumbo",
    //           component: (
    //             <TACJumbo
    //               title="Travel Agent Communications"
    //               link="https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/"
    //               date="01/01/2023"
    //             />
    //           ),
    //         },
    //         {
    //           id: "8",
    //           name: "TAC Link",
    //           component: (
    //             <TACLink
    //               link="https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/"
    //               title="Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //           "
    //             />
    //           ),
    //         },
    //         {
    //           id: "9",
    //           name: "TAC Link",
    //           component: (
    //             <TACLink
    //               link="https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/"
    //               title="Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //           "
    //             />
    //           ),
    //         },
    //         {
    //           id: "10",
    //           name: "TAC Link",
    //           component: (
    //             <TACLink
    //               link="https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/"
    //               title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
    //             />
    //           ),
    //         },
    //         {
    //           id: "11",
    //           name: "TAC Bottom",
    //           component: (
    //             <TACBottom
    //               TIP_Title="Tip of the Week"
    //               TIP_Text="Lorem ipsum dolor sit amet consectetur "
    //               TIP_Link="https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/"
    //               Events_Title="Events and Trainings"
    //               Events_Text="Stay up to date with the latest industry and knowledge."
    //               Events_Link="https://www2.arccorp.com/about-us/events/"
    //             />
    //           ),
    //         },
    //       ],
    // }
];

export default emailTemplates;