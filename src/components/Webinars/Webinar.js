import React from "react";
import '../Knowledge Source/PPT/ppt.css'
import TenthPannel from "../HomePAgeContent/TenthPannel";
import NinthPannel from "../HomePAgeContent/NinthPannel";
import EighthPannel from "../HomePAgeContent/EighthPannel";
import EleventhPannel from "../HomePAgeContent/EleventhPannel";
import TwelthPannel from "../HomePAgeContent/TwelthPannel";
import CompanyLogo from "../HomePAgeContent/CompanyLogo";

class WebinarLandingPage extends React.Component {
  render() {
    const meta = {
      title: "RFP Management Software - Procurement Sourcing Software",
      description:
        "Effybuy Instantly Automate all your Purchases using RFQ and the Reverse Auction Process. Avoid Manual Errors and Save Money for your Business. Request a Demo Now.",
      meta: {
        charset: "utf-8",
        // name: {
        //   keywords: 'react,meta,document,html,tags'
        // }
      },
    };
    return (
      
      // <DocumentMeta {...meta}>
      <>
         <TenthPannel />
        <NinthPannel />
        <TwelthPannel />
        <EleventhPannel />
        <CompanyLogo />
        <EighthPannel />
        
      </>
      // </DocumentMeta>
    );
  }
}

export default WebinarLandingPage;
