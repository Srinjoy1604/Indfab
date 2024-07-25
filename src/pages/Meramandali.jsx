import React from "react";
import styles from "./MSME.module.css";
import CredentialBar from "@/components/CredentialBar/CredentialBar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import SimpleSlider from "@/components/ImageSlider/ImageSlider";
import Event from "@/components/EventsCard/EventsCard";
import picture0 from "../images/Meramandali/MeramandaliWorkShop.jpg";
import picture1 from "../images/Meramandali/Picture1.png";
import picture2 from "../images/Meramandali/Picture2.png";
import picture3 from "../images/Meramandali/Picture3.png";
import picture4 from "../images/Meramandali/Picture4.png";
import picture5 from "../images/Meramandali/Picture5.png";
import picture6 from "../images/Meramandali/Picture6.png";
import picture7 from "../images/Meramandali/Picture7.png";
import picture8 from "../images/Meramandali/Picture8.png";

import sf1 from "../images/Meramandali/SafetyWeek2024/7e09fd9f-5a4e-4013-bffe-33202f73a925.jpg";
import sf2 from "../images/Meramandali/SafetyWeek2024/IMG_20240309_131420.jpg";
import sf3 from "../images/Meramandali/SafetyWeek2024/IMG_20240309_131506.jpg";
import sf4 from "../images/Meramandali/SafetyWeek2024/IMG_20240309_131649.jpg";
import sf5 from "../images/Meramandali/SafetyWeek2024/IMG_20240309_131714.jpg";
import sf6 from "../images/Meramandali/SafetyWeek2024/IMG_20240309_132508.jpg";
import sf7 from "../images/Meramandali/SafetyWeek2024/IMG_20240309_132530.jpg";
import sf8 from "../images/Meramandali/SafetyWeek2024/IMG_20240309_140330.jpg";
import sf9 from "../images/Meramandali/SafetyWeek2024/IMG_20240309_140342.jpg";


import sm1 from "../images/Meramandali/D&HWeldingSeminar/semi (1).jpg";
import sm2 from "../images/Meramandali/D&HWeldingSeminar/semi (2).jpg";
import sm3 from "../images/Meramandali/D&HWeldingSeminar/semi (3).jpg";
import sm4 from "../images/Meramandali/D&HWeldingSeminar/semi (4).jpg";
import sm5 from "../images/Meramandali/D&HWeldingSeminar/semi (5).jpg";
import sm6 from "../images/Meramandali/D&HWeldingSeminar/semi (6).jpg";
import sm7 from "../images/Meramandali/D&HWeldingSeminar/semi (7).jpg";
import sm8 from "../images/Meramandali/D&HWeldingSeminar/semi (8).jpg";
import sm9 from "../images/Meramandali/D&HWeldingSeminar/semi (9).jpg";
import sm10 from "../images/Meramandali/D&HWeldingSeminar/semi (10).jpg";
import sm11 from "../images/Meramandali/D&HWeldingSeminar/semi (11).jpg";
import sm12 from "../images/Meramandali/D&HWeldingSeminar/semi (12).jpg";
import sm13 from "../images/Meramandali/D&HWeldingSeminar/semi (13).jpg";
import sm14 from "../images/Meramandali/D&HWeldingSeminar/semi (14).jpg";
import sm15 from "../images/Meramandali/D&HWeldingSeminar/semi (15).jpg";
import sm16 from "../images/Meramandali/D&HWeldingSeminar/semi (16).jpg";
import sm17 from "../images/Meramandali/D&HWeldingSeminar/semi (17).jpg";
import sm18 from "../images/Meramandali/D&HWeldingSeminar/semi (18).jpg";
import sm19 from "../images/Meramandali/D&HWeldingSeminar/semi (19).jpg";
import sm20 from "../images/Meramandali/D&HWeldingSeminar/semi (20).jpg";
import sm21 from "../images/Meramandali/D&HWeldingSeminar/semi (21).jpg";
import sm22 from "../images/Meramandali/D&HWeldingSeminar/semi (22).jpg";
import sm23 from "../images/Meramandali/D&HWeldingSeminar/semi (23).jpg";
import sm24 from "../images/Meramandali/D&HWeldingSeminar/semi (24).jpg";
import { color, motion } from "framer-motion";
function Meramandali() {
    const images = [
        picture0,
        picture8,
        picture1,
        picture2,
        picture3,
        picture4,
        picture5,
        picture6,
        picture7

    ];
    const sfweek = [sf1, sf2, sf3, sf4, sf5, sf6, sf7, sf8, sf9];
    const seminar = [
        sm1, sm2, sm3, sm4, sm5, sm6, sm7, sm8, sm9, sm10,
        sm11, sm12, sm13, sm14, sm15, sm16, sm17, sm18, sm19, sm20,
        sm21, sm22, sm23, sm24
    ];
    return (
        <div>
            <CredentialBar />
            <Navbar />
            <div className={styles.IntroUnit}>
                <h1>Meramandali Unit</h1>
            </div>
            <div>
                <div className={styles.ImageSlider1}>
                    <SimpleSlider images={images} />
                </div>
                <div className={styles.MapRegion}>
                    <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{amount: 0.4, once: true }}
                    transition={{ delay: 0.2, x: { type: "spring", stiffness: 60 }, opacity: { duration: 0.5 }, ease: "easeIn", duration: 0.5, }}
                    ><h2>Reach Us</h2></motion.div>
                    <motion.div className={styles.MapHolder}
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{amount: 0.4, once: true }}
                    transition={{ delay: 0.2, x: { type: "spring", stiffness: 60 }, opacity: { duration: 0.5 }, ease: "easeIn", duration: 0.5, }}
                    >
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
                </div>
            </div>
            <div className={styles.eventsDiv}>
                <h1 className={styles.EventMainH1}>Events</h1>

                <div className={styles.EventsList}>
                    <div className={styles.EventsBlock}>
                        <h2>Safety Week 2024</h2>
                        <div className={styles.EventSliderBlock}>
                            <Event images={sfweek} />
                        </div>
                    </div>
                    <div className={styles.EventsBlock}>
                        <h2>D&H Welding Seminar</h2>
                        <div className={styles.EventSliderBlock}>
                            <Event images={seminar} />
                        </div>
                    </div>
                </div>



            </div>
            <Footer />
        </div>
    );
}

export default Meramandali;