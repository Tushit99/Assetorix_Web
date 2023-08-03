import { Button, Heading, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import style from "./Privacy.module.css";
import { FaFileDownload } from 'react-icons/fa';


const Privacy = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className={style.privacy_top}>
            <div className={style.download_btn}>
                <Button rightIcon={<FaFileDownload />} colorScheme='blue' variant='outline'>
                    download
                </Button>
            </div>
            <Heading as={"h2"} size={"md"}>
                GENERAL INFORMATION
            </Heading>
            <Text>
                This Privacy Policy (“Policy”) applies to the website www.assetorix.com, or the mobile application [‘Assetorix’](together, “Website”) owned and operated by Ametheus Holdings Private Limited (“Company”, “we”, “us”, “our” or “Assetorix” a reference to which shall also include its affiliates) which is a private limited company incorporated under the Indian Companies Act, 2013. The Company recognizes the importance of maintaining the privacy of its users (“User”, “you”, “your”, “yourself”) and the confidentiality of your information. That's why we insist upon the highest standards for secure transactions and User information privacy. This Policy sets forth the information collecting, processing and dissemination practices of the Company and the modes through which you can exercise your privacy rights. The Policy is accessible via a hyperlink at the https://assetorix.com/privacy. The Policy should be read along with our Terms of Use (https://assetorix.com/user-terms-conditions), for a full understanding of the Company’s practices as well as the Users’ rights and responsibilities when interacting with the Website and availing the services (including but not limited to the service of property identification, support services entailing site visits and price negotiation, facilitation of financial, administrative and legal aid, and relationship management services) provided by it (“Services”). By visiting the Website, you agree to be bound by the terms and conditions of this Policy and the Terms of Use of the Website, as they apply to you. If you do not agree with any of the terms contained in this Policy or the Terms of Use, please do not use or access the Website.
            </Text>
            <Text>
                This Policy is published in accordance with the provisions of the Indian Information Technology Act, 2000 and the rules made thereunder (“IT Act”), more specifically, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. All terms used in this Policy will have the same meaning and definitions assigned to them in the IT Act and the rules made thereunder, or in our Terms of Use. For avoidance of any doubt, this Policy shall be applicable to all Users of the Website.
            </Text>
            <Text>
                This Policy specifies the manner in which personal data of Users is collected, received, stored, processed, disclosed, transferred, dealt with and handled by the Company. Please note that the Website may contain links to other third-party websites/mobile applications that may collect personal data and sensitive personal data of the Users. The User agrees to comply with all third-party privacy policies, if any, applicable upon access of such third-party websites and/or mobile applications. This Policy does not apply to information that Users provide to, or that is collected by, any third-party through the Website and the Company is not responsible for the User’s access to or use of any third-party website, mobile applications, product and/or service.
            </Text>
            <Heading as={"h2"} size={"md"}>Collection of information </Heading>
            <Text>
                1.1 When you use our website, we collect and store your personal information about you as may be provided by you, from time to time. Personal Information (“PI”) collected by us may include, but is not limited to, your name, gender, business name, address, email address, date of birth, date of incorporation, any identity proof number, and phone number.
            </Text>
            <Text>
                1.2 In addition to Personal Information, we may also collect certain information classified as sensitive personal data and information which, under the IT Act and the rules made thereunder constitutes, inter alia, information relating to: (i) passwords; (ii) financial information, including but not limited to, credit card related information or other payment method data; (iii) any detail relating to the above, as provided to a body corporate for providing services; and (iv) any of the information received under the above by a body corporate, for processing or storing data under lawful contract, or otherwise (together “SPDI”). SPDI does not include any information that is freely available or accessible in the public domain, or that is furnished under any law. By using our website, and/or our services, it is deemed that you have provided your consent to the Company for the collection, disclosure and transfer of your SPDI by your conduct.
            </Text>
            <Text>
                1.3 Any third parties on our behalf, may collect and use the following PI and / or SPDI about you:
            </Text>
            <Text>
                Your name;  <br />
                Your contact number(s);  <br />
                Your e-mail address;  <br />
                Your postal address;  <br />
                Your age;  <br />
                Your gender;  <br />
                Information provided when you correspond with us; <br />
                Updates to information you have already provided to us; <br />
                PI we obtain from third-party sources (e.g. APIs, URLs); and/or <br />
                Technical and behavioral information about you regarding your use of the Website.
            </Text>
            <Text>
                1.4 We may also collect PI and SPDI for: (a) the purpose of providing you the Services as well as facilitating your seamless use of the Services, (b) commercial purposes and in an accumulated or non-personally identifiable form for research, analysis and business intelligence purposes, (c) transfer of such research, analysis or intelligence data in an accumulated or non-personally identifiable form to third parties and affiliates, and (d) the purpose of communication and/or for obtaining feedback, and (e) debugging customer support related issues. We will make best efforts to ensure that this data is collected, stored, secured, and processed in accordance with the IT Act and applicable law. Our primary goal in collection of any information is to provide you with an uncomplicated, efficient, smooth, uninterrupted, and customized experience while accessing the Website or using our Services. More importantly, we only collect PI and SPDI from you that we consider necessary for achieving this purpose and providing our Services.
            </Text>
            <Text>
                1.5 You agree and acknowledge that you provide us with your PI and SPDI voluntarily. Once you provide your PI and SPDI to us, either by signing up/registering on our Website or signing in through an associate API (such as Google or Facebook), you are no longer anonymous to us. Where possible, we indicate which fields are required and which fields are optional for you to fill in. You have the option to not provide us with your information by choosing not to use the Services provided by the Company. We may, however, automatically track desensitized information about you based on your behavior on the Website. We use this information to do internal research on our User demographics, interests, and behavior to better understand, protect and serve our Users. This information is compiled and analyzed on an aggregated basis. This information may include the URL that you accessed our Website through (whether this URL is on our Website or not), which URL you next go to (whether this URL is on our Website or not) through our Website, your internet browser information, and your IP address. Such data is anonymous, and does not, by itself, permit the identification of any individual User.
            </Text>
            <Text>
                1.6 We collect PI and SPDI from you when you set up an account with us/ register with us. We use the collected contact information to send you relevant information. We also collect data concerning any communication you may have received from us, or that which have been accessed by you, and if you have clicked on/accessed any links within such communication (i.e., email, text). This helps us ensure our communications are useful for you.
            </Text>
            <Text>
                1.7 If you choose to post messages on our message boards, chatrooms, other message areas or if you choose to leave feedback, we will collect that information you provide to us. We retain this information as necessary to resolve disputes, provide User support and troubleshoot problems, as may be necessary, and as is permitted under applicable law.
            </Text>
            <Text>
                1.8 If you send us personal correspondence, such as e-mails or letters, or if other users or third parties send us correspondence about you and your activities or postings on the Website, we may collect such information that are specific to you. If you reach out to our customer care representatives for resolving any issues that you may be facing in connection with the Services, or for the use of the Website, we will collect such queries and/or communications received from you, through email or calls, in order to resolve disputes, provide User support, troubleshoot problems, and improve the quality of our Services.
            </Text>
            <Text>
                1.9 We also provide certain data to our business partners, such as payment gateways, legal and administrative consultants, financial institutions/banks that offer financial aid to Users of our Website, etc., to interact with you and/or send you relevant or required information, as well as to complete certain transactions and fulfill commitments. After your data is made accessible to the business partners mentioned above, such business partners may use your data to send you information relevant to you. We are not, in any manner whatsoever, responsible for your use or access of any internet pages, websites or platforms owned and/or operated by our business partners, whether or not the link to such pages, websites or platforms is provided on the Website.
            </Text>
            <Heading as={"h2"} size={"md"}>
                2 Use of Demographic, Profile Data and Your Information
            </Heading>
            <Text>
                2.1 We use your personal information to provide you with the Services you choose to avail of. To the extent we use your personal information for direct marketing purposes, we will provide you with the ability to opt-out of such uses, if you do not wish to receive such communication. To opt-out of being on such call, SMS, e-mail and/or other communication lists, you may reach out to us through care@assetorix.xyz, and we will ensure you do not receive such communications in the future.
            </Text>
            <Text>
                2.2 We may use PI or SPDI (if and to the extent required) to resolve disputes, troubleshoot problems, collect money either directly by us or through an authorized payment gateway facility, measure User-interests, inform you about updates, customize your experience, detect and protect us against error, fraud and other criminal activity, enforce our terms and conditions, and as otherwise described to you at the time of collection.
            </Text>
            <Text>
                2.3 We will combine the information you give to us and information we automatically collect about you to maintain and improve the accuracy of the records we hold about you. We will also use the combined information about you to form a view on what Services we think you, or others similar to you, may want or need to target our marketing closer to your interests.
            </Text>
            <Text>
                2.4 In our efforts to continually improve Services offerings, we collect and analyze demographic and user data about our Users' activity on our Website. We identify and use your IP address to help diagnose problems with our server, and to administer our Website. Your IP address is also used to help identify you and to gather broad demographic information related to you. In this regard, it is clarified that we reserve the right to use the data collected from your use of the Website for any analysis and development, and to improve the Website, our Services as well as to diversify the real estate portfolio provided on our Website.
            </Text>
            <Heading as={"h2"} size={"md"}>
                3 Sharing your personal information
            </Heading>
            <Text>
                3.1 By providing us with your PI and SPDI, you consent to the information being shared with our group companies or third-party service providers or business partners, where it is in our legitimate interest to do so for administrative or business purposes (such as corporate strategy, auditing, monitoring, and quality assurance).
            </Text>
            <Text>
                3.2 We will not share your SPDI with any third parties or disclose it to any person other than as required (a) to provide you with our Services; or (b) by applicable law.
            </Text>
            <Text>
                3.3 We may share your PI and / or SPDI with our other corporate and/or associate entities and affiliates to (i) help detect and prevent identity theft, fraud and other potentially illegal acts and cyber security incidents, (ii) help and detect co-related/related or multiple accounts to prevent abuse of our Services, and (iii) facilitate joint or co-branded services or services (including services from business partners) that you request, where such services are provided by more than one entity.
            </Text>
            <Text>
                3.4 Any third parties we share your information with are limited by law and contract in their ability to use your PI and SPDI for any purpose, other than to provide Services for and in connection with us.
            </Text>
            <Text>
                3.5 We may disclose your PI and / or SPDI, to our legal counsel, law enforcement officers, governmental authorities who have asserted their lawful authority to obtain the information if required, or, if the Company has, in good faith, reasonable grounds to believe that such disclosure is reasonably necessary to respond to summons, court orders, or any other legal process. We may also disclose your PI and / or SPDI to our legal counsel, law enforcement offices, governmental authorities, third party rights owners, or others as becomes necessary, or, in the good faith belief that such disclosure is reasonably necessary to: (i) enforce the Terms of Use or this Policy; (ii) respond to claims including claims that a posting or other content violates the rights of a third party; (iii) protect the rights, property or personal safety of our Users or the general public or (iv) to protect our own rights or the rights of our employees and/or to prevent any illegal activity.
            </Text>
            <Text>
                3.6 While transferring your PI and / or SPDI to another body corporate or natural person, for purposes necessary to perform contractual obligations to you, we will make best efforts to ensure that, as is required by applicable laws, the same level of data protection adhered to by us is adhered to by such entity to whom the data is being transferred.
            </Text>
            <Text>
                3.7 In the event we (or our assets) plan to merge with, or be acquired by any business entity, or for purposes such as re-organization, amalgamation or restructuring of our business, by using the Website and consenting to these Terms of Use, you also consent to us, and our affiliates, using, sharing, parting with and allowing such resulting/other business entity to use the PI and SPDI provided by you to us. Should such a transaction occur, that other business entity (or the new combined entity), will be required to adhere to this Policy, with respect to your personal information.
            </Text>
            <Text>
                3.8 We may also disclose and use anonymized, aggregated reporting and statistics about Users and their interaction with our Services for reporting purposes, or for marketing and promotion purposes. None of these reports or statistics will enable our Users to be personally identified.
            </Text>
            <Text>
                3.9 Save as expressly stated in this Policy (including any and all amendments hereto), we will never share, sell or rent any of your PI or SPDI to a third party without notifying you, and where necessary, obtaining your consent. If you have permitted us to use your PI or SPDI in a certain way, but later change your mind, you can contact our Grievance Officer for necessary clarifications and for restricting our use of your PI or SPDI.
            </Text>
            <Heading as={"h2"} size={"md"} >
                4 Retaining your information
            </Heading>
            <Text>
                4.1 We keep your PI and SPDI for no longer than is necessary for the purposes that your PI/SPDI was collected and processed. The length of time for which we retain your PI or SPDI depends on the purpose for which we collect and use it, and/or as is required to comply with applicable law, and to establish, exercise or defend our legal rights.
            </Text>
            <Text>
                4.2 Information provided by you to the Company is processed, stored and retained through our servers and web hosts.
            </Text>
            <Text>
                4.3 Our web hosts and agency managing your information are compliant necessary standards of Security Techniques and Information Security Management System Requirements.
            </Text>
            <Text>
                4.4 You may delete your account information at any time by logging into the dashboard and navigating to the Settings page. Please note that if you choose to delete your account, we may continue to retain certain information about you as required by law or for our legitimate business purposes. You can also request deletion of your account by sending email to care@assetorix.xyz and we will delete your account.
            </Text>
            <Heading as={"h2"} size={"md"} >
                5 Links to Other Sites
            </Heading>
            <Text>
                5.1 Our Website links to other websites (including those of our business partners or co-branded service providers) that may collect personally identifiable information about you. Such other websites are not operated by us, nor we do have any principal-agent relationship with such third-party websites; the same are only provided for your convenience.
            </Text>
            <Text>
                5.2 The links available do not imply the Company’s endorsement of activities of such third-party websites or the Company’s association with its operators. This Policy applies only to PI or SPDI collected, or PI received from third party sources, by the Company. We are not responsible for PI and SPDI about you that is collected and stored by third parties.
            </Text>
            <Text>
                5.3 Third-party websites have their own terms and conditions for use and collection and processing of data. You should read the terms of use and privacy policies of these websites carefully before submitting your information to these websites.
            </Text>
            <Text>
                5.4 The Company is not responsible for the privacy practices or the content of those linked websites and does not endorse or accept responsibility or liability for the content of such third-party websites or third-party terms and conditions.
            </Text>
            <Heading as={"h2"} size={"md"} >
                6 Security Precautions/ Security Breach
            </Heading>
            <Text>
                6.1 Our Website has stringent security measures in place, as required under law, to protect the loss, misuse, and alteration of the information under our control. Once your information is in our possession, we adhere to strict security guidelines, protecting it against unauthorized access.
            </Text>
            <Text>
                6.1 Our Website has stringent security measures in place, as required under law, to protect the loss, misuse, and alteration of the information under our control. Once your information is in our possession, we adhere to strict security guidelines, protecting it against unauthorized access.
            </Text>
            <Text>
                6.2 If any User has sufficient reason to believe their PI or SPDI, has been compromised, or there has been a breach of security due to a cyber security incident, you may write to our Grievance Officer immediately at the contact details mentioned below in, so that we may take suitable measures to either rectify such a breach or inform the concerned authorities of a cyber security incident.
            </Text>
            <Text>
                6.3 To report an abuse on the Website, not being a cyber security incident, a User may write to the Grievance Officer and provide details of the abuse. Upon receiving such information, the Company will examine the abuse and take suitable and necessary steps to remedy it.
            </Text>
            <Text>
                6.4 Where you have chosen a password, which enables you to access your account on the Website, you have the responsibility to ensure that your password remains confidential and only you have access to your account.
            </Text>
            <Text>
                6.5 We endeavor to protect the privacy of your information (including PI and SPDI) we hold in our records by adhering to the maximum standards prescribed under law. However, we cannot, unfortunately, guarantee complete security. Unauthorized entry or use, hardware or software failure, and other factors, may compromise the security of User information at any time.
            </Text>
            <Heading as={"h2"} size={"md"} >
                7 Your Consent
            </Heading>
            <Text>
                7.1 By using the Website and/or by providing your information, you consent to the Company’s collection, receiving, processing, using, disclosing, storing, dealing with, handling, transferring and/or sharing of the information you disclose on the Website in accordance with this Policy.
            </Text>
            <Text>
                7.2 The Company may, at its sole discretion, modify this Policy. If we decide to change our Policy, we will post those changes on this page immediately upon the revision of the Policy so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it.
            </Text>
            <Text>
                7.3 Where material changes are made to this Policy, or where deemed appropriate by us, you will be notified of such material change through your registered mode of communication. Upon your first access to the Website post the revision of the Policy, you shall have the option to consent or revoke your consent to the revised Policy. We suggest that you read and understand the revised Policy, a link of which will be available where you would see the option to consent to the revised Policy. However, please note that denial of consent would lead to immediate termination of the Services we provide to you through the Website.
            </Text>
            <Text>
                7.4 In spite of such notifications, the User should return to this Policy periodically to ensure familiarity with the most current version of the policy. The date on which this Policy is last updated is provided at the top of this page.
            </Text>
            <Heading as={"h2"} size={"md"} >
                8 Cookie Policy
            </Heading>
            <Text>
                8.1 We use data collection devices such as “cookies” which are small text files on your device that allow us to recognize you as a user. Cookies help us analyze how your device has interacted with our website, including the pages accessed and links clicked, websites visited before or after our website, products viewed or searched for and the length of visits to certain pages. We collect this data to tailor our webpage flow, measure promotional effectiveness and to promote trust and safety. We use cookies to offer you a more tailored experience in the future, by understanding and remembering your browser preferences. Certain features offered on our Website can only be fully realized through using “cookies”.
            </Text>
            <Text>
                8.2 Where we use cookies on our Website, and where your internet browser permits, you may block them at any time. However, if you use your browser settings to block all cookies, you may not be able to fully access parts of our Website or realize full functionality of the Services we offer.
            </Text>
            <Text>
                8.3 We do not control the use of cookies by third parties.
            </Text>
            <Heading as={"h2"} size={"md"} >
                9 Representations and Warranties, and Limitation of Liability
            </Heading>
            <Text>
                9.1 The Website and all Services included or otherwise made available to you through this Website are provided without any representation or warranties, express or implied except otherwise specified in writing.
            </Text>
            <Text>
                9.2 We do not, either express or implied, warrant about the absolute efficacy of the measures we undertake to safeguard your data collected as per this Policy.
            </Text>
            <Text>
                9.3 We disclaim any liability that may arise due to acts and events beyond our control in relation to the security of the data collected as per this Policy.
            </Text>
            <Text>
                9.4 The Company is not liable nor responsible for the compliance of applicable privacy laws including the IT Act by third parties that may obtain your data in accordance with this Policy. Accordingly, we disclaim any liability that may arise due to breach or consequences of such breach of IT Act by third parties.
            </Text>
            <Text>
                9.5 Notwithstanding anything contained in this Policy or elsewhere on the Website, the Company shall not be held responsible for any loss, damage or misuse of the User Information, if such loss, damage or misuse is attributable to a Force Majeure Event. A " Force Majeure Event" means any event that is beyond the reasonable control of the Company and includes, without limitation, fire, flood, explosion, acts of God, civil commotion, strikes, lock outs or industrial action of any kind, riots, insurrection, war, acts of government, power failure, sabotage, computer hacking, unauthorized access to computer data and storage device, system failure, virus, attacks, bugs, computer crashes, breach of security and encryption.
            </Text>
            <Text>
                9.6 You represent and warrant that any and all PI, SPDI or other information provided by you are absolutely correct, accurate and complete in all aspects and that you hold complete proprietary of and right over all such information. You acknowledge that all such information may substantially impact the Services that we provide to you through the Website. You further undertake to immediately update the Company of any change or variation of your PI, SPDI or any other User information.
            </Text>
            <Text>
                9.7 Notwithstanding anything to the contrary contained herein, under no circumstance shall, the liability of the Company exceed the cost/fee paid by you for use and access of the Services offered by the Company on the Website.
            </Text>
            <Text>
                9.8 In no event shall the Company or its affiliates or its employees, directors or authorized representatives be held liable for any direct, indirect, special, consequential, punitive or exemplary damages of any nature whatsoever, as a result of any shortcoming of or defect in or inaccuracy of the Website or otherwise using the information available on the Website in any manner including, but not limited to, any decision made or action taken in reliance upon the information available on the Website or the Services provided on the Website.
            </Text>
            <Heading as={"h2"} size={"md"} >
                10. Grievance Officer
            </Heading>
            <Text>
                In accordance with IT Act and the rules made thereunder, we have appointed a Grievance Officer to handle any arising concerns are grievances. The Grievance Officer will make best efforts to redress the grievances expeditiously upon receipt of grievance. The contact details of the Grievance Officer are provided below:
            </Text>
            <Text>
                Name:	Nidhi Bhandari <br />
                Address: 27, 2nd Floor, Hauz Khas Village, New Delhi 110016, India <br />
                E-mail:	care@assetorix.com <br />
                Time:	16:00 – 17:00 hrs Tuesday <br />
            </Text>
            <Heading as={"h2"} size={"md"} >
                11. Governing Law and Jurisdiction
            </Heading>
            <Text>
                11.1 This Policy, along with the Terms of Use, is governed by laws prevailing in India.
            </Text>
            <Text>
                11.2 Only the courts in Delhi, India will have jurisdiction with regard to disputes arising from this Policy.
            </Text>

        </div>
    )
}

export default Privacy;

