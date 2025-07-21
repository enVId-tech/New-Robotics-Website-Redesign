import React from "react";
import { Metadata } from "next";
import styles from '@/app/sponsors/sponsors.module.scss';
import Navbar from "@/app/_components/navbar/navbar";
import Title from "@/app/_components/title/title";
import Footer from "@/app/_components/footer/footer";
import ContactForm from "@/app/_components/contactForm/contactForm";
import {sponsors} from "@/utils/sponsors";

export const metadata: Metadata = {
    title: 'Our Sponsors - OA Robotics',
    description: 'Meet our amazing sponsors who support Oxford Academy Robotics. Explore partnership opportunities and learn how sponsors help our STEM programs.',
    keywords: 'sponsors, partnerships, support, funding, STEM education, robotics sponsors, corporate partners'
}

export default async function Sponsor(): Promise<React.ReactElement> {
    return (
        <div className={styles.sponsors}>
            <Navbar isFixed={true}/>
            <Title 
                title={"Our Amazing Sponsors"} 
                description={"Partnerships that power innovation"}
                bgMoveUp={30}
            />
            
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <h1>Building the Future Together</h1>
                        <p>
                            Our sponsors are more than funders—they are partners in our mission to inspire the next 
                            generation of innovators, engineers, and problem-solvers. Through their generous support, 
                            we can provide world-class robotics education and compete at the highest levels.
                        </p>
                        <div className={styles.impactStats}>
                            <div className={styles.stat}>
                                <h3>$50K+</h3>
                                <p>Annual Support</p>
                            </div>
                            <div className={styles.stat}>
                                <h3>15+</h3>
                                <p>Corporate Partners</p>
                            </div>
                            <div className={styles.stat}>
                                <h3>200+</h3>
                                <p>Students Impacted</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Sponsors */}
            <section className={styles.currentSponsors}>
                <div className={styles.container}>
                    <h1>Our Current Sponsors</h1>
                    <p className={styles.sponsorIntro}>
                        We&apos;re grateful to partner with these incredible organizations who share our commitment to STEM education and innovation.
                    </p>
                    <div className={styles.sponsorTiers}>
                        <div className={styles.tier}>
                            <h2 className={styles.tierTitle}>Title Sponsors</h2>
                            <div className={styles.sponsorGrid}>
                                <div className={styles.sponsorCard}>
                                    <div className={styles.sponsorLogo}>
                                        <img src="/logos/sponsors/gene-haas-foundation.png" alt="Gene Haas Foundation" />
                                    </div>
                                    <div className={styles.sponsorInfo}>
                                        <h3>Gene Haas Foundation</h3>
                                        <p>Leading supporter of STEM education and workforce development</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.tier}>
                            <h2 className={styles.tierTitle}>Gold Sponsors</h2>
                            <div className={styles.sponsorGrid}>
                                <div className={styles.sponsorCard}>
                                    <div className={styles.sponsorLogo}>
                                        <img src="/logos/sponsors/nasa.png" alt="NASA" />
                                    </div>
                                    <div className={styles.sponsorInfo}>
                                        <h3>NASA</h3>
                                        <p>Inspiring space exploration and STEM innovation</p>
                                    </div>
                                </div>
                                <div className={styles.sponsorCard}>
                                    <div className={styles.sponsorLogo}>
                                        <img src="/logos/sponsors/disney.png" alt="Disney" />
                                    </div>
                                    <div className={styles.sponsorInfo}>
                                        <h3>Disney</h3>
                                        <p>Creating magical learning experiences</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.tier}>
                            <h2 className={styles.tierTitle}>Silver Sponsors</h2>
                            <div className={styles.sponsorGrid}>
                                <div className={styles.sponsorCard}>
                                    <div className={styles.sponsorLogo}>
                                        <img src="/logos/sponsors/solidworks.png" alt="SolidWorks" />
                                    </div>
                                    <div className={styles.sponsorInfo}>
                                        <h3>SolidWorks</h3>
                                        <p>Professional CAD software for design innovation</p>
                                    </div>
                                </div>
                                <div className={styles.sponsorCard}>
                                    <div className={styles.sponsorLogo}>
                                        <img src="/logos/sponsors/jpl.png" alt="JPL" />
                                    </div>
                                    <div className={styles.sponsorInfo}>
                                        <h3>JPL</h3>
                                        <p>Advancing space exploration and technology</p>
                                    </div>
                                </div>
                                <div className={styles.sponsorCard}>
                                    <div className={styles.sponsorLogo}>
                                        <img src="/logos/sponsors/emerson.png" alt="Emerson" />
                                    </div>
                                    <div className={styles.sponsorInfo}>
                                        <h3>Emerson</h3>
                                        <p>Engineering solutions for a better world</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How Sponsors Help */}
            <section className={styles.howSponsorsHelp}>
                <div className={styles.container}>
                    <h1>How Our Sponsors Make a Difference</h1>
                    <div className={styles.helpGrid}>
                        <div className={styles.helpCard}>
                            <div className={styles.helpIcon}>🔧</div>
                            <h3>Equipment & Materials</h3>
                            <p>
                                Sponsors provide cutting-edge tools, raw materials, and manufacturing resources 
                                that enable us to build competitive robots and prototype innovative solutions.
                            </p>
                        </div>
                        <div className={styles.helpCard}>
                            <div className={styles.helpIcon}>🎯</div>
                            <h3>Competition Funding</h3>
                            <p>
                                Travel expenses, registration fees, and competition costs are covered by our 
                                generous sponsors, allowing us to compete at regional and national levels.
                            </p>
                        </div>
                        <div className={styles.helpCard}>
                            <div className={styles.helpIcon}>👨‍🔬</div>
                            <h3>Mentorship & Expertise</h3>
                            <p>
                                Industry professionals from sponsor companies provide invaluable mentorship, 
                                sharing real-world engineering experience with our students.
                            </p>
                        </div>
                        <div className={styles.helpCard}>
                            <div className={styles.helpIcon}>💡</div>
                            <h3>Educational Resources</h3>
                            <p>
                                Sponsors provide access to professional software, online learning platforms, 
                                and educational workshops that enhance our curriculum.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sponsorship Opportunities */}
            <section className={styles.sponsorshipOpportunities}>
                <div className={styles.container}>
                    <div className={styles.opportunityContent}>
                        <div className={styles.opportunityText}>
                            <h1>Partner With Us</h1>
                            <p>
                                Join our mission to inspire the next generation of innovators. Your support directly 
                                impacts student learning and helps build tomorrow&apos;s engineering workforce.
                            </p>
                            
                            <div className={styles.benefitsList}>
                                <h3>Partnership Benefits:</h3>
                                <ul>
                                    <li>Brand visibility at competitions and events</li>
                                    <li>Access to talented student interns</li>
                                    <li>Corporate social responsibility impact</li>
                                    <li>Networking with other industry leaders</li>
                                    <li>Tax-deductible charitable contribution</li>
                                </ul>
                            </div>
                            
                            <div className={styles.sponsorshipTiers}>
                                <h3>Sponsorship Levels:</h3>
                                <div className={styles.tierList}>
                                    <div className={styles.tierOption}>
                                        <span className={styles.tierAmount}>$10,000+</span>
                                        <span className={styles.tierLevel}>Title Sponsor</span>
                                    </div>
                                    <div className={styles.tierOption}>
                                        <span className={styles.tierAmount}>$5,000+</span>
                                        <span className={styles.tierLevel}>Gold Sponsor</span>
                                    </div>
                                    <div className={styles.tierOption}>
                                        <span className={styles.tierAmount}>$2,500+</span>
                                        <span className={styles.tierLevel}>Silver Sponsor</span>
                                    </div>
                                    <div className={styles.tierOption}>
                                        <span className={styles.tierAmount}>$1,000+</span>
                                        <span className={styles.tierLevel}>Bronze Sponsor</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.opportunityImage}>
                            <div className={styles.imageCard}>
                                <img src="/images/robotics/group.jpeg" alt="Team collaboration" />
                                <div className={styles.imageCaption}>
                                    <h4>Your support in action</h4>
                                    <p>See how sponsorship directly impacts student learning and competition success</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className={styles.contactSection}>
                <div className={styles.container}>
                    <div className={styles.contactContent}>
                        <div className={styles.contactInfo}>
                            <h1>Ready to Partner?</h1>
                            <p>
                                Contact us to discuss sponsorship opportunities and learn more about how your 
                                organization can support our mission.
                            </p>
                            <div className={styles.contactDetails}>
                                <div className={styles.contactItem}>
                                    <strong>Email:</strong> sponsors@oarobotics.com
                                </div>
                                <div className={styles.contactItem}>
                                    <strong>Phone:</strong> (714) 220-4055
                                </div>
                                <div className={styles.contactItem}>
                                    <strong>Address:</strong> 5172 Orange Ave, Cypress, CA 90630
                                </div>
                            </div>
                        </div>
                        <div className={styles.formContainer}>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer/>
        </div>
    )
}