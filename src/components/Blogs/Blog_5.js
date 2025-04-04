import React, { Component } from "react";
import "./blog.css";
import Common_challenge_img from "./Blog_images/common_challenges.png";
import three_simple_tips from "./Blog_images/three_simple_tips.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Link } from "react-router-dom";
import number_one_tool from "./Blog_images/number_one_tool.jpg";

// install Swiper modules
SwiperCore.use([Navigation]);

export default class Blog_5 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="individual_blog_main_div">
        <div className="individual_blog_date">16 Aug 2021</div>
        <div className="individual_blog_image">
          <img
            src={Common_challenge_img}
            alt="Challenges in implementing Robust Procurement Process"
          />
        </div>

        <div className="individual_blog_paragraph">
          Although it is a known fact given all the challenges within procurment
          one has to abide by all the rules and regulations, also adhereing to
          corporate responsibilties.
          <br />
          There are wholly of challenges that procurement team and leadership
          has to undergo. These are based on the size, type, products, area and
          others. But there are some common challenges that all procurement
          would have to face, irrespective of above mentioned patterns.
        </div>

        <div className="individual_blog_paragraph">
          <div className="individual_blog_point">What is procurement?</div>
          Procurement is the obtaining of the best products and services at the
          best possible price in a series of steps that are important for any
          organization or business.
        </div>

        <div className="individual_blog_paragraph">
          Traditional procurement is identified by manual events like calling
          the vendors and buyers, approvals, writing RFX’s, negotiations, etc.
          that include repetitive and small tasks. However, these processes are
          not very efficient or accurate and thus require many follow-ups.
        </div>

        <div className="individual_blog_paragraph">
          <div className="individual_blog_point">
            Challenges in procurement and their solutions
          </div>
          With an understanding of the best features, policies, and benefits
          while abiding by social and corporate responsibilities, one needs to
          understand the prevalent challenges in procurement.
        </div>

        <div className="individual_blog_paragraph">
          Procurement processes are riddled with challenges and difficulties and
          the leaders have an array of responsibilities to handle. These
          challenges are based on the organization’s line of work, size, etc,
          however, some of the common challenges and the ways to overcome them
          are -
        </div>

        <div className="individual_blog_paragraph">
          <div className="individual_blog_point">#1 Risk mitigation</div>
          <div style={{ fontWeight: "bold" }}>Problem</div>
          There is risk involved in all types and varities of business world,
          amongst theose, some can be named as supply risks, market risks, cost,
          quality, frauds and others. There are some newly identified risks like
          anti-corruption and following laws / rules. These are relevant for the
          entire procurement cycle, hence it has to be given due importance and
          not possible to be ignored.
          <br />
          <div></div>
          Extensive secondary research, political bargaining, strong long term
          supplier realtionships, and better communication involved internally
          and externally can help reduce or mitigatge risks.
        </div>

        <div className="individual_blog_paragraph">
          <div className="individual_blog_point">
            #2 Lack of understanding supplier capabilities before purchase
          </div>
          <div style={{ fontWeight: "bold" }}>Problem</div>
          Identifying supplier that can meet up with quality and timely delivery
          of product requirement can sort many of the hassels into the
          procurement cycle. Maintaining a pool few suppliers and getting quotes
          from them versus just one supplier can create demand versus supply
          deficiet at times or even some other issues might occur.
          <br />
          The best solution to this is regular evaluation and continuous
          monitoring. Supplier performance can be monitored by ensuring that
          delivery demands and standards are met. A good supplier relationship
          is important for the smooth functioning of the procurement process.
          <br />
          <br />
          <div style={{ fontWeight: "bold" }}>Solution</div>
          Conducting regular suppliers meeting and discussing goals along with
          KPIs working to improve on time, price or any terms from the
          procurement team will make the procurement process smooth.
        </div>

        <div className="individual_blog_paragraph">
          <div className="individual_blog_point">
            #3 Lack of transparency and trust
          </div>
          <div style={{ fontWeight: "bold" }}>Problem</div>
          Not sharing of important information or delivery details or any other
          specifications can create issues in procurment cycle. Also companies
          tend to not involved suppliers during any initial or goal setting
          aspects, which can create confusion and thereby considered to be
          mistrust issues.
          <br />
          <br />
          <div style={{ fontWeight: "bold" }}>Solution</div>
          It is essential to consider suppliers as a part of your organisation
          hence can give them demand related / futuristic view and also visions
          details. This can create a harmonious relationship between suppliers
          and the procurment team which can deliver outcome more than defined -
          as in positive improvements.
        </div>

        <div className="individual_blog_paragraph">
          <div className="individual_blog_point">#4 Inaccurate data</div>
          <div style={{ fontWeight: "bold" }}>Problem</div>
          Bad data can lead to wrong decisions and thereby incurring loss due to
          procurement activities that hamper entire business profits. Thus
          access to right kind of data is highly required, to be provided to
          leadership and management. So this makes it possible to get into win
          scenario for the business.
          <br />
          <br />
          <div style={{ fontWeight: "bold" }}>Solution</div>
          The one best solution could be for good purchase is based on right /
          appropriate data base. Given this challenge organisation tend to incur
          losses operationally and financially. Procurement on a whole is
          strategic process and nothing that works on gut feel or instincts.
          Implementation of the best procurement process includes integrating
          different measures and high performance tasks to solve the above
          challenge.
          <br />
          These challenges in procurement hinder the growth of the business and
          create room for financial and operational losses. However, procurement
          should be a strategic and insightful process rather than based on
          instincts.
          <br />
          Procurement is the entire process of sourcing, negotiating, imperative
          and strategic selections, and many other steps. The implementation of
          the best procurement processes will help seek a comprehensive approach
          and integrate different measures and high-performance processes to
          solve these problems.
        </div>

        <div className="individual_blog_paragraph">
          <div className="individual_blog_point">
            EffyBuy - Make Businesses more Efficient
          </div>
          EffyBuy is one such tool that helps to carry out the systematic
          procurement process with risk calculations and insights. This in-depth
          tool helps achieve your business goals with analyzed and researched
          resources and solutions. It provides a unified platform for
          controlling numerous procurement functions and also enables automated
          document generation. The appropriate use of this tool will help your
          business stay ahead of the competition and meet your procurement
          goals.
        </div>

        <div className="individual_blog_paragraph">
          <div className="individual_blog_point">
            Tap into the EffyBuy negotiation tool
          </div>
          <a href="http://www.effybuy.com">EffyBuy</a> is a fully automated
          purchase negotiating tool that enables you to become a master
          negotiator and achieve win-win results. Get the best package tools to
          negotiate both the price and terms of your purchase transaction so you
          may not only save a lot of money, but also have the power of a 10/10
          negotiation.
        </div>

        <div className="other_blogs_title">Our Other Blogs</div>

        <div className="individual_blog_other_blogs_main_div">
          <Swiper navigation={true} className="mySwiper">
            <SwiperSlide>
              <div
                className="individual_blog_other_blogs_display_Div"
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <div
                  className="individual_div_other_blog_single"
                  style={{ width: "40%" }}
                >
                  <Link
                    to="/EffyBuy/blogs/blog_one"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="individual_div_other_blog_single_blog_card_image">
                      <img src={three_simple_tips} alt="three_simple_tips" />
                    </div>
                    <div className="individual_div_other_blog_single_blog_card_title">
                      3 simple tips to unleash your buying power
                    </div>
                    <div className="individual_div_other_blog_single_blog_card_desc">
                      Today’s customer can buy almost anything at any time with
                      a nearly unlimited number of choices, which of course
                      encourages people to shop...
                    </div>
                  </Link>
                </div>
                <div
                  className="individual_div_other_blog_single"
                  style={{ width: "40%" }}
                >
                  <Link
                    to="/EffyBuy/blogs/blog_six"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="individual_div_other_blog_single_blog_card_image">
                      <img src={number_one_tool} alt="number_one_tool" />
                    </div>
                    <div className="individual_div_other_blog_single_blog_card_title">
                      Do You know the No. #1 tool available to increase your
                      profits?
                    </div>
                    <div className="individual_div_other_blog_single_blog_card_desc">
                      You may be aware whether a wholesaler or retailer, direct
                      sale or a large multilevel chain, the need always is to
                      build good...
                    </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
  }
}
