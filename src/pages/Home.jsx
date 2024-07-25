import React from "react";
import styles from "../pages/Home.module.css"
import Navbar from "@/components/Navbar/Navbar";
import CredentialBar from "@/components/CredentialBar/CredentialBar";
import CustomCard from "@/components/Cards/CustomCard";
import { color, motion, useAnimation } from "framer-motion";
import iso1 from "../images/Home/927_iso9001_logo.png";
import iso2 from "../images/Home/iso-14001-logo-E5046E951F-seeklogo.com.png";
import iso3 from "../images/Home/ISO-45001-logo.png";
import CustomCard2 from "@/components/Cards/CustomCard2";
import crdimg1 from "../images/Home/314130.png";
import crdimg2 from "../images/Home/manufacture(edited).png";
import crdimg3 from "../images/Home/3281345.png";
import crdimg5 from "../images/Home/safty(edited).png";
import crdimg4 from "../images/Home/5426807.png";
import locimg from "../images/Home/address.png";
import Footer from "@/components/Footer/Footer";
import Carousel from "@/components/Intro/Carousel";
import image1 from "../images/Home/INNOVATION5.png";
import image2 from "../images/Home/CAROUSEL1.png";
import image3 from "../images/Home/CAROUSEL2.png";
import image4 from "../images/Home/Carousal_structural_works.png";
import image5 from "../images/Home/Carousal_40klOIL_STORAGE_TANK.png";
import image6 from "../images/Home/Carousal_MLLB_Trolly.png";
import image7 from "../images/Home/Carousal_Stacker_Buckets.png";
import image8 from "../images/Home/Carousal_Thimble_press.png";
import image9 from "../images/Home/Structural_Works_carousal.png";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { duration } from "@mui/material";
function Home() {
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];
   
    const text1 = "Precision in every part, excellence in every detail".split(" ");
    return (
        <motion.div>
            <CredentialBar />
            <Navbar />
            <div className={`${styles.IntroDiv}`}>

                <Carousel image={images} />

            </div>
           
            <motion.div className={`${styles.OurFounder}`}>
                <motion.div className={`${styles.OurFounder_para}`}
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ amount: 0.5,once: true }}
                    transition={{ delay: 0.2, x: { type: "spring", stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1, }}
                >
                    <p>
                        Group Company INDFAB was promoted as a small scale industry in the year 1985 by Prabhat Palit a techno entrepreneur with over 33 years of varied experience in construction industries.
                    </p>
                    <p>

                        In this family owned business other two promoters Kalyan Palit and Ashish Palit have worked closely contributing towards growth, consolidation in different functional area, diversification programme and customer relation.
                    </p>
                </motion.div>
                <motion.div className={`${styles.OurFounder_h1}`}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ amount: 0.5,once: true }}
                    transition={{ delay: 0.2, x: { type: "spring", stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1, }}
                >
                    <h1>Our Founder</h1>
                </motion.div>
            </motion.div>
            <div className={`${styles.IsoSection}`}>
                <motion.div
                    initial={{ y: -100, opacity: 0, mixBlendMode: "multiply" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{amount: 0.5, once: true }}
                    transition={{ delay: 0.2, x: { type: "spring", stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 0.7, }}

                ><img src={iso1} ></img></motion.div>
                <motion.div
                    initial={{ y: 100, opacity: 0, mixBlendMode: "multiply" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ amount: 0.5,once: true }}
                    transition={{ delay: 0.2, x: { type: "spring", stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 0.7, }}
                ><img src={iso2}></img></motion.div>
                <motion.div
                    initial={{ y: -100, opacity: 0, mixBlendMode: "multiply" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ amount: 0.5,once: true }}
                    transition={{ delay: 0.2, x: { type: "spring", stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 0.7, }}
                ><img src={iso3}></img></motion.div>
                <div className={`${styles.IsoSectionPara}`}>
                    <motion.p
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ amount: 0.5,once: true }}
                        transition={{ delay: 0.2, x: { type: "spring", stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1, }}
                    >
                        Indfab is proud to announce that we are now ISO certified in three critical standards: ISO 9001 for Quality Management Systems, ISO 14001 for Environmental Management Systems, and ISO 45001 for Occupational Health and Safety Management Systems. This triple certification underscores our commitment to delivering high-quality products, ensuring environmental sustainability, and maintaining the highest safety standards in the industry.
                    </motion.p>
                </div>
                <div className={`${styles.Isolink}`}><Link to="/QualitySafety">Read more</Link></div>
            </div>
            <div className={`${styles.Section3}`}>
                <div className={`${styles.Section3line}`}></div>
                <div className={`${styles.Section3Body}`}>
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, x: { type: "spring", stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1, }}
                    >Engineering & Planning</motion.h1>
                    <motion.ul
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, x: { type: "spring", stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1, }}
                    >
                        <li>Qualified engineers for In house development of detail drawing from design drawings. A0 size plotter and scanner along with AutoCAD software available.</li>
                        <li>Job planning, preparing bill of quantities are carried out for timely execution of Jobs. </li>
                        <li>Proper procedures followed for vendor selection for bought out items, and raw material procurement.</li>
                        <li>Estimating, planning, project management ,progress monitoring and manufacturing schedule are reviewed and monitored on regular basis.</li>
                        <li>Quality assurance procedure and process documentation are meticulously planned as per plant requirement. </li>
                    </motion.ul>
                </div>
            </div>
            <div >
                <div className={`${styles.QualitiesSectiontitle}`}>
                    {text1.map((el, i) => (
                        <motion.span
                            initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                                duration: 0.25,
                                delay: i / 10
                            }}
                            key={i}
                        >{el}{" "}</motion.span>
                    ))}
                </div>
                {/*<div className={`${styles.CardSection1}`}>
                    <CustomCard2 title={"Quality Management"} image={crdimg4} description={"Production process is regularly inspected by Quality department. Inspection and Quality department prepares QAP for each job and manufacturing is carried out as per approved QAP. Welders are qualified as per approved WPQ. Quality assurance engineers are level —II AWS certified."} />
                    <CustomCard2 title={"Safety Health Environment & Quality Policy- Trippie E Management"} image={crdimg5} description={"We follow 'Triple E'- Efficient Engineering and Environment .All work assignments include specific attention to health, safety and environment concerns. Regular tool box meeting is held. Risk assessment for each job is determined. Safety induction training is arranged for all new employees."} />
                </div>*/}
                <div className={`${styles.CardSection}`}>
                    <CustomCard2 title={"Our Products"} url={"/productsservices"} image={crdimg1} description={"Discover our cutting-edge engineering solutions designed to streamline your processes and optimize performance. Our innovative products are engineered to exceed industry standards and empower your sucess.Explore our range today and experience the difference in quality, reliablity and efficiency."} />
                    <CustomCard2 title={"Our Manufacturing Unit"} url={"/manufacturing_unit"} image={crdimg2} description={"We pride ourselves on our state-of-the- art manufacturing unit equipped with cutting-edge technology and skilled workforce. Our facility is meticulously designed to ensure efficiency, precision, and quality in every step of the manufacturing process„ Equipped with the latest machinery and equipment, we maintain a modern infrastructure that enables us to meet the dynamic demands of the industry."} />
                    <CustomCard2 title={"Our Process of Work"} url={"/productsservices#ProcessWork"} image={crdimg3} description={"Quality is the cornerstone of our manufacturing process. Our dedicated quality control team rigorously inspects every product at various stages of production to ensure adherence to international standards and customer specifications. We employ advanced testing techniques and methodologies to guarantee the reliability and performance of our products."} />
                </div>
            </div>
            <div className={`${styles.MapSection}`}>
                <div className={`${styles.MapSectiontitle}`}>
                    <img src={locimg} /><h1><span style={{ color: "red" }}>Our</span><span> Location</span></h1>
                </div>
                <p>Established in 1985 at periphery of smelter and captive power plat of NALCO, Nalconagar, Angul and also at Kurunti
                    by the side of National Highway 55, Dhenkanal amidst Industrial Hub of Power and Steel Plant. The nearest Airport is at
                    a distance of 150 Km by road. The driving time is approximately three hours. There are direct train from Bhubneswar to
                    Angul.And it is around 02KM from TATA Steel Limited, Meramandali, Dhenkanal, Odisha on the National Highway.</p>
                <div className={`${styles.MapDivide}`}>
                    <motion.div className={`${styles.EachMap}`}
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, x: { type: "spring", stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1, }}
                    >
                        <h1>Meramandali unit</h1>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14916.918410101498!2d85.2628896!3d20.8224329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a18c7f21225544f%3A0xf20621315add449b!2sIndfab%20Projects!5e0!3m2!1sen!2sin!4v1717681503247!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: 0, width: "100%", padding: "2%" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>
                    <motion.div className={`${styles.EachMap}`}
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, x: { type: "spring", stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1, }}>
                        <h1>Nalconagar unit</h1>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.6133931762283!2d85.16018749999999!3d20.847312499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a18b0907060f427%3A0x18ee5a1a94651870!2sIndfab!5e0!3m2!1sen!2sin!4v1718901516471!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: 0, width: "100%", padding: "2%" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </motion.div>
    );

};

export default Home;
