import React from "react";
import CredentialBar from "@/components/CredentialBar/CredentialBar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./Q&S.module.css";
import Qm from "../images/Quality_&_Safety/QualityManage.png";
import Ql from "../images/Quality_&_Safety/QualityLogo.png";
import ins1 from "../images/Quality_&_Safety/OnsiteInspection/DyePenetrationTestingofAnodeBracket.jpg";
import ins2 from "../images/Quality_&_Safety/OnsiteInspection/UltrasonicTestingofDuct.jpg";
import ins3 from "../images/Quality_&_Safety/OnsiteInspection/UltrasonicTestingofMetal.jpg";
import TextCard from "@/components/Cards/TextCard";
import DescCard from "@/components/Cards/DescCard";
function QualitySafety() {
    return (
        <div>
            <CredentialBar />
            <Navbar />
            <div className={`${styles.IntroPic}`}>
                <h1><span className={styles.title1}>Quality</span> <span className={styles.title2}>&</span> <span className={styles.title3}>Safety</span></h1>
            </div>
            <div className={`${styles.SafetyHealth}`}>
                <h1 className={`${styles.SafetyHealthTitle}`}>Safety Health&nbsp;<span className={styles.green}>Environment</span>& Quality Policy(“TRIPLE E” MANAGEMENT)</h1>
                <div className={`${styles.SafetyHealthdiv}`}>


                    <ul>
                        <li>We follow “Triple E”- Efficient Engineering and Environment.</li>
                        <li>All work assignments include specific attention to health, safety and environment concerns. Regular tool box meeting is held. Risk assessment for each job is determined. Safety induction training  is arranged  for all new employees.</li>
                        <li>All erection tools and tackles are annually tested and calibrated. Safety Officer and safety stewards monitor implementation of safety norms.</li>
                        <li>Medical checkup of new employees are mandatory. Safe drinking water is ensured. Wash rooms are maintained properly. Good hygiene at Workers canteen.</li>
                    </ul>

                </div>
            </div>
            <div className={`${styles.QualityManagement}`}>
                <div className={`${styles.OrangeBox}`}>
                    <div className={`${styles.OrangeBoxHeading}`}>
                        <img src={Ql}></img>
                        <h1>Quality </h1>
                        <h1>Management</h1>
                    </div>
                    <div className={`${styles.OrangeBoxImage}`}><img src={Qm}></img></div>
                </div>
                <div className={`${styles.CardSection}`}>
                    <div className={`${styles.HangingCard}`}>
                        <TextCard text={"Production process is regularly inspected by Quality department. Inspection and Quality department prepares QAP for each job and manufacturing is carried out as per approved QAP."} />
                    </div>
                    <div className={`${styles.NonHangingCard}`}>
                        <TextCard text={"Welders are qualified as per approved WPQ. Quality assurance engineers are level-II AWS certified."} />
                    </div>
                    <div className={`${styles.NonHangingCard}`}>
                        <TextCard text={"Process quality documentation are maintained. Batch certificate/Test Certificate from manufacturer for raw material is verified. Each steel work is inspected in stages at fit up, welding and dispatch .Radiographic  films are interpreted by our engineers.  Instruments  are calibrated for ensuring correct output."} />
                    </div>
                    <div className={`${styles.NonHangingCard}`}>
                        <TextCard text={"Quality policy are maintained.Inspection procedures like surface quality, humidity, ambience temperature, for blasting and painting are  followed up. Paint coat thickness  is measured."} />
                    </div>
                    <div className={`${styles.NonHangingCard}`}>
                        <TextCard text={"Codes and standards of fabrication are maintained as per ASME Section IX. In house testing group performs DP, Visual and UT tests. Latest inspection equipment like ultrasonic machines, thickness gauge are available with us."} />
                    </div>
                    <div className={`${styles.NonHangingCard}`}>
                        <TextCard text={"Our engineers and technicians have worked with reputed Inspection agencies like EIL, Bureau Veritas, IRS, SGS, MECON and DCPL. Third party inspection agency is deployed if required by Customer."} />
                    </div>




                </div>

            </div>
            <div className={styles.OnsiteDiv}>
                <div className={styles.OnsiteDivDesc}>
                    <h2>On site Inspection</h2>
                    <p>At INDFAB, we prioritize excellence through meticulous on-site inspections, ensuring precision and reliability in every project we undertake.
                        We are committed to delivering the highest standards of quality and performance in all our services.</p>
                </div>
                <div className={styles.DescCardDiv}>
                    <DescCard image={ins1} desc={"Dye Penetration Testing of Anode Bracket"} />
                    <DescCard image={ins2} desc={"Ultrasonic Testing of Duct"} />
                    <DescCard image={ins3} desc={"Ultrasonic Testing of Metal"} />
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default QualitySafety;