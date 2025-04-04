import React, { Component } from "react";
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

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={BUlogo} alt="BUlogo" className="bulogo-img" />
      </div>
      <div>
        <img src={PRlogo} alt="PRlogo" className="prlogo-img" />
      </div>
      <div>
        <img src={MRlogo} alt="MRlogo" className="mrlogo-img" />
      </div>
      <div>
        <img src={MTlogo} alt="MTlogo" className="mtlogo-img" />
      </div>
      <div>
        <img src={SPlogo} alt="SPlogo" className="splogo-img" />
      </div>
      <div>
        <img src={MClogo} alt="MClogo" className="mclogo-img" />
      </div>
      <div>
        <img src={GAlogo} alt="GAlogo" className="galogo-img" />
      </div>
      <div>
        <img src={USPlogo} alt="USPlogo" className="usplogo-img" />
      </div>
      <div>
        <img src={CUlogo} alt="CUlogo" className="culogo-img" />
      </div>
      <div>
        <img src={FARlogo} alt="FARlogo" className="farlogo-img" />
      </div>
      <div>
        <img src={RESlogo} alt="RESlogo" className="reslogo-img" />
      </div>
      <div>
        <img src={BAlogo} alt="BAlogo" className="balogo-img" />
      </div>
      <div>
        <img src={CBlogo} alt="CBlogo" className="cblogo-img" />
      </div>
    </Slider>
  );
};

export default class CompanyLogo extends Component {
  render() {
    return (
      <div>
        <h3
          className="font-rubik"
          style={{ textAlign: "center", marginTop: "100px" }}
        >
          Marquee Customers
        </h3>
        <div className="col-lg-13 company-logo pb-50">
          <ImageSlider />
        </div>
      </div>
    );
  }
}
