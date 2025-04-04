import React, { Component } from "react";
import "./blog.css";
import number_one_tool from "./Blog_images/number_one_tool.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Link } from "react-router-dom";
import Common_challenge_img from "./Blog_images/common_challenges.png";
import automate_your_purchase from "./Blog_images/Automate_your_purchase.jpg";

// install Swiper modules
SwiperCore.use([Navigation]);

export default class Blog_6 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="individual_blog_main_div">
        <div className="individual_blog_date">23 Aug 2021</div>
        <div className="individual_blog_image">
          <img
            src={number_one_tool}
            alt="No 1 Tool Available to Increase your Profit"
          />
        </div>

        <div className="individual_blog_paragraph">
          You may be aware whether a wholesaler or retailer, direct sale or a
          large multilevel chain, the need always is to build good relationships
          with your suppliers. The basic process to get this done is by a
          procurement manager who manages it in the system so; he is able to
          reduce cost and get greater ROI. Your profit margin is the metric that
          should be always on the radar of the procurement manager.
        </div>

        <div className="individual_blog_paragraph">
          But how cool it would be if the manager’s knowledge about procurement
          for better profitability, is added with technology and automated
          auction strategies and techniques. The simplest way of doing this
          would be to invest in the best procurement management solution
          offering tool.
        </div>

        <div
          className="individual_blog_paragraph"
          style={{ fontWeight: "bold" }}
        >
          Significant challenges that typically faced by a procurement manager
          while taking actions are:
        </div>

        <div className="individual_blog_paragraph">
          <ul>
            <li style={{ fontWeight: "bold" }}>Centralized operations</li>
            <div>
              Dealing with a large network of vendors by meeting up with
              specific requirements can result in errors. This might have a huge
              impact on the profitability in the long run. Just so to avoid any
              mishap due to the error the manager would have to revisit the list
              of vendors and carry on the process one more time
            </div>

            <br />
            <li style={{ fontWeight: "bold" }}>Long process cycle</li>
            <div>
              Although the process is considered long haul, there are times when
              the goods are ordered in urgency to complete a particular task or
              meet a deadline. As a result, all the steps and rules are not
              followed. This might result into increase of risk and failure of
              the process impacting your profitability
            </div>

            <br />
            <li style={{ fontWeight: "bold" }}>Reporting and analysis</li>
            <div>
              Large numbers of procurement processes (even today) are handled
              manually hence, human errors and misunderstanding become a common
              challenge. Access to a good automated analytical and reporting
              tool can help resolve this major issue
            </div>

            <br />
            <li style={{ fontWeight: "bold" }}>Supplier related issues</li>
            <div>
              Just like customer relationship management, supply relationship
              management is very crucial for any business for seamless
              functioning of the procurement process. Matters related to
              suppliers are perhaps the most significant challenge that supply
              chain have to face. In turn can impact your business and its
              profitability
            </div>

            <br />
            <li style={{ fontWeight: "bold" }}>Complex spend</li>
            <div>
              There are some purchases that are too small or insignificant to go
              through the entire lengthy sourcing process and to be added on to
              cataloging. Though, these purchases may seem small individually
              but if calculated on an annual basis may cost a huge, which were
              uncontrolled. These are known as ‘dark purchasing’. But if handled
              by an automated tool or a system even these minor purchases can be
              included and handled in a well organized manner.
            </div>
          </ul>
        </div>

        <div
          className="individual_blog_paragraph"
          style={{ fontWeight: "bold" }}
        >
          Overcoming all the above challenges and many more of a procurement
          manager, it becomes utmost important to automate the process and make
          it easier with desired profits.
        </div>

        <div
          className="individual_blog_paragraph"
          style={{ fontWeight: "bold" }}
        >
          When the size of the projects increases, the risks and challenges
          associated with it also goes high. Procurement is a strategic process
          where creating and applying strategy is essential like any other
          business departments. Thus by lowering your overheads and reducing
          wasteful spending, automate your tasks and focus on profitability as a
          major goal.
        </div>

        <div className="individual_blog_paragraph">
          <a href="http://www.effybuy.com">
            A new tool, just ONE negotiating tool
          </a>{" "}
          - with three steps; supplier contract is carried out over an email or
          a chat interface—is giving procurement teams even greater
          capabilities.
        </div>

        <div className="individual_blog_paragraph">
          This approach offer advantages over conventional, manual negotiations
          and awarding
          <span style={{ fontWeight: "bold" }}>
            {" "}
            contracts with accuracy and profits desired.
          </span>
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
                    to="/EffyBuy/blogs/blog_eight"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="individual_div_other_blog_single_blog_card_image">
                      <img
                        src={automate_your_purchase}
                        alt="three_simple_tips"
                      />
                    </div>
                    <div className="individual_div_other_blog_single_blog_card_title">
                      Automate your purchase process to save 5-10% more
                    </div>
                    <div className="individual_div_other_blog_single_blog_card_desc">
                      Procurement industry includes many tasks within the
                      processes. Purchase being a sub set of procurement stands
                      at a crossroads...
                    </div>
                  </Link>
                </div>
                <div
                  className="individual_div_other_blog_single"
                  style={{ width: "40%" }}
                >
                  <Link
                    to="/EffyBuy/blogs/blog_five"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="individual_div_other_blog_single_blog_card_image">
                      <img
                        src={Common_challenge_img}
                        alt="Common_challenge_img"
                      />
                    </div>
                    <div className="individual_div_other_blog_single_blog_card_title">
                      Common Challenges & Their Solution
                    </div>
                    <div className="individual_div_other_blog_single_blog_card_desc">
                      Every sale and transaction that a business deals with
                      daily can transform the business’s future. This makes the
                      development of a procurement strategy...
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
