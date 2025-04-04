import React, { Component } from "react";
import "./termsAndConditions.css";
import DocumentMeta from "react-document-meta";

export default class TermsAndConditions extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const meta = {
      title: "Terms & Conditions - EffyBuy",
      description:
        "Read the Terms & Conditions applicable for all users. Unique terms are applicable for the User & Visitor, Several terms & conditions are completing each processing phase.",
      meta: {
        charset: "utf-8",
        // name: {
        //   keywords: 'react,meta,document,html,tags'
        // }
      },
    };

    return (
      <DocumentMeta {...meta}>
        <div className="Terms_and_conditions_main_div">
          <div className="title-style-seven text-center">
            <h1>Terms and conditions</h1>
          </div>
          <div className="Terms_and_conditions_title_div">
            {/* <div className="Terms_and_conditions_title">
                        Terms and conditions
                    </div> */}
            <div className="Terms_and_conditions_updated">
              Last updated: January 1st, 2022
            </div>
          </div>

          <div className="Terms_and_conditions_paragraph_div">
            <p>
              Please read these Terms of Service (“Terms”, “Terms and
              Conditions”) carefully before using the EffyBuy websites
              (together, or individually, the “Service”)
            </p>
            <p>
              Your access to and use of the Service is conditioned upon your
              acceptance of and compliance with these Terms. These Terms apply
              to all visitors, users, and others who wish to access or use the
              Service and to the organization that grants you access to our
              Service (“Customer”).
            </p>
            <p>
              By accessing or using the Service you agree to be bound by these
              Terms. If you disagree with any part of the terms then you do not
              have permission to access the Service.
            </p>
            <p>
              As used in this Terms of Service, ‘EffyBuy’, ‘us’, ‘we’ refers to
              EffyBuy and its affiliates.
            </p>
            <p>
              If you have any questions about this Terms of Service or any
              complaints please send an email to support@bizgam.com
            </p>
          </div>

          <div className="Terms_and_conditions_points_div">
            <ul>
              <li>Communications</li>
              <p>
                By creating an Account on our service, you agree to subscribe to
                newsletters, marketing or promotional materials, and other
                information we may send on occasions. However, you may opt-out
                of receiving any, or all, of these communications from us by
                following the unsubscribe link or instructions provided in any
                email we send.
              </p>

              <li>Content</li>
              <p>
                Our Service allows you to post, link, store, share, and
                otherwise make available certain information, text, graphics, or
                other material (“Content”). You are responsible for the Content
                that you post on or through the Service, including its legality,
                reliability, and appropriateness.
              </p>
              <p>
                By posting Content on or through the Service, You represent and
                warrant that: (i) the Content is yours (you own it) and/or you
                have the right to use it and the right to grant us the rights
                and license as provided in these Terms, and (ii) that the
                posting of your Content on or through the Service does not
                violate the privacy rights, publicity rights, copyrights,
                contract rights or any other rights of any person or entity. We
                reserve the right to terminate the account of anyone found to be
                infringing on a copyright.
              </p>
              <p>
                The Content you submit, post, or display may be the property of
                the Customer, in any case, you or the Customer retain any of
                your rights to any Content you submit, post or display on or
                through the Service and you are responsible for protecting those
                rights. We take no responsibility and assume no liability for
                Content you or any third party posts on or through the Service.
                However, by posting Content using the Service you and the
                Customer grant us the limited, non-exclusive and
                non-transferable (except in connection with the sale or transfer
                of our business) right and license to use, modify, publicly
                perform, publicly display, reproduce, and distribute such
                Content on and through the Service.
              </p>
              <p>
                EffyBuy has the right but not the obligation to monitor and edit
                all Content provided by users.
              </p>
              <p>
                Also, Content found on or through this Service are the property
                of EffyBuy or used with permission. You may not distribute,
                modify, transmit, reuse, download, repost, copy, or use said
                Content, whether in whole or in part, for commercial purposes or
                personal gain, without express advance written permission from
                us and the Customer.
              </p>

              <li>Accounts</li>
              <p>
                When you create an account with us, you guarantee that you are
                above the age of 18, that you have a legal relationship with the
                Customer and that the information you provide us is accurate,
                complete, and current at all times. Inaccurate, incomplete, or
                obsolete information may result in the immediate termination of
                your account on the Service.
              </p>
              <p>
                You are responsible for maintaining the confidentiality of your
                account and password, including but not limited to the
                restriction of access to your computer and/or account. You agree
                to accept responsibility for any activities or actions that
                occur under your account and/or password, whether your password
                is with our Service or a third-party service. You must notify us
                immediately upon becoming aware of any breach of security or
                unauthorized use of your account.
              </p>
              <p>
                You may not use as a username the name of another person or
                entity or that is not lawfully available for use, a name or
                trademark that is subject to any rights of another person or
                entity other than you, without appropriate authorization. You
                may not use as a username any name that is offensive, vulgar or
                obscene.
              </p>
              <p>
                You may not, if given the ability to do so, invite individuals
                outside your organization or your company.
              </p>

              <li>Intellectual Property</li>
              <p>
                The Service and its original content (excluding Content provided
                by users), features, and functionality are and will remain the
                exclusive property of EffyBuy and its licensors. The Service is
                protected by copyright, trademark, and other laws of India,
                United States and foreign countries. Our trademarks and trade
                dress may not be used in connection with any product or service
                without the prior written consent of EffyBuy.
              </p>
              <p>
                You agree not to, directly or indirectly, reverse engineer,
                decompile, disassemble or otherwise attempt to discover the
                source code, object code or underlying structure, ideas,
                know-how, or algorithms relevant to the Services, the Software,
                or any software, application, documentation or data related to
                the Services (collectively, the “EffyBuy Technology”). You
                agree, not to modify in any way, translate, or create derivative
                works based on the EffyBuy Technology (except to the extent
                expressly permitted or authorized by EffyBuy). You agree not to
                sell, sublicense, transfer any rights in, or use the EffyBuy
                Technology for benefit of a third party. You agree not to remove
                any property notices or labels from EffyBuy Technology.
              </p>

              <li>Free Plan</li>
              <p>
                If you are a participant of the Free Plan, EffyBuy will be
                available for up to 1 user per Organization.
              </p>
              <p>
                We reserve the right to change and limit the functionality of
                the platform for the free plan. You agree that EffyBuy can
                terminate your account and revoke access to the Service and that
                the Free plan can be cancelled or modified at any time. You
                agree that EffyBuy can, at any time and without prior notice,
                make any modifications to your organization account such as
                enabling new features or disabling current functionality.
              </p>

              <li>Links To Other Web Sites</li>
              <p>
                Our Service may contain links to third-party web sites or
                services that are not owned or controlled by EffyBuy. Please
                read the Privacy Policy for more details.
              </p>
              <p>
                EffyBuy has no control over and assumes no responsibility for
                the content, privacy policies, or practices of any third-party
                web sites or services. We do not warrant the offerings of any of
                these entities/individuals or their websites.
              </p>
              <p>
                You acknowledge and agree that EffyBuy shall not be responsible
                or liable, directly or indirectly, for any damage or loss caused
                or alleged to be caused by or in connection with the use of or
                reliance on any such content, goods, or services available on or
                through any such third-party web sites or services.
              </p>
              <p>
                We strongly advise you to read the terms and conditions and
                privacy policies of any third-party web sites or services that
                you visit.
              </p>

              <li>Termination</li>
              <p>
                We may terminate or suspend your account and ban access to the
                Service immediately, without prior notice or liability, under
                our sole discretion, for any reason whatsoever and without
                limitation, including but not limited to a breach of the Terms.
              </p>
              <p>
                If you wish to terminate your account, you may simply
                discontinue using the Service.
              </p>
              <p>
                All provisions of the Terms which by their nature should survive
                termination shall survive termination, including, without
                limitation, ownership provisions, warranty disclaimers,
                indemnity, and limitations of liability.
              </p>

              <li>Indemnification</li>
              <p>
                You agree to defend, indemnify and hold harmless EffyBuy and its
                licensee and licensors, and their employees, contractors,
                agents, officers and directors, from and against any and all
                claims, damages, obligations, losses, liabilities, costs, or
                debt, and expenses (including but not limited to attorney’s
                fees), resulting from or arising out of <br />
                a) your use and access of the Service, by you or any person
                using your account and password; <br />
                b) a breach of these Terms, or <br />
                c) Content posted on the Service.
              </p>

              <li>Limitation Of Liability</li>
              <p>
                In no event shall EffyBuy, nor its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from <br />
                (i) your access to or use of or inability to access or use the
                Service; <br />
                (ii) any conduct or content of any third party on the Service;{" "}
                <br />
                (iii) any content obtained from the Service; and <br />
                (iv) unauthorized access, use or alteration of your
                transmissions or content, whether based on warranty, contract,
                tort (including negligence) or any other legal theory, whether
                or not we have been informed of the possibility of such damage,
                and even if a remedy set forth herein is found to have failed of
                its essential purpose.
              </p>

              <li>Disclaimer</li>
              <p>
                Your use of the Service is at your sole risk. The Service is
                provided on an “AS IS” and “AS AVAILABLE” basis. The Service is
                provided without warranties of any kind, whether express or
                implied, including, but not limited to, implied warranties of
                merchantability, fitness for a particular purpose,
                non-infringement, or course of performance.
              </p>
              <p>
                EffyBuy its subsidiaries, affiliates, and its licensors do not
                warrant that <br />
                a) the Service will function uninterrupted, secure or available
                at any particular time or location; <br />
                b) any errors or defects will be corrected; <br />
                c) the Service is free of viruses or other harmful components,
                or <br />
                d) the results of using the Service will meet your requirements.
              </p>

              <li>Exclusions</li>
              <p>
                Some jurisdictions do not allow the exclusion of certain
                warranties or the exclusion or limitation of liability for
                consequential or incidental damages, so the limitations above
                may not apply to you.
              </p>

              <li>Governing Law</li>
              <p>
                These Terms shall be governed by and construed and enforced in
                accordance with the laws of India, without regard to its
                conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms
                will not be considered a waiver of those rights. If any
                provision of these Terms is held to be invalid or unenforceable
                by a court, the remaining provisions of these Terms will remain
                in effect. These Terms constitute the entire agreement between
                us regarding our Service, and supersede and replace any prior
                agreements we might have had between us regarding the Service.
              </p>

              <li>Changes</li>
              <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is a material we
                will provide at least 30 days’ notice before any new terms
                taking effect. What constitutes a material change will be
                determined at our sole discretion.
              </p>
              <p>
                By continuing to access or use our Service after any revisions
                become effective, you agree to be bound by the revised terms. If
                you do not agree to the new terms, you are no longer authorized
                to use the Service.
              </p>

              <li>Contact Us</li>
              <p>
                If you have any questions about these Terms, please contact us
                by sending an email to support@bizgam.com
              </p>
            </ul>
          </div>
        </div>
      </DocumentMeta>
    );
  }
}
