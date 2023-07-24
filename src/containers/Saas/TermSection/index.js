import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import TermSectionWrapper, { List, ListItem } from './termSection.style';

const TermSection = ({
  sectionHeader,
  sectionTitle,
  sectionParagraph,
}) => {

  return (
    <TermSectionWrapper id="training_section">
      <Container>
        <Box {...sectionHeader}>
          <Heading
            content="Terms & Conditions"
            {...sectionTitle}
          />
          <Text
            content="Please read these Terms carefully. By using SaleFreaks’s web service or downloading the app, you’re agreeing to these Terms."
            {...sectionParagraph} />
          <Text content="This is a legal agreement."
            {...sectionParagraph} />
          <Text
            content="SaleFreaks (“SaleFreaks” or the “Service”) is Dropshipping Software for merchants offered through the URL https:// www.SaleFreaks.com (“Website”)."
            {...sectionParagraph} />
          <Text
            content="SaleFreaks is owned and operated by Wolvan Hutley Limited (“SaleFreaks,” “we,” or “us”)."
            {...sectionParagraph} />
          <Text
            content="SaleFreaks has directors, independent contractors, and representatives (“our Team”). As a customer of the Service or a representative of an entity that’s a customer of the Service, you're a “Member” according to this agreement (or “you”). You agree that: "
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading
            content="Use of Service"
            {...sectionTitle}
          />
          <Text
            content="Your use of SaleFreaks.com is based on the license of SaleFreaks’s Intellectual property to you. We grant you a limited, non-transferable license to use SaleFreaks Intellectual Property in accordance with the terms of this agreement, as long as you are a Member. SaleFreaks reserves all rights in the Intellectual Property not expressly granted to you. "
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading
            content="Account"
            {...sectionTitle} />

          <Text
            content="If you choose to use Our Service, you represent that you have full power, capacity and authority to accept these Terms."
            {...sectionParagraph} />
          <Text
            content="You affirm that you are at least 18 years of age, and to abide by and comply with these Terms of Service;"
            {...sectionParagraph} />


          <List>

            <ListItem key={`footer-list-item-1`}>
              <a className="ListItem">
                You must be a human to open an account. Accounts registered by “bots” or other automated methods are not permitted;
              </a>
            </ListItem>

            <ListItem key={`footer-list-item-1`}>
              <a className="ListItem">
                You must personally and manually create your account without using any automated means; except the auto- complete feature in your website browser. A Third Party may not create an account for you and you must not allow any Third Party to use your information to create an account;
              </a>
            </ListItem>

            <ListItem key={`footer-list-item-1`}>
              <a className="ListItem">
                You must provide your legal full name, valid email address, and any other information we request to complete your account-signup process;
              </a>
            </ListItem>

            <ListItem key={`footer-list-item-1`}>
              <a className="ListItem">
                You are responsible for maintaining the security of your account and password. We will not be liable for any loss or damage from your failure to comply with this security obligation;
              </a>
            </ListItem>

            <ListItem key={`footer-list-item-1`}>
              <a className="ListItem">
                The purchase, sale, assignment or transfer of any accounts is prohibited;
              </a>
            </ListItem>

            <ListItem key={`footer-list-item-1`}>
              <a className="ListItem">
                You are responsible for your own conduct and activities on, through or related to Our Service. If you create an account to use Our Service, you are responsible for all conduct or activities on, through or by use of your account. You must immediately notify us of any unauthorized use of your account."
              </a>
            </ListItem>
          </List>
        </Box>


        <Box {...sectionHeader}>
          <Heading
            content="Termination"
            {...sectionTitle} />

          <Text
            content="We or You may terminate this Agreement at any time by giving Notice to the other party. We may suspend our Service to you at any time, with or without cause. Only if we terminate your account without cause, will we refund you a prorated portion of any plan prepayment. If your account is terminated, we may permanently delete your account and all the data associated with it from our Website."
            {...sectionParagraph} />

          <Text
            content="If you don’t log in to your account for 12 or more months, we may treat your account as “inactive” and permanently delete the account and all the data associated with it."
            {...sectionParagraph} />

          <Text
            content="Monthly Plan payments are due for any month on the same date, or the closest date in that month, to the day you signed up with us and made your first monthly payment. You must terminate your Monthly Plan at least 24 hours prior to the next monthly due date in order to avoid being charged for that month. You can cancel your account by just cancelling the recurring payments through your payment processor."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading
            content="Account Dispute"
            {...sectionTitle} />

          <Text
            content="We consider the person or business entity in whose name the account is registered in to be the owner."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading
            content="Pricing"
            {...sectionTitle} />

          <Text
            content="Our charges related to our Services are posted on our Website at www.SaleFreaks.com and may be changed from time to time."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading
            content="Payments"
            {...sectionTitle} />

          <Text
            content="As long as you’re a Monthly Plan member or have an outstanding balance with us, you'll provide us with a valid payment source and authorize us to deduct the monthly charges against that payment source. You’ll replace the information for any payment source that expires with information for a different valid payment source. Anyone using a payment source represents and warrants that they are authorized to use that payment source, and that any and all charges may be billed to that payment source and won’t be rejected. Payment sources include Credit Cards, PayPal or any other means which We deem acceptable. Failure to perform payment shall construe as material breach of this Agreement."
            {...sectionParagraph} />
        </Box>

        <Box {...sectionHeader}>
          <Heading
            content="Changes"
            {...sectionTitle} />

          <Text
            content="We may change the terms of this Agreement or our pricing at any time by posting the changes to this Website or notifying you by email."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading
            content="Cookies Policy"
            {...sectionTitle} />

          <Text
            content="What Are Cookies & Why Are They Necessary?"
            {...sectionParagraph} />

          <Text
            content="Cookies are small pieces of code designed to store pieces of data. For example, they remember things like your name or email address that have been previously entered into forms. It will remember these things whether you are logged in or not and this is because they are stored on your own user device such as your laptop, phone or tablet."
            {...sectionParagraph} />

          <Text
            content="The cookies help us as a business understand where you came from and how you found us whilst browsing the internet."
            {...sectionParagraph} />

          <Text
            content="If you would like more information on cookies please visit: http:// www.allaboutcookies.org"
            {...sectionParagraph} />

          <Text
            content="If you would like to learn how to delete/control how cookies are used on your devices please visit: http://www.allaboutcookies.org/manage- cookies/clear-cookies-installed.html"
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading
            content="What Kind Of Cookies Do We Use?"
            {...sectionTitle} />

          <Text
            content="Strictly Necessary Cookies - These cookies are required to enable you to navigate around the site, use the sites features and return to previous pages you have already visited."
            {...sectionParagraph} />

          <Text
            content="Performance Cookies - These types of cookies track where you have been on the site, how many times you have been there and how you choose to navigate around the site. It helps us understand how the site works best and to ensure you are finding exactly what you are searching for. The data is 100% anonymised - this means that we are not able to individually identify you."
            {...sectionParagraph} />

          <Text
            content="Functionality Cookies - These cookies allow us to personalise your experience whilst using our site by remembering choices you have previously made for example your username, which language you have chosen or even the region you are in. By using this website you are agreeing for us to put these kinds of cookies on your device and they will stay there until your cookies are cleared."
            {...sectionParagraph} />

          <Text
            content="Retargeting Cookies - We use these kinds of cookies to show you more of what we think you will like. They collect data about your browsing habits which allows us to serve up the most relevant advertisement for you."
            {...sectionParagraph} />

          <Text
            content="Third Party Cookies - These cookies may be used if you share things to facebook, twitter or pinterest for example. We are not able to use or see these cookies equally these platforms are not able to access our cookies. We cannot control these cookies so please make sure that you check the information about their individual use of cookies."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading
            content="How long are cookies stored for?"
            {...sectionTitle} />

          <Text
            content="Session Cookies - These cookies begin when you open your browser and end when you close your browser. They are temporarily created and then deleted once you have finished browsing."
            {...sectionParagraph} />

          <Text
            content="Permanent/Persistent Cookies - These cookies are stored for longer than the session cookies. They only reactivate when you return to the same site and are stored until their expiration date."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading
            content="Data Protection and Privacy Notice"
            {...sectionTitle} />

          <Text
            content="We are 100% committed to protecting your data and your privacy. This is why maintaining your trust whilst visiting our website and using our Software are of utmost importance to us."
            {...sectionParagraph} />

          <Text
            content="Your email and personal information is safe with us but just in case our word isn’t enough, we have included lots information about when and why we collect your data, what we will be doing with it and how we are dedicated to keeping it safe and secure."
            {...sectionParagraph} />

          <Text
            content="Please note that you are always entitled to gain access to your personal information or exercise your right to be forgotten. If you wish to do this contact our GDPR Officer at info@wolvanhutley.com"
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Whilst Visiting Our Website" {...sectionTitle} />

          <Text
            content="When you visit our site www.SaleFreaks.com we use both Cookies and Google Analytics which is also a third party service and we use this to track the amount of visitors we have to different parts of our website."
            {...sectionParagraph} />

          <Text
            content="This will help us understand our visitors and their behaviour whilst on our site. We are not able to find the identity of any person through this process nor would we attempt to find this information out."
            {...sectionParagraph} />

          <Text
            content="If at any point we were to collect identifiable information about you, we will let you know why and our intensions."
            {...sectionParagraph} />

          <Text
            content="Your data is also collected by third party affiliate software providers, third party suppliers and payment processors Stripe and/or PayPal."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="What About Our Mailing List?" {...sectionTitle} />

          <Text
            content="When you subscribe to our mailing list we collect some of your personal information and we do this for a few reasons - to let you know of new and upcoming information, and to get in touch with you if we need any additional information from you and also to keep you up to date with all the things you have asked us to keep you informed about."
            {...sectionParagraph} />

          <Text
            content="You are able to unsubscribe to our emails at anytime just scroll to the bottom of one of our emails and find the unsubscribe button."
            {...sectionParagraph} />

          <Text
            content="Alternatively you can contact our GDPR officer at info@wolvanhutley.com"
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Does Our Privacy Notice Continue To Sites We Have Linked To?" {...sectionTitle} />

          <Text
            content="No, our privacy notice does not stand for any sites that we may link to from www.SaleFreaks.com. Make sure to check privacy notices and cookie policies within each individual site. We are only able to control what we do with our own."
            {...sectionParagraph} />

          <Text
            content="If you have any questions regarding our data and privacy policy, please don’t hesitate to contact our GDPR Officer at info@wolvanhutley.com"
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Whilst using our software" {...sectionTitle} />

          <Text
            content="In order for SaleFreaks to show you accurate information, data may be transferred to us from third party services, for example ebay or Amazon. This data is used to populate the information contained within your SaleFreaks Account."
            {...sectionParagraph} />

          <Text
            content="We also collect Aggregated Data to improve the features of SaleFreaks."
            {...sectionParagraph} />

          <Text
            content="Data is not used by any directors or representatives of SaleFreaks for any purposes other than those outlined above."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Member Warranties" {...sectionTitle} />

          <Text content="You promise not to:" {...sectionParagraph} />

          <List>
            <ListItem key={`footer-list-item-1`}>
              <a className="ListItem">
                An electronic or physical signature of the copyright owner or someone authorized to act on their behalf;
              </a>
            </ListItem>

            <ListItem key={`footer-list-item-1`}>
              <a className="ListItem">
                Send Unsolicited Bulk Mail (SPAM) or other communications;
              </a>
            </ListItem>

            <ListItem key={`footer-list-item-1`}>
              <a className="ListItem">
                Upload, post, email, or otherwise transmit any material that contains software viruses or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of any computer software or hardware or telecommunications equipment;
              </a>
            </ListItem>

            <ListItem key={`footer-list-item-1`}>
              <a className="ListItem">
                Send or transmit pornography or other sexually explicit communications, communications offering to sell illegal goods or services, communications that violate Spam Laws, or marketing or commercial communications without permission;
              </a>
            </ListItem>

            <ListItem key={`footer-list-item-1`}>
              <a className="ListItem">
                Infringe on any third party’s ownership rights by using any material in your transmissions or uploads that is not owned or licensed by you. This includes text, photos, graphics, and other content;
              </a>
            </ListItem>

            <ListItem key={`footer-list-item-1`}>
              <a className="ListItem">
                Use any misleading or incorrect names, addresses, email addresses, subject lines, photographs, content or other information on the Website or in any communications or transmissions sent using Our Service;
              </a>
            </ListItem>

            <ListItem key={`footer-list-item-1`}>
              <a className="ListItem">
                Breach or circumvent any laws, third party rights or our systems, policies, or determinations of Your account status;
              </a>
            </ListItem>

            <ListItem key={`footer-list-item-1`}>
              <a className="ListItem">
                Use any robot, spider, scraper or other automated means to access our Service for any purpose;
              </a>
            </ListItem>

            <ListItem key={`footer-list-item-1`}>
              <a className="ListItem">
                Harvest or otherwise collect information about members without their consent; and
              </a>
            </ListItem>

            <ListItem key={`footer-list-item-1`}>
              <a className="ListItem">
                Upload or transmit harassing, offensive, obscene, defamatory, threatening, or malicious content or communications.
              </a>
            </ListItem>
          </List>
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Disclaimer of Warranties" {...sectionTitle} />

          <Text
            content="TO THE FULLEST EXTENT PERMITTED BY THE APPLICABLE LAW, SALEFREAKS OFFERS THE WEBSITE AND SERVICES AS-IS AND MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND CONCERNING THE WEBSITE OR ITS SERVICES, EXPRESS, IMPLIED, STATUTORY OR OTHERWISE, INCLUDING, WITHOUT LIMITATION, MERCHANTIBILITY, FITNESS FOR A PARTICULAR PURPOSE. SALEFREAKS DOES NOT WARRANT THAT THE FUNCTIONS OR CONTENT CONTAINED ON THE WEBSITE OR SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT OUR SERVERS ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Limitation of Liability" {...sectionTitle} />

          <Text
            content="EXCEPT TO THE MINIMUM EXTENT REQUIRED BY APPLICABLE LAW AND THEN ONLY TO THAT EXTENT, IN NO EVENT WILL SALEFREAKS, ITS EMPLOYEES, OFFICERS, DIRECTORS, AFFILIATES OR AGENTS (the “SALEFREAKS TEAM”) BE LIABLE TO YOU ON ANY LEGAL THEORY FOR ANY INCIDENTAL, DIRECT, INDIRECT, PUNITIVE, ACTUAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY OR OTHER DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF REVENUE OR INCOME, LOST PROFITS, PAIN AND SUFFERING, EMOTIONAL DISTRESS, COST OF SUBSTITUTE GOODS OR SERVICES, OR SIMILAR DAMAGES SUFFERED OR INCURRED BY YOU OR ANY THIRD PARTY THAT ARISE IN"
            {...sectionParagraph} />

          <Text
            content="CONNECTION WITH THE WEBSITE OR SERVICES (OR THE TERMINATION THEREOF FOR ANY REASON), EVEN IF THE SALEFREAKS TEAM HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY FOR ALL CLAIMS MADE ABOUT THE SERVICE IN ANY MONTH WILL BE NO MORE THAN WHAT YOU PAID US THE MONTH BEFORE. YOU SHOULD DO YOUR OWN DUE DILIGENCE AND SALEFREAKS TAKE NO RESPONSIBILITY FOR THE ACCURACY OF THE INFORMATION PROVIDED – IT IS FOR GUIDANCE PURPOSES ONLY."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Indemnification for Breach of Terms of Use " {...sectionTitle} />

          <Text
            content="You agree to indemnify and hold harmless the SaleFreaks Team from and against any and all loss, expenses, damages, and costs, including without limitation reasonable legal fees, resulting, whether directly or indirectly, from your violation of the Terms of this Website. You also agree to indemnify and hold harmless the SaleFreaks Team from and against any and all claims brought by third parties arising out of your use of the Website or Services and the Content You make available via the Website or Services by any means, including without limitation through an emailing, posting, a link, reference to Content, or otherwise, whether by You or a third party using Your password."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Legal Fees" {...sectionTitle} />

          <Text content="In the event we prevail in any action against you arising out of or relating to this Agreement, We shall be entitled to recover damages, other relief we may be awarded, its costs and expenses, including reasonable attorneys fees, incurred in connection with such action."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Subpoena Costs" {...sectionTitle} />

          <Text content="If we have to provide information in response to a subpoena related to your account, then we may charge you for our costs. These costs may include solicitor/barrister and employee time spent retrieving the records, preparing documents, and participating in a deposition."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Intellectual Property " {...sectionTitle} />

          <Text
            content="Ours. The SaleFreaks Website, its original Content, features, functionality (including look), and Service Content (“Intellectual Property”) are owned by SaleFreaks and are protected by English and international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws. You agree to not copy, modify, create derivative works of, publicly display, publicly perform, or republish any of our copyrighted Content. The term “Content” includes, without limitation, information, data, text, photographs, videos, audio clips, written posts and comments, software, scripts, graphics, adwords, and interactive features generated, provided, or otherwise made accessible on or through SaleFreaks."
            {...sectionParagraph} />

          <Text
            content="Yours. You represent and warrant that you either own or have permission to use all of the material you upload to or transmit using SaleFreaks. You retain ownership of the materials you upload to, or transmit using the Service. You grant us a non-exclusive worldwide license to use or disclose your materials subject to our Privacy Policy."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Compliance with Law" {...sectionTitle} />

          <Text
            content="You represent and warrant that your use and interaction with SaleFreaks is in compliance with all national, federal, state, and local laws, ordinances and regulations. If you are located in a Country outside the United Kingdom it is your responsibility to determine that you are in compliance with the laws of that Country. You agree to indemnify and hold us harmless from any losses, including legal fees that result from your breach of any part of these warranties."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Insurmountable Circumstances" {...sectionTitle} />

          <Text
            content="We shall not be liable for any failure of or delay in the performance of this Agreement for the period that such failure or delay is due to causes beyond our reasonable control, including but not limited to acts of God, war, hackers, third party internet providers, government orders, power failures, nuclear destruction, Armageddon or any other insurmountable circumstance or event (“Force Majeure”)"
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Severability" {...sectionTitle} />

          <Text
            content="The invalidity or unenforceability of any provisions of this Agreement shall not affect the validity or enforceability of any other provision of this Agreement, which shall remain in full force and effect."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Survival" {...sectionTitle} />

          <Text
            content="Any provision of this Agreement which imposes an obligation after termination or expiration of this Agreement shall survive the termination or expiration of this Agreement."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Headings" {...sectionTitle} />

          <Text
            content="The section headings contained in this Agreement are for reference purposes only and shall not affect in any way the meaning or interpretation of this Agreement."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Waiver" {...sectionTitle} />

          <Text
            content="Our failure to exercise or delay in exercising any right, power or privilege under this Agreement shall not operate as a waiver; nor shall any single or partial exercise of any right, power or privilege preclude any other or further exercise thereof."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Amendment" {...sectionTitle} />

          <Text
            content="This Agreement will only be amended by our posting new terms on this Website. These new terms will then be incorporated into the existing Agreement. If there is a conflict between the existing terms and the new terms, the new terms shall control."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Governing" {...sectionTitle} />

          <Text
            content="This Agreement shall be governed, construed, and enforced in accordance with the laws of the United Kingdom without regard to its conflict of laws rules, or international law or convention."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Dispute Resolution" {...sectionTitle} />

          <Text
            content="Any dispute or controversy You or We have arising under or in connection with this Agreement shall be settled exclusively by binding arbitration solely by written submission in the United Kingdom. Judgment may be entered on the arbitrator's award in any court having jurisdiction. The arbitrator shall not have the power to award any punitive or consequential damages."
            {...sectionParagraph} />

          <Text
            content="Arbitration shall proceed solely on an individual basis without the right for any Claims to be arbitrated on a class action basis or on bases involving claims brought in a purported representative capacity on behalf of others. The arbitrator's authority to resolve and make written awards is limited to Claims between You and Us alone. Claims may not be joined or consolidated unless agreed to in writing by all Parties. No arbitration award or decision will have any preclusive effect as to issues or claims in any dispute with anyone who is not a named party to the arbitration."
            {...sectionParagraph} />

          <Text
            content="The above notwithstanding, if You violate these Terms then we may seek injunctive or other equitable relief."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Assignment" {...sectionTitle} />

          <Text
            content="You may not assign any of your rights under this agreement to anyone else. We may assign our rights to any other individual or entity at our discretion."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Disclaimer" {...sectionTitle} />

          <Text
            content="In no event will The SaleFreaks Team be responsible for the actions of any third party. Third parties may include but are not limited to advertisers, linked websites or other members."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Notice" {...sectionTitle} />

          <Text
            content="All notices to You will be effective when We send it to the last email or physical address you gave us or posted on our Website. Any notice to Us will be effective when delivered to us by email at info@wolvanhutley.com"
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Copyright Infringement" {...sectionTitle} />

          <Text content="If copyrighted content that belongs to You was posted on SaleFreaks without Your permission please notify Us at info@wolvanhutley.com. Please include in your notice:"
            {...sectionParagraph} />

          <List>
            <ListItem key={`footer-list-item-1`}>
              <a className="ListItem">
                An electronic or physical signature of the copyright owner or someone authorized to act on their behalf;
              </a>
            </ListItem>

            <ListItem key={`footer-list-item-1`}>
              <a className="ListItem">
                The name, address, telephone number, and email address of the copyright owner;
              </a>
            </ListItem>

            <ListItem key={`footer-list-item-1`}>
              <a className="ListItem">
                Identification of the copyrighted work that is being infringed;
              </a>
            </ListItem>

            <ListItem key={`footer-list-item-1`}>
              <a className="ListItem">
                Identification of where the infringing material is located on our Website (the URL if possible);
              </a>
            </ListItem>

            <ListItem key={`footer-list-item-1`}>
              <a className="ListItem">
                A statement that you have a good faith belief that the use isn’t authorized by the copyright owner, its agent or the law;
              </a>
            </ListItem>

            <ListItem key={`footer-list-item-1`}>
              <a className="ListItem">
                A statement that the information in your notice is accurate, and
              </a>
            </ListItem>

            <ListItem key={`footer-list-item-1`}>
              <a className="ListItem">
                You’re authorized to act on behalf of the copyright
              </a>
            </ListItem>
          </List>

          <Text
            content="This statement must be made under penalty of perjury, meaning if any part of the statement is false, you could be committing perjury—a serious offence that’s sometimes even classified as a felony."
            {...sectionParagraph} />

          <Text
            content="Warning: If you knowingly make a false statement in your claim of copyright infringement, then you may be subject to liability for damages and heavy civil penalties. If you’re not sure whether material on one of our Websites infringes your copyright, then you should speak with a lawyer before notifying us. We may forward your notice to the user that uploaded the content."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Electronic Communications" {...sectionTitle} />

          <Text
            content="When you use the SaleFreaks service, or send e-mails, text messages, and other communications from your desktop or mobile device to us, you are communicating with us electronically. You consent to receive communications from us electronically. We will communicate with you in a variety of ways, such as by e-mail, text, or by posting notices and messages on this Website. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Fair Usage Policy" {...sectionTitle} />

          <Text
            content="Our fair usage policy is that customers should be able to use the service in an appropriate manner to meet their needs."
            {...sectionParagraph} />

          <Text
            content="Our higher packages offer some ‘unlimited’ services.  However, a very small number of customers may use an excessive amount of resource to the extent that it can impair the service of others. SaleFreaks’s fair usage policy is designed so that we are able provide the most effective service to all our customers."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading
            content="What happens if you are affected by the fair usage policy?"
            {...sectionTitle} />

          <Text
            content="If you are affected, we will contact the key user of your account by telephone or by email to inform them that your usage is excessive and is affecting other customers. The contact details we use be those that you currently have registered for use of a SaleFreaks account. If your usage remains excessively high, we will contact you a second time to advise you that we will be limiting or cancelling use of our service."
            {...sectionParagraph} />
        </Box>


        <Box {...sectionHeader}>
          <Heading content="Entire Agreement"
            {...sectionTitle} />

          <Text
            content="This Agreement together with Our Privacy Policy and any additional terms You have agreed to constitute(s) the entire agreement with respect to its subject matter and constitutes and supersedes all prior agreements, representations and understandings of the Parties, written or oral."
            {...sectionParagraph} />
        </Box>

      </Container >
    </TermSectionWrapper >
  );
};

// TrainingSection style props
TermSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionParagraph: PropTypes.object,
};

TermSection.defaultProps = {
  sectionHeader: {
    ml: 'auto',
    mr: 'auto',
    width: ['100%', '100%', '100%', '100%'],
    mb: ['20px', '20px', '20px', '20px'],
  },

  sectionTitle: {
    fontSize: ['14px', '20px'],
    fontWeight: '700',
    color: '#182b37',
    letterSpacing: '-0.025em',
    mb: '0',
  },

  sectionParagraph: {
    mt: '5px',
    mb: '0',
    textAlign: "justify",
  },
};

export default TermSection; //848
