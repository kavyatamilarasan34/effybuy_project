import React, { Component } from "react";
import "./privacyPolicy.css";
import DocumentMeta from "react-document-meta";

export default class PrivacyPolicy extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const meta = {
      title: "Our Privacy Policy - EffyBuy",
      description:
        "EffyBuy is committed to protecting your data and providing a secure online experience. We value your trust and offer high-security options to your Data.",
      meta: {
        charset: "utf-8",
        // name: {
        //   keywords: 'react,meta,document,html,tags'
        // }
      },
    };

    return (
      <DocumentMeta {...meta}>
        <div className="privacy_policy_main_div">
          <div className="title-style-seven text-center">
            <h1>Privacy Policy</h1>
          </div>
          <div className="privacy_policy_title_div">
            <div>
              {/* <div className="privacy_policy_title">
                            Privacy Policy
                        </div> */}
              <div className="privacy_policy_title_effybuy">
                EffyBuy Web Site Privacy Statement
              </div>
            </div>
            <div className="privacy_policy_updated">
              Last updated: January 1st, 2022
            </div>
          </div>

          <div className="privacy_policy_paragraph_div">
            <p>
              www.EffyBuy.com and any related subdomains is committed to
              protecting your privacy and giving you the most powerful and
              secure online experience. Because we collect information about our
              users in order to provide our online negotiation site (the
              "Negotiation Site"), this Privacy Policy explains data collection
              and use in connection with the operation of our Negotiation Site.
              Please read this entire privacy policy before posting any
              information on any of our websites.
            </p>
          </div>

          <div className="privacy_policy_points_div">
            <ul>
              <li>
                NOTICE OF PURPOSE OF COLLECTION OF PERSONAL INFORMATION FROM
                WEBSITE VISITORS
              </li>
              <p>
                We will ask you when we need information that personally
                identifies users and Company representatives accessing and using
                the Negotiation Site or that allows us to contact you ("Personal
                Information"). Generally, this information is gathered upon your
                request for a password to access our online Negotiation Site.
                When you make use of our online Negotiation Site, we may ask you
                to provide additional information. We keep this registration
                information on file. This is considered your User Profile.
              </p>
              <p>
                EffyBuy automatically collects and/or tracks <br />
                (1) the home server domain names, e-mail addresses, type of
                client computer, and type of Web browser of visitors to
                EffyBuy's Website and users of EffyBuy software, <br />
                (2) the e-mail addresses of visitors that communicate with
                EffyBuy via e-mail, [post messages to EffyBuy’schat groups],{" "}
                <br />
                (3) information knowingly provided by the visitor in online
                forms, registration forms, surveys, and contest entries, and{" "}
                <br />
                (4) user-specific information on what pages visitors access.
              </p>
              <p>
                EffyBuy does not place Internet cookies on visitors' hard drives
                except as necessary to automatically maintain web site session
                data. Internet cookies are stored on the visitor's hard drive
                and are not stored, in any form, by EffyBuy. No attempt is made
                by EffyBuy to reconcile or store your submitted personal data
                inside cookie files.
              </p>

              <li>USE OF YOUR PERSONAL INFORMATION</li>
              <p>We use Personal Information for four primary purposes:</p>
              <p>
                To notify you of the existence of Negotiations on the
                Negotiation Site and the status of your bids.
              </p>
              <p>
                To make the site easier for you to use by not making you enter
                Personal Information more than once.
              </p>
              <p>
                To help you quickly find information on our Negotiation Site.
              </p>
              <p>
                Except as set forth below, we will disclose Personal
                Information, without notice, only if required to do so by law or
                in the good faith belief that such action is necessary to:{" "}
                <br />
                (a) conform to the edicts of the law or comply with legal
                process served on us; <br />
                (b) protect and defend our rights or property, <br />
                (c) act in urgent circumstances to protect the personal safety
                of users of our Negotiation Site or the public, and <br />
                (d) establish compliance with the Negotiation Site User
                Agreement.
              </p>
              <p>
                Your Personal Information may also be accessible by third
                parties with whom we have contracted to host and support our
                Negotiation Site. Any such third parties have agreed, or will
                agree, not to disclose or use your Personal Information except
                for the reasons set forth in (a) through (d) above.
              </p>

              <li>CONTROL OF YOUR PERSONAL INFORMATION</li>
              <p>
                When you register, or otherwise give us Personal Information, we
                will not share that information with third parties without your
                permission, other than for the limited exceptions already
                listed. It will only be used for the purposes stated above.
              </p>
              <p>
                We may send out periodic e-mails informing you of technical
                service issues related to our Negotiation Site or other services
                offered on our Negotiation Site.
              </p>

              <li>SECURITY</li>
              <p>
                We value your trust in providing us your Personal Information,
                thus we are striving to use commercially acceptable means of
                protecting it. But remember that no method of transmission over
                the internet, or method of electronic storage is 100% secure and
                reliable, and we cannot guarantee its absolute security.
              </p>

              <li>CHANGES TO YOUR PERSONAL INFORMATION</li>
              <p>
                Upon request via postal mail, e-mail, or phone to the contact
                person below, EffyBuy will provide to visitors a summary of any
                personal information retained by EffyBuy regarding the visitor.
                Visitors may modify, correct, change, or update their personal
                record or cause their personal record to be removed from
                EffyBuy's database. EffyBuy will only send personal records to
                the e-mail address on file for the visitor name associated with
                it. <br />
                <br />
                For inquiries or corrections, please contact:
                <br />
                {/* <br/> */}
                EffyBuy
                <br />
                Email: support@bizgam.com
              </p>

              <li>ONWARD TRANSFER OF PERSONAL DATA TO THIRD PARTIES</li>
              <p>
                EffyBuy WILL NOT disclose the personal data collected through
                the website or through the EffyBuy software to third parties
                with the exception of the disclosure that is required to perform
                EffyBuy services.
              </p>
              <p>
                Link to privacy policy of third party service providers used by
                the website
                <br />
                <a href="https://policies.google.com/privacy">
                  Google Services
                </a>
              </p>

              <li>SECURITY OF YOUR PERSONAL INFORMATION</li>
              <p>
                We strictly protect the security of Personal Information and
                honor your choices for its intended use. We carefully protect
                your data from loss, misuse, unauthorized access or disclosure,
                alteration, or destruction. Personal Information is never shared
                outside the Company without your permission, except under
                conditions explained above. We cannot guarantee the security of
                any information transmitted outside our control, i.e. personal
                information accessible on or transmitted via the Internet. If
                you have any questions about the security of our service, you
                can send a letter to the contact person listed above.
              </p>

              <li>DATA INTEGRITY</li>
              <p>
                EffyBuy takes reasonable steps to ensure that data collected via
                its website is accurate, complete, current, and reliable for its
                intended use. We only collect data that is strictly necessary
                for the purposes listed under the section entitled "Notice of
                Purpose of Collection of Personal Information from Site
                Visitors," including (but not limited to) information that is
                necessary to identify the consumer.
              </p>

              <li>CHILDREN’s PRIVACY</li>
              <p>
                These Services do not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                children under 13. In the case we discover that a child under 13
                has provided us with personal information, we immediately delete
                this from our servers. If you are a parent or guardian and you
                are aware that your child has provided us with personal
                information, please contact us so that we will be able to do
                necessary actions.
              </p>

              <li>CHANGES TO THIS STATEMENT</li>
              <p>
                We may occasionally update this privacy policy. When we do, we
                will also revise the "last updated" date at the top of the
                privacy policy. For material changes to this privacy policy, we
                will notify you by placing a prominent notice on the website.
              </p>
            </ul>
          </div>
        </div>
      </DocumentMeta>
    );
  }
}
