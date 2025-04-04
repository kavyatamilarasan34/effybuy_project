import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shape from "../../assets/images/shape/42.svg";
import shape39 from "../../assets/images/shape/39.svg";
import icon from "../../assets/images/icon/30.svg";
import GAlogo from "../../assets/images/icon/GoAirlines.png";
import MClogo from "../../assets/images/icon/MCS_Logo.svg";
import BUlogo from "../../assets/images/icon/BULL.png";
import PRlogo from "../../assets/images/icon/Propel.png";
import MRlogo from "../../assets/images/icon/mrp.jpg";
import MTlogo from "../../assets/images/icon/MicroTurners.png";
import CElogo from "../../assets/images/icon/CELEBI.png";
import Star1 from "../../assets/images/icon/Star1.jpg";
import Star2 from "../../assets/images/icon/Star2.jpg";
import Star3 from "../../assets/images/icon/Star3.jpg";
import Star4 from "../../assets/images/icon/Star4.jpg";
import Star5 from "../../assets/images/icon/Star5.jpg";
import { startTransition } from "react";

const TestimonilContent = [
  {
    desc: `Effybuy has definitely imparted massive changes in terms of transparency and savings in the Purchase 
      department. The manual negotiation that took more than 3 days on average to complete a single purchase deal 
      was replaced by closing out a deal in an average time of 3 hours through Effybuy’s Reverse Auction. 
      Effybuy has helped us save a maximum of 10% to 15% savings on all the raw material categories, even in the 
      case of day-to-day fluctuations in market price trends.`,
    reviewerImg: PRlogo,
    reviewerName: "Procurement Manager",
    designation: "Propel Industries",
    starImg: Star5,
  },
  {
    desc: `Effybuy helped us gain 15% higher savings on our scrap sales. Highly recommendable.`,
    reviewerImg: MRlogo,
    reviewerName: "IT Head",
    designation: "Madras Radiators & Pressings Ltd",
    starImg: Star5,
  },
  {
    desc: `Seamless user experience, Realised cost savings and real-time visibility on our purchases. 
      Minimalistic training is required. Suppliers find it easy to submit their quotes with an instruction manual,
      thus achieving a better seller-seller relationship.`,
    reviewerImg: BUlogo,
    reviewerName: "Procurement Head",
    designation: "Bull Machines",
    starImg: Star5,
  },
  {
    desc: ` The Conventional process of handling tenders and negotiations consumed most of our valuable time. 
      One RFQ takes 2 days to share it to the vendors. With Effybuy, We share RFQ’s in minutes eliminating 
      time in comparing the quotations manually. The Negotiations consume more than a week to select a 
      particular vendor but now, With Reverse Auctions, We complete our Negotiations within an hour 
      and get complete comparison Analytics without any human intervention.`,
    reviewerImg: GAlogo,
    reviewerName: "Contract Manager",
    designation: "Go Air",
    starImg: Star5,
  },
  {
    desc: `The RFQ process , when generated manually, created a lot of confusion with our Emails all over the inbox. 
      Manual errors played a major role in missing a few vendors and analysing the pending lists were another 
      tedious and laborious task to do. The efficiency of our Purchases have increased with the elimination 
      of multiple follow ups and less manual intervention.`,
    reviewerImg: MClogo,
    reviewerName: "Manager",
    designation: "Messer Cutting",
    starImg: Star5,
  },
  {
    reviewerImg: MTlogo,
    reviewerName: "Vice President & Chief Procurement",
    designation: "Microturners",
    starImg: Star5,
  },
];

const settings = {
  dots: false,
  arrow: true,
  infinite: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  margin: 30,
};

export default class Testimonial2 extends Component {
  render() {
    return (
      <div
        className="client-feedback-slider-one pt-50 pb-5 md-pb-80"
        style={{ overflow: "hidden" }}
      >
        <div className="shapes-holder">
          <img src={shape39} alt="shape" />
          <img src={shape} alt="shape" className="shapes shape-one" />
          <div className="title-style-two">
            <h2>
              What’s <br />
              Our Client Say <br />
              About Us.
            </h2>
          </div>
        </div>
        {/* /.shapes-holder */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ml-auto">
              <div className="feedback-meta">
                {/* <div className="watermark font-gilroy-bold">Feedback</div> */}
                <img src={icon} alt="shape" className="icon" />
                <div className="clientSliderOne">
                  <Slider {...settings}>
                    {TestimonilContent.map((val, i) => (
                      <div
                        className="item"
                        key={i}
                        data-aos="fade-up"
                        data-aos-duration="1200"
                      >
                        <p className="font-rubik">{val.desc}</p>
                        <div className="d-lg-flex align-items-center">
                          <img
                            src={`${val.reviewerImg}`}
                            alt=""
                            className="c_img"
                          />
                          <div className="info">
                            <strong>{val.reviewerName}</strong>
                            <span>{val.designation}</span>
                          </div>
                          <img
                            src={`${val.starImg}`}
                            alt=""
                            className="star_img"
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
              {/* /.feedback-meta */}
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      // </div>
    );
  }
}
