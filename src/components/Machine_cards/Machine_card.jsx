import React, { useRef, useState, useEffect } from "react";
import styles from "./Machine_cards.module.css";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
function MachineCard({ image, name, specs }) {
    const dialogRef = useRef(undefined);
    const [activeImage, setActiveImage] = useState(null);
    useEffect(() => {
        if (!activeImage) return;
        dialogRef.current.showModal();
    }, [activeImage]);
    function closePopup() {
        dialogRef.current.close();
        setActiveImage(undefined);
    }
    return (

        <motion.div className={`${styles.Carddiv}`} 
                whileInView={{ scale: 1 }} 
                initial={{ scale: 0 }}
                transition={{duration:0.5,ease:"easeInOut"}}
        >
            <dialog ref={dialogRef} className={`backdrop:bg-black/85 overflow-visible ${styles.dialogBox}`}>
                {activeImage &&

                    (<div className='relative overflow-visible'>
                        <div style={{
                            aspectRatio: `${activeImage.width}/${activeImage.height}`
                        }} className={`${styles.dialogImgdiv}`}>
                            <img src={activeImage}></img>
                        </div>
                        <div className='absolute -top-2 -right-2 '>
                            <button onClick={closePopup} className="flex items-center justify-center w-10 h-10 bg-zinc-200 rounded-full shadow">
                                <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000", }} />
                                <span className='sr-only'>Close</span>
                            </button>

                        </div>

                    </div>)
                }
            </dialog>
            <div className={`${styles.Accordiondiv}`}>
                <Accordion type="single" collapsible className={`${styles.AccordionBar}`} orientation="horizontal">
                    <AccordionItem value="item-1" className={`${styles.AccordionItem}`}>
                        <AccordionTrigger className={`${styles.AccordionTrigger}`}>Specifications</AccordionTrigger>
                        <div className={`${styles.AccordionContentDiv}`}>
                            <AccordionContent className={`${styles.AccordionContent}`}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Description</th>
                                            <th>Tech. Specifications</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            specs.map((spec, index) => (
                                                <tr key={index}>
                                                    <td>{spec.title}</td>
                                                    <td>{spec.desc}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </AccordionContent>
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className={`${styles.Imagediv}`} onClick={() => setActiveImage(image)}><img src={image}></img></div>
            <div className={`${styles.Namediv}`}><h2 className="text-white">{name}</h2></div>




        </motion.div>
    );
}

export default MachineCard;