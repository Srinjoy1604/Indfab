import React, { useState } from "react";
import styles from './CredentialBar.module.css';
import locimg from "../../images/Credentials/wired-flat-18-location-pin_fast.gif"
import mail from "../../images/Credentials/wired-flat-177-envelope-send (1).gif"
import call from "../../images/Credentials/system-solid-58-call-phone.gif"
function CredentialBar() {

    return (
        <div className={`${styles.main}`}>
            <div>
                <ul className={`${styles.textBox}`}>
                    <li><img src={locimg} className={`${styles.addr}`}></img><span><span style={{fontWeight:"700"}}>Address:</span> FCI Road, Nalco Nagar, Angul-759145, Odisha, India</span></li>
                    <li><img src={call} className={`${styles.ph}`}></img><span><span style={{fontWeight:"700"}}>Call us:</span> +91-6764 222605</span></li>
                    <li><img src={mail} className={`${styles.mail}`}></img><span><span style={{fontWeight:"700"}}>Write us:</span>info.works@indfab.in</span></li>
                </ul>
            </div>
        </div>

    );
}

export default CredentialBar;