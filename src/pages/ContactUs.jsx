import React from "react";
import CredentialBar from "@/components/CredentialBar/CredentialBar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./ContactUs.module.css";
function Contact() {
    return (
        <div>
            <CredentialBar />
            <Navbar />
            <div className={styles.ContactIntro}></div>
            <div className={styles.ContactTable}>
                <table>
                    <thead>
                        <tr>
                            <th>Department</th>
                            <th>Contact Person</th>
                            <th>Phone no.</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={2} id={styles.Spanned}>Head Office</td>
                            <td>Kalyan Palit</td>
                            <td>+91 9437579954</td>
                            <td><a href="mailto:kalyan.palit@indfab.in" id={styles.emailLink}>kalyan.palit@indfab.in</a></td>
                        </tr>
                        <tr>
                            <td>Abaya Kumar Nayak</td>
                            <td>+91 9437013914</td>
                            <td ><a href="mailto:info.works@indfab.in" id={styles.emailLink}>info.works@indfab.in</a></td>
                        </tr>
                        <tr>
                            <td rowSpan={3} id={styles.Spanned}>Sales/ Service</td>
                            <td>Ajay Ghosh</td>
                            <td>+91 9861175214</td>
                            <td ><a href="mailto:ajay.ghosh@indfab.in" id={styles.emailLink}>ajay.ghosh@indfab.in</a></td>
                        </tr>
                        <tr>
                            <td>Kanhv Charan Nayak</td>
                            <td>+91 9437902749</td>
                            <td><a href="mailto:kanhv.nayak@indfab.in" id={styles.emailLink}>kanhv.nayak@indfab.in</a></td>
                        </tr>
                        <tr>
                            <td>Gobinda Soren</td>
                            <td>+91 9861549902</td>
                            <td ><a href="mailto:gobinda.soren@indfab.in" id={styles.emailLink}>gobinda.soren@indfab.in</a></td>
                        </tr>
                        <tr>
                            <td rowSpan={3} id={styles.Spanned}>Manufacturing / Production</td>
                            <td>Dilip Ku. Sahu</td>
                            <td>+91 9937619473</td>
                            <td ><a href="mailto:dksahoo73@gmail.com" id={styles.emailLink}>dksahoo73@gmail.com</a></td>
                        </tr>
                        <tr>
                            <td>Soumya Ranjan Sahu</td>
                            <td>+91 9777407412</td>
                            <td><a href="mailto:soumyaranjan.sahu@indfab.in" id={styles.emailLink}>soumyaranjan.sahu@indfab.in</a></td>
                        </tr>
                        <tr>
                            <td>Kshirod Swain</td>
                            <td>+91 9437444911</td>
                            <td><a href="mailto:indfab.kurunti@gmail.com" id={styles.emailLink}>indfab.kurunti@gmail.com</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;