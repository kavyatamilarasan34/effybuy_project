import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import underline_img from "../../assets/images/shape/line-shape-2.svg";
import img1 from "../../assets/images/shape/86.svg";
import img2 from "../../assets/images/shape/87.svg";
import img3 from "../../assets/images/shape/88.svg";
import img4 from "../../assets/images/shape/89.svg";
import img5 from "../../assets/images/shape/90.svg";
import img6 from "../../assets/images/shape/91.svg";

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

export default function SixthPannel() {
  return (
    <div className="main-page-wrapper">
      <div className="faq-classic with-bg">
        <img src={img1} alt="shape" className="shapes shape-one" />
        <img src={img2} alt="shape" className="shapes shape-two" />
        <img src={img3} alt="shape" className="shapes shape-three" />
        <img src={img4} alt="shape" className="shapes shape-four" />
        <img src={img5} alt="shape" className="shapes shape-five" />
        <img src={img6} alt="shape" className="shapes shape-six" />
        <div className="container" style={{ overflow: "hidden" }}>
          <div className="title-style-four text-center mb-100 md-mb-70">
            <div className="row">
              <div className="col-lg-7 m-auto">
                <h6>FAQ’s</h6>
                <h2>
                  <span>
                    Questions & Answers
                    <img src={underline_img} alt="" />
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="accordion-style-four">
            <div className="faq-wrraper">
              <div className="row">
                <div className="col-lg-6">
                  <Accordion allowZeroExpanded>
                    <div className="row">
                      {FaqContent.map((item, i) => (
                        <div className="col-lg-12" key={i}>
                          <AccordionItem className="card">
                            <AccordionItemHeading className="card-header">
                              <AccordionItemButton>
                                <h5 className="mb-0">
                                  <button className="btn btn-link">
                                    {item.title}
                                  </button>{" "}
                                </h5>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className="card-body fadeInUp">
                              <p>{item.desc}</p>
                            </AccordionItemPanel>
                          </AccordionItem>
                        </div>
                      ))}
                    </div>
                  </Accordion>
                </div>

                <div className="col-lg-6">
                  <Accordion allowZeroExpanded>
                    <div className="row">
                      {FaqContentTwo.map((item, i) => (
                        <div className="col-lg-12" key={i}>
                          <AccordionItem className="card">
                            <AccordionItemHeading className="card-header">
                              <AccordionItemButton>
                                <h5 className="mb-0">
                                  <button className="btn btn-link">
                                    {item.title}
                                  </button>{" "}
                                </h5>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className="card-body fadeInUp">
                              <p>{item.desc}</p>
                            </AccordionItemPanel>
                          </AccordionItem>
                        </div>
                      ))}
                    </div>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
