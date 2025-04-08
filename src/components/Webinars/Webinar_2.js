import React, { Component } from 'react'
import '../Blogs/blog.css'
import SwiperCore, { Navigation } from 'swiper';
import unleashing_procurment_efficiency from '../Blogs/Blog_images/Unleashing_Procurment_efficiency.jpg'
SwiperCore.use([Navigation]);

export default class Blog_9 extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="individual_blog_main_div">
                
                <div className="individual_blog_image">
                    {/* Do You know the No. #1 tool available to increase your profits? */}
                    <img src={unleashing_procurment_efficiency} alt="automate_your_purchase"/>
                </div>
                <div className="individual_blog_date">
                    11 Apr 2025
                </div>
                <div className="individual_blog_paragraph" style={{"fontWeight":"bold", "color":"black"}}>
                Struggling with Manual Procurement? There’s a Better Way! <br />
                </div>
                {/* <div className="individual_blog_paragraph" style={{"fontWeight":"bold"}}>
                Procurement teams often face:
                </div> */}
                <div className="individual_blog_paragraph">
                Procurement teams often face:  <br />
                    ❌ <b>Costly manual errors</b> in RFQs <br />
                    ❌ <b>Long lead times</b> due to slow vendor negotiations <br />
                    ❌ <b>Inefficient processes</b> that drain time and resources <br />
                </div>
                <div className="individual_blog_paragraph">
                The solution? <b>Automation. </b> <br />
                Join our exclusive webinar to discover  <br />
                how <b>EffyBuy’s AI-powered procurement automation</b> can <br /> <br />
                    ✅ Cut processing time by <b>upto 70%</b> <br />
                    ✅ Reduce errors with <b>smart RFQ generation</b> <br />
                    ✅ <b>Streamline negotiations</b> for better pricing <br />
                    ✅ Boost compliance with <b>automated workflows</b> <br />
                    </div>

                <div className="individual_blog_paragraph" >
                <b style={{"color":"black"}}>What You’ll Learn </b><br />
                🎯 The <b>hidden costs of manual procurement</b> – and how automation eliminates them <br />
                🎯 <b>Real-world case studies</b> of companies saving <b>time and money</b> with EffyBuy <br />
                🎯 <b>Live demo:</b> See <b>EffyBuy’s automation in action</b>  <br />
                🎯 <b>Best practices</b> for transitioning to an <b> automated procurement process</b> <br />

                </div>

                <div className="individual_blog_paragraph" >
                <b style={{"color":"black"}}>Who Should Attend?</b><br />
                📌  Procurement Managers & Specialists <br />
                📌  Supply Chain Leaders <br />
                📌  Finance & Operations Teams <br />
                📌  Anyone looking to optimize procurement efficiency <br />
                </div>

                <div className="individual_blog_paragraph" style={{ textAlign: "center" }}>
                    <ul>
                        <li style={{"fontWeight":"bold", "color":"black"}}>
                          Don’t Miss Out!<br />
                          Reserve Your Spot Today 🚀
                        </li>
                        <div>
                            Spaces are limited. Secure your seat now and take the first step toward a faster, smarter procurement process.<br />
                            <br />
                            <button style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
                                className="register_button"
                                onClick={() =>
                                window.open(
                                    "https://docs.google.com/forms/d/1OhpoSDYBWyGAo1NO2KLrVtiTNGDn3mZuHIf-GMUPdL8/edit",
                                    "_blank"
                                )
                                }
                            > 
                                Register for Free
                            </button>
                        </div>

                        <br/>
                        <li style={{"fontWeight":"bold", "color":"black"}}>
                          Can’t Make It Live?

                        </li>
                        <div>
                        <a href="https://www.effybuy.com/bizgam20/apps/baf.php/B_OS_BAF_USER_REGISTER/EDIT" 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               style={{ color: '#003cab' }}
                            >
                             Sign up
                            </a> and we’ll send you the recording and slides after the webinar.
                        </div>

                        <br/>
                        
                    </ul>
                </div>

              
            </div>
        )
    }
}