import React, { useState } from "react";
import { Link } from "react-router-dom";
import MegaMenu from "./mega-menu/MegaMenu";
import MegaMenuMobile from "./mega-menu/MegaMenuMobile";
import effybuy_logo_with_name from "../../assets/images/icon/New_effybuy_logo_with_name.webp";
import EffyBuyKaizenBtn from "../EffyBuyKaizen/EffyBuyKaizenBtn";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 68) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <EffyBuyKaizenBtn />
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu theme-menu-one bg-none fixed"
            : "theme-main-menu sticky-menu theme-menu-one bg-none"
        }
      >
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to="/EffyBuy">
              <img src={effybuy_logo_with_name} alt="EffyBuy Logo" />
            </Link>
          </div>
          {/* End Logo */}

          <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
            <div className="container nav-container">
              <div
                className="navbar-collapse collapse"
                id="navbarSupportedContent"
              >
                <div className="d-lg-flex align-items-center">
                  <MegaMenu />
                  {/* End MegaMenu */}

                  <ul className="right-button-group d-flex align-items-center justify-content-center">
                    <li>
                      <a
                        href="https://www.effybuy.com/bizgam20/apps/baf.php"
                        className="signIn-action"
                      >
                        Login
                      </a>
                    </li>
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
                  {/* End right-button-group  */}
                </div>
              </div>
            </div>
          </nav>
          {/* End nav */}
        </div>

        <MegaMenuMobile />
        {/* 	End Mega Menu for Mobile */}
      </div>
      {/* /.theme-main-menu */}
    </>
  );
};

export default Header;
