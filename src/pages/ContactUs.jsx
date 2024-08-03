import React from "react";
import CredentialBar from "@/components/CredentialBar/CredentialBar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./ContactUs.module.css";
import ph from "../images/Contact/icons8-phone-96.png";
function Contact() {
    return (
        <div>
            <CredentialBar />
            <Navbar />
            <div className={styles.ContactIntro}></div>
            <div className={styles.ContactTable}>
                <table>

                    <tbody>
                        <tr>
                            <td rowSpan={2} id={styles.Spanned}>Head Office</td>
                            <td>Kalyan Palit <div className={styles.MPtitle}>(Managing partner)</div></td>
                            <td><a href="tel:+919437579954" className={styles.phonenum}><img src={ph}></img>+91 9437579954</a></td>
                            <td><a href="mailto:kalyan.palit@indfab.in" id={styles.emailLink}>kalyan.palit@indfab.in</a></td>
                        </tr>
                        <tr>
                            <td>Avaya Kumar Nayak</td>
                            <td><a href="tel:+919437013914" className={styles.phonenum}><img src={ph}></img>+91 9437013914</a></td>
                            <td ><a href="mailto:info.works@indfab.in" id={styles.emailLink}>info.works@indfab.in</a></td>
                        </tr>


                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td rowSpan={3} id={styles.Spanned}>Sales/ Service</td>
                            <td>Gobinda Soren</td>
                            <td><a href="tel:+919861549902" className={styles.phonenum}><img src={ph}></img>+91 9861549902</a></td>
                            <td ><a href="mailto:gobinda.soren@indfab.in" id={styles.emailLink}>gobinda.soren@indfab.in</a></td>
                        </tr>

                        <tr>
                            <td>Kanhu Charan Nayak</td>
                            <td><a href="tel:+919437902749" className={styles.phonenum}><img src={ph}></img>+91 9437902749</a></td>
                            <td><a href="mailto:kanhv.nayak@indfab.in" id={styles.emailLink}>kanhu.nayak@indfab.in</a></td>
                        </tr>
                        <tr>
                            <td>Ajay Ghosh</td>
                            <td><a href="tel:+919861175214" className={styles.phonenum}><img src={ph}></img>+91 9861175214</a></td>
                            <td ><a href="mailto:ajay.ghosh@indfab.in" id={styles.emailLink}>ajay.ghosh@indfab.in</a></td>
                        </tr>

                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td rowSpan={3} id={styles.Spanned}>Manufacturing / Production</td>
                            <td>Dilip Ku. Sahu</td>
                            <td><a href="tel:+919937619473" className={styles.phonenum}><img src={ph}></img>+91 9937619473</a></td>
                            <td ><a href="mailto:dksahoo73@gmail.com" id={styles.emailLink}>dksahoo73@gmail.com</a></td>
                        </tr>
                        <tr>
                            <td>Soumya Ranjan Sahu</td>
                            <td><a href="tel:+919777407412" className={styles.phonenum}><img src={ph}></img>+91 9777407412</a></td>
                            <td><a href="mailto:soumyaranjan.sahu@indfab.in" id={styles.emailLink}>soumyaranjan.sahu@indfab.in</a></td>
                        </tr>
                        <tr>
                            <td>Kshirod Swain</td>
                            <td><a href="tel:+919437444911" className={styles.phonenum}><img src={ph}></img>+91 9437444911</a></td>
                            <td><a href="mailto:indfab.kurunti@gmail.com" id={styles.emailLink}>indfab.kurunti@gmail.com</a></td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td rowSpan={1} id={styles.Spanned}>HRA</td>
                            <td>Umakanta Sahoo</td>
                            <td><a href="tel:+919439672650" className={styles.phonenum}><img src={ph}></img>+91 9439672650</a></td>
                            <td ><a href="mailto:umakanta@indfab.in " id={styles.emailLink}>umakanta@indfab.in </a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;