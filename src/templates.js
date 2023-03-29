import React from "react";
import ARCFooter from "../components/ARCFooter";
import ARCLogo from "../components/ARCLogo";
import TACJumbo from "../components/TACJumbo";
import TACLink from "../components/TACLink";
import TACBottom from "../components/TACBottom";
import StandardHeader from "../components/StandardHeader";
import TextBlock from "../components/TextBlock";
import Button from "../components/Button";
import AddressSection from "../components/AddressSection";
import AerogramLogo from "../components/AerogramLogo";
import Spacer from "../components/Spacer";
import AeroImage from "../components/AeroImage";

const emailTemplates = [
    {
        name: 'TAC',
        id: 'tac-template',
        template: [
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
    {
        name: 'Operational',
        id: 'operational',
        template: [
            {
              id: "2",
              name: "Standard Header",
              component: <StandardHeader color="teal" />,
            },
            {
              id: "3",
              name: "Text Block",
              component: (
                <TextBlock text='<h1 style="text-align: center;">Place story two headline<br class="em_hide">in this position</h1>
                <p>&nbsp;</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dolor nisl, gravida semper faucibus non, interdum sed metus. Etiam consequat lacus arcu, sed accumsan tellus imperdiet nec. Cras nec lectus vel sem dignissim volutpat. Etiam sodales bibendum ipsum, vel tristique tortor commodo at. Vivamus tempor mauris non turpis suscipit, ac lacinia leo condimentum. Vestibulum nec sollicitudin sapien, sit amet bibendum est. Vivamus magna libero, semper vitae sem sit amet, scelerisque scelerisque nulla.<br><br>Suspendisse semper eros eget iaculis venenatis. Integer ultricies tempus sem id tempor. Fusce maximus ullamcorper tortor, sed varius purus porta sit amet. Vivamus in nunc sodales, sagittis augue sit amet, sollicitudin augue. Nulla sit amet lacus neque. Nullam nec risus nunc. Curabitur id lorem ac mi pharetra laoreet.</p>'
                padding="50px"
                />
              ),
            },
            {
              id: "4",
              name: "Button",
              component: (
                <Button text="LEARN MORE"/>
              ),
            },
            {
              id: "5",
              name: "Address Footer",
              component: (
                <AddressSection color="teal"/>
              ),
            },
          ],
    },
    {
      name: 'AeroGram',
      id: 'aerogram',
      template: [
          {
            id: "12",
            name: "Aerogram Header",
            component: <AerogramLogo/>,
          },{
            id: "13",
            name: "Aerogram Image",
            component: (
              <AeroImage/>
            ),
          },
          {
            id: "14",
            name: "Spacer",
            component: (
              <Spacer height="30"/>
            ),
          },
          {
            id: "15",
            name: "Text Block",
            component: (
              <TextBlock text='<h1 style="text-align: center;">Place story two headline<br class="em_hide">in this position</h1>
              <p>&nbsp;</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dolor nisl, gravida semper faucibus non, interdum sed metus. Etiam consequat lacus arcu, sed accumsan tellus imperdiet nec. Cras nec lectus vel sem dignissim volutpat. Etiam sodales bibendum ipsum, vel tristique tortor commodo at. Vivamus tempor mauris non turpis suscipit, ac lacinia leo condimentum. Vestibulum nec sollicitudin sapien, sit amet bibendum est. Vivamus magna libero, semper vitae sem sit amet, scelerisque scelerisque nulla.<br><br>Suspendisse semper eros eget iaculis venenatis. Integer ultricies tempus sem id tempor. Fusce maximus ullamcorper tortor, sed varius purus porta sit amet. Vivamus in nunc sodales, sagittis augue sit amet, sollicitudin augue. Nulla sit amet lacus neque. Nullam nec risus nunc. Curabitur id lorem ac mi pharetra laoreet.</p>'
              padding="50px"
              />
            ),
          },
          {
            id: "16",
            name: "Spacer",
            component: (
              <Spacer height="60px"/>
            ),
          },
        ],
  }
];

export default emailTemplates;