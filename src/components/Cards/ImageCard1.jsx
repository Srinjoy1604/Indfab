import React, { useState } from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion";
import styles from "./ImageCard1.module.css";

function ImageCard1({ image, desc }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <motion.div className={styles.CardMain}
                initial={{ y: "50%", opacity: 0, scale: 0.5 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={handleOpen}
            >
                <div className={styles.CardImage}>
                    <img src={image} alt="card" />
                </div>
                <div className={styles.CardDesc}>
                    <p>{desc}</p>
                </div>
            </motion.div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        width: '80vw',
                        height: '80vh',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        outline: 'none',
                        overflow: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <IconButton
                        onClick={handleClose}
                        sx={{ position: 'absolute', top: 8, right: 8, zIndex: 1 }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <img src={image} alt="modal" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </Box>
            </Modal>
        </div>
    );
}

export default ImageCard1;
