import React, { Component } from "react";
import "./pricing.css";
// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemHeading,
//     AccordionItemButton,
//     AccordionItemPanel,
//   } from "react-accessible-accordion";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Brand_promise from "../../assets/images/icon/1621436901571.png";
import PricingTable from "./PricingTable";
import axios from "axios";
import PricingPanel from "../HomePAgeContent/SeventhPannel";
import DocumentMeta from "react-document-meta";
import SixthPannel from "../HomePAgeContent/SixthPannel";

const FaqContent = [
  {
    title: "Can I get a demo of EffyBuy?",
    desc: `Yes, we would be happy to demonstrate EffyBuy through a web-conference at your convenience.
      The demo is a one hour session. To schedule your personal session, please contact support@bizgam.com.`,
    expand: "a",
  },
  {
    title: "What types of payment do you accept?",
    desc: `We accept payment via Visa, MasterCard, American Express and PayPal. We also accept 
      payment via bank transfer or check transfer for yearly subscriptions. 
      For more details, please contact support@bizgam.com.`,
    expand: "b",
  },
  {
    title: "How long are your contracts?",
    desc: `You are not bound by any contracts or commitments. EffyBuy is a pay-as-you-go service (monthly or yearly), 
      so you can make changes to your plan whenever you need to.`,
    expand: "c",
  },
];
const FaqContentTwo = [
  {
    title: "Can I switch plans?",
    desc: `Of course you can! Log in to bizgam, click the Upgrade link on the Home page, 
      and follow the steps on the Subscription page to switch to a new plan.`,
    expand: "e",
  },
  {
    title: "Have more questions?",
    desc: `You can connect with us instantly through live chat (24x5) or by writing to us at support@bizgam.com.`,
    expand: "f",
  },
  {
    title: "Is my data safe?",
    desc: `We’re fervent about keeping your data safe and secure. Our facilities feature 
      stringent 24/7/365 security with video monitoring, biometric access, and advanced fire, 
      flood, and theft monitoring systems. Our network security system employs the latest 
      encryption and intrusion detection and prevention technologies.`,
    expand: "g",
  },
];

export default class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: "$",
      startup: [68, 27],
      professional: [136, 68],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = "EffyBuy | Pricing";
    // let url2 = 'https://extreme-ip-lookup.com/json/'
    let url2 =
      "https://geolocation-db.com/json/f9902210-97f0-11eb-a459-b997d30983f1";

    // const url = `${url2}`;
    axios.get(url2).then((res) => {
      if (res.data.country_code === "IN") {
        this.setState({
          symbol: "₹",
          startup: [5000, 1999],
          professional: [10000, 4999],
        });
      } else if (
        res.data.country_code === "JP"
        // res.country_code === 'US' || 'AS' || 'EC' || 'EV' || 'GU' || 'MH'
        // || 'FM' || 'PW' || 'MP' || 'PR' || 'TC' || 'UM' || 'IO' || 'BQ'
      ) {
        this.setState({
          symbol: "¥",
          startup: [7625, 3050],
          professional: [15250, 7625],
        });
      } else if (
        res.data.country_code === "US"
        // || 'AS' || 'EC' || 'EV' || 'GU' || 'MH'
        // || 'FM' || 'PW' || 'MP' || 'PR' || 'TC' || 'UM' || 'IO' || 'BQ'
      ) {
        this.setState({
          symbol: "$",
          startup: [68, 27],
          professional: [136, 68],
        });
      } else if (
        res.data.country_code === "NL"
        // || 'AD' || 'BE' || 'ES' || 'GP' || 'IE' || 'IT' || 'AT' || 'GR'
        // || 'CY' || 'LV' || 'LT' || 'LU' || 'MT' || 'MQ' || 'YT' || 'MC' || 'PT' || 'FR' || 'GF' ||
        // 'RE' || 'PM' || 'DE' || 'SM' || 'SK' || 'SI' || 'FI' || 'EE' || 'TF' || 'ME' || 'BL' ||
        // 'AX' || 'MF'
      ) {
        this.setState({
          symbol: "€", // EURO
          startup: [60, 24],
          professional: [116, 58],
        });
      } else {
        this.setState({
          symbol: "$",
          startup: [68, 27],
          professional: [136, 68],
        });
      }
    });
  }

  change(e) {
    if (e.target.value === "true") {
      // yearly
      if (this.state.symbol === "₹") {
        this.setState({
          startup: [2500, 999],
          professional: [5000, 2499],
        });
      } else if (this.state.symbol === "¥") {
        this.setState({
          startup: [3812, 1525],
          professional: [7620, 3810],
        });
      } else if (this.state.symbol === "€") {
        this.setState({
          startup: [30, 12],
          professional: [60, 30],
        });
      } else {
        this.setState({
          startup: [35, 14],
          professional: [68, 34],
        });
      }
    } else {
      if (this.state.symbol === "₹") {
        this.setState({
          startup: [5000, 1999],
          professional: [10000, 4999],
        });
      } else if (this.state.symbol === "¥") {
        this.setState({
          startup: [7625, 3050],
          professional: [15250, 7625],
        });
      } else if (this.state.symbol === "€") {
        this.setState({
          startup: [60, 24],
          professional: [116, 58],
        });
      } else {
        this.setState({
          startup: [68, 27],
          professional: [136, 68],
        });
      }
    }
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  render() {
    const meta = {
      title: "Pricing - Effybuy",
      description:
        "EffyBuy provides Money-saving options for the Procurement process with Several Pricing Plans. We provide Monthly, Yearly, as well as free plans for utilizing our service.",
      meta: {
        charset: "utf-8",
        // name: {
        //   keywords: 'react,meta,document,html,tags'
        // }
      },
    };

    return (
      <>
        <DocumentMeta {...meta}>
          <div ref={this.myRef} className="pricing_main_div">
            <div className="title-style-seven text-center">
              <h1>Pricing</h1>
            </div>

            <div className="pricing_title_div">
              <div className="title">
                Saving money while procurement is just few clicks away
              </div>
              <ul className="title_list">
                <li>
                  <CheckCircleIcon className="list_icon" />
                  Forever free plans
                </li>
                <li>
                  <CheckCircleIcon className="list_icon" />
                  Cancel or Switch plan anytime
                </li>
              </ul>
            </div>

            <div className="pricing_brand_promise_logo">
              <img alt="brand_promise_logo" src={Brand_promise}></img>
            </div>

            <div className="pricing_cards_div">
              <PricingPanel />

              <div className="local_tax_div">
                Local taxes (VAT, GST, etc.) will be charged in addition to the
                prices mentioned.
              </div>
              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon color="primary" />}
                    // aria-controls="panel1a-content"
                    // id="panel1a-header"
                  >
                    <div className="comparison_link">
                      See our complete feature comparison
                    </div>
                    {/* <Typography > */}
                    {/* </Typography> */}
                    {/* <Typography className={classes.heading}>Accordion 1</Typography> */}
                  </AccordionSummary>
                  <AccordionDetails>
                    <PricingTable />
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>

            <div className="Join_other_businesses">
              <div
                className="Join_other_businesses_title"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                Become A More
                <br />
                Profitable Business
              </div>
              <div
                className="image_button"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <div className="download-btn">
                  <button
                    className="btn Join_other_businesses_button"
                    style={{ color: "white" }}
                  >
                    <a
                      href="https://www.effybuy.com/bizgam20/apps/baf.php/B_OS_BAF_USER_REGISTER/EDIT"
                      className="signUp-action"
                    >
                      Start your free trial
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <SixthPannel />
          </div>
        </DocumentMeta>
      </>
    );
  }
}
