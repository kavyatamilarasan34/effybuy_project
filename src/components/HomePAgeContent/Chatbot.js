import React, { Component } from 'react'
import './chatbot.css'
import { PopupWidget,CalendlyEventListener } from "react-calendly";
import Fab from '@material-ui/core/Fab';
import WhatsApp from '@material-ui/icons/WhatsApp';
import {Helmet} from "react-helmet";
import PopUpImage from "../../assets/images/icon/pop_up_image.jpg";

export default class Chatbot extends Component {

    constructor(props) {
        super(props);
        this.state = {
          showPopup: sessionStorage.getItem("popupShown") !== "true"
        };
      }
    
    componentDidMount() {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
        head.appendChild(script);

        if (!sessionStorage.getItem("popupShown")) {
          setTimeout(() => {
            this.setState({ showPopup: true });
            sessionStorage.setItem("popupShown", "true"); 
          }, 100);
        }
    }
    

        gtag_report_conversion(url) {
          var callback = function () {
            if (typeof(url) != 'undefined') {
              window.location = url;
            }
          };
          window.lintrk('track', { conversion_id: 7514476 });
          window.gtag('event', 'conversion', {
              'send_to': 'AW-304854293/CvLuCK2fjKQDEJXqrpEB',
              'event_callback': callback
          });
          return false;
        }

        gtag_report_conversion2(url) {
            var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              window.lintrk('track', { conversion_id: 7514444 });
              window.gtag('event', 'conversion', {
                  'send_to': 'AW-304854293/KcwlCLPJ4akDEJXqrpEB',
                  'event_callback': callback
              });
              return false;
        }

        closePopup = () => {
            this.setState({ showPopup: false });
          };
        

    render() {
        return (
            <div>
                <Helmet>
                    <script type="text/javascript">
                        {`function gtag_report_conversion(url) {
                        var callback = function () {
                            if (typeof(url) != 'undefined') {
                            window.location = url;
                            }
                        };
                        gtag('event', 'conversion', {
                            'send_to': 'AW-304854293/vNDSCLXC06QDEJXqrpEB',
                            'event_callback': callback
                        });
                        return false;
                        }`}
                    </script>
                </Helmet>
            <div className="chatbot_main_div">
                <div className="chatbot_whatsapp_div" >
                    {this.state.showPopup && (
                        
                        <div
                            style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                zIndex: 999
                            }}
                        >
                           
                        <div
                            style={{
                            position: "relative",
                            backgroundColor: "#fff",
                            padding: "11px",
                            boxShadow: "0 5px 15px rgb(36, 35, 35)"
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    marginTop: "-8px",
                                }}
                                >
                                <button
                                    onClick={this.closePopup}
                                    style={{
                                    background: "transparent",
                                    border: "none",
                                    fontSize: "20px",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                    color: "#333",
                                    marginBottom: "1px",
                                    }}
                                >
                                    &times;
                                </button>
                                </div>

                            <img
                            src={PopUpImage}
                            alt="Popup"
                            style={{
                                width: "400px",
                                borderRadius: "2px",
                                display: "block",
                                maxWidth: "90vw",
                                height: "auto",
                                paddingTop: "5px",
                            }}
                            />
                            <div style={{ display: "flex", justifyContent: "center"}}>
                                <button
                                    className="register_button_pop_up"
                                    onClick={() =>
                                    window.open(
                                        "https://docs.google.com/forms/d/1OhpoSDYBWyGAo1NO2KLrVtiTNGDn3mZuHIf-GMUPdL8/edit",
                                        "_blank"
                                    )
                                    }
                                > 
                                    Register Now
                                </button>
                            </div>
                            <div>
                              <a href="/EffyBuy/webinars/webinar_two"
                                onClick={() => {
                                    this.closePopup();
                                      window.location.href = "/EffyBuy/webinars/webinar_two"; 
                                  }}
                                // rel="noopener noreferrer" 
                                style={{ display: "flex", justifyContent: "center", color: '#003cab', fontSize: "14px", marginBottom: "10px" }}
                                >
                                Learn more about our Webinar
                              </a>
                            </div>
                        </div>
                    </div>
                   )}
                </div>

                <div className="chatbot_whatsapp_div" onClick={()=>{this.gtag_report_conversion('https://api.whatsapp.com/send?phone=917538851133&amp;text=Hey! Looking for EffyBuy Solution! Can you help ?')}}>
                   
                    <Fab color="primary" aria-label="add">
                    <a rel="noreferrer" href="https://api.whatsapp.com/send?phone=917538851133&amp;text=Hey! Looking for EffyBuy Solution! Can you help ?" className="whatsapp" target="_blank" title="WhatsApp us" style={{"textDecoration":"none"}}>
                        <WhatsApp fontSize="large"/>
                    </a> 
                    </Fab>
                </div>

                <div className="chatbot_requestdemo_div" onClick={()=>{this.gtag_report_conversion2('https://calendly.com/bizgamsupport/effybuy')}}>
                                    
                    <PopupWidget  url="https://calendly.com/bizgamsupport/effybuy"
                        text="Request Demo"
                        />
                        <CalendlyEventListener onEventScheduled={(e)=>{
                    if(e.data.event === "calendly.event_scheduled"){
                      window.open('https://www.effybuy.com/EffyBuy/calendly_conformation');
                    }
                    }}></CalendlyEventListener>
                               
                </div>

            </div>
            </div>
        )
    }
}
