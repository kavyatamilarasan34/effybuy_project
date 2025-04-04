import React from "react";
import img1 from "../../assets/images/shape/171.svg";
import img2 from "../../assets/images/shape/172.svg";
import { PopupButton, CalendlyEventListener } from "react-calendly";

export default class EighthPannel extends React.Component {
  gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url != "undefined") {
        // window.location = url;
      }
    };
    window.lintrk("track", { conversion_id: 7514444 });
    window.gtag("event", "conversion", {
      send_to: "AW-304854293/KcwlCLPJ4akDEJXqrpEB",
      event_callback: callback,
    });
    return false;
  }
  render() {
    return (
      <div className="fancy-short-banner-eight mt-50 md-mt-80">
        <div className="container" style={{ overflow: "hidden" }}>
          <div className="row">
            <div
              className="col-xl-8 col-lg-11 m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="title-style-seven text-center">
                <h2>
                  <span>100+</span> Customer's are buying efficiently using
                  EffyBuy !
                </h2>
                <p>Try Now - One month free trial.</p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
            <div
              className="download-btn"
              onClick={() => {
                this.gtag_report_conversion(
                  "https://calendly.com/bizgamsupport/effybuy"
                );
              }}
            >
              <PopupButton
                url="https://calendly.com/bizgamsupport/effybuy"
                text="Request Demo"
                pageSettings={{
                  // backgroundColor: 'ffffff',
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  // primaryColor: '008ed9',
                  // textColor: '4d5055',
                }}
                styles={{
                  color: "white",
                  // backgroundColor: 'red',
                  border: "none",
                  // fontSize:"25px"
                }}
              />
              <CalendlyEventListener
                onEventScheduled={(e) => {
                  if (e.data.event === "calendly.event_scheduled") {
                    window.open(
                      "https://www.effybuy.com/EffyBuy/calendly_conformation"
                    );
                  }
                }}
              ></CalendlyEventListener>
            </div>
          </div>
        </div>
        <img src={img1} alt="shape" className="shapes shape-one" />
        <img src={img2} alt="shape" className="shapes shape-two" />
      </div>
    );
  }
}
