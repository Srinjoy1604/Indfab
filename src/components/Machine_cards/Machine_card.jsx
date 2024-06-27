import React from "react";
import styles from "./Machine_cards.module.css";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
function MachineCard({ image, name, specs }) {

    return (
        <div className={`${styles.Carddiv}`}>
            <div className={`${styles.Imagediv}`}><img src={image}></img></div>
            <div className={`${styles.Namediv}`}><h2>{name}</h2></div>
            
            <div className={`${styles.Accordiondiv}`}>
                <Accordion type="single" collapsible className={`${styles.AccordionBar}`}>
                    <AccordionItem value="item-1" className={`${styles.AccordionItem}`}>
                        <AccordionTrigger className={`${styles.AccordionTrigger}`}>Specifications</AccordionTrigger>
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
                    </AccordionItem>
                </Accordion>
            </div>


        </div>
    );
}

export default MachineCard;