import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GAlogo from "../../assets/images/icon/GAL.png";
import MClogo from "../../assets/images/icon/MCL.png";
import BUlogo from "../../assets/images/icon/BULLL.png";
import PRlogo from "../../assets/images/icon/PROPELL.png";
import MRlogo from "../../assets/images/icon/MRPL.png";
import MTlogo from "../../assets/images/icon/MTL.png";
import SPlogo from "../../assets/images/icon/SPAL.png";
import CBlogo from "../../assets/images/icon/CELEBI.png";
import CUlogo from "../../assets/images/icon/CUMI.png";
import USPlogo from "../../assets/images/icon/USP.png";
import FARlogo from "../../assets/images/icon/Fairmont.png";
import RESlogo from "../../assets/images/icon/RASSENSE.png";
import BAlogo from "../../assets/images/icon/Banari.png";
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

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    rows: 2,
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
          <div key={index} className="logo-block">
            <img src={logo} alt={`Logo ${index}`} className="logo-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CompanyLogo = () => {
  return (
    <div>
      <h3 className="font-rubik" style={{ textAlign: "center", marginTop: "100px" }}>
        Marquee Customers
      </h3>
      <div className="company-logo pb-50">
        <ImageSlider />
      </div>
    </div>
  );
};

export default CompanyLogo;
