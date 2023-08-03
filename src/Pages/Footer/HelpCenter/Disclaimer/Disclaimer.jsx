import { Heading, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import style from "./Disclaimer.module.css";

const Disclaimer = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className={style.disclamer}>
            <Heading as={"h1"} size={"lg"} textAlign={"center"} >DISCLAIMER </Heading>
            <Text fontSize={"sm"}>
                This website assetorix.com, including any subdomains thereof, and any other websites through which its services are made available, our mobile, tablet and other smart device applications, and application program interfaces etc, , (hereinafter collectively referred to as " assetorix.com ") is owned, hosted and operated by Ametheus Holdings Pvt Ltd (hereinafter referred to as AHPL), a company incorporated in India under the Companies Act, 1956 and having its registered office at 27, 2nd Floor, Hauz Khas Village, New Delhi - 110016. These DISCLAIMER OF WARRANTIES AND LIABILITIES guidelines regulating use of these Services constitute a legally binding agreement between assetorix.com and the User (the “Agreement”).
            </Text>
            <Heading as={"h2"} size={"md"}>
                DISCLAIMER OF WARRANTIES AND LIABILITIES
            </Heading>
            <Text fontSize={"sm"}>
                a) Except as otherwise expressly stated on the Website, all Services offered on the Website are offered on an "as is" basis without any warranty whatsoever, either express or implied.
            </Text>
            <Text fontSize={"sm"}>
                b) The Company/Website makes no representations, express or implied, including without limitation implied warranties of merchantability and fitness of a product or Services for a particular purpose.
            </Text>
            <Text fontSize={"sm"}>
                c) This Website, all the properties, materials, information, and Services, included or otherwise made available through this Website are provided without any representation or warranties, express or implied except as otherwise specified in writing. Without prejudice to the foregoing paragraph, the Company does not warrant that:
            </Text>
            <Text fontSize={"sm"}>
                this Website will be constantly available, or available at all; or
            </Text>
            <Text fontSize={"sm"}>
                the information on this Website is complete, true, accurate or non-misleading, save and except what is directly provided to the User by the Company.
            </Text>
            <Text fontSize={"sm"}>
                d) The Company will not be liable to a User in any way or in relation to the contents of, or use of, or otherwise in connection with, the Website. Nothing on the Website constitutes, or is meant to constitute, advice of any kind and is not binding on any Party.
            </Text>
            <Text fontSize={"sm"}>
                e) The Users agree and acknowledge that the properties and details thereof (including but not limited to title, location, area and extent, approval and licenses obtained in respect of the property, and amenities attached) as available on the Website are based solely on the information provided by real estate developers, property owners, their brokers or agents. The Company is not responsible for and provides no warranty in respect of the truth, completeness, or accuracy of the same. Any transaction entered or pursued by the User based on the information available on the Website is as per the User’s best and prudent judgment and the Company disclaims all liability in respect of the same.
            </Text>
            <Text fontSize={"sm"}>
                f) The Users further agree and acknowledge that the Company and the Website are only facilitators that connect the User with service providers (such as legal and administrative consultants and allied services providers). The Company is not and shall not be liable in any manner whatsoever, for any advice or opinion provided, or any legal documentation created/prepared (including sufficiency of the documents for the intended purpose, contents thereof, admissibility of the documentations in a court of law or enforceability thereof in applicable jurisdictions), goods supplied, or any other services provided (as the case may be) by such service providers. The Company is not liable and makes no representation or warranty with respect to the accuracy or quality of the services provided by such persons and is not responsible for the sufficiency, result, or outcome of any of their views, opinions, or advice.
            </Text>
            <Text fontSize={"sm"}>
                g) The User agrees and undertakes that he/she is accessing the Website and transacting at his/her sole risk and are that he/she is using his/her best and prudent judgment before purchasing/leasing or otherwise using any property/ product/service listed on the Website or accessing/using any information displayed thereon.
            </Text>
            <Text fontSize={"sm"}>
                h) The Website and the Company accepts no liability for any errors or omissions, whether on behalf of itself or third parties, or for any damage caused to the User, the User's belongings, or any third party, resulting from the use or misuse of any property purchased/leased or Service availed of by the User from the Website.
            </Text>
            <Text fontSize={"sm"}>
                i) The Company/Website does not guarantee that (i) the functions and Services contained in the Website will be uninterrupted or error-free, or that the Website or its server will be free of viruses or other harmful components, (ii) the results that may be obtained from the use of the Service will be accurate or reliable, or (iii) the quality of any, property, Services, information, or other materials obtained by a User through the Website will meet his/her expectations, and the User hereby expressly accepts any and all associated risks involved with the User's use of the Website.
            </Text>
            <Text fontSize={"sm"}>
                j) Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. Accordingly, some of the limitations set forth above may not apply to certain Users. If a User is dissatisfied with any portion of the Service or with these Terms, the User’s sole and exclusive remedy is to discontinue use of the Website and Service.
            </Text>
            <Text fontSize={"sm"}>
                k) The failure of, or delay by, the Company to enforce any right or provision of the Terms or other policies referred to herein, shall not constitute a waiver of such right or provision.
            </Text>
            <Text fontSize={"sm"}>
                l) Notwithstanding anything to the contrary contained herein, under no circumstance shall, the liability of the Company to a User exceed the cost paid by such User for the Services.
            </Text>
            <Text fontSize={"sm"}>
                m) It is further agreed to by the Parties that the contents of this Section shall survive even after the termination or expiry of the Terms and/or Policy.
            </Text>
        </div>
    )
}

export default Disclaimer;

