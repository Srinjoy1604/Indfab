import React, { useState, useEffect } from "react";
import styles from "./AboutUs.module.css"
import CredentialBar from "@/components/CredentialBar/CredentialBar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import IntroPic from "@/components/IntroPic/IntroPic";
import img1 from "../images/ABOUTUS/EDITED-ABOUT US.png"
import img2 from "../images/ABOUTUS/Grouppic.png";
import CustomCard3 from "@/components/Cards/CustomCard3";
import img3 from "../images/ABOUTUS/system-regular-22-build 1.png";
import img4 from "../images/ABOUTUS/system-regular-40-add-card 1.png";
import img5 from "../images/ABOUTUS/system-regular-33-speed 1.png";
import img6 from "../images/ABOUTUS/system-regular-14-article (1) 1.png";
import img7 from "../images/ABOUTUS/system-regular-63-settings-cog 1.png";
import img8 from "../images/ABOUTUS/system-regular-41-home 1.png";
import SimpleSlider from "@/components/ImageSlider/ImageSlider";
import AB0 from "../images/ABOUTUS/Golden Jubilee/AB0.jpg";
import AB1 from "../images/ABOUTUS/Golden Jubilee/AB1.jpg";
import AB2 from "../images/ABOUTUS/Golden Jubilee/AB2.jpg";
import AB3 from "../images/ABOUTUS/Golden Jubilee/AB3.jpg";
import AB4 from "../images/ABOUTUS/Golden Jubilee/AB4.jpg";
import AB5 from "../images/ABOUTUS/Golden Jubilee/AB5.jpg";
import AB6 from "../images/ABOUTUS/Golden Jubilee/AB6.jpg";
import AB7 from "../images/ABOUTUS/Golden Jubilee/AB7.jpg";
import AB8 from "../images/ABOUTUS/Golden Jubilee/AB8.jpg";
import AB9 from "../images/ABOUTUS/Golden Jubilee/AB9.jpg";
import AB10 from "../images/ABOUTUS/Golden Jubilee/AB10.jpg";
import AB11 from "../images/ABOUTUS/Golden Jubilee/AB11.jpg";
import AB12 from "../images/ABOUTUS/Golden Jubilee/AB12.jpg";
import AB13 from "../images/ABOUTUS/Golden Jubilee/AB13.jpg";
import AB14 from "../images/ABOUTUS/Golden Jubilee/AB14.jpg";
import AB15 from "../images/ABOUTUS/Golden Jubilee/AB15.jpg";
import AB16 from "../images/ABOUTUS/Golden Jubilee/AB16.jpg";
import AB17 from "../images/ABOUTUS/Golden Jubilee/AB17.jpg";
import AB18 from "../images/ABOUTUS/Golden Jubilee/AB18.jpg";
import Director from "../images/ABOUTUS/Director.png";
import Quotation from "../images/ABOUTUS/QUOTETIONMARK.png";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
function AboutUs() {
    const imageList = [AB0, AB1, AB2, AB3, AB4, AB5, AB6, AB7, AB8, AB9, AB10, AB11, AB12, AB13, AB14, AB15, AB16, AB17, AB18];
    return (
        <div>
            <CredentialBar />
            <Navbar />
            <IntroPic image={img1} text={"About Us"} />
            <div className={`${styles.DirectorsDesk}`}>
                <h1>From the Director's Desk</h1>
                <div className={`${styles.DirectorWords}`}>
                    <div className={`${styles.DirectorImage}`}>
                        <div><img src={Director}></img></div>
                        <div className={`${styles.DirectorName}`}><h2>Mr. Kalyan Palit</h2></div>
                        <div className={`${styles.DirectorDesig}`}><h2>Director, INDFAB</h2></div>
                    </div>
                    <div className={`${styles.DirectorWordsPara}`}><p>The key to the successful journey is not any of the individual elements.What is important is having all the elements together in
                            a system and must be practiced everyday in a very consistent manner.
                    </p></div>
                </div>
                <div className={`${styles.QuoteDiv}`}>
                    <div className={`${styles.Quote}`}>
                        <p><img src={Quotation}></img>The years ahead will be the best for those who learn To balance dreams and discipline.The future
                            Will belong to those who embrace the potential of wider opportunities but recognise the realities
                             of more constraint resources and find new solutions that permit doing more with less.</p>
                             <div>-Rosabeth Moss Kanter</div>
                    
                    </div>
                </div>
                
            </div>
            <div className={`${styles.Abtsintro}`}>
                <img src={img2}></img>
                <h2>"INDFAB: Journey from Small Scale Industry to Reputable Engineering Firm"</h2>

                <ul>
                    <li>Group Company INDFAB was promoted as a small scale industry in  the year 1985 by Prabhat Palit a techno entrepreneur with over 33  years of varied experience in construction industries. In this family  owned business the two promoters Kalyan Palit & Ashish Palit have  worked closely for the last 28 Years contributing towards growth,  consolidation in different functional areas, diversification  programme and costumer relation.</li>
                    <li>Indfab, worked as a sub - vendor of reputed companies like Flak  India, McNally Bharat and BST Engineering.</li>
                    <li>Indfab, took up plant maintenance job in the areas of fume  treatment plant, alumina handling system, pot room equipment,  anode paste plant, rodding shop and plant utility system  subsequently on commissioning of the Smelter plant from the year  1988 and was given Ancillary status by National Aluminium Co. in  the year 1993. </li>
                </ul>

            </div>
            <div className={`${styles.KeyArea}`}>
                <h1>Our Key Area</h1>
                <div className={`${styles.CardSection}`}>
                    <CustomCard3 title={"Custom Fabrication Solutions"} image={img3} description={"As a measure of vertical integration, we have a modern manufacturing unit to  cater project requirement in Aluminium, Power & Steel sector with three  decades of project experience. We now take up fabrication of custom fabricated  product, hopers, tanks, large diameter duct, stack, technological structures,  conveyor structure operational mechanical spares etc."} />
                    <CustomCard3 title={"Comprehensive Fabrication Facility"} image={img4} description={"The facility is complete with in house design & planning, certified welding  inspection, shot blasting shop, steel fabrication work as per ASME section IX,  AWS D1.1 & BIS standard is taken up. "} />
                    <CustomCard3 title={"Industrial Equipment Manufacturing"} image={img5} description={"Indfab, manufactures to supply equipment, pressure vessels, tanks, technological structures , Smelter Plant equipment like pot shells, super structures , anode brackets , pot hood, furnace parts, platforms, hoppers, roller tables, conveyor structures, operational spares to Aluminium, Steel and Power Sector."} />
                    <CustomCard3 title={"Manufacturing Drawing Digitization"} image={img6} description={"Indfab, also undertakes digitisation of manufacturing drawings for which it has a full-fledged department with AutoCAD draftsmen, scanner and plotters. "} />
                    <CustomCard3 title={"Advanced Machining & Welding Facility"} image={img7} description={"Apart of conventional machine like Lathes, Shaper, Horizontal Boring Machine,  VMC and etc. Our shop is equipped with : plate bending machine with pre pinch  facility up to 300 MT Hydraulic Press, Plano Miller, CNC Oxy flame cutting  machine, column & Boom welding system, welding rotor, MIG & SAW welding  machine etc. SMAW, GMAW, FCAW & SAW welding process is deployed with  certified welders. "} />
                    <CustomCard3 title={"In-house Ultrasonic & Radiography Testing"} image={img8} description={"In house Ultrasonic testing Facility under level-II qualified engineer and we are  also equipped with radiography Pit Room under approval of BARC."} />
                </div>
            </div>
            <div className={`${styles.AccordionDiv}`}>
                <div className={`${styles.Accordionbox}`}>
                    <Accordion type="single" collapsible className={`${styles.AccordionBar}`}>
                        <AccordionItem value="item-1" className={`${styles.AccordionItem}`}>
                            <AccordionTrigger className={`${styles.AccordionTrigger}`}>Silver Jubilee</AccordionTrigger>
                            <AccordionContent className={`${styles.AccordionContent}`}>
                                <div className={`${styles.ImageSlider1}`}>
                                    <SimpleSlider images={imageList} />
                                </div>
                                <div>
                                    <h1>IPPL Celebrates Silver Jubilee</h1>
                                    <div className={`${styles.Accordionpara1}`}>
                                        <p>
                                            We celebrated Silver Jubilee on 28th February, 2010 at Kurunti. Our guests included officers from National Aluminium Company, Vedanta, HINDALCO, associated suppliers and contractors, local friends, media persons and employees.</p>
                                        <p>Production Building and machine shops were inaugurated on this occasion . In a packed hall of four hundred guests, our customer, associated and friends paid rich tribute to our work ethics, value system.
                                            Sri Prabhat Palit, Managing Director in his welcome address briefly narrated the 25 years journey.</p>
                                        <p>Director Ashis Palit presented the road map for the next decade which included opening up new verticals in the area of manufacturing, material testing laboratory.The group will also worked in the area of environment and social
                                            upliftment.A twentyfive year silver plaque was released. Employees narrated their experience with emotion.Sri Kalyan Palit proposed vote of thanks. He thanked the employees and their families for bringing Indfab to this stage. He thanked customers and associated for their whole hearted support.
                                        </p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div className={`${styles.AccordionDiv}`}>
                <div className={`${styles.Accordionbox}`}>
                    <Accordion type="single" collapsible className={`${styles.AccordionBar}`}>
                        <AccordionItem value="item-1" className={`${styles.AccordionItem}`}>
                            <AccordionTrigger className={`${styles.AccordionTrigger}`}>HSE Policy of Indfab</AccordionTrigger>
                            <AccordionContent className={`${styles.AccordionContent} ${styles.AccordionContentHSE}`}>
                                <h1>Quality,Environment, Health & Safety Policy</h1>
                                <p>We strive to meet and exceed our customers need providing for,
                                    Design, Development, Fabrication,Manufacture & supply of Heavy precision components, machine spares, enginerring equipments,machinery,onsiteTurnkey projects by meeting the statutory/regulatory requirements as applicable to us.
                                </p>
                                <p>
                                We shall ensure Quality,reliability,on time Delivery & cost effectiveness in our products/services as per need of esteemed customers.

                                We are committed to make efficient use of natural resources like water, energy ,air,oil etc., reducing and preventing pollution, promoting waste avoidance and recycling measures by adhering to best practices.
                                </p>
                                <p>
                                We are committed to provide a safe and healthy work environment to our employees, suppliers and customers as an integral parts of business performance.
                                
                                Quality, Environment, Occupational Health & Safety objectives are established at each functional and operational level as required and get reviewed periodically for it's continuing suitability and performance.
                                </p>
                                <p>
                                We are committed to ensure continual improvement based upon the practice of risk assessment as per requirement in all associated business processes/activities and shall ensure process efficiency and effectiveness of QEHS Management System in our organization.
                                
                                We shall comply to the requirement of Social accountability by adpting ethical work culture and business practices.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>



            <Footer />

        </div>
    );
}

export default AboutUs;