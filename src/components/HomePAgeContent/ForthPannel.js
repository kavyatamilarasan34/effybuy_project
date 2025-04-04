import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/icon/93.svg";
import Get_on_boarding_less from "../../assets/images/media/Get_on_boarding_at_less_time.webp";
import affordable_price from "../../assets/images/media/affordable_pricing.webp";
import transparency from "../../assets/images/media/radical_transparency.webp";
import automate from "../../assets/images/media/purchase_automate.webp";

export default function ForthPannel() {
  return (
    <div className="fancy-feature-sixteen pt-200 md-pt-100" id="features">
      <div className="container" style={{ overflow: "hidden" }}>
        <div className="block-style-eighteen">
          <div className="row align-items-center">
            <div
              className="col-lg-6 order-lg-first"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="text-wrapper">
                <h3 className="title">
                  Instantly <span>automate</span> all your purchases
                </h3>
                <p>
                  With 2 purchase options, RFQ and Reverse Auction, all your
                  purchasing activities can be automated.
                </p>
                <Link
                  // to="/rfq"
                  to="/EffyBuy/rfp-rfq-software"
                  className="d-flex align-items-center learn-more"
                >
                  <span>Learn more about RFQ</span>
                  <img src={arrow} alt="screen" />
                </Link>
                <Link
                  // to="/reverseAuction"
                  to="/EffyBuy/reverse-auction-software"
                  className="d-flex align-items-center learn-more"
                >
                  <span>Learn more about Reverse Auction</span>
                  <img src={arrow} alt="screen" />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 order-lg-last"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div
                className="
                    d-flex
                    align-items-center
                    justify-content-center
                  "
              >
                <div
                  className="
                      round-bg
                      big_g
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                  style={{ width: "400px" }}
                >
                  <img src={automate} alt="Automate Purchase" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="block-style-eighteen mt-200 pt-50 md-mt-80">
          <div className="row align-items-center">
            <div
              className="col-lg-6 order-lg-last"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div className="text-wrapper">
                <h3 className="title">
                  Get on-boarded in <br />
                  less than <span>10 minutes</span>
                </h3>
                <p>
                  EffyBuy is extremely easy to sign-up and use. You can set it
                  up on your own in less than half an hour, or if you need any
                  help, you can always set it up with the help of our customer
                  support team via an online meeting.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 order-lg-first"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div
                className="
                      round-bg
                      big_g
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                style={{ textAlign: "center" }}
              >
                <img
                  src={Get_on_boarding_less}
                  style={{ width: "400px" }}
                  alt="Get On Boarding"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="block-style-eighteen mt-200 pt-50 md-mt-80">
          <div className="row align-items-center">
            <div
              className="col-lg-6 order-lg-first"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="text-wrapper">
                <h3 className="title">
                  <span>Affordable</span> pricing
                </h3>
                <p>
                  You don't have to break the bank with our very affordable
                  pricing. We have created special pricing for businesses that
                  are extremely affordable. We guarantee you'll get your money
                  back in savings within 1 week of usage.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div
                className="
                    order-lg-last
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                style={{ textAlign: "center" }}
              >
                <img
                  src={affordable_price}
                  style={{ width: "400px" }}
                  alt="Affordable RFQ Pricing"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="block-style-eighteen mt-200 pt-50 md-mt-80">
          <div className="row align-items-center">
            <div
              className="col-lg-6 order-lg-last"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div className="text-wrapper">
                <h3 className="title">
                  Promoting radical <span>transparency</span> in the purchase
                  process
                </h3>
                <p>
                  Usually, all quotes and negotiations are not verifiable or
                  usable for data analytics. Now with EffyBuy capture every
                  details of all quotes received by automating the RFQ process.
                  Get clean data for reports & analytics through our smart
                  dashboard.
                </p>
              </div>
            </div>
            <div
              className="
                  col-lg-6 order-lg-first"
              data-aos="fade-right"
              data-aos-duration="1200"
              style={{ textAlign: "center" }}
            >
              <img
                src={transparency}
                style={{ width: "400px" }}
                alt="Radical Transparency"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
