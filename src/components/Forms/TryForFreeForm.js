import React, { useState } from "react";
import { openPopupWidget, CalendlyEventListener } from "react-calendly";
import emailjs from "@emailjs/browser";
import LoadingSpin from "react-loading-spin";
var validator = require("email-validator");

export default function TryForFreeForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event, urlCal) => {
    event.preventDefault();

    // if(email.replace(/\s+/g, '').length === 0){
    //   setError("Please enter email Id")
    //     }else if(validator.validate(email)){
    //       setError("")
    //       setLoading(true)
    //       window.lintrk('track', { conversion_id: 7514444 })
    //       emailjs.sendForm('service_h28clne', 'template_0vm3br4', event.target, '_SkP_OebRj5Q-nHBw')
    //     .then((result) => {
    //         console.log(result.text);
    //         setLoading(false)
    //         openPopupWidget({ url:"https://calendly.com/bizgamsupport/effybuy", styles:{
    //           color:"white",
    //           border:"none",
    //           }, pageSettings:{
    //             hideEventTypeDetails: false,
    //             hideLandingPageDetails: false,
    //           }});
    //         }, (error) => {
    //           console.log(error.text);
    //           openPopupWidget({ url:"https://calendly.com/bizgamsupport/effybuy", styles:{
    //             color:"white",
    //             border:"none",
    //             }, pageSettings:{
    //               hideEventTypeDetails: false,
    //               hideLandingPageDetails: false,
    //             }});
    //     });
    //     var callback = function () {
    //       if (typeof(url) != 'undefined') {
    //         window.location = urlCal;
    //       }
    //     };
    //     window.gtag('event', 'conversion', {
    //         'send_to': 'AW-304854293/KcwlCLPJ4akDEJXqrpEB',
    //         'event_callback': callback
    //     });
    //     return false;
    //     }else{
    //       setError("Please enter valid email")
    //     }

    // Newwww

    if (email.replace(/\s+/g, "").length === 0) {
      setError("Please enter email Id");
    } else if (validator.validate(email)) {
      setError("");
      setLoading(true);
      window.lintrk("track", { conversion_id: 7514444 });
      emailjs.sendForm(
        "service_h28clne",
        "template_0vm3br4",
        event.target,
        "_SkP_OebRj5Q-nHBw"
      );
      openPopupWidget({
        url: "https://calendly.com/bizgamsupport/effybuy",
        styles: {
          color: "white",
          border: "none",
        },
        pageSettings: {
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
        },
      });
      setLoading(false);
      var callback = function () {
        if (typeof url != "undefined") {
          window.location = urlCal;
        }
      };
      window.gtag("event", "conversion", {
        send_to: "AW-304854293/KcwlCLPJ4akDEJXqrpEB",
        event_callback: callback,
      });
      return false;
    } else {
      setError("Please enter valid email");
    }
  };

  function change(e) {
    setEmail(e.target.value);
  }
  return (
    <>
      {!loading && (
        <div>
          <form
            onSubmit={(e) => {
              handleSubmit(e, "https://calendly.com/bizgamsupport/effybuy");
            }}
          >
            <input
              type="text"
              placeholder="Enter your Business Email"
              name="email"
              value={email}
              onChange={(e) => {
                change(e);
              }}
            />
            <button type="submit">Request Demo</button>
            <CalendlyEventListener
              onEventScheduled={(e) => {
                if (e.data.event === "calendly.event_scheduled") {
                  window.open(
                    "https://www.effybuy.com/EffyBuy/calendly_conformation"
                  );
                }
              }}
            ></CalendlyEventListener>
          </form>
          <div style={{ textAlign: "center", color: "red" }}>{error}</div>
        </div>
      )}

      {loading && (
        <div className={"ExampleOfUsage"}>
          <LoadingSpin
            duration="2s"
            width="5px"
            timingFunction="ease-in-out"
            direction="alternate"
            size="50px"
            primaryColor="#242424"
            secondaryColor="#ffeaa0"
            numberOfRotationsInAnimation={2}
          />
        </div>
      )}
    </>
  );
}
