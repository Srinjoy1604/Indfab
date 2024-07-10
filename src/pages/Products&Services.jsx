import React from "react";
import CredentialBar from "@/components/CredentialBar/CredentialBar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./Products&Services.module.css";
import ImageCard1 from "@/components/Cards/ImageCard1";
import AfterBefore from "@/components/Cards/AfterBefore";
import A1 from "../images/Products&Services/A1.png";
import A2 from "../images/Products&Services/A2.png";
import A3 from "../images/Products&Services/A3.png";
import A4 from "../images/Products&Services/A4.png";
import A5 from "../images/Products&Services/A5.png";
import A6 from "../images/Products&Services/A6.png";
import A7 from "../images/Products&Services/A7.png";
import A8 from "../images/Products&Services/A8.png";
import A9 from "../images/Products&Services/A9.png";
import A10 from "../images/Products&Services/A10.png";
import A11 from "../images/Products&Services/A11.png";
import A12 from "../images/Products&Services/A12.png";
import A13 from "../images/Products&Services/A13.png";
import RWB1 from "../images/Products&Services/RWB1.png";
import RWA1 from "../images/Products&Services/RWA1.png";
import RWB2 from "../images/Products&Services/RWB2.png";
import RWA2 from "../images/Products&Services/RWA2.png";
import RWB3 from "../images/Products&Services/RWB3.png";
import RWA3 from "../images/Products&Services/RWA3.png";
import oS from "../images/Products&Services/ONSUPPLYDESIGN.png";
import oSe from "../images/Products&Services/ONSERVICEDESIGN.png";
function ProductsServices() {
    return (
        <div>
            <CredentialBar />
            <Navbar />
            <div className={`${styles.IntroDiv}`}>
                <div>
                    <h1>Products & Services</h1>
                </div>
            </div>
            <div className={`${styles.AchievDiv}`}>
                <h1>Our Achievements</h1>
                <div className={`${styles.AchievCard}`}>
                    <ImageCard1 image={A1} desc={"Reclaimer Bucket: Size:  385 Lit, 417 Lit & 577 Lit"} />
                    <ImageCard1 image={A2} desc={"Briddle Roll :- Size: 500 x 2300 with T.C Coating"} />
                    <ImageCard1 image={A3} desc={"Axial Fan with Stand"} />
                    <ImageCard1 image={A4} desc={"Lip Plate"} />
                    <ImageCard1 image={A5} desc={"Repairing ROT Roll"} />
                    <ImageCard1 image={A6} desc={"Sealing Plate for Universal Shaft"} />
                    <ImageCard1 image={A7} desc={"Slide Plate"} />
                    <ImageCard1 image={A8} desc={"Shovel Bucket:  SS-310"} />
                    <ImageCard1 image={A9} desc={"Screw Conveyor"} />
                    <ImageCard1 image={A10} desc={"Baffle"} />
                    <ImageCard1 image={A11} desc={"MLLB- With Trolley"} />
                    <ImageCard1 image={A12} desc={"Quenching Chambe"} />
                    <ImageCard1 image={A13} desc={"Journal Housing"} />
                </div>
            </div>
            <div className={`${styles.ReburfishedWorkDiv}`}>
                <h1 className={`${styles.ReburfishedWorkDivHead}`}>Some Refurbishing Works</h1>
                <div className={`${styles.ReburfishedWork}`}>
                    <AfterBefore image1={RWB1} image2={RWA1} name={"Journal Bearing Housing"} />
                    <AfterBefore image1={RWB2} image2={RWA2} name={"Shovel Bucket for Pot Line"} />
                    <AfterBefore image1={RWB3} image2={RWA3} name={"Briddle Roll"} />
                </div>
            </div>
            <div className={`${styles.ProcessWorkDiv}`}>
                <h1 className={`${styles.ReburfishedWorkDivHead}`}>Our Process of Work</h1>
                <div className={`${styles.ProcessofWorkBlock}`}>
                    <div className={`${styles.ProcessofWork1}`}>
                        <h1>On Supply</h1>
                        <div><img src={oS}></img></div>
                    </div>
                    <div className={`${styles.ProcessofWork2}`}>
                        <div><img src={oSe}></img></div>
                        <h1>On Service</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductsServices;