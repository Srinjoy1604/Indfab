import React, { useState } from 'react';
import styles from "./PdfView.module.css";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Button } from '../ui/button';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PdfViewer = ({ pdfFile }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setPageNumber(1);
        setNumPages(numPages);
        
    };

    const goToPrevPage = () => {
        setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1));
    };

    const goToNextPage = () => {
        setPageNumber(prevPageNumber => Math.min(prevPageNumber + 1, numPages));
    };

    return (
        <div className={styles.pdfViewer}>
            <Document
                file={pdfFile}
                onLoadSuccess={onDocumentLoadSuccess}
                className={styles.document}
            >
                <Page pageNumber={pageNumber} width={window.innerWidth * 0.8} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
            <div className={styles.navigationButtons}>
                <Button onClick={goToPrevPage} disabled={pageNumber <= 1}>Previous</Button>
                <Button onClick={goToNextPage} disabled={pageNumber >= numPages}>Next</Button>
            </div>
        </div>
    );
};

export default PdfViewer;




