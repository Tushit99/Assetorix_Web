import { Box, Divider, Heading, Text } from "@chakra-ui/react";  
import React from "react";  
import img from "./Partner-with-Us.jpg";  
import style from "./Partner.module.css";  

const Partner = () => {  
  return (  
    <Box  
      width={{base:"90%",lg:"80%"}}  
      textAlign={"left"}
      margin={{base:"40px auto",md:"100px auto"}}
      display={{base:"grid",lg:"flex"}}
      alignItems={"flex-start"}  
      justifyContent={"space-around"}  
    >
      <Box flex={6} display={"grid"} borderRadius={"6px"} className={style.form} >   
        {/* name */} 
        <input type="text" placeholder={"Name"} />
        {/* identity */} 
        <select id="">
          <option value="your identity">Your identity</option>
          <option value="owner">Owner</option>
          <option value="ownersrepresentative">Owner's Representative</option>
          <option value="agent">Agent</option>
        </select>
        {/* Email */} 
        <input type="email" placeholder={"Email"} />
        {/* mobile no.  */}
        <input type="number" placeholder={"Mobile No."} />
        {/* tlephone no.  */}
        <input type="number" placeholder={"Telephone no."} />
        {/* Property Title */}
        <select>
          <option value="Property Title">Property Title</option>
          <option value="Private_free_hold_land"> 
            Private free hold land 
          </option>
          <option value="Private_lease_hold_land">
            Private lease hold land
          </option>
          <option value="Lease_land_from_Government">
            Lease land from Government
          </option>
          <option value="Sanad_land_from_Government">
            Sanad land from Government
          </option>
          <option value="Lease_from_Municipal_Corporation">
            Lease from Municipal Corporation
          </option>
        </select>
        {/* Property Country */} 
        <select>
          <option>Property Country</option>
          <option>Afghanistan</option>
          <option>Albania</option>
          <option>Algeria</option>
          <option>American Samoa</option>
          <option>Andorra</option>
          <option>Angola</option>
          <option>Anguilla</option>
          <option>Antarctica</option>
          <option>Antigua And Barbuda</option>
          <option>Argentina</option>
          <option>Armenia</option>
          <option>Aruba</option>
          <option>Australia</option>
          <option>Austria</option>
          <option>Azerbaijan</option>
          <option>Bahamas</option>
          <option>Bahrain</option>
          <option>Bangladesh</option>
          <option>Barbados</option>
          <option>Belarus</option>
          <option>Belgium</option>
          <option>Belize</option>
          <option>Benin</option>
          <option>Bermuda</option>
          <option>Bhutan</option>
          <option>Bolivia</option>
          <option>Bosnia And Herzegovina</option>
          <option>Botswana</option>
          <option>Bouvet Island</option>
          <option>Brazil</option>
          <option>British Indian Ocean Territory</option>
          <option>Brunei Darussalam</option>
          <option>Bulgaria</option>
          <option>Burkina Faso</option>
          <option>Burundi</option>
          <option>Cambodia</option>
          <option>Cameroon</option>
          <option>Canada</option>
          <option>Cape Verde</option>
          <option>Cayman Islands</option>
          <option>Central African Republic</option>
          <option>Chad</option>
          <option>Chile</option>
          <option>China</option>
          <option>Christmas Island</option>
          <option>Cocos (keeling) Islands</option>
          <option>Colombia</option>
          <option>Comoros</option>
          <option>Congo</option>
          <option>Congo, The Democratic Republic Of The</option>
          <option>Cook Islands</option>
          <option>Costa Rica</option>
          <option>Cote D'ivoire</option>
          <option>Croatia</option>
          <option>Cuba</option>
          <option>Cyprus</option>
          <option>Czech Republic</option>
          <option>Denmark</option>
          <option>Djibouti</option>
          <option>Dominica</option>
          <option>Dominican Republic</option>
          <option>East Timor</option>
          <option>Ecuador</option>
          <option>Egypt</option>
          <option>El Salvador</option>
          <option>Equatorial Guinea</option>
          <option>Eritrea</option>
          <option>Estonia</option>
          <option>Ethiopia</option>
          <option>Falkland Islands (malvinas)</option>
          <option>Faroe Islands</option>
          <option>Fiji</option>
          <option>Finland</option>
          <option>France</option>
          <option>French Guiana</option>
          <option>French Polynesia</option>
          <option>French Southern Territories</option>
          <option>Gabon</option>
          <option>Gambia</option>
          <option>Georgia</option>
          <option>Germany</option>
          <option>Ghana</option>
          <option>Gibraltar</option>
          <option>Greece</option>
          <option>Greenland</option>
          <option>Grenada</option>
          <option>Guadeloupe</option>
          <option>Guam</option>
          <option>Guatemala</option>
          <option>Guinea</option>
          <option>Guinea-bissau</option>
          <option>Guyana</option>
          <option>Haiti</option>
          <option>Heard Island And Mcdonald Islands</option>
          <option>Holy See (vatican City State)</option>
          <option>Honduras</option>
          <option>Hong Kong</option>
          <option>Hungary</option>
          <option>Iceland</option>
          <option>India</option>
          <option>Indonesia</option>
          <option>Iran, Islamic Republic Of</option>
          <option>Iraq</option>
          <option>Ireland</option>
          <option>Israel</option>
          <option>Italy</option>
          <option>Jamaica</option>
          <option>Japan</option>
          <option>Jordan</option>
          <option>Kazakstan</option>
          <option>Kenya</option>
          <option>Kiribati</option>
          <option>Korea, Democratic People's Republic Of</option>
          <option>Korea, Republic Of</option>
          <option>Kosovo</option>
          <option>Kuwait</option>
          <option>Kyrgyzstan</option>
          <option>Lao People's Democratic Republic</option>
          <option>Latvia</option>
          <option>Lebanon</option>
          <option>Lesotho</option>
          <option>Liberia</option>
          <option>Libyan Arab Jamahiriya</option>
          <option>Liechtenstein</option>
          <option>Lithuania</option>
          <option>Luxembourg</option>
          <option>Macau</option>
          <option>Macedonia, The Former Yugoslav Republic Of</option>
          <option>Madagascar</option>
          <option>Malawi</option>
          <option>Malaysia</option>
          <option>Maldives</option>
          <option>Mali</option>
          <option>Malta</option>
          <option>Marshall Islands</option>
          <option>Martinique</option>
          <option>Mauritania</option>
          <option>Mauritius</option>
          <option>Mayotte</option>
          <option>Mexico</option>
          <option>Micronesia, Federated States Of</option>
          <option>Moldova, Republic Of</option>
          <option>Monaco</option>
          <option>Mongolia</option>
          <option>Montserrat</option>
          <option>Montenegro</option>
          <option>Morocco</option>
          <option>Mozambique</option>
          <option>Myanmar</option>
          <option>Namibia</option>
          <option>Nauru</option>
          <option>Nepal</option>
          <option>Netherlands</option>
          <option>Netherlands Antilles</option>
          <option>New Caledonia</option>
          <option>New Zealand</option>
          <option>Nicaragua</option>
          <option>Niger</option>
          <option>Nigeria</option>
          <option>Niue</option>
          <option>Norfolk Island</option>
          <option>Northern Mariana Islands</option>
          <option>Norway</option>
          <option>Oman</option>
          <option>Pakistan</option>
          <option>Palau</option>
          <option>Palestinian Territory, Occupied</option>
          <option>Panama</option>
          <option>Papua New Guinea</option>
          <option>Paraguay</option>
          <option>Peru</option>
          <option>Philippines</option>
          <option>Pitcairn</option>
          <option>Poland</option>
          <option>Portugal</option>
          <option>Puerto Rico</option>
          <option>Qatar</option>
          <option>Reunion</option>
          <option>Romania</option>
          <option>Russian Federation</option>
          <option>Rwanda</option>
          <option>Saint Helena</option>
          <option>Saint Kitts And Nevis</option>
          <option>Saint Lucia</option>
          <option>Saint Pierre And Miquelon</option>
          <option>Saint Vincent And The Grenadines</option>
          <option>Samoa</option>
          <option>San Marino</option>
          <option>Sao Tome And Principe</option>
          <option>Saudi Arabia</option>
          <option>Senegal</option>
          <option>Serbia</option>
          <option>Seychelles</option>
          <option>Sierra Leone</option>
          <option>Singapore</option>
          <option>Slovakia</option>
          <option>Slovenia</option>
          <option>Solomon Islands</option>
          <option>Somalia</option>
          <option>South Africa</option>
          <option>South Georgia And The South Sandwich Islands</option>
          <option>Spain</option>
          <option>Sri Lanka</option>
          <option>Sudan</option>
          <option>Suriname</option>
          <option>Svalbard And Jan Mayen</option>
          <option>Swaziland</option>
          <option>Sweden</option>
          <option>Switzerland</option>
          <option>Syrian Arab Republic</option>
          <option>Taiwan, Province Of China</option>
          <option>Tajikistan</option>
          <option>Tanzania, United Republic Of</option>
          <option>Thailand</option>
          <option>Togo</option>
          <option>Tokelau</option>
          <option>Tonga</option>
          <option>Trinidad And Tobago</option>
          <option>Tunisia</option>
          <option>Turkey</option>
          <option>Turkmenistan</option>
          <option>Turks And Caicos Islands</option>
          <option>Tuvalu</option>
          <option>Uganda</option>
          <option>Ukraine</option>
          <option>United Arab Emirates</option>
          <option>United Kingdom</option>
          <option>United States</option>
          <option>United States Minor Outlying Islands</option>
          <option>Uruguay</option>
          <option>Uzbekistan</option>
          <option>Vanuatu</option>
          <option>Venezuela</option>
          <option>Viet Nam</option>
          <option>Virgin Islands, British</option>
          <option>Virgin Islands, U.s.</option>
          <option>Wallis And Futuna</option>
          <option>Western Sahara</option>
          <option>Yemen</option>
          <option>Zambia</option>
          <option>Zimbabwe</option>
        </select>
        {/* Property Status */}
        <input type="text" placeholder={"Property State"} />
        <input type="text" placeholder={"Property City"} /> 
        <input type="text" placeholder={"Property Locality"} />
        <input type="text" placeholder={"FSI Potential"} />
        <input type="text" placeholder={"Size of Property"} />
        <select>
          <option value="Nature_and_transaction">Nature and transaction</option>
          <option value="Outright">Outright</option>
          <option value="JV">JV</option>
          <option value="Redevelopment">Redevelopment</option>
          <option value="Others">Others</option>
        </select>
        <select>
          <option value="Category_of_Development_Proposal" >
            Category of Development Proposal
          </option>
          <option value="Residential" >
            Residential
          </option>
          <option value="Commercial" >
            Commercial
          </option>
          <option value="Township" >
            Township
          </option>
          <option value="Hotel" >
            Hotel
          </option>
          <option value="Resort" >
            Resort
          </option>
          <option value="Mall" >
            Mall
          </option>
          <option value="Hospital" >
            Hospital
          </option>
          <option value="School" >
            School
          </option>
          <option value="Others" >
            Others 
          </option>
        </select>
        <button className={style.submit}>Submit</button>
      </Box>
      <Box flex={4} textAlign={"justify"} padding={"20px"}>
        <img src={img} alt="" />
        <Heading as={"h2"} marginTop={"8px"} size={"md"}>
          PARTNER WITH US
        </Heading>
        <Divider
          marginBottom={"8px"}
          backgroundColor={"rgba(69, 68, 68, 0.735)"}
          h={"1px"}
        />
        <Text marginTop={"8px"}>
          The Business Development team at Ametheus is responsible for
          evaluating, pursuing, and concluding new property related transactions
          for the company. We focus on development opportunities in and around
          the metropolitan cities in the country but continue to explore other
          development proposals as well. We undertake development in multiple
          formats such as outright purchase, joint venture, etc. Interested
          parties may fill in the below mentioned details, upload the listed
          property-related documents and connect with our team at
          info@ametheus.com , Our Real-Estate web-portal is www.assetorix.com
        </Text>
      </Box>
    </Box>
  );
};

export default Partner;
