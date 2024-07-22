import React from "react";
import styles from "./MSME.module.css";
import CredentialBar from "@/components/CredentialBar/CredentialBar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import SimpleSlider from "@/components/ImageSlider/ImageSlider";

import picture0 from "../images/Nalconagar/Picture1.jpg";
import picture1 from "../images/Nalconagar/Picture2.jpg";
import picture2 from "../images/Nalconagar/Picture3.jpg";
import picture3 from "../images/Nalconagar/Picture4.jpg";
import picture4 from "../images/Nalconagar/Picture5.jpg";
import picture5 from "../images/Nalconagar/Picture6.jpg";


function Nalconagar() {
    const images = [
        picture0,
        picture1,
        picture2,
        picture3,
        picture4,
        picture5,
      


    ];
 
    return (
        <div>
            <CredentialBar />
            <Navbar />
            <div className={`${styles.IntroUnit} ${styles.NalconagarImage}`}>
                <h1>Nalconagar Unit</h1>
            </div>
            <div>
                <div className={styles.ImageSlider1}>
                    <SimpleSlider images={images} />
                </div>
                <div className={styles.MapRegion}>
                    <div><h2>Reach Us</h2></div>
                    <div className={styles.MapHolder}>
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
}

export default Nalconagar;