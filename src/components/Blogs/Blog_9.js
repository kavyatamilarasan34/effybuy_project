import React, { Component } from "react";
import "./blog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Link } from "react-router-dom";
import five_tips from "./Blog_images/five_tips.jpg";
import automate_your_purchase from "./Blog_images/webinar_automate_your.jpg";
import number_one_tool from "./Blog_images/number_one_tool.jpg";

SwiperCore.use([Navigation]);

export default class Blog_9 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="individual_blog_main_div">
        <div className="individual_blog_date">8 Nov 2021</div>
        <div className="individual_blog_image">
          <img src={five_tips} alt="Tips to Increase Profit with Effybuy" />
        </div>

        <div className="individual_blog_paragraph">
          As a supplier, you may be required to work with different suppliers on
          daily basis. So you may be required to lots and lots of communication
          that involved wholly of emails, phone calls, catalogues maintenance
          and many others on similar lines.
        </div>
        <div className="individual_blog_paragraph">
          Thus having automated tool to increase efficiency of your procurement
          process will make thinks faster and even easier for your team. This
          might involve first to make changed within your internal process and
          then to the external process and teams.
        </div>
        <div className="individual_blog_paragraph">
          Thus having automated tool to increase efficiency of your procurement
          process will make thinks faster and even easier for your team. This
          might involve first to make changed within your internal process and
          then to the external process and teams.
        </div>
        <div className="individual_blog_paragraph">
          Procurement and Profitability goes hand in hand. It is massive
          component of business costs.
          <a href="https://blog.procurify.com/2014/09/04/procurement-can-assist-making-business-profitable/">
            As mentioned by PwC.
          </a>
          It is a match made in heaven.
        </div>
        <div className="individual_blog_paragraph">
          Not only does PROFIT FROM PROCUREMENT contain a wealth of knowledge,
          expertise, and insight from its highly experienced authors, it’s a
          really interesting read. The writing style is hard-hitting and
          practical yet also entertaining, and the chapters are all peppered
          with useful (and often amusing) anecdotes and lessons learned. It’s a
          must-read for Procurement leaders and C-level executives who want to
          turn their Procurement functions into a powerful EBITDA contributor.-{" "}
          <span style={{ fontWeight: "bold" }}>
            Cyril Pourrat, CPO, BT Group
          </span>
        </div>

        <div
          className="individual_blog_paragraph"
          style={{ fontWeight: "bold" }}
        >
          In the midst of the digital consumer revolution, it is high time to
          rethink procurement’s contribution to the entire business
          profitability.
        </div>

        <div className="individual_blog_paragraph">
          <ul>
            <li style={{ fontWeight: "bold" }}>Rise in productivity</li>
            <div>
              Automated procurement tool makes it possible store available data
              about the past, current and future purchases done, RFQs on store.
              Thus this simplifies the process and makes the team more
              productive and efficient in the tasks fulfilment
            </div>

            <br />
            <li style={{ fontWeight: "bold" }}>No manual errors</li>
            <div>
              Human errors are very common to make during any of the lengthy
              process driven tasks. However these errors if not rectified timely
              can be misunderstood at some point thereby affecting the entire
              supply chain efficiency. To avoid such big mishaps to occur it is
              advisable to refer to automated procurement process to get to apt
              update on quantity, date of supply, terms, price and other exact
              details
            </div>

            <br />
            <li style={{ fontWeight: "bold" }}>
              Transparency on the actual spend
            </li>
            <div>
              Automated tool provide in advance inputs on the products
              availability and also how market is looking at price. These
              information once available it gives a competitive edge to the
              purchase / procurement managers to take definitive steps towards
              growth. It ensures that all team members including internal
              external and kept in loop on the updates to be make for spending
              on purchase
            </div>

            <br />
            <li style={{ fontWeight: "bold" }}>Increased customer loyalty</li>
            <div>
              While the tool can provide update on the shelf life of product it
              also provides the requirement of customer in advance. Thus
              purchase mangers reach the customer in advance for fulfilment of
              the requirement. That way the loyalty is maintained and no further
              customer move is lowered
            </div>

            <br />
            <li style={{ fontWeight: "bold" }}>Lowers transaction costs</li>
            <div>
              With software tool managing on few manual activities while
              connecting suppliers via online digital platforms. Contacting
              suppliers and getting appropriate prices all on online platform,
              makes it more cost friendly for the teams
            </div>

            <br />
            <li style={{ fontWeight: "bold" }}>Mitigate risks</li>
            <div>
              Each purchase brings in along with it lots of risks involved
              during the process. That might include, customer satisfaction,
              product quality, trust and reliability. To avoid to misinterpret
              these risks with available budgets one needs to utilize advanced
              technology and automated procurement tools. This gives a valuable
              insights into the growth and profits
            </div>

            <br />
            <li style={{ fontWeight: "bold" }}>
              Exact analytics and reporting
            </li>
            <div>
              Procurement requires to store more products by maintaining
              catalogues to reach the customer timely. With automated
              procurement tool it becomes simpler and reach to the customer in
              advance with their requirement.
            </div>
          </ul>
        </div>

        <div className="individual_blog_paragraph">
          A new tool, EffyBuy software tool will help to continually optimize
          your procurement process, you can be certain that you’re getting the
          best deals, maximizing your contracts and curbing wasteful or
          unauthorized expenditure. As the procurement function is measured on
          cost savings, not revenue-assurance, adopting a cost-conscious spend
          culture will enhance profitability and ensure your business is
          prepared for any economic eventuality going forward.
        </div>
        <div className="individual_blog_paragraph">
          Want to learn exactly how procurement solutions like EffyBuy can
          enable your business profitability? Click here to read about all of
          the available features.
        </div>

        <div className="individual_blog_other_blogs_main_div">
          <Swiper navigation={true} className="mySwiper" observer={true}>
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
                    to="/EffyBuy/blogs/blog_six"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="individual_div_other_blog_single_blog_card_image">
                      <img src={number_one_tool} alt="three_simple_tips" />
                    </div>
                    <div className="individual_div_other_blog_single_blog_card_title">
                      Do You know the No. #1 tool available to increase your
                      profits?
                    </div>
                    <div className="individual_div_other_blog_single_blog_card_desc">
                      You may be aware whether a wholesaler or retailer, direct
                      sale or a large multilevel chain, the need always is to
                      build good relationships with your...
                    </div>
                  </Link>
                </div>
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
                        alt="Common_challenge_img"
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
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
  }
}
