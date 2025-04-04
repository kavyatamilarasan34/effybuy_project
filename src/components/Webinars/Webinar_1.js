import React, { Component } from "react";
import "../Blogs/blog.css";
import SwiperCore, { Navigation } from "swiper";
import automate_your_purchase from "../Blogs/Blog_images/webinar_automate_your.jpg";

// install Swiper modules
SwiperCore.use([Navigation]);

export default class Blog_6 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="individual_blog_main_div">
        
        <div className="individual_blog_image">
          <img src={automate_your_purchase} alt="automate_your_purchase" />
        </div>
        <div className="individual_blog_date">18 Oct 2021</div>
        <div className="individual_blog_paragraph">
          Procurement industry includes many tasks within the processes.
          Purchase being a sub set of procurement stands at a crossroads. There
          are lots of tasks that are been done on daily basis with minimum to no
          outcomes on an immediate basis.
        </div>
        
        <div
          className="individual_blog_paragraph"
          style={{ fontWeight: "bold" , "color":"black"}}
        >
          So how should companies respond?
        </div>

        <div className="individual_blog_paragraph">
          <ul>
            <li>They can carry on as normal by the way of existence.</li>
            <li>
              Or recede into insignificance{" "}
              <span style={{ fontWeight: "bold", "color":"black" }}>OR ought to rethink </span>{" "}
              how they would like to bring in some change to their purchase
              process.
            </li>
            <li>And make a difference to their company profits.</li>
          </ul>
        </div>

        <div className="individual_blog_paragraph">
          This is our new rendezvous where we will discuss with you on how to
          <span style={{ fontWeight: "bold", "color":"black" }}>
            {" "}
            ‘Automate your purchase process to save 5-10% more’
          </span>
          , with some of the finest experts from our organization.
        </div>

        <div className="individual_blog_paragraph">
          Also we would like to cover the following major areas concerned with
          the Purchase process. These points can help you take further action on
          registration:
        </div>

        <div className="individual_blog_paragraph">
          <ul>
            <li style={{ fontWeight: "bold", "color":"black" }}>Increase purchase savings</li>
            <div>
              Every opportunity to save time on any activity ultimately
              culminates and add on to the increase profits. Approx. 55% of
              purchase department still managing their activities using a
              spreadsheets. Which needs to undergo a definite change. <br />
              <span style={{ fontWeight: "bold", fontStyle: "italic", "color":"black" }}>
                {" "}
                “Anything anybody has was purchased with the currency of time.”
              </span>
              —The Mountain of Ignorance
            </div>

            <br />
            <li style={{ fontWeight: "bold", "color":"black" }}>Contribution to profits</li>
            <div>
              You have to make purchasing experience straightforward for
              internal user, so that they can focus on their core activities. A
              tool that can make life easier for all purchases following the
              process thereby contributing towards overall business profits.
            </div>

            <br />
            <li style={{ fontWeight: "bold", "color":"black" }}>Analytics</li>
            <div>
              Basic problem procurement department around the world are
              struggling is to maintaining inventory cost and plan future
              purchases. A transformative digital technology that can
              dramatically support entire process by navigating through
              challenges.
            </div>
          </ul>
        </div>

        <div
          className="individual_blog_paragraph"
          style={{ fontWeight: "bold", "color":"black" }}
        >
          Do join us for the game changing webinar to know about purchase
          savings.
        </div>
      </div>
    );
  }
}
