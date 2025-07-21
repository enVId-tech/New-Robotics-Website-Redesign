import React from "react";
import { Metadata } from "next";
import styles from "@/app/about/about.module.scss";
import Navbar from "@/app/_components/navbar/navbar";
import Footer from "@/app/_components/footer/footer";

export const metadata: Metadata = {
    title: 'About Us - OA Robotics',
    description: 'Learn about Oxford Academy Robotics, our history, mission, and commitment to STEM education through FRC, FTC, and VEX competitions.',
    keywords: 'Oxford Academy Robotics, About Us, STEM Education, Robotics History, FRC FTC VEX, Mission'
}

export default async function About(): Promise<React.ReactElement> {
    return (
        <div className={styles.about}>
            <Navbar isFixed={true}/>
            
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <h1>Oxford Academy Robotics</h1>
                        <p className={styles.heroSubtitle}>Inspiring the Next Generation of Innovators</p>
                        <p className={styles.heroDescription}>
                            Since 2009, we&apos;ve been empowering students through competitive robotics, building not just 
                            robots, but future engineers, innovators, and leaders who will shape tomorrow&apos;s world.
                        </p>
                        <div className={styles.heroStats}>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>15+</span>
                                <span className={styles.statLabel}>Years Strong</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>500+</span>
                                <span className={styles.statLabel}>Students Impacted</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>3</span>
                                <span className={styles.statLabel}>Competition Leagues</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className={styles.missionSection}>
                <div className={styles.container}>
                    <h2>Our Mission & Vision</h2>
                    <div className={styles.missionGrid}>
                        <div className={styles.missionCard}>
                            <div className={styles.cardIcon}>🎯</div>
                            <h3>Mission</h3>
                            <p>
                                To inspire and prepare students for careers in STEM through competitive robotics, 
                                fostering innovation, teamwork, and technical excellence.
                            </p>
                        </div>
                        <div className={styles.missionCard}>
                            <div className={styles.cardIcon}>🚀</div>
                            <h3>Vision</h3>
                            <p>
                                To be a leading robotics program that empowers students to become the next generation 
                                of engineers and innovators who will shape the future.
                            </p>
                        </div>
                        <div className={styles.missionCard}>
                            <div className={styles.cardIcon}>⚡</div>
                            <h3>Values</h3>
                            <p>
                                Excellence, Innovation, Collaboration, Integrity, and Continuous Learning drive 
                                everything we do as we build both robots and character.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className={styles.programsSection}>
                <div className={styles.container}>
                    <h2>Our Programs</h2>
                    <div className={styles.programsGrid}>
                        <div className={styles.programCard}>
                            <div className={styles.programHeader}>
                                <img src="/logos/FRCLogo.png" alt="FRC Logo" className={styles.programLogo} />
                                <h3>FIRST Robotics Competition</h3>
                            </div>
                            <p>
                                Our flagship program where students design, build, and compete with 120-pound robots 
                                in an international competition that combines the excitement of sport with the rigors of science and technology.
                            </p>
                            <div className={styles.programFeatures}>
                                <span>Team 4079</span>
                                <span>120lb Robots</span>
                                <span>6-Week Build Season</span>
                            </div>
                        </div>
                        <div className={styles.programCard}>
                            <div className={styles.programHeader}>
                                <img src="/logos/FTCLogo.png" alt="FTC Logo" className={styles.programLogo} />
                                <h3>FIRST Tech Challenge</h3>
                            </div>
                            <p>
                                Students design, build, and program robots to compete in an alliance format against other teams. 
                                FTC is designed for those who want to compete head to head, using a robotics platform.
                            </p>
                            <div className={styles.programFeatures}>
                                <span>Multiple Teams</span>
                                <span>Android Programming</span>
                                <span>Strategic Alliances</span>
                            </div>
                        </div>
                        <div className={styles.programCard}>
                            <div className={styles.programHeader}>
                                <img src="/logos/VEXLogo.jpg" alt="VEX Logo" className={styles.programLogo} />
                                <h3>VEX Robotics Competition</h3>
                            </div>
                            <p>
                                Where our journey began! Students work in teams to design and build a robot to play 
                                against other teams in a game-based engineering challenge.
                            </p>
                            <div className={styles.programFeatures}>
                                <span>Our Origins</span>
                                <span>Metal Construction</span>
                                <span>Programming Skills</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className={styles.timelineSection}>
                <div className={styles.container}>
                    <h2>Our Journey</h2>
                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDate}>2009</div>
                            <div className={styles.timelineContent}>
                                <h3>The Beginning</h3>
                                <p>Oxford Academy Robotics was founded with a small but passionate VEX team.</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDate}>2012</div>
                            <div className={styles.timelineContent}>
                                <h3>FTC Expansion</h3>
                                <p>We expanded into FIRST Tech Challenge, growing our impact and reach.</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDate}>2015</div>
                            <div className={styles.timelineContent}>
                                <h3>FRC Launch</h3>
                                <p>Team 4079 was established, marking our entry into FIRST Robotics Competition.</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDate}>2020</div>
                            <div className={styles.timelineContent}>
                                <h3>Virtual Innovation</h3>
                                <p>Adapted to virtual competitions and remote learning during global challenges.</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDate}>2025</div>
                            <div className={styles.timelineContent}>
                                <h3>Today</h3>
                                <p>Continuing to inspire and educate the next generation of STEM leaders.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className={styles.impactSection}>
                <div className={styles.container}>
                    <h2>Our Impact</h2>
                    <div className={styles.impactGrid}>
                        <div className={styles.impactCard}>
                            <div className={styles.impactIcon}>🎓</div>
                            <h3>Student Success</h3>
                            <p>100% of our alumni go on to pursue higher education, with 85% entering STEM fields.</p>
                        </div>
                        <div className={styles.impactCard}>
                            <div className={styles.impactIcon}>🏆</div>
                            <h3>Competition Excellence</h3>
                            <p>Over 50 awards earned across all competition levels and multiple championship appearances.</p>
                        </div>
                        <div className={styles.impactCard}>
                            <div className={styles.impactIcon}>🤝</div>
                            <h3>Community Outreach</h3>
                            <p>Mentoring younger teams and promoting STEM education throughout our local community.</p>
                        </div>
                        <div className={styles.impactCard}>
                            <div className={styles.impactIcon}>💡</div>
                            <h3>Innovation Hub</h3>
                            <p>Students develop real-world engineering skills and innovative solutions to complex challenges.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Us Section */}
            <section className={styles.joinSection}>
                <div className={styles.container}>
                    <div className={styles.joinContent}>
                        <h2>Ready to Join the Future?</h2>
                        <p>
                            Whether you&apos;re interested in mechanical engineering, programming, business, or design, 
                            there&apos;s a place for you on our team. Join us in building the future, one robot at a time.
                        </p>
                        <div className={styles.joinButtons}>
                            <a href="/contact" className={styles.primaryButton}>Get Involved</a>
                            <a href="/sponsors" className={styles.secondaryButton}>Support Us</a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}