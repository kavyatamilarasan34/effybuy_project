import React, { Component } from "react";
import "./knowledgeSource.css";
import PPT from "./PPT/PPT.js";
import WhitePaper from "./WhitePaper/WhitePaper";
import Ebooks from "./E_books/Ebooks";
import DemoCaseStudy from "./DemoCaseStudy/DemoCaseStudy";
import Blogs from "../Blogs/Blog";
import Webinar from "../Webinars/Webinar";
import { Link } from "react-router-dom";

export default class KnowledgeSource extends Component {
  state = {
    show_blogs: false,
    show_ppt: false,
    show_webinar: false,
    show_case_studies: true,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    let loc = this.props.location;
    if (loc === "/EffyBuy/resources/blog") {
      this.setState({
        show_blogs: true,
        show_ppt: false,
        show_webinar: false,
        show_case_studies: false,
        blog_class: "active",
      });
    } else if (loc === "/EffyBuy/resources/webinar") {
      this.setState({
        show_blogs: false,
        show_ppt: false,
        show_webinar: true,
        show_case_studies: false,
        webinar_class: "active",
      });
    } else if (loc === "/EffyBuy/resources/ppt") {
      this.setState({
        show_blogs: false,
        show_ppt: true,
        show_webinar: false,
        show_case_studies: false,
        ppt_class: "active",
      });
    } else {
      this.setState({
        show_blogs: false,
        show_ppt: false,
        show_webinar: false,
        show_case_studies: true,
        case_study_class: "active",
      });
    }
  }

  blog() {
    this.setState({
      show_blogs: true,
      show_ppt: false,
      show_webinar: false,
      show_case_studies: false,
    });
  }
  ppt() {
    this.setState({
      show_blogs: false,
      show_ppt: true,
      show_webinar: false,
      show_case_studies: false,
    });
  }
  webinar() {
    this.setState({
      show_blogs: false,
      show_ppt: false,
      show_webinar: true,
      show_case_studies: false,
    });
  }
  casestudy() {
    this.setState({
      show_blogs: false,
      show_ppt: false,
      show_webinar: false,
      show_case_studies: true,
    });
  }

  render() {
    return (
      <div className="knowledge_source_main_div">
        <div className="btn-group" data-toggle="buttons">
          <label
            className={`btn ` + this.state.case_study_class}
            onClick={() => {
              this.casestudy();
            }}
          >
            <Link to="/EffyBuy/resources/case_studies">
              <input type="radio" name="options" id="Case_study" />
              Case study
            </Link>
          </label>
          <label
            className={`btn ` + this.state.blog_class}
            onClick={() => {
              this.blog();
            }}
          >
            <Link to="/EffyBuy/resources/blog">
              <input type="radio" name="options" id="Blogs" />
              Blogs
            </Link>
          </label>
          <label
            className={`btn ` + this.state.ppt_class}
            onClick={() => {
              this.ppt();
            }}
          >
            <Link to="/EffyBuy/resources/ppt">
              <input type="radio" name="options" id="PPTs" /> PPTs
            </Link>
          </label>
          <label
            className={`btn ` + this.state.webinar_class}
            onClick={() => {
              this.webinar();
            }}
          >
            <Link to="/EffyBuy/resources/webinar">
              <input type="radio" name="options" id="Webinars" /> Webinars
            </Link>
          </label>
        </div>
        <div>
          {this.state.show_case_studies && (
            <div style={{ marginTop: "50px" }}>
              <DemoCaseStudy />
            </div>
          )}
          {this.state.show_blogs && (
            <div style={{ marginTop: "50px" }} className="feature-blog-one ">
              <Blogs />
            </div>
          )}
          {this.state.show_ppt && (
            <div style={{ marginTop: "50px" }}>
              <PPT />
            </div>
          )}
          {this.state.show_webinar && (
            <div style={{ marginTop: "50px" }} className="feature-blog-one ">
              <Webinar />
            </div>
          )}
        </div>
      </div>
    );
  }
}
