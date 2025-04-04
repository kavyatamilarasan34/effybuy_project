import React, { Component } from "react";
import "./blog.css";
import { Link } from "react-router-dom";
import Common_challenge_img from "./Blog_images/common_challenges_implementing_robust_procurement_process.webp";
import three_simple_tips from "./Blog_images/three_simple_tips_to_unleash_buying_power.webp";
import number_one_tool from "./Blog_images/number_one_tool_to_increase_profits.webp";
import five_tips from "./Blog_images/tips_to_increase_profit_with_effybuy.webp";
import DocumentMeta from "react-document-meta";

const BlogContent = [
  {
    img: "media_01",
    iii: three_simple_tips,
    tag: "Blog",
    title: `3 simple tips to unleash your buying power`,
    routePath: "/EffyBuy/blogs/blog_one",
    dealyAnimation: "10",
    altTag: "Tips to Unleash your Buying Power",
  },
  {
    img: "media_02",
    tag: "Blog",
    iii: Common_challenge_img,
    title: `Common Challenges & Their Solution`,
    routePath: "/EffyBuy/blogs/blog_five",
    dealyAnimation: "50",
    altTag: "Challenges in implementing Robust Procurement Process",
  },
  {
    img: "media_03",
    tag: "Blog",
    iii: number_one_tool,
    title: `Do You know the No. #1 tool available to increase your profits?`,
    routePath: "/EffyBuy/blogs/blog_six",
    dealyAnimation: "100",
    altTag: "No 1 Tool Available to Increase your Profit",
  },
  {
    img: "media_05",
    tag: "Blog",
    iii: five_tips,
    title: `Top 5 tips – Increase profits with EffyBuy Tool`,
    routePath: "/EffyBuy/blogs/blog_nine",
    dealyAnimation: "100",
    altTag: "Tips to Increase Profit with Effybuy",
  },
];

export default class Blog extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const meta = {
      title: "Our Blogs - EffyBuy",
      description:
        "Effybuy's Blogs Provided additional Information about Automation Tools and Software for Procurement Processing Services.",
      meta: {
        charset: "utf-8",
        // name: {
        //   keywords: 'react,meta,document,html,tags'
        // }
      },
    };

    return (
      <DocumentMeta {...meta}>
        <div className="container">
          <div className="row">
            {BlogContent.map((item, i) => (
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration="1200"
                key={i}
                data-aos-delay={item.dealyAnimation}
              >
                <div className="post-meta">
                  <img
                    src={`${item.iii}`}
                    alt={item.altTag}
                    className="image-meta"
                  />
                  <div className="tag">{item.tag}</div>
                  <h3>
                    <Link to={`${item.routePath}`} className="title">
                      {item.title}
                    </Link>
                  </h3>
                  <Link
                    to={item.routePath}
                    className="read-more d-flex justify-content-between align-items-center"
                  >
                    <span>Read More</span>
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DocumentMeta>
    );
  }
}
