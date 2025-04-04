import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import effybuy_logo_with_name from "../../../assets/images/icon/effybuy_logo_with_name.png";

import {
  ProSidebar,
  SidebarHeader,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";

const Resources = [
  {
    name: "BLOGS",
    routerPath: "/EffyBuy/blogs",
    class: "fas fa-blog",
    desc: "Keep yourself updated with all things marketing",
  },
  {
    name: "SUCCESS STORIES",
    routerPath: "/EffyBuy/",
    // routerPath: "/EffyBuy/resources/success_stories",
    class: "fas fa-trophy",
    desc: "Seek how EffyBuy helps brands to evaluate customer experience",
  },
  {
    name: "PPT",
    routerPath: "/EffyBuy/ppts",
    class: "fas fa-laptop-code",
    desc: "Get to know more about EffyBuy products through our presentations",
  },
  {
    name: "CASE STUDIES",
    routerPath: "/EffyBuy/casestudy",
    class: "fas fa-laptop-code",
    desc: "Take a look at what customers feel about our offerings",
  },
  {
    name: "E-BOOKS",
    routerPath: "/EffyBuy/",
    // routerPath: "/EffyBuy/resources/ebooks",
    class: "fas fa-poll-h",
    desc: "Get insightful updates about auto procurement with EffyBuy",
  },
  {
    name: "WHITEPAPER",
    // routerPath: "/EffyBuy/resources/white_papers",
    routerPath: "/EffyBuy/",
    class: "far fa-newspaper",
    desc: "Deep dive knowledge about EffyBuy offerings and its merits",
  },
  {
    name: "WEBINARS",
    routerPath: "/EffyBuy/webinars",
    // routerPath: "/EffyBuy/resources/wb",
    class: "fas fa-laptop",
    desc: "Highly engaging and personal way to connect with our experts",
  },
  {
    name: "VIDEOS",
    routerPath: "/EffyBuy/videos",
    // routerPath: "/EffyBuy/resources/videos",
    class: "fas fa-video",
    desc: "Create the most out of EffyBuy with our step-by-step videos",
  },
  {
    name: "GUIDES",
    routerPath: "/EffyBuy/",
    // routerPath: "/EffyBuy/resources/guides",
    class: "fas fa-map-signs",
    desc: "Lessons to kickstart and grow your multi-channel marketing",
  },
];

const MegaMenuMobile = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="mega-menu-wrapper">
      <div className="mob-header multi-mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      <ProSidebar
        className={click ? "mega-mobile-menu menu-open" : "mega-mobile-menu"}
      >
        <SidebarHeader>
          <div className="logo position-static">
            <Link to="/" onClick={handleClick}>
              <img src={effybuy_logo_with_name} alt="home-demo" />
            </Link>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            <SubMenu title="Products">
              <MenuItem>
                {" "}
                <i
                  className="far fa-sticky-note"
                  style={{ marginRight: "10px" }}
                ></i>
                <Link to="/EffyBuy/rfp-rfq-software" onClick={handleClick}>
                  RFP | RFQ
                </Link>
                <div
                  style={{
                    fontSize: "12px",
                    margin: "0px 0 0px 25px",
                    paddingBottom: "10px",
                    lineHeight: "normal",
                  }}
                >
                  Learn about automated requests for
                  <br />
                  quotation and proposals
                </div>
              </MenuItem>
              <MenuItem>
                {" "}
                <i className="fas fa-undo" style={{ marginRight: "10px" }}></i>
                <Link
                  to="/EffyBuy/reverse-auction-software"
                  onClick={handleClick}
                >
                  REVERSE AUCTION
                </Link>
                <div
                  style={{
                    fontSize: "12px",
                    margin: "0px 0 0px 25px",
                    paddingBottom: "10px",
                    lineHeight: "normal",
                  }}
                >
                  Get real-time bidding with suppliers
                  <br />
                  online with our tool
                </div>
              </MenuItem>
              <MenuItem>
                {" "}
                <i className="fas fa-redo" style={{ marginRight: "10px" }}></i>
                <Link to="/EffyBuy/EffySell" onClick={handleClick}>
                  EFFYSELL
                </Link>
                <div
                  style={{
                    fontSize: "12px",
                    margin: "0px 0 0px 25px",
                    paddingBottom: "10px",
                    lineHeight: "normal",
                  }}
                >
                  Create auction for selling items at
                  <br />
                  best price with EffyBuy
                </div>
              </MenuItem>
              <MenuItem>
                {" "}
                <i
                  className="fas fa-shipping-fast"
                  style={{ marginRight: "10px" }}
                ></i>
                <Link
                  to="/EffyBuy/freight-forwarder-software"
                  onClick={handleClick}
                >
                  LOGISTICS
                </Link>
                <div
                  style={{
                    fontSize: "12px",
                    margin: "0px 0 0px 25px",
                    paddingBottom: "10px",
                    lineHeight: "normal",
                  }}
                >
                  Choose your best freight forwarder
                  <br />
                  at ease with ultimate savings{" "}
                </div>
              </MenuItem>
            </SubMenu>

            <SubMenu title="Resources">
              {Resources.map((val, i) => (
                <MenuItem key={i}>
                  <i className={val.class} style={{ marginRight: "10px" }}></i>
                  <Link to={val.routerPath} onClick={handleClick}>
                    {val.name}
                  </Link>
                </MenuItem>
              ))}
            </SubMenu>

            <SubMenu title="Pricing">
              <MenuItem>
                <i
                  className="fas fa-money-check-alt"
                  style={{ marginRight: "10px" }}
                ></i>
                <Link to="/EffyBuy/pricing" onClick={handleClick}>
                  EFFYBUY
                </Link>
              </MenuItem>
            </SubMenu>

            <MenuItem>
              <a href="https://www.effybuy.com/bizgam20/apps/baf.php">Login</a>
            </MenuItem>
            <MenuItem>
              <ul className="right-button-group d-flex align-items-center justify-content-center">
                <li>
                  <a
                    href="https://www.effybuy.com/bizgam20/apps/baf.php/B_OS_BAF_USER_REGISTER/EDIT"
                    className="signUp-action"
                    onClick={() => {
                      window.lintrk("track", { conversion_id: 7514468 });
                    }}
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default MegaMenuMobile;
