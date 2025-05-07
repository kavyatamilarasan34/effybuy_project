import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GAlogo from "../../assets/images/icon/Fly Smart_logo_1.png";
import MClogo from "../../assets/images/icon/Messer_logo_1.png";
import BUlogo from "../../assets/images/icon/bull_logo_1.png";
import PRlogo from "../../assets/images/icon/Propel_logo_1.png";
import MRlogo from "../../assets/images/icon/MRP_logo_1.png";
import MTlogo from "../../assets/images/icon/Micro Turners_logo_1.png";
import SPlogo from "../../assets/images/icon/s.p.apparels_logo_1.png";
import CBlogo from "../../assets/images/icon/Celebi_logo_1.png";
import CUlogo from "../../assets/images/icon/Cumi_logo_1.png";
import USPlogo from "../../assets/images/icon/usp_logo_1.png";
import FARlogo from "../../assets/images/icon/Fairmont_logo_1.png";
import RESlogo from "../../assets/images/icon/Rassense_logo_1.png";
import BAlogo from "../../assets/images/icon/Bannari Amman_logo_1.png";
import "./CompanyLogo.css";

const logos = [
  BUlogo, PRlogo, MRlogo, MTlogo, SPlogo, MClogo, GAlogo,
  USPlogo, CUlogo, FARlogo, RESlogo, BAlogo, CBlogo
];

// Custom arrow components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      ›
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      ‹
    </div>
  );
};

const ImageSlider = ({ logos, offset = false }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    // rows: 2,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="logo-block"  style={{
            paddingLeft: offset && index === 0 ? "50px" : "0" 
          }}>
            <img src={logo} alt={`Logo ${index}`} className="logo-img mb-5"  style={{ borderRadius:"10px", maxWidth: "100%"  }}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CompanyLogo = () => {
  const evenLogos = logos.filter((_, i) => i % 2 === 0);
  const oddLogos = logos.filter((_, i) => i % 2 !== 0);

  return (
    <div className="title-style-seven text-center" style={{ backgroundColor: "#ecf0f4", paddingTop: "40px" , paddingBottom: "2px" }}>
      <h3 className="font-rubik" style={{ textAlign: "center",paddingBottom: "10px" }}>Marquee Customers</h3>
      <br />
      <ImageSlider logos={evenLogos} offset={false} />
      <ImageSlider logos={oddLogos} offset={true} />
    </div>
  );
};

export default CompanyLogo;
