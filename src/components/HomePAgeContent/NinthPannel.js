import React from 'react'
import withouteffybuy from '../../assets/images/media/TeamChallange.svg'
import witheffybuy from '../../assets/images/media/AutoNegotiation.svg'
import cross from '../../assets/images/icon/cross.png'
import right from '../../assets/images/icon/63.svg'


export default function Third() {
    return (
        <div className="fancy-feature-sixteen " id="features">
        <div className="container" style={{"overflow":"hidden"}}>
        <div className="block-style-eighteen mt-90 pt-50 md-mt-80">
         <div className="text-wrapper">
            <h3 className="title" style={{"textAlign":"center", fontSize: "70px"}}>
             <b>   Join our webinar to discover <br></br> <span> How Effybuy helps you </span> </b>
            </h3><br></br>
            <br></br>
          </div>
            <div className="row align-items-center">
              <div
                className="col-lg-6 order-lg-last"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h3 className="title" style={{"textAlign":"center"}}>
                  The solution?  <span>Auto-Negotiation </span>
                  </h3>
                  <img src={witheffybuy} alt="With Effybuy" style={{"width":"400px","margin":"0 auto"}}/>
                  <div style={{"margin":"5% 0 0 30%"}}>
                  <ul >
                      <li style={{"position":"relative","margin":"10px", color: "black"}}>
                        <img src={right} alt="k" style={{"position":"absolute","left":"-20px","top":"10px"}} /> Secure 12-25% better terms with data-driven proposals
                      </li>
                      <li style={{"position":"relative","margin":"10px", color: "black"}}>
                        <img src={right} alt="k" style={{"position":"absolute","left":"-20px","top":"10px"}} /> Cut negotiation time by 60% through auctions 
                      </li>
                      <li style={{"position":"relative","margin":"10px", color: "black"}}>
                        <img src={right} alt="k" style={{"position":"absolute","left":"-20px","top":"10px"}} /> Maintain strong supplier relationships with fair, transparent deals
                      </li>
                      <li style={{"position":"relative","margin":"10px", color: "black"}}>
                        <img src={right} alt="k" style={{"position":"absolute","left":"-20px","top":"10px"}} /> Eliminate guesswork with real-time auctions
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 order-lg-first"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                  <div className="text-wrapper">
                  <br></br>
                  <h3 className="title" style={{"textAlign":"center"}}>
                  <span>Team  Challenges </span>
                  
                  </h3>
                    <img src={withouteffybuy} alt="Without Effybuy" style={{"width":"400px","margin":"0 auto"}}/>
                  <div style={{"margin":"5% 0 0 30%"}}>
                  <ul>
                    
                      <li style={{"position":"relative","color":"#999","margin":"10px", color: "black"}}>
                        <img src={cross} alt="k" style={{"position":"absolute","left":"-20px","top":"9px", width:"10px",height:"10px"}} /> Inconsistent pricing from manual negotiations 
                      </li>
                      <li style={{"position":"relative","color":"#999","margin":"10px", color: "black"}}>
                        <img src={cross} alt="k" style={{"position":"absolute","left":"-20px","top":"8px", width:"10px",height:"10px"}}  /> Missed savings due to lack of market benchmarks
                      </li>
                      <li style={{"position":"relative","color":"#999","margin":"10px", color: "black"}}>
                        <img src={cross} alt="k" style={{"position":"absolute","left":"-20px","top":"8px", width:"10px",height:"10px"}} /> Time-consuming back-and-forth with suppliers
                      </li>
                      <li style={{"position":"relative","color":"#999","margin":"10px", color: "black"}}>
                        <img src={cross} alt="k" style={{"position":"absolute","left":"-20px","top":"8px", width:"10px",height:"10px"}}  />  Strained partnerships from constant barganing
                      </li>
                  </ul>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

        </div>
        </div>
    )
}
