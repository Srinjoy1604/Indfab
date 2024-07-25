import React from "react";
import styles from "./Clients.module.css";
import CredentialBar from "@/components/CredentialBar/CredentialBar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Company from "@/components/Cards/CompanyLogo";
import cmp1 from "../images/Clients/CompanyLogo/cmp1.png";
import cmp2 from "../images/Clients/CompanyLogo/cmp2.png";
import cmp3 from "../images/Clients/CompanyLogo/cmp3.png";
import cmp4 from "../images/Clients/CompanyLogo/cmp4.png";
import cmp5 from "../images/Clients/CompanyLogo/cmp5.png";
import cmp6 from "../images/Clients/CompanyLogo/cmp6.png";
import cmp7 from "../images/Clients/CompanyLogo/cmp7.png";
import cmp8 from "../images/Clients/CompanyLogo/cmp8.png";
import cmp9 from "../images/Clients/CompanyLogo/cmp9.png";
import cmp10 from "../images/Clients/CompanyLogo/cmp10.png";
import cmp11 from "../images/Clients/CompanyLogo/cmp11.png";
import cmp12 from "../images/Clients/CompanyLogo/cmp12.png";
import cmp13 from "../images/Clients/CompanyLogo/cmp13.png";
import cmp14 from "../images/Clients/CompanyLogo/cmp14.png";
import cmp15 from "../images/Clients/CompanyLogo/cmp15.png";
import cmp16 from "../images/Clients/CompanyLogo/cmp16.png";
import cmp17 from "../images/Clients/CompanyLogo/cmp17.png";
import { color, motion } from "framer-motion";
function Clients() {
    return (
        <div>
            <CredentialBar />
            <Navbar />
            <div className={`${styles.IntroDiv}`}>
                <h1>Our Clients</h1>
            </div>
            <div className={`${styles.CompanyMain}`}>
                <Company image={cmp1} />
                <Company image={cmp2} />
                <Company image={cmp3} />
                <Company image={cmp4} />
                <Company image={cmp5} />
                <Company image={cmp6} />
                <Company image={cmp7} />
                <Company image={cmp8} />
                <Company image={cmp9} />
                <Company image={cmp10} />
                <Company image={cmp11} />
                <Company image={cmp12} />
                <Company image={cmp13} />
                <Company image={cmp14} />
                <Company image={cmp15} />
                <Company image={cmp16} />
                <Company image={cmp17} />
               
            </div>
            <Footer />
        </div>
    );
}

export default Clients;