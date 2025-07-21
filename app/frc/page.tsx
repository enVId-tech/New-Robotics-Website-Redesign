import React from "react";
import { Metadata } from "next";
import styles from "@/app/frc/frc.module.scss";
import Navbar from "@/app/_components/navbar/navbar";
import Footer from "@/app/_components/footer/footer";
import Title from "@/app/_components/title/title";
import img1 from "@/public/images/FRCBanner.jpg";
import TeamMembers from "@/app/_components/teamMembers/teamMembers";
import Achievements from "@/app/_components/achievements/achievements";
import NewsSection from "@/app/_components/newsSection/newsSection";
import Stats from "@/app/_components/stats/stats";

export const metadata: Metadata = {
    title: 'FRC Team 4079 - OA Robotics',
    description: 'Oxford Academy FRC Team 4079 - High school robotics excellence in FIRST Robotics Competition. Join our award-winning team.',
    keywords: 'FRC Team 4079, FIRST Robotics Competition, Oxford Academy FRC, High School Robotics, FRC Team'
}

export default async function FRC(): Promise<React.ReactElement> {
    // FRC-specific achievements
    const frcAchievements = [
        {
            id: '1',
            title: 'Regional Champions',
            description: 'Team 4079 achieved first place at the Los Angeles Regional Competition, demonstrating exceptional robot performance and strategic play.',
            year: '2024',
            type: 'FRC' as const,
            award: '1st Place - Los Angeles Regional',
            image: '/images/comp/FRC_1.jpg'
        },
        {
            id: '6',
            title: 'Engineering Excellence Award',
            description: 'Recognized for outstanding robot design, comprehensive technical documentation, and innovative engineering solutions.',
            year: '2024',
            type: 'FRC' as const,
            award: 'Engineering Excellence Award'
        },
        {
            id: '7',
            title: 'Autonomous Programming Award',
            description: 'Outstanding autonomous programming performance with complex sensor integration and precision movement.',
            year: '2023',
            type: 'FRC' as const,
            award: 'Autonomous Programming Excellence'
        },
        {
            id: '8',
            title: 'Gracious Professionalism Award',
            description: 'Exemplifying FIRST values through exceptional sportsmanship and support of other teams.',
            year: '2023',
            type: 'FRC' as const,
            award: 'Gracious Professionalism'
        }
    ];

    // FRC-specific news articles
    const frcNews = [
        {
            id: 'frc1',
            title: 'FRC Team 4079 Advances to World Championship',
            excerpt: 'After winning the Los Angeles Regional, our FRC team has earned a spot at the FIRST Championship in Houston.',
            content: 'Full article content...',
            author: 'Sarah Johnson',
            publishDate: '2024-04-15',
            category: 'Achievement' as const,
            image: '/images/comp/FRC_1.jpg',
            tags: ['FRC', 'Championship', 'Worlds']
        },
        {
            id: 'frc2',
            title: '2024 Robot Reveal: Meet "Quantum Surge"',
            excerpt: 'Introducing our 2024 competition robot featuring innovative climbing mechanisms and precision shooting.',
            content: 'Full article content...',
            author: 'Alex Chen',
            publishDate: '2024-02-20',
            category: 'General' as const,
            tags: ['Robot', 'Design', '2024']
        },
        {
            id: 'frc3',
            title: 'Rookie Mentor Program Success',
            excerpt: 'Our experienced FRC members successfully mentored 3 new rookie teams this season.',
            content: 'Full article content...',
            author: 'Maria Rodriguez',
            publishDate: '2024-01-30',
            category: 'Event' as const,
            tags: ['Mentoring', 'Outreach', 'Rookie']
        }
    ];

    // FRC-specific stats
    const frcStats = [
        {
            id: '1',
            label: 'Years Competing',
            value: '12+',
            description: 'Since 2012',
            icon: '🏆'
        },
        {
            id: '2',
            label: 'Team Members',
            value: '25',
            description: 'Active FRC students',
            icon: '👥'
        },
        {
            id: '3',
            label: 'Competitions',
            value: '35+',
            description: 'Participated in',
            icon: '🤖'
        },
        {
            id: '4',
            label: 'Regional Awards',
            value: '15+',
            description: 'Earned to date',
            icon: '🥇'
        }
    ];

    return (
        <div id={`${styles.frc}`}>
            <Navbar/>
            <Title
                title={"FIRST Robotics Competition"}
                description={"Team 4079 - Quantum Leap: Engineering Excellence Since 2012"}
                img1={img1}
                bgMoveUp={70}
            />

            {/* Team Overview Section */}
            <section className={styles.teamOverview}>
                <div className={styles.container}>
                    <div className={styles.overviewContent}>
                        <div className={styles.overviewText}>
                            <h1>About Team 4079 &ldquo;Quantum Leap&rdquo;</h1>
                            <p>
                                Team 4079, also known as &ldquo;Quantum Leap&rdquo;, represents Oxford Academy&apos;s flagship robotics program 
                                in the FIRST Robotics Competition. Founded in 2012, our team has grown from a small group of 
                                passionate students into one of Southern California&apos;s most respected FRC teams.
                            </p>
                            <p>
                                We compete annually in the FIRST Robotics Competition, where teams have six weeks to design, 
                                build, and program industrial-sized robots weighing up to 125 pounds. Our robots must complete 
                                complex tasks in a fast-paced alliance-based competition format.
                            </p>
                            <div className={styles.highlights}>
                                <div className={styles.highlight}>
                                    <h3>🎯 Our Mission</h3>
                                    <p>To inspire students to pursue STEM careers while building innovative robots and fostering gracious professionalism.</p>
                                </div>
                                <div className={styles.highlight}>
                                    <h3>⚙️ What We Do</h3>
                                    <p>Design and build competition robots, mentor younger teams, and engage in community STEM outreach programs.</p>
                                </div>
                                <div className={styles.highlight}>
                                    <h3>🏆 Our Values</h3>
                                    <p>Excellence in engineering, collaborative teamwork, gracious professionalism, and continuous learning.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.overviewImage}>
                            <img src="/images/robotics/robotics_working.jpg" alt="FRC Team 4079 working on robot" />
                            <div className={styles.imageCaption}>
                                Team 4079 members working on our 2024 competition robot
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Statistics */}
            <Stats 
                stats={frcStats}
                title="FRC Team 4079 by the Numbers" 
            />

            {/* Robot Gallery Section */}
            <section className={styles.robotGallery}>
                <div className={styles.container}>
                    <h1>Our Competition Robots</h1>
                    <div className={styles.robotGrid}>
                        <div className={styles.robotCard}>
                            <div className={styles.robotImage}>
                                <img src="/images/comp/FRC_1.jpg" alt="2024 Robot - Quantum Surge" />
                            </div>
                            <div className={styles.robotInfo}>
                                <h3>2024 - &ldquo;Quantum Surge&rdquo;</h3>
                                <p>Featured innovative climbing mechanism and precision note shooting for the CRESCENDO game.</p>
                                <div className={styles.robotSpecs}>
                                    <span>Weight: 120 lbs</span>
                                    <span>Height: 4&apos;8&rdquo;</span>
                                    <span>Programming: Java</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.robotCard}>
                            <div className={styles.robotImage}>
                                <img src="/images/robotics/competition_working.jpg" alt="2023 Robot" />
                            </div>
                            <div className={styles.robotInfo}>
                                <h3>2023 - &ldquo;Charge Forward&rdquo;</h3>
                                <p>Designed for CHARGED UP with advanced autonomous balancing and cone/cube manipulation.</p>
                                <div className={styles.robotSpecs}>
                                    <span>Weight: 118 lbs</span>
                                    <span>Height: 4&apos;6&rdquo;</span>
                                    <span>Programming: Java</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.robotCard}>
                            <div className={styles.robotImage}>
                                <img src="/images/robotics/marketing_working.jpg" alt="2022 Robot" />
                            </div>
                            <div className={styles.robotInfo}>
                                <h3>2022 - &ldquo;Rapid React&rdquo;</h3>
                                <p>Built for RAPID REACT with high-speed ball shooting and climbing capabilities.</p>
                                <div className={styles.robotSpecs}>
                                    <span>Weight: 115 lbs</span>
                                    <span>Height: 4&apos;10&rdquo;</span>
                                    <span>Programming: Java</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Structure Section */}
            <section className={styles.teamStructure}>
                <div className={styles.container}>
                    <h1>Team Structure & Subteams</h1>
                    <div className={styles.subteamsGrid}>
                        <div className={styles.subteam}>
                            <div className={styles.subteamIcon}>⚙️</div>
                            <h3>Mechanical Team</h3>
                            <p>Designs and builds the physical robot structure, mechanisms, and moving parts using CAD software and manufacturing tools.</p>
                            <div className={styles.subteamSkills}>
                                <span>SolidWorks</span>
                                <span>Machining</span>
                                <span>3D Printing</span>
                                <span>Fabrication</span>
                            </div>
                        </div>

                        <div className={styles.subteam}>
                            <div className={styles.subteamIcon}>💻</div>
                            <h3>Programming Team</h3>
                            <p>Develops robot control software, autonomous routines, and driver assistance systems using Java and advanced algorithms.</p>
                            <div className={styles.subteamSkills}>
                                <span>Java</span>
                                <span>Git/GitHub</span>
                                <span>Sensors</span>
                                <span>Computer Vision</span>
                            </div>
                        </div>

                        <div className={styles.subteam}>
                            <div className={styles.subteamIcon}>🔌</div>
                            <h3>Electrical Team</h3>
                            <p>Handles robot wiring, control systems, sensor integration, and ensures reliable electrical connections.</p>
                            <div className={styles.subteamSkills}>
                                <span>Circuit Design</span>
                                <span>Wiring</span>
                                <span>Sensors</span>
                                <span>Troubleshooting</span>
                            </div>
                        </div>

                        <div className={styles.subteam}>
                            <div className={styles.subteamIcon}>📊</div>
                            <h3>Strategy & Scouting</h3>
                            <p>Analyzes competition data, develops match strategies, and coordinates alliance selections at competitions.</p>
                            <div className={styles.subteamSkills}>
                                <span>Data Analysis</span>
                                <span>Statistics</span>
                                <span>Strategy</span>
                                <span>Scouting Apps</span>
                            </div>
                        </div>

                        <div className={styles.subteam}>
                            <div className={styles.subteamIcon}>📢</div>
                            <h3>Media & Outreach</h3>
                            <p>Manages team branding, documentation, social media, and community engagement initiatives.</p>
                            <div className={styles.subteamSkills}>
                                <span>Photography</span>
                                <span>Social Media</span>
                                <span>Public Speaking</span>
                                <span>Documentation</span>
                            </div>
                        </div>

                        <div className={styles.subteam}>
                            <div className={styles.subteamIcon}>💰</div>
                            <h3>Business Team</h3>
                            <p>Handles team finances, sponsor relations, fundraising, and ensures team sustainability.</p>
                            <div className={styles.subteamSkills}>
                                <span>Fundraising</span>
                                <span>Sponsorship</span>
                                <span>Budgeting</span>
                                <span>Presentations</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Members */}
            <TeamMembers 
                showFilter={false}
                title="Meet Our FRC Team"
            />

            {/* News Section */}
            <NewsSection 
                articles={frcNews}
                title="Latest FRC Updates"
                showAll={false}
                maxArticles={3}
            />

            {/* Achievements */}
            <Achievements 
                achievements={frcAchievements}
                title="FRC Team 4079 Achievements"
            />

            {/* Competition Schedule */}
            <section className={styles.competitionSchedule}>
                <div className={styles.container}>
                    <h1>2024-2025 Competition Schedule</h1>
                    <div className={styles.scheduleGrid}>
                        <div className={styles.eventCard}>
                            <div className={styles.eventDate}>
                                <div className={styles.month}>JAN</div>
                                <div className={styles.day}>06</div>
                            </div>
                            <div className={styles.eventInfo}>
                                <h3>Kickoff & Game Release</h3>
                                <p>Official game reveal and 6-week build season begins</p>
                                <div className={styles.eventLocation}>Virtual Broadcast</div>
                            </div>
                        </div>

                        <div className={styles.eventCard}>
                            <div className={styles.eventDate}>
                                <div className={styles.month}>FEB</div>
                                <div className={styles.day}>18</div>
                            </div>
                            <div className={styles.eventInfo}>
                                <h3>Stop Build Day</h3>
                                <p>End of build season, robot must be sealed for competition</p>
                                <div className={styles.eventLocation}>Team Workshop</div>
                            </div>
                        </div>

                        <div className={styles.eventCard}>
                            <div className={styles.eventDate}>
                                <div className={styles.month}>MAR</div>
                                <div className={styles.day}>15-17</div>
                            </div>
                            <div className={styles.eventInfo}>
                                <h3>Los Angeles Regional</h3>
                                <p>Our primary regional competition</p>
                                <div className={styles.eventLocation}>El Segundo, CA</div>
                            </div>
                        </div>

                        <div className={styles.eventCard}>
                            <div className={styles.eventDate}>
                                <div className={styles.month}>APR</div>
                                <div className={styles.day}>17-20</div>
                            </div>
                            <div className={styles.eventInfo}>
                                <h3>FIRST Championship</h3>
                                <p>World championship competition (qualification required)</p>
                                <div className={styles.eventLocation}>Houston, TX</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}