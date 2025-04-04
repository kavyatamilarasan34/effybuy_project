import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./EffyBuyKaizenBtn.css";

export default class EffyBuyKaizenBtn extends Component {
  render() {
    return (
      <div className="effybuy_kaizen_main_div">
        <div className="effybuy_kaizen_btn_div">
          <div className="effybuy_kaizen_ind_btn effybuy_kaizen_ind_act_btn">
            EffyBuy
          </div>
          <div className="effybuy_kaizen_ind_btn">
            <a href="https://gamifykaizen.com/gamifykaizen/" target="_blank ">
              Kaizen
            </a>
          </div>
        </div>
        {/* <Tabs>
            <TabList className="nav nav-tabs justify-content-center effybuy_kaizen-nav-four">
                <Tab>Monthly</Tab>
                <Tab>Yearly</Tab>
            </TabList>
        </Tabs> */}
      </div>
    );
  }
}
