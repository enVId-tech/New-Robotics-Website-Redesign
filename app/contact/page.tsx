import React from "react";
import { Metadata } from "next";
import styles from "@/app/contact/contact.module.scss";
import Navbar from "@/app/_components/navbar/navbar";
import Footer from "@/app/_components/footer/footer";
import Title from "@/app/_components/title/title";
import ContactForm from "@/app/_components/contactForm/contactForm";

export const metadata: Metadata = {
    title: 'Contact Us - OA Robotics',
    description: 'Get in touch with Oxford Academy Robotics. Join our teams, explore sponsorship opportunities, or request educational demonstrations.',
    keywords: 'Oxford Academy Robotics Contact, Join Robotics Team, Robotics Sponsorship, STEM Education'
}

export default async function Contact(): Promise<React.ReactElement> {
    return (
        <div className={styles.contact}>
            <Navbar />
            <Title 
                title={"Get Connected"} 
                description={"Join our robotics community or reach out to learn more about our programs"}
                bgMoveUp={30}
            />
            
            {/* Contact Hero Section */}
            <section className={styles.contactHero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroText}>
                            <h1>Connect With Oxford Academy Robotics</h1>
                            <p>
                                Whether you&apos;re a prospective student, interested sponsor, community member, or fellow robotics 
                                enthusiast, we&apos;d love to hear from you. Our teams are always excited to share our passion 
                                for STEM education and competitive robotics.
                            </p>
                            <div className={styles.contactHighlights}>
                                <div className={styles.highlight}>
                                    <div className={styles.highlightIcon}>👥</div>
                                    <h3>Join Our Teams</h3>
                                    <p>Interested students can apply to join our FRC, FTC, or VEX robotics teams</p>
                                </div>
                                <div className={styles.highlight}>
                                    <div className={styles.highlightIcon}>🤝</div>
                                    <h3>Partnership Opportunities</h3>
                                    <p>Explore sponsorship and mentorship opportunities with our organization</p>
                                </div>
                                <div className={styles.highlight}>
                                    <div className={styles.highlightIcon}>🎓</div>
                                    <h3>Educational Outreach</h3>
                                    <p>Request demonstrations and workshops for your school or organization</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.heroStats}>
                            <div className={styles.statCard}>
                                <h3>150+</h3>
                                <p>Active Members</p>
                            </div>
                            <div className={styles.statCard}>
                                <h3>8</h3>
                                <p>Competition Teams</p>
                            </div>
                            <div className={styles.statCard}>
                                <h3>50+</h3>
                                <p>Awards Won</p>
                            </div>
                            <div className={styles.statCard}>
                                <h3>24/7</h3>
                                <p>Support Available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Methods Section */}
            <section className={styles.contactMethods}>
                <div className={styles.container}>
                    <h2>How To Reach Us</h2>
                    <div className={styles.methodsGrid}>
                        <div className={styles.methodCard}>
                            <div className={styles.methodIcon}>📧</div>
                            <h3>Email Us</h3>
                            <p>For general inquiries and information</p>
                            <a href="mailto:contact@oarobotics.org" className={styles.methodLink}>
                                contact@oarobotics.org
                            </a>
                        </div>
                        
                        <div className={styles.methodCard}>
                            <div className={styles.methodIcon}>📞</div>
                            <h3>Call or Text</h3>
                            <p>Speak directly with our coaching staff</p>
                            <a href="tel:+15628601902" className={styles.methodLink}>
                                (562) 860-1902
                            </a>
                        </div>
                        
                        <div className={styles.methodCard}>
                            <div className={styles.methodIcon}>📍</div>
                            <h3>Visit Our Lab</h3>
                            <p>Located on the Oxford Academy campus</p>
                            <div className={styles.methodLink}>
                                5172 Orange Ave<br />
                                Cypress, CA 90630
                            </div>
                        </div>
                        
                        <div className={styles.methodCard}>
                            <div className={styles.methodIcon}>💬</div>
                            <h3>Social Media</h3>
                            <p>Follow us for updates and announcements</p>
                            <div className={styles.socialLinks}>
                                <a href="#" className={styles.socialLink}>Instagram</a>
                                <a href="#" className={styles.socialLink}>Twitter</a>
                                <a href="#" className={styles.socialLink}>YouTube</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className={styles.formSection}>
                <div className={styles.container}>
                    <div className={styles.formWrapper}>
                        <div className={styles.formHeader}>
                            <h2>Send Us A Message</h2>
                            <p>
                                Have a specific question or inquiry? Fill out the form below and we&apos;ll get back to you 
                                within 24 hours. Please be as detailed as possible to help us provide the best response.
                            </p>
                        </div>
                        <ContactForm 
                            title=""
                            subtitle=""
                        />
                    </div>
                </div>
            </section>

            {/* Team-Specific Contacts */}
            <section className={styles.teamContacts}>
                <div className={styles.container}>
                    <h2>Team-Specific Contacts</h2>
                    <div className={styles.teamGrid}>
                        <div className={styles.teamCard}>
                            <div className={styles.teamHeader}>
                                <img src="/public/logos/FRCLogo.png" alt="FRC Logo" className={styles.teamLogo} />
                                <div>
                                    <h3>FRC Team 4079</h3>
                                    <p>High School Robotics</p>
                                </div>
                            </div>
                            <div className={styles.teamInfo}>
                                <p>For questions about joining our FIRST Robotics Competition team or sponsorship opportunities.</p>
                                <a href="mailto:frc4079@oarobotics.org" className={styles.teamEmail}>
                                    frc4079@oarobotics.org
                                </a>
                                <div className={styles.teamDetails}>
                                    <span>📅 Meeting: Tuesdays & Thursdays 3:30-6:00 PM</span>
                                    <span>👥 Ages: 14-18 years old</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.teamCard}>
                            <div className={styles.teamHeader}>
                                <img src="/public/logos/FTCLogo.png" alt="FTC Logo" className={styles.teamLogo} />
                                <div>
                                    <h3>FTC Teams 19812 & 23796</h3>
                                    <p>Middle School Robotics</p>
                                </div>
                            </div>
                            <div className={styles.teamInfo}>
                                <p>Interested in joining our FIRST Tech Challenge teams? Contact us for tryout information.</p>
                                <a href="mailto:ftc@oarobotics.org" className={styles.teamEmail}>
                                    ftc@oarobotics.org
                                </a>
                                <div className={styles.teamDetails}>
                                    <span>📅 Meeting: Mondays & Wednesdays 3:00-5:30 PM</span>
                                    <span>👥 Ages: 12-15 years old</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.teamCard}>
                            <div className={styles.teamHeader}>
                                <img src="/public/logos/VEXLogo.jpg" alt="VEX Logo" className={styles.teamLogo} />
                                <div>
                                    <h3>VEX Teams 1108A & 1108B</h3>
                                    <p>Competitive Robotics</p>
                                </div>
                            </div>
                            <div className={styles.teamInfo}>
                                <p>Join our VEX Robotics Competition teams for advanced engineering and programming challenges.</p>
                                <a href="mailto:vex@oarobotics.org" className={styles.teamEmail}>
                                    vex@oarobotics.org
                                </a>
                                <div className={styles.teamDetails}>
                                    <span>📅 Meeting: Daily 3:15-6:00 PM</span>
                                    <span>👥 Ages: 15-18 years old</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visit Us Section */}
            <section className={styles.visitUs}>
                <div className={styles.container}>
                    <div className={styles.visitContent}>
                        <div className={styles.visitText}>
                            <h2>Visit Our Robotics Lab</h2>
                            <p>
                                Our state-of-the-art robotics lab is located on the Oxford Academy campus in Cypress, California. 
                                We welcome visitors during our regular meeting times and can arrange special tours for groups 
                                interested in learning more about our programs.
                            </p>
                            <div className={styles.visitDetails}>
                                <div className={styles.visitItem}>
                                    <strong>Address:</strong>
                                    <span>5172 Orange Ave, Cypress, CA 90630</span>
                                </div>
                                <div className={styles.visitItem}>
                                    <strong>Lab Hours:</strong>
                                    <span>Monday-Friday: 3:00 PM - 6:30 PM</span>
                                </div>
                                <div className={styles.visitItem}>
                                    <strong>Weekend Sessions:</strong>
                                    <span>Saturdays: 9:00 AM - 4:00 PM (Competition Season)</span>
                                </div>
                                <div className={styles.visitItem}>
                                    <strong>Summer Programs:</strong>
                                    <span>June-August: 10:00 AM - 3:00 PM</span>
                                </div>
                            </div>
                            <div className={styles.visitActions}>
                                <button className={styles.scheduleButton}>Schedule a Tour</button>
                                <a href="https://goo.gl/maps/example" className={styles.directionsLink}>
                                    Get Directions
                                </a>
                            </div>
                        </div>
                        <div className={styles.visitMap}>
                            <div className={styles.mapPlaceholder}>
                                <div className={styles.mapIcon}>🗺️</div>
                                <p>Interactive Campus Map</p>
                                <span>Click for detailed directions</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Section */}
            <section className={styles.supportSection}>
                <div className={styles.container}>
                    <div className={styles.supportContent}>
                        <h2>Support Our Mission</h2>
                        <p>
                            Oxford Academy Robotics relies on the generosity of sponsors, mentors, and community supporters 
                            to provide world-class STEM education opportunities for our students.
                        </p>
                        <div className={styles.supportOptions}>
                            <div className={styles.supportCard}>
                                <h3>💰 Financial Sponsorship</h3>
                                <p>Help fund robot parts, competition fees, and travel expenses</p>
                                <a href="/sponsors" className={styles.supportLink}>Learn More</a>
                            </div>
                            <div className={styles.supportCard}>
                                <h3>🏭 In-Kind Donations</h3>
                                <p>Donate materials, equipment, or manufacturing services</p>
                                <a href="mailto:sponsors@oarobotics.org" className={styles.supportLink}>Contact Us</a>
                            </div>
                            <div className={styles.supportCard}>
                                <h3>👨‍🏫 Mentorship</h3>
                                <p>Share your expertise as a volunteer mentor or judge</p>
                                <a href="mailto:mentors@oarobotics.org" className={styles.supportLink}>Volunteer</a>
                            </div>
                            <div className={styles.supportCard}>
                                <h3>🏆 Competition Support</h3>
                                <p>Help with event logistics, transportation, and coordination</p>
                                <a href="mailto:events@oarobotics.org" className={styles.supportLink}>Get Involved</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}