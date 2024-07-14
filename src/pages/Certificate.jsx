import React, { useState } from "react";
import CredentialBar from "@/components/CredentialBar/CredentialBar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./Certificate.module.css";
import { Button } from "@/components/ui/button";
import PdfViewer from "@/components/PdfViewer/PdfView";
import pdf1 from "../Certificates/01.01.2023 to 31.12.2027.pdf";
import pdf2 from "../Certificates/ESIC Certificate.pdf";
import pdf3 from "../Certificates/GST Original Certificate.pdf";
import pdf4 from "../Certificates/MSME CERTIFICATE.pdf";
import pdf5 from "../Certificates/NSIC CERTIFICATE (01.04.2023 to 31.03.2025).pdf";
import pdf6 from "../Certificates/PAN No. (INDFAB).pdf";
import pdf7 from "../Certificates/PF No 1-2.pdf";
import pdf8 from "../Certificates/soft copy of 14k INDFAB.pdf";
import pdf9 from "../Certificates/soft copy of 45k INDFAB.pdf";
import pdf10 from "../Certificates/soft copy of 9001 INDFAB.pdf";
import pdf11 from "../Certificates/Udyam Registration Certificate.pdf";

function Certificate() {
    const [selectedPdf, setSelectedPdf] = useState(pdf1);

    return (
        <div>
            <CredentialBar />
            <Navbar />
            <div className={`${styles.Introimg}`}>
                <h1>Certifications</h1>
            </div>
            <div className={`${styles.Instructions}`}>
                <h2>Available certificates</h2>
                <p>These are the available certificates.Click the button to view the respective certificate.</p>
            </div>
            <div className={`${styles.ButtonsDiv}`}>

                <Button onClick={() => setSelectedPdf(pdf1)} className={`${styles.Buttons}`}>FACTORY LICENCE</Button>
                <Button onClick={() => setSelectedPdf(pdf2)} className={`${styles.Buttons}`}>ESIC Certificate</Button>
                <Button onClick={() => setSelectedPdf(pdf3)} className={`${styles.Buttons}`}>GST Original Certificate</Button>
                <Button onClick={() => setSelectedPdf(pdf4)} className={`${styles.Buttons}`}>MSME CERTIFICATE</Button>
                <Button onClick={() => setSelectedPdf(pdf5)} className={`${styles.Buttons}`}>NSIC CERTIFICATE</Button>
                <Button onClick={() => setSelectedPdf(pdf6)} className={`${styles.Buttons}`}>PAN No.</Button>
                <Button onClick={() => setSelectedPdf(pdf7)} className={`${styles.Buttons}`}>PF No 1-2</Button>
                <Button onClick={() => setSelectedPdf(pdf8)} className={`${styles.Buttons}`}>Certificate of ISO 14001</Button>
                <Button onClick={() => setSelectedPdf(pdf9)} className={`${styles.Buttons}`}>Certificate of ISO 45001</Button>
                <Button onClick={() => setSelectedPdf(pdf10)} className={`${styles.Buttons}`}>Certificate of ISO 9001</Button>
                <Button onClick={() => setSelectedPdf(pdf11)} className={`${styles.Buttons}`}>Udyam Registration Certificate</Button>

            </div>
            <div className={`${styles.PDFblock}`}>
                <PdfViewer pdfFile={selectedPdf} />
            </div>
            <Footer />
        </div>
    );
}

export default Certificate;
