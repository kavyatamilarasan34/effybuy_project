import React from "react";
import FirstPannel from "../HomePAgeContent/FirstPannel";
import SecondPannel from "../HomePAgeContent/SecondPannel";
import ThirdPannel from "../HomePAgeContent/ThirdPannel";
import ForthPannel from "../HomePAgeContent/ForthPannel";
import FifthPannel from "../HomePAgeContent/FifthPannel";
import SixthPannel from "../HomePAgeContent/SixthPannel";
import SeventhPannel from "../HomePAgeContent/SeventhPannel";
import EighthPannel from "../HomePAgeContent/EighthPannel";
import Video from "../HomePAgeContent/Video";
import useDocumentTitle from "../useDocumentTitle";
import first_pannel_image from "../../assets/images/FirstPannel.webp";
import DocumentMeta from "react-document-meta";
import Testimonials from "../HomePAgeContent/Testimonials";
import Testimonial2 from "../HomePAgeContent/Testimonial2";
import CompanyLogo from "../HomePAgeContent/CompanyLogo";

class HomePageContent extends React.Component {
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
        <FirstPannel firstimg={first_pannel_image} />
        <CompanyLogo />
        <SecondPannel />
        <ThirdPannel />
        <Video />
        <ForthPannel />
        <FifthPannel />
        <SeventhPannel />
        {/* <Testimonials/> */}
        <Testimonial2 />
        <EighthPannel />
        <SixthPannel />
      </>
      // </DocumentMeta>
    );
  }
}

export default HomePageContent;
