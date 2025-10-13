import React from "react";
import styles from "@/app/_components/footer/footer.module.scss";
import {TW_600} from "@/utils/globalFonts";
import { getServerContent } from "@/utils/content";

type FooterProps = {
    children?: React.ReactNode;
}

export default async function Footer({children}: FooterProps): Promise<React.ReactElement> {
    const content = await getServerContent();
    
    // Fallback to defaults if CMS content not available
    const footerData = content?.footer || {
        branding: {
            logo: "/logos/OARoboticsLogo_24-25.webp",
            logoAlt: "OA Robotics Logo",
            organizationName: "OA Robotics",
            teamName: "Quantum Leap",
            schoolName: "Oxford Academy"
        },
        contact: {
            address: "5172 Orange Avenue",
            addressLine2: "Cypress, CA 90630"
        },
        quickLinks: [],
        social: [],
        legal: {
            copyright: "© 2025 OA Robotics. All rights reserved."
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerTop}>
                    <div className={styles.footerDetails}>
                        <div className={`${styles.orgDetails} ${TW_600}`}>
                            <h2>
                                <img src={footerData.branding.logo} alt={footerData.branding.logoAlt}/>
                                {footerData.branding.organizationName}
                            </h2>
                            <p>{footerData.branding.teamName}</p>
                            <p>{footerData.branding.schoolName}</p>
                            <p>{footerData.contact.address}</p>
                            {footerData.contact.addressLine2 && <p>{footerData.contact.addressLine2}</p>}
                        </div>

                        <div className={styles.footerSocials}>
                        </div>
                    </div>

                    <div className={`${styles.footerLinks} ${TW_600}`}>
                        <h1>Quick Links</h1>
                        {footerData.quickLinks.map((link, index) => (
                            <a key={index} href={link.href}>{link.name}</a>
                        ))}
                    </div>

                    <div className={`${styles.footerLinks} ${TW_600}`}>
                        <h1>Our Socials</h1>
                        {footerData.social.map((social, index) => (
                            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                                {social.platform}
                            </a>
                        ))}
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <div className={`${styles.footerBottomLinks} ${TW_600}`}>
                        <p>{footerData.legal.copyright}</p>
                        {footerData.legal.websiteDeveloper && (
                            <p>{footerData.legal.websiteDeveloper}</p>
                        )}
                        {footerData.legal.betaNotice && (
                            <p>{footerData.legal.betaNotice}</p>
                        )}
                    </div>
                </div>
            </div>

            {children}
        </footer>
    );
}