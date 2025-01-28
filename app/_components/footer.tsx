"use client";
import React from "react";
import styles from "@/styles/_components/footer.module.scss";

interface FooterProps {
    children?: React.ReactNode;
}

export default function Footer({children}: FooterProps): React.ReactElement {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerTop}>
                    <div className={styles.footerDetails}>
                        <div className={styles.orgDetails}>
                            <h2>OA Robotics</h2>
                            <p>Oxford Academy</p>
                            <p>5172 Orange Avenue</p>
                        </div>

                        <div className={styles.footerSocials}>
                        </div>
                    </div>

                    <div className={styles.footerLinks}>
                        <h1>Quick Links</h1>
                        <a href={"/"}>Home</a>
                        <a href={"/about"}>About</a>
                        <a href={"/frc"}>FRC</a>
                        <a href={"/ftc"}>FTC</a>
                        <a href={"/vex"}>VEX</a>
                        <a href={"/contact"}>Contact</a>
                    </div>
                </div>


                <div className={styles.footerBottom}>

                    <div className={styles.footerBottomLinks}>
                        <p>&copy; 2025 OA Robotics</p>
                        <p>Website by <a href="https://github.com/enVId-tech" target="_blank">Erick Tran</a></p>
                    </div>

                </div>
            </div>

            {children}
        </footer>
    );
}