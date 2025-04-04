import React, { Component } from "react";
import "./blog.css";
import three_simple_tips from "./Blog_images/three_simple_tips.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Link } from "react-router-dom";
import Common_challenge_img from "./Blog_images/common_challenges.png";
import number_one_tool from "./Blog_images/number_one_tool.jpg";

// install Swiper modules
SwiperCore.use([Navigation]);

export default class Blog_1 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="individual_blog_main_div">
        <div className="individual_blog_date">9 Aug 2021</div>
        <div className="individual_blog_image">
          <img
            src={three_simple_tips}
            alt="Tips to Unleash your Buying Power"
          />
        </div>
        <div className="individual_blog_paragraph">
          Today’s customer can buy almost anything at any time with a nearly
          unlimited number of choices, which of course encourages people to shop
          and buy more. The entire buying process is so quick and easy with just
          one click. Now let us compare this with corporate purchasing process
          and system. The experience should not be any more different.{" "}
          <span style={{ fontWeight: "bold" }}>
            But the actual scenario is not the same.
          </span>
        </div>
        <div className="individual_blog_paragraph">
          Procurement departments work tirelessly to create and maintain
          catalogs of standard items and specific resources to source particular
          goods and services. Procurement often work as a pseudo-budget, that if
          buying process gets difficult, then expenditures will be lower.
        </div>
        <div className="individual_blog_paragraph">
          In the midst of the digital consumer revolution, it is high time to
          rethink procurement’s contribution to the entire buying process. These
          tips that can help you and your enterprise to take a leap further:
        </div>
        <div className="individual_blog_paragraph">
          <div className="individual_blog_point">#1 Faceless negotiation</div>
          Self serve procurement is the new reality for today’s (indirect)
          purchases. Single end-to-end process that requires less intervention
          with too many resources. This also should ensure full accountability
          and transparency that creates best opportunity for customer
          satisfaction.
        </div>
        <div className="individual_blog_paragraph">
          <div className="individual_blog_point">#2 Easy to access tool</div>
          Better tool to analyze, break down specifications, communicate
          requirement in the way that can be competed with wide supply process.
          This makes purchasing experience straightforward for internal user, so
          that they can focus on their core activities
        </div>
        <div className="individual_blog_paragraph">
          <div className="individual_blog_point">#3 Your trusted partner</div>
          Basic problem procurement department around the world are struggling
          is to keep their internal customer satisfied. A transformative digital
          technology that can dramatically support entire process by navigating
          through challenges
        </div>

        <div className="individual_blog_paragraph">
          Now, <a href="http://www.effybuy.com">a new tool</a>, an autonomous
          negotiating tool—where with just a three step process determines the
          factors that are negotiable in a supplier contract and carries out
          negotiations over email or a chat interface—is giving procurement
          teams even greater capabilities. This approach offer advantages over
          traditional, manual negotiations and then
          <span style={{ fontWeight: "bold" }}>
            {" "}
            awarding of contracts without any negotiations at all
          </span>
          .
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
