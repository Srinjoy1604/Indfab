import React from "react";
import CredentialBar from "@/components/CredentialBar/CredentialBar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import IntroPic from "@/components/IntroPic/IntroPic";
import intro1 from "../images/Manufacturing_Unit/image MANUFATURING..Top one.png"
import styles from "./ManufacturingUnit.module.css";
import MachineCard from "@/components/Machine_cards/Machine_card";
import { color } from "framer-motion";
import m1 from "../images/Manufacturing_Unit/image001.png";
import m2 from "../images/Manufacturing_Unit/image006.png";
import m3 from "../images/Manufacturing_Unit/image010.png";
import m4 from "../images/Manufacturing_Unit/image012.png";
import m5 from "../images/Manufacturing_Unit/image016.png";
import m6 from "../images/Manufacturing_Unit/image018.png";
import m7 from "../images/Manufacturing_Unit/image020.png";
import m8 from "../images/Manufacturing_Unit/image024.png";
import m9 from "../images/Manufacturing_Unit/image026.png";
import m10 from "../images/Manufacturing_Unit/image028.png";
import m11 from "../images/Manufacturing_Unit/image030.png";
import m12 from "../images/Manufacturing_Unit/image034.png";
import m13 from "../images/Manufacturing_Unit/image036.png";
import m14 from "../images/Manufacturing_Unit/image038.png";
import m15 from "../images/Manufacturing_Unit/image040.png";
import m16 from "../images/Manufacturing_Unit/image042.png";
import m17 from "../images/Manufacturing_Unit/image044.png";
import m18 from "../images/Manufacturing_Unit/image046.png";
import m19 from "../images/Manufacturing_Unit/image048.png";
import m20 from "../images/Manufacturing_Unit/image052.png";
import m21 from "../images/Manufacturing_Unit/image056.png";
import m22 from "../images/Manufacturing_Unit/image058.png";
import m23 from "../images/Manufacturing_Unit/image062.png";
import m24 from "../images/Manufacturing_Unit/image064.png";
import m25 from "../images/Manufacturing_Unit/image066.png";
import Noimg from "../images/Manufacturing_Unit/Noimage.jpg";
import Visit from "../images/Manufacturing_Unit/wired-flat-751-share.gif";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { motion } from "framer-motion";

function Manufacturing_Unit() {
    const introPicStyle = {
        color: "white"
    };
    const visit = {
        initial: { opacity: "0%", backgroundColor: "none" },
        animate: { opacity: "100%", backgroundColor: "red" },
    }
    return (
        <div>
            <CredentialBar />
            <Navbar />
            <IntroPic image={intro1} text={"Manufacturing Unit"} style={introPicStyle} />
            <div className={`${styles.MainEqpintro}`}>
                <h1>MAIN</h1>
                <h1>EQUIPMENTS</h1>
            </div>
            <div className={`${styles.MachineCards}`}>
                <MachineCard image={m1} name={"ESAB CNC  Oxy-Fuel Cutting Machine (CM - 01)"} specs={[{ title: "Make", desc: "ESAB" }, { title: "Machine Width", desc: "4625mm" }, { title: "Speed Range", desc: "3000mm/min" }, { title: "Cutting Width", desc: "2700mm" }, { title: "Cutting Length", desc: "13000mm" }]} />
                <MachineCard image={m2} name={"300T Hydraulic Press Machine (HPM - 01)"} specs={[{ title: "Piston stroke length", desc: "400 mm" }, { title: "Weidth of  Machine", desc: "2000 mm" }, { title: "Piston Qty.", desc: "3 Nos" }, { title: "Load Capacity", desc: "300 MT" }, { title: "Motor capacity", desc: "10 Hp" }]} />
                <MachineCard image={m3} name={"INDOTECH Horizontal Bend Saw (BSM  - 01)"} specs={[{ title: "Max Cutting Thickness", desc: "210 X 210 mm" }, { title: "Cutting Rotation Speed(Max.)", desc: "480 RPM" }, { title: "Blade Tension (Max.)", desc: "29 Kg/cm^2" }, { title: "Blade Tension (Min.)", desc: "27 Kg/cm^2" }, { title: "Blade Size", desc: "3760 mm" }, { title: "Grinding motor power", desc: "3 Hp" }]} />
                <MachineCard image={m4} name={"REFORM Surface Grinding Machine (GM - 02)"} specs={[
                    { title: "Grinding length", desc: "2500 mm" },
                    { title: "Passage width", desc: "600 mm" },
                    { title: "Electro-magnetic table", desc: "2500 x 400 mm" },
                    { title: "Grinding width max", desc: "400 mm" },
                    { title: "Grinding height", desc: "300 mm" },
                    { title: "Segment head diameter", desc: "600 mm" },
                    { title: "Segment dimensions", desc: "120/106x41x250 mm" },
                    { title: "Number of segments", desc: "10 Nos" },
                    { title: "Grinding motor speed", desc: "600 RMP" },
                    { title: "Grinding motor feed", desc: "0.05 - 30 m/min" },
                    { title: "Grinding motor infeed", desc: "0.005 - 0.2 mm" },
                    { title: "Grinding motor power", desc: "22 KW" }
                ]}
                />
                <MachineCard
                    image={m5}
                    name={"HMT Light Duty Precision Lathe(LM - 12)"}
                    specs={[
                        { title: "Bed Width", desc: "300 mm" },
                        { title: "Height of Centers", desc: "220 mm" },
                        { title: "Swing Over Bed", desc: "Ø 440 mm" },
                        { title: "Swing Over Carriage", desc: "Ø 360 mm" },
                        { title: "Tailstock Sleeve Stroke", desc: "300 mm" },
                        { title: "Bar Passage/Spindle Bore", desc: "Ø 45 mm" },
                        { title: "Distance Between Centers", desc: "1000 mm" },
                        { title: "Spindle Power(100%)", desc: "12.5 HP" }
                    ]}
                />
                <MachineCard
                    image={m6}
                    name={"HIPAT Light Duty Lathe (LM - 09)"}
                    specs={[
                        { title: "Lathe Size", desc: "8 Feet" },
                        { title: "Bed Width", desc: "430 mm" },
                        { title: "Height of Centers", desc: "360 mm" },
                        { title: "Swing Over Bed", desc: "Ø 720 mm" },
                        { title: "Swing Over Carriage", desc: "Ø 600 mm" },
                        { title: "Swing In Gap", desc: "Ø 1100 x 150 mm" },
                        { title: "Distance Between Centers", desc: "1200 mm" },
                        { title: "Bar Passage/Spindle Bore", desc: "Ø 75 mm" },
                        { title: "Tailstock Sleeve Stroke", desc: "200 mm" },
                        { title: "Metric Threads", desc: "45 mm from 1 To 15" },
                        { title: "Inch Threads", desc: "45 tpi from 60 To 2" },
                        { title: "Lead Screw Pitch", desc: "4 tpi" },
                        { title: "No. of Spindle Speeds", desc: "6 mm" },
                        { title: "Motor Power(100%)", desc: "3 kw/hr." }
                    ]}
                />
                <MachineCard
                    image={m7}
                    name={"Batliboi Radial Drill Machine (RD 25) (DM - 04)"}
                    specs={[
                        { title: "Horizontal Movement of Drill Head", desc: "590 mm" },
                        { title: "Taper in spindle", desc: "MT3" },
                        { title: "Drilling in Steel", desc: "25 mm" },
                        { title: "Drilling in Cast Iron", desc: "32 mm" },
                        { title: "Vertical movement of table", desc: "500 mm" },
                        { title: "Horizontal movement of head", desc: "700 mm" },
                        { title: "Max Drilling Radius", desc: "995 mm" },
                        { title: "Min Drilling Radius", desc: "295 mm" },
                        { title: "Speed", desc: "56-2800 rpm" },
                        { title: "Drilling Motor Power(100%)", desc: "1.5 K.W" }
                    ]}
                />
                <MachineCard
                    image={m8}
                    name={"VERTICAL MACHINING CENTER(VMC - 01)"}
                    specs={[
                        { title: "Make", desc: "BFW" },
                        { title: "Table Size", desc: "1250 x 600 mm" },
                        { title: "Table Longitudinal Travel( X-axis)", desc: "1050 mm" },
                        { title: "Table Cross Travel( Y-axis)", desc: "610 mm" },
                        { title: "Headstock Travel( Z-axis)", desc: "610 mm" },
                        { title: "Spindle Nose Face to Table Top", desc: "150-760 mm" },
                        { title: "Spindle Tapper", desc: "BT-50" },
                        { title: "Tool Change System", desc: "Twin Arm" },
                        { title: "T Slot of Bed (No./Size/Pitch)", desc: "5/18/100 mm" },
                        { title: "Max. Load on Table", desc: "1200 Kg" }
                    ]}
                />
                <MachineCard
                    image={m9}
                    name={"Plate Rolling Machine (RM - 01)"}
                    specs={[
                        { title: "Max Plate Thickness", desc: "40 mm" },
                        { title: "Min Inner Diameter", desc: "490 mm" },
                        { title: "Max Width of Plate", desc: "2500 mm" },
                        { title: "Edge Bending Max.", desc: "35 mm" },
                        { title: "Top Roller Diameter", desc: "425 mm" },
                        { title: "Bottom Roller Diameter", desc: "390 mm" },
                        { title: "Maximum H.P. in Use", desc: "20.5 kw/hr." }
                    ]}
                />
                <MachineCard
                    image={m10}
                    name={"COMERIO PLANO MILLER (PM - 01)"}
                    specs={[
                        { title: "Table Size", desc: "3000 mm X 900 mm" },
                        { title: "Table Travel", desc: "3000 mm" },
                        { title: "Milling Heads", desc: "2 Nos" },
                        { title: "Milling Heads Travel", desc: "800 mm" },
                        { title: "Vertical Milling Heads", desc: "1 Nos" },
                        { title: "Horizontal Milling Heads", desc: "1 Nos" },
                        { title: "Motor Power(100%)", desc: "(4+ 7.5 + 2 + 7.5) HP" }
                    ]}
                />
                <MachineCard
                    image={m11}
                    name={"Van Norman 111 Crankshaft Regrinder (GM - 01)"}
                    specs={[
                        { title: "Shaft Diameter", desc: "Ø 610 mm" },
                        { title: "Centers (between headstock and tailstock)", desc: "2130 mm" },
                        { title: "Max. Grinding Wheel Diameter", desc: "Ø 762 mm" },
                        { title: "Max. Grinding Wheel Wide", desc: "50.8 mm" },
                        { title: "Wheel head Motor", desc: "HP5" },
                        { title: "Work Head Spindle Motor", desc: "HP1" },
                        { title: "Table & Cross Slide Traversing Motor", desc: "HP1" },
                        { title: "Spindle Diameter", desc: "4 inches" },
                        { title: "Chuck", desc: "8 inches" },
                        { title: "Motor Power(100%)", desc: "HP (5 + 2)" }
                    ]}
                />
                <MachineCard
                    image={m12}
                    name={"Batliboi Radial Drill Machine (BR 615) (DM - 01)"}
                    specs={[
                        { title: "Arm Length", desc: "1500 mm" },
                        { title: "Column Dia", desc: "384.56 mm" },
                        { title: "Drilling in Steel", desc: "60 mm" },
                        { title: "Drilling in Cast Iron", desc: "75 mm" },
                        { title: "Vertical Traverse of Arm", desc: "700 mm" },
                        { title: "Max Drilling Radius", desc: "1530 mm" },
                        { title: "Min Drilling Radius", desc: "510 mm" },
                        { title: "Speed", desc: "28-1800 rpm" },
                        { title: "Motor Power(100%)", desc: "HP (7.5 + 2 + 0.5)" }
                    ]}
                />
                <MachineCard
                    image={m13}
                    name={"Batliboi Radial Drill Machine (BR 615) (DM - 02)"}
                    specs={[
                        { title: "Arm Length", desc: "1500 mm" },
                        { title: "Column Dia", desc: "384.56 mm" },
                        { title: "Drilling in Steel", desc: "60 mm" },
                        { title: "Drilling in Cast Iron", desc: "75 mm" },
                        { title: "Vertical Traverse of Arm", desc: "700 mm" },
                        { title: "Max Drilling Radius", desc: "1530 mm" },
                        { title: "Min Drilling Radius", desc: "510 mm" },
                        { title: "Speed", desc: "28-1800 rpm" },
                        { title: "Motor Power(100%)", desc: "HP (7.5 + 2 + 0.5)" }
                    ]}
                />
                <MachineCard
                    image={m14}
                    name={"Niles DKZ 2000 VERTICAL TURRET (VTL-02)"}
                    specs={[
                        { title: "Table Diameter", desc: "1800 mm" },
                        { title: "Swing Diameter", desc: "2100 mm" },
                        { title: "Working Height (Under/Ram)", desc: "1250 mm" },
                        { title: "Max Workpiece Weight", desc: "10 MT" },
                        { title: "Cross Rail Adjustment", desc: "1150 mm" },
                        { title: "Distance Face Plate/Tool Carrier", desc: "1325 mm" },
                        { title: "Ram Stroke", desc: "700 mm" },
                        { title: "Motor Power(100%)", desc: "HP (60 + 7.5)" }
                    ]}
                />
                <MachineCard
                    image={m15}
                    name={"VERTICAL TURRET LATHE (VTL-01)"}
                    specs={[
                        { title: "Table Diameter", desc: "1100 mm" },
                        { title: "Max Turning Diameter", desc: "950 mm" },
                        { title: "Vertical Feed", desc: "800 mm" },
                        { title: "Longitudinal Slide Feed (X-axis)", desc: "700 mm" },
                        { title: "Vertical Feed of the Frame with Tool Holder (Z-axis)", desc: "600 mm" },
                        { title: "Frame Feed", desc: "630 mm" },
                        { title: "No. of Tool Opening in Tool Holder", desc: "5 Nos" },
                        { title: "Diameter of the Tool Holder", desc: "60 mm" },
                        { title: "Rapid Feeds", desc: "1880 mm/min" },
                        { title: "Motor Power(100%)", desc: "HP 25" }
                    ]}
                />
                <MachineCard
                    image={m16}
                    name={"TOS WD-130 Horizontal Boring (BM - 04)"}
                    specs={[
                        { title: "Bed Size", desc: "1600 mm x 1800 mm" },
                        { title: "Bed Rotation", desc: "360°" },
                        { title: "Spindle Dia", desc: "130 mm" },
                        { title: "X-axis (Cross Travel)", desc: "3200 mm" },
                        { title: "Y-axis (Vertical Travel)", desc: "2200 mm" },
                        { title: "Z-axis (Sliding Headstock)", desc: "430 mm" },
                        { title: "W-axis (Spindle Travel)", desc: "1200 mm" },
                        { title: "Spindle Taper", desc: "M.T6" },
                        { title: "Motor Power(100%)", desc: "25 HP" }
                    ]}
                />
                <MachineCard
                    image={m17}
                    name={"Bragonzi Creusa 80 Horizontal Boring (BM - 03)"}
                    specs={[
                        { title: "Bed Size", desc: "1160 mm x 950 mm" },
                        { title: "Bed Rotation", desc: "360°" },
                        { title: "Spindle Dia", desc: "80 mm" },
                        { title: "Table Cross Traverse (X axis)", desc: "1500 mm" },
                        { title: "Headstock Vertical Travel (Y axis)", desc: "1250 mm" },
                        { title: "Table Longitudinal Travel (Z axis)", desc: "1500 mm" },
                        { title: "Spindle Taper", desc: "M.T5" },
                        { title: "Spindle Travel (W axis)", desc: "650 mm" },
                        { title: "Motor Power(100%)", desc: "HP 7.5" }
                    ]}
                />
                <MachineCard
                    image={m18}
                    name={"TOS W-100 Horizontal Boring (BM - 02)"}
                    specs={[
                        { title: "Bed Size", desc: "1250 mm x 1250 mm" },
                        { title: "Bed Rotation", desc: "360°" },
                        { title: "Spindle Dia", desc: "100 mm" },
                        { title: "Table Cross Traverse (X axis)", desc: "1600 mm" },
                        { title: "Headstock Vertical Travel (Y axis)", desc: "1150 mm" },
                        { title: "Table Longitudinal Travel (Z axis)", desc: "1250 mm" },
                        { title: "Spindle Taper", desc: "M.T5" },
                        { title: "Spindle Travel (W axis)", desc: "900 mm" },
                        { title: "Motor Power(100%)", desc: "HP 15" }
                    ]}
                />
                <MachineCard
                    image={m19}
                    name={"Wotan B 130 Boring Milling (BM - 01)"}
                    specs={[
                        { title: "Bed Size", desc: "1700 mm x 1520 mm" },
                        { title: "Bed Rotation", desc: "360°" },
                        { title: "Spindle Dia", desc: "130 mm" },
                        { title: "Table Cross Traverse (X axis)", desc: "1985 mm" },
                        { title: "Headstock Vertical Travel (Y axis)", desc: "1620 mm" },
                        { title: "Table Longitudinal Travel (Z axis)", desc: "1330 mm" },
                        { title: "Morse Taper", desc: "MT6" },
                        { title: "Spindle Travel (W axis)", desc: "1100 mm" },
                        { title: "Max. Load", desc: "5000 Kg" }
                    ]}
                />
                <MachineCard
                    image={m20}
                    name={"Pathak Light Duty Lathe (LM - 10)"}
                    specs={[
                        { title: "Lathe Size", desc: "12 Feet" },
                        { title: "Bed Width", desc: "380 mm" },
                        { title: "Height of Centers", desc: "360 mm" },
                        { title: "Swing Over Bed", desc: "Ø720 mm" },
                        { title: "Swing Over Carriage", desc: "Ø600 mm" },
                        { title: "Swing In Gap", desc: "Ø950 x 150 mm" },
                        { title: "Distance Between Centers", desc: "2500 mm" },
                        { title: "Bar Passage/Spindle Bore", desc: "Ø100 mm" },
                        { title: "Tailstock Sleeve Stroke", desc: "200 mm" },
                        { title: "Metric Threads", desc: "45 from 1 To 15 mm" },
                        { title: "Inch Threads", desc: "45 from 60 To 2 tpi" },
                        { title: "Lead Screw Pitch", desc: "4 tpi" },
                        { title: "No. of Spindle Speeds", desc: "6 mm" },
                        { title: "Motor Power(100%)", desc: "HP 5" }
                    ]}
                />
                <MachineCard
                    image={m21}
                    name={"HMT Light Duty Precision Lathe (LM - 07)"}
                    specs={[
                        { title: "Bed Width", desc: "300 mm" },
                        { title: "Height of Centers", desc: "220 mm" },
                        { title: "Swing Over Bed", desc: "Ø 440 mm" },
                        { title: "Swing Over Carriage", desc: "Ø 360 mm" },
                        { title: "Tailstock Sleeve Stroke", desc: "300 mm" },
                        { title: "Bar Passage/Spindle Bore", desc: "Ø 45 mm" },
                        { title: "Distance Between Centers", desc: "3000 mm" },
                        { title: "Spindle Power(100%)", desc: "HP 12.5" }
                    ]}
                />
                <MachineCard
                    image={m22}
                    name={"HMT Heavy Duty Lathe L-45 (LM - 06)"}
                    specs={[
                        { title: "Height of Centers", desc: "450 mm" },
                        { title: "Swing Over Bed", desc: "Ø 900 mm" },
                        { title: "Swing Over Cross Slide", desc: "Ø 570 mm" },
                        { title: "Distance Between Centers", desc: "2000 mm" },
                        { title: "Bar Passage/Spindle Bore", desc: "Ø 110 mm" },
                        { title: "Tailstock Sleeve Stroke", desc: "325 mm" },
                        { title: "Spindle Speeds", desc: "4.5 to 450 rpm" },
                        { title: "Feed Rates (Longitudinal)", desc: "0.1 to 6.4 mm/rev" },
                        { title: "Feed Rates (Cross)", desc: "0.05 to 3.2 mm/rev" },
                        { title: "Spindle Power(100%)", desc: "HP 25" },
                        { title: "Weight Of Job Between Centers (Without Steady)", desc: "3.5 M.T" },
                        { title: "Weight Of Job Between Centers (With Two Steadies)", desc: "5.5 M.T" }
                    ]}
                />
                <MachineCard
                    image={m23}
                    name={"ATLAS Heavy Duty Lathe (LM - 03)"}
                    specs={[
                        { title: "Bed Width", desc: "660 mm" },
                        { title: "Height of Centers", desc: "600 mm" },
                        { title: "Swing Over Bed", desc: "1200 mm" },
                        { title: "Swing Over Carriage", desc: "800 mm" },
                        { title: "Swing Over Cross Slide", desc: "800 mm" },
                        { title: "Swing In Gap", desc: "1800 x 350 mm" },
                        { title: "Distance Between Centers", desc: "8000 mm" },
                        { title: "Bar Passage/Spindle Bore", desc: "105 mm" },
                        { title: "Tailstock Sleeve Stroke", desc: "300 mm" },
                        { title: "Metric Threads", desc: "45 from 1 To 15 mm" },
                        { title: "Inch Threads", desc: "45 from 60 To 2 tpi" },
                        { title: "Lead Screw Pitch", desc: "2 tpi" },
                        { title: "Belt Qty.(C-110)", desc: "3 nos" },
                        { title: "Belt Size", desc: "2846 mm" },
                        { title: "Motor Power(100%)", desc: "HP 10" }
                    ]}
                />
                <MachineCard
                    image={m24}
                    name={"TOS SU 100 Heavy Duty Lathe (LM - 01)"}
                    specs={[
                        { title: "Height of Centers", desc: "530 mm" },
                        { title: "Swing Over Bed", desc: "Ø 1050 mm" },
                        { title: "Swing Over Carriage", desc: "Ø 730 mm" },
                        { title: "Distance Between Centers", desc: "5000 mm" },
                        { title: "Bar Passage/Spindle Bore", desc: "Ø 102 mm" },
                        { title: "Tailstock Sleeve Stroke", desc: "200 mm" },
                        { title: "Spindle Speeds", desc: "2.24 to 450 rpm" },
                        { title: "Feed Rates", desc: "0.08 to 7 mm/min" },
                        { title: "Lead Screw Diameter X Lead", desc: "65 x 12 mm" },
                        { title: "Spindle Power(100%)", desc: "HP 30" },
                        { title: "Weight Of Job Between Centers (Without Steady)", desc: "5 M.T" },
                        { title: "Weight Of Job Between Centers (With Steadies)", desc: "6 M.T" }
                    ]}
                />
                <MachineCard
                    image={m25}
                    name={"TOS SU 100 Heavy Duty Lathe (LM - 02)"}
                    specs={[
                        { title: "Height of Centers", desc: "530 mm" },
                        { title: "Swing Over Bed", desc: "Ø 1050 mm" },
                        { title: "Swing Over Carriage", desc: "Ø 730 mm" },
                        { title: "Distance Between Centers", desc: "5000 mm" },
                        { title: "Bar Passage/Spindle Bore", desc: "Ø 102 mm" },
                        { title: "Tailstock Sleeve Stroke", desc: "200 mm" },
                        { title: "Spindle Speeds", desc: "2.24 to 450 rpm" },
                        { title: "Feed Rates", desc: "0.08 to 7 mm/min" },
                        { title: "Lead Screw Diameter X Lead", desc: "65 x 12 mm" },
                        { title: "Spindle Power(100%)", desc: "HP 30" },
                        { title: "Weight Of Job Between Centers (Without Steady)", desc: "5 M.T" },
                        { title: "Weight Of Job Between Centers (With Steadies)", desc: "6 M.T" }
                    ]}
                />

            </div>
            <div className={`${styles.ManuCap}`}>
                <div className={`${styles.ManuCapintro}`}>
                    <h1 className={`${styles.MainEqpintroh11}`}>Installed</h1>
                    <h1 className={`${styles.MainEqpintroh22}`}>Manufacturing Capacity</h1>
                </div>
                <div className={`${styles.CapCard}`}>
                    <div className={`${styles.CapCard1}`}>
                        <p>General Structural Job (Medium To Heavy) 500 MT</p>
                        <p>Equipment &Technological Structural Work :100 MT</p>
                        <p>Refurbishing Work : As per the requirements.</p>
                    </div>
                    <div className={`${styles.CapCard2}`}>
                        <h1>Spare Capacity Available for TATA Steel</h1>
                        <p>General Structural Job (Medium To Heavy) :150-200 MT</p>
                        <p>Equipment &Technological Structural Work :25-30 MT</p>
                        <p>Refurbishing Work : As per the requirements</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.WorkshopSectionDiv}`}>
                <h1>Our Workshops</h1>
                <div className={`${styles.WorkshopSection}`}>
                    <Link to="/">
                        <motion.div className={`${styles.WorkshopSectionCard1}`}
                            whileTap={{ scale: 0.9 }}>
                            <div><h2>Nalconagar</h2></div>
                            <motion.div
                            className={`${styles.overlay}`}
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className={`${styles.overlayText}`}>
                                <h1>VISIT PAGE</h1>
                                <img src={Visit}></img>
                            </div>
                        </motion.div>
                        </motion.div>

                    </Link>
                    <Link to="/">

                        <motion.div className={`${styles.WorkshopSectionCard2}`}


                            whileTap={{ scale: 0.9 }}>
                            <div className={`${styles.cardContent}`}><h2>Meramandali</h2></div>
                            <motion.div
                                className={`${styles.overlay}`}
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={`${styles.overlayText}`}>
                                    <h1>VISIT PAGE</h1>
                                    <img src={Visit}></img>
                                </div>
                            </motion.div>
                        </motion.div>


                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Manufacturing_Unit;