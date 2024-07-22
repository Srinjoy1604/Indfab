import React from "react";
import styles from "../pages/Home.module.css"
import Intro from "@/components/Intro/Intro";
import Navbar from "@/components/Navbar/Navbar";
import CredentialBar from "@/components/CredentialBar/CredentialBar";
import CustomCard from "@/components/Cards/CustomCard";
import { color, motion } from "framer-motion";
import iso1 from "../images/Home/927_iso9001_logo.jpg";
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
function Home() {
    const images = [image1, image2, image3];
    const colorframer = {
        variantA: { backgroundImage: "linear-gradient(to right top, #ff0000, #ff4237, #ff645c, #f9817e, #ed9c9c)", color: "black" },
        variantB: { backgroundImage: "linear-gradient(to right, #2d65f8, #3654db, #3843bf, #3633a3, #312489, #3e218b, #4a1e8d, #55198f, #7b1dac, #a41ec7, #d018e1, #ff00f8)", color: "white" }
    };
    return (
        <div>
            <CredentialBar />
            <Navbar />
            <div className={`${styles.IntroDiv}`}>
                
                <Carousel image={images}/>

            </div>
            {/*<div className={`${styles.CardBlock}`}>
                <CustomCard heading={"Founder"} description={"Group Company INDFAB was promoted as a small scale industry in the year 1985 by Prabhat Palit a techno entrepreneur with over 33 years of varied experience in construction industries."} link={"#"} tabular={false} />
                <CustomCard heading={"Our journey"} description={"Indfab, worked as a sub — vendor of reputed companies like Flak India, McNally Bharat and BST Engineering. Indfab, took up plant maintenance job in the areas of fume treatment plant, alumina handling system, pot room equipment."} link={"#"} tabular={false} />
                <CustomCard heading={"Office detail"} link={"#"} tabular={true} />
                <CustomCard heading={""} description={"As a measure of vertical integration, we have a modern manufacturing unit to cater project requirement in Aluminium, Power & Steel sector with three decades of project experience. We now take up fabrication of custom fabricated product, hopers, tanks, large diameter duct, stack, technological structures, conveyor structure operational mechanical spares etc."} link={"#"} tabular={false} />
                <div className={`${styles.GroupProfile}`}>
                    <h1>The Group Profile</h1>
                    <div className={`${styles.WhiteBlock}`}>
                        <motion.div
                            whileTap={{ scale: 0.9 }}
                        >
                            <a href="#">
                                <motion.div className={`${styles.RedBlock} ${styles.Block1}`} variants={colorframer}
                                    initial="variantA"
                                    whileHover="variantB">INDFAB</motion.div>
                            </a>
                        </motion.div>
                        <div>
                            <a href="#">
                                <motion.div className={`${styles.RedBlock} ${styles.Block2}`}
                                    variants={colorframer}
                                    initial="variantA"
                                    whileHover="variantB"
                                >NALCO WORKSHOP & MERAMANDALI SITE</motion.div>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <motion.div className={`${styles.RedBlock} ${styles.Block3}`}
                                    variants={colorframer}
                                    initial="variantA"
                                    whileHover="variantB"
                                >PALIT EQUIPMENT SALES</motion.div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>*/}
            <div className={`${styles.OurFounder}`}>
                <div className={`${styles.OurFounder_para}`}>
                    <p>
                        Group Company INDFAB was promoted as a small scale industry in the year 1985 by Prabhat Palit a techno entrepreneur with over 33 years of varied experience in construction industries.
                    </p>
                    <p>

                        In this family owned business other two promoters Kalyan Palit and Ashish Palit have worked closely contributing towards growth, consolidation in different functional area, diversification programme and customer relation.
                    </p>
                </div>
                <div className={`${styles.OurFounder_h1}`}>
                    <h1>Our Founder</h1>
                </div>
            </div>
            <div className={`${styles.IsoSection}`}>
                <div><img src={iso1} style={{ width: "170px" }}></img></div>
                <div><img src={iso2}></img></div>
                <div><img src={iso3}></img></div>
                <div className={`${styles.IsoSectionPara}`}>
                    <p>
                        Indfab is proud to announce that we are now ISO certified in three critical standards: ISO 9001 for Quality Management Systems, ISO 14001 for Environmental Management Systems, and ISO 45001 for Occupational Health and Safety Management Systems. This triple certification underscores our commitment to delivering high-quality products, ensuring environmental sustainability, and maintaining the highest safety standards in the industry.
                    </p>
                </div>
                <div className={`${styles.Isolink}`}><a href="#">Read more</a></div>
            </div>
            <div className={`${styles.Section3}`}>
                <div className={`${styles.Section3line}`}></div>
                <div className={`${styles.Section3Body}`}>
                    <h1>Engineering & Planning</h1>
                    <ul>
                        <li>Qualified engineers for In house development of detail drawing from design drawings. A0 size plotter and scanner along with AutoCAD software available.</li>
                        <li>Job planning, preparing bill of quantities are carried out for timely execution of Jobs. </li>
                        <li>Proper procedures followed for vendor selection for bought out items, and raw material procurement.</li>
                        <li>Estimating, planning, project management ,progress monitoring and manufacturing schedule are reviewed and monitored on regular basis.</li>
                        <li>Quality assurance procedure and process documentation are meticulously planned as per plant requirement. </li>
                    </ul>
                </div>
            </div>
            <div >
                <div className={`${styles.QualitiesSectiontitle}`}><h1>Precision in every part, excellence in every detail</h1></div>
                {/*<div className={`${styles.CardSection1}`}>
                    <CustomCard2 title={"Quality Management"} image={crdimg4} description={"Production process is regularly inspected by Quality department. Inspection and Quality department prepares QAP for each job and manufacturing is carried out as per approved QAP. Welders are qualified as per approved WPQ. Quality assurance engineers are level —II AWS certified."} />
                    <CustomCard2 title={"Safety Health Environment & Quality Policy- Trippie E Management"} image={crdimg5} description={"We follow 'Triple E'- Efficient Engineering and Environment .All work assignments include specific attention to health, safety and environment concerns. Regular tool box meeting is held. Risk assessment for each job is determined. Safety induction training is arranged for all new employees."} />
                </div>*/}
                <div className={`${styles.CardSection}`}>
                    <CustomCard2 title={"Our Products"} image={crdimg1} description={"Discover our cutting-edge engineering solutions designed to streamline your processes and optimize performance. Our innovative products are engineered to exceed industry standards and empower your sucess.Explore our range today and experience the difference in quality, reliablity and efficiency."} />
                    <CustomCard2 title={"Our Manufacturing Unit"} image={crdimg2} description={"We pride ourselves on our state-of-the- art manufacturing unit equipped with cutting-edge technology and skilled workforce. Our facility is meticulously designed to ensure efficiency, precision, and quality in every step of the manufacturing process„ Equipped with the latest machinery and equipment, we maintain a modern infrastructure that enables us to meet the dynamic demands of the industry."} />
                    <CustomCard2 title={"Our Process of Work"} image={crdimg3} description={"Quality is the cornerstone of our manufacturing process. Our dedicated quality control team rigorously inspects every product at various stages of production to ensure adherence to international standards and customer specifications. We employ advanced testing techniques and methodologies to guarantee the reliability and performance of our products."} />
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
                    <div className={`${styles.EachMap}`}>
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
                    </div>
                    <div className={`${styles.EachMap}`}>
                        <h1>Nalconagar unit</h1>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.6133931762283!2d85.16018749999999!3d20.847312499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a18b0907060f427%3A0x18ee5a1a94651870!2sIndfab!5e0!3m2!1sen!2sin!4v1718901516471!5m2!1sen!2sin" 
                        width="600"
                        height="450"
                        style={{ border: 0, width: "100%", padding: "2%" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );

};

export default Home;
