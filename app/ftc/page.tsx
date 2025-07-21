import React from "react";
import { Metadata } from "next";
import styles from "@/app/ftc/ftc.module.scss";
import Navbar from "@/app/_components/navbar/navbar";
import Footer from "@/app/_components/footer/footer";
import img1 from "@/public/images/FTCBanner.jpg";
import Title from "@/app/_components/title/title";
import TeamMembers from "@/app/_components/teamMembers/teamMembers";
import Achievements from "@/app/_components/achievements/achievements";
import Stats from "@/app/_components/stats/stats";
import NewsSection from "@/app/_components/newsSection/newsSection";

export const metadata: Metadata = {
    title: 'FTC Teams 19812 & 23796 - OA Robotics',
    description: 'Oxford Academy FTC Teams 19812 & 23796 - Middle school robotics excellence in FIRST Tech Challenge. Join our competitive teams.',
    keywords: 'FTC Teams 19812 23796, FIRST Tech Challenge, Oxford Academy FTC, Middle School Robotics, FTC Teams'
}

export default async function FTC(): Promise<React.ReactElement> {
    const ftcStats = [
        { id: "1", label: "Regional Championships", value: "5" },
        { id: "2", label: "Tournament Wins", value: "12" },
        { id: "3", label: "Alliance Captain", value: "8x" },
        { id: "4", label: "Design Awards", value: "6" },
        { id: "5", label: "Team Members", value: "35+" },
        { id: "6", label: "Years Active", value: "8" }
    ];

    const ftcAchievements = [
        {
            id: "1",
            title: "Regional Championship Winners",
            description: "Teams 19812 and 23796 have combined for 5 regional championship titles",
            year: "2024",
            type: "FTC" as const,
            award: "Regional Championship"
        },
        {
            id: "2",
            title: "Design Award Recipients", 
            description: "Multiple design awards recognizing innovative engineering solutions",
            year: "2023",
            type: "FTC" as const,
            award: "Design Award"
        },
        {
            id: "3",
            title: "Alliance Captain Selection",
            description: "Consistently selected as alliance captains in elimination rounds",
            year: "2023-2024",
            type: "FTC" as const,
            award: "Alliance Captain"
        },
        {
            id: "4",
            title: "Inspire Award Winners",
            description: "The most prestigious award in FTC, recognizing well-rounded excellence",
            year: "2022",
            type: "FTC" as const,
            award: "Inspire Award"
        }
    ];

    const ftcTeamMembers = [
        {
            id: "1",
            name: "Alex Chen",
            role: "Team Captain - Team 19812",
            image: "/images/team/placeholder.jpg",
            specialties: ["Robot Design", "Strategy", "Leadership"],
            grade: "8th Grade",
            bio: "Passionate about robotics design and team leadership. Leads Team 19812 with focus on innovative engineering solutions.",
            skills: ["Robot Design", "Strategy", "Leadership", "CAD"],
            team: "FTC" as const
        },
        {
            id: "2",
            name: "Sarah Johnson", 
            role: "Programming Lead - Team 23796",
            image: "/images/team/placeholder.jpg",
            specialties: ["Java Programming", "Autonomous", "Vision Processing"],
            grade: "8th Grade",
            bio: "Expert programmer specializing in autonomous routines and computer vision for robot navigation.",
            skills: ["Java Programming", "Autonomous", "Vision Processing", "Android Development"],
            team: "FTC" as const
        },
        {
            id: "3",
            name: "Marcus Rodriguez",
            role: "Mechanical Engineer",
            image: "/images/team/placeholder.jpg", 
            specialties: ["CAD Design", "Manufacturing", "Assembly"],
            grade: "7th Grade",
            bio: "Mechanical engineering specialist focused on precision manufacturing and robot assembly.",
            skills: ["CAD Design", "Manufacturing", "Assembly", "3D Printing"],
            team: "FTC" as const
        },
        {
            id: "4",
            name: "Emma Thompson",
            role: "Electrical Systems",
            image: "/images/team/placeholder.jpg",
            specialties: ["Wiring", "Sensors", "Hardware Integration"],
            grade: "7th Grade",
            bio: "Electrical systems expert ensuring reliable robot operation through proper wiring and sensor integration.",
            skills: ["Wiring", "Sensors", "Hardware Integration", "Troubleshooting"],
            team: "FTC" as const
        }
    ];

    const ftcNews = [
        {
            id: "1",
            title: "FTC Teams Advance to State Championship",
            excerpt: "Both Team 19812 and 23796 have qualified for the state championship after outstanding regional performances...",
            content: "Both Team 19812 and 23796 have qualified for the state championship after outstanding regional performances. The teams demonstrated exceptional autonomous programming and strategic alliance partnerships throughout the qualifying tournaments. This marks the third consecutive year both teams have advanced to state-level competition, showcasing the consistent excellence of Oxford Academy's FTC program.",
            publishDate: "March 15, 2024",
            category: "Competition" as const,
            author: "FTC Coaching Staff",
            tags: ["Championship", "Qualification", "Regional", "Autonomous"]
        },
        {
            id: "2",
            title: "New Robot Design Unveiled for CENTERSTAGE",
            excerpt: "Our teams have completed their robots for the 2023-24 CENTERSTAGE season, featuring innovative pixel placement mechanisms...",
            content: "Our teams have completed their robots for the 2023-24 CENTERSTAGE season, featuring innovative pixel placement mechanisms and advanced climbing systems. The robots incorporate lessons learned from previous seasons, with improved autonomous capabilities and more reliable mechanical systems. Both teams collaborated on design elements while maintaining their unique competitive strategies.",
            publishDate: "November 8, 2023", 
            category: "Achievement" as const,
            author: "Mechanical Team Leads",
            tags: ["Robot Design", "CENTERSTAGE", "Innovation", "Engineering"]
        },
        {
            id: "3",
            title: "Community Outreach Program Launched",
            excerpt: "FTC teams partner with local elementary schools to introduce younger students to STEM through robotics...",
            content: "FTC teams partner with local elementary schools to introduce younger students to STEM through robotics demonstrations and hands-on activities. The program reaches over 200 students monthly, inspiring the next generation of engineers and programmers. Team members serve as mentors and role models, sharing their passion for robotics and problem-solving.",
            publishDate: "October 22, 2023",
            category: "Event" as const,
            author: "Community Relations Team",
            tags: ["Outreach", "STEM", "Education", "Community"]
        }
    ];

    return (
        <div className={styles.ftc}>
            <Navbar isFixed={true}/>
            <Title
                title={"FIRST Tech Challenge"}
                description={"FTC Teams 19812 & 23796"}
                img1={img1}
                bgMoveUp={50}
            />
            
            {/* Team Overview Section */}
            <section className={styles.teamOverview}>
                <div className={styles.container}>
                    <div className={styles.overviewContent}>
                        <div className={styles.overviewText}>
                            <h1>Oxford Academy FTC Teams</h1>
                            <p>
                                Our FIRST Tech Challenge teams, 19812 and 23796, represent the pinnacle of middle school robotics 
                                excellence. These teams compete with robots built entirely by students using the Android-based 
                                control system and FIRST-approved materials.
                            </p>
                            <p>
                                FTC challenges students to design, build, program, and operate robots to compete in a head-to-head 
                                challenge in an alliance format. Our teams have consistently demonstrated innovation, teamwork, 
                                and gracious professionalism throughout their competitive seasons.
                            </p>
                            
                            <div className={styles.highlights}>
                                <div className={styles.highlight}>
                                    <h3>🏆 Competition Excellence</h3>
                                    <p>Multiple regional championships and state-level competition appearances</p>
                                </div>
                                <div className={styles.highlight}>
                                    <h3>🔧 Engineering Innovation</h3>
                                    <p>Award-winning robot designs featuring creative solutions to game challenges</p>
                                </div>
                                <div className={styles.highlight}>
                                    <h3>🤝 Gracious Professionalism</h3>
                                    <p>Commitment to helping other teams and fostering a collaborative environment</p>
                                </div>
                                <div className={styles.highlight}>
                                    <h3>📚 STEM Education</h3>
                                    <p>Hands-on learning in engineering, programming, project management, and teamwork</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.overviewImage}>
                            <img src="/images/robotics/competition_working.jpg" alt="FTC Team in Action" />
                            <p className={styles.imageCaption}>FTC teams collaborating during competition</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Robot Gallery Section */}
            <section className={styles.robotGallery}>
                <div className={styles.container}>
                    <h1>Robot Showcase</h1>
                    <div className={styles.robotGrid}>
                        <div className={styles.robotCard}>
                            <div className={styles.robotImage}>
                                <img src="/images/comp/FRC_1.jpg" alt="2023-24 CENTERSTAGE Robot" />
                            </div>
                            <div className={styles.robotInfo}>
                                <h3>CENTERSTAGE Robot (2023-24)</h3>
                                <p>
                                    Advanced pixel placement system with precise autonomous capabilities. Features innovative 
                                    intake mechanism and reliable climbing system for endgame points.
                                </p>
                                <div className={styles.robotSpecs}>
                                    <span>Pixel Placement</span>
                                    <span>Autonomous Scoring</span>
                                    <span>Climbing System</span>
                                    <span>Vision Processing</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.robotCard}>
                            <div className={styles.robotImage}>
                                <img src="/images/robotics/robotics_working.jpg" alt="2022-23 POWERPLAY Robot" />
                            </div>
                            <div className={styles.robotInfo}>
                                <h3>POWERPLAY Robot (2022-23)</h3>
                                <p>
                                    Cone stacking specialist with four-bar lift system. Dominated regional competitions 
                                    with consistent high-scoring autonomous routines.
                                </p>
                                <div className={styles.robotSpecs}>
                                    <span>Cone Stacking</span>
                                    <span>Four-Bar Lift</span>
                                    <span>Ground Junction</span>
                                    <span>Terminal Cycles</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.robotCard}>
                            <div className={styles.robotImage}>
                                <img src="/images/robotics/marketing_working.jpg" alt="2021-22 FREIGHT FRENZY Robot" />
                            </div>
                            <div className={styles.robotInfo}>
                                <h3>FREIGHT FRENZY Robot (2021-22)</h3>
                                <p>
                                    Carousel spinner and freight transport system. First robot to achieve consistent 
                                    autonomous cycles in our team history.
                                </p>
                                <div className={styles.robotSpecs}>
                                    <span>Carousel Spinner</span>
                                    <span>Freight Transport</span>
                                    <span>Shipping Hub</span>
                                    <span>Duck Delivery</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Structure Section */}
            <section className={styles.teamStructure}>
                <div className={styles.container}>
                    <h1>Team Organization</h1>
                    <div className={styles.subteamsGrid}>
                        <div className={styles.subteam}>
                            <div className={styles.subteamIcon}>🔧</div>
                            <h3>Mechanical Engineering</h3>
                            <p>Design and build the robot chassis, drive train, and game-specific mechanisms using CAD software and precision manufacturing techniques.</p>
                            <div className={styles.subteamSkills}>
                                <span>SolidWorks</span>
                                <span>3D Printing</span>
                                <span>Aluminum Fabrication</span>
                                <span>Assembly</span>
                            </div>
                        </div>
                        
                        <div className={styles.subteam}>
                            <div className={styles.subteamIcon}>💻</div>
                            <h3>Programming</h3>
                            <p>Develop autonomous routines, teleop controls, and sensor integration using Java and the FTC SDK for Android-based robot control.</p>
                            <div className={styles.subteamSkills}>
                                <span>Java</span>
                                <span>Android Studio</span>
                                <span>OpenCV</span>
                                <span>PID Control</span>
                            </div>
                        </div>
                        
                        <div className={styles.subteam}>
                            <div className={styles.subteamIcon}>⚡</div>
                            <h3>Electrical Systems</h3>
                            <p>Handle wiring, sensor placement, and electrical troubleshooting to ensure reliable robot operation throughout competitions.</p>
                            <div className={styles.subteamSkills}>
                                <span>REV Hardware</span>
                                <span>Sensor Integration</span>
                                <span>Wiring Management</span>
                                <span>Troubleshooting</span>
                            </div>
                        </div>
                        
                        <div className={styles.subteam}>
                            <div className={styles.subteamIcon}>📊</div>
                            <h3>Strategy & Scouting</h3>
                            <p>Analyze game strategy, scout other teams, and coordinate alliance selections to maximize competitive performance.</p>
                            <div className={styles.subteamSkills}>
                                <span>Data Analysis</span>
                                <span>Alliance Strategy</span>
                                <span>Match Scouting</span>
                                <span>Competition Planning</span>
                            </div>
                        </div>
                        
                        <div className={styles.subteam}>
                            <div className={styles.subteamIcon}>🎨</div>
                            <h3>Marketing & Outreach</h3>
                            <p>Promote the team, create presentation materials, and engage with the community to spread STEM awareness.</p>
                            <div className={styles.subteamSkills}>
                                <span>Social Media</span>
                                <span>Presentations</span>
                                <span>Community Events</span>
                                <span>Team Branding</span>
                            </div>
                        </div>
                        
                        <div className={styles.subteam}>
                            <div className={styles.subteamIcon}>📝</div>
                            <h3>Engineering Notebook</h3>
                            <p>Document the engineering design process, team progress, and competition experiences for awards consideration.</p>
                            <div className={styles.subteamSkills}>
                                <span>Technical Writing</span>
                                <span>Design Documentation</span>
                                <span>Photo Documentation</span>
                                <span>Awards Submission</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Competition Schedule Section */}
            <section className={styles.competitionSchedule}>
                <div className={styles.container}>
                    <h1>2024 Season Schedule</h1>
                    <div className={styles.scheduleGrid}>
                        <div className={styles.eventCard}>
                            <div className={styles.eventDate}>
                                <div className={styles.month}>Dec</div>
                                <div className={styles.day}>9</div>
                            </div>
                            <div className={styles.eventInfo}>
                                <h3>League Tournament #1</h3>
                                <p>First qualifying tournament of the season featuring both teams competing for ranking points.</p>
                                <div className={styles.eventLocation}>📍 Local High School, Cypress CA</div>
                            </div>
                        </div>
                        
                        <div className={styles.eventCard}>
                            <div className={styles.eventDate}>
                                <div className={styles.month}>Jan</div>
                                <div className={styles.day}>13</div>
                            </div>
                            <div className={styles.eventInfo}>
                                <h3>League Tournament #2</h3>
                                <p>Second qualifying event with improved robots and refined autonomous programs.</p>
                                <div className={styles.eventLocation}>📍 Oxford Academy, Cypress CA</div>
                            </div>
                        </div>
                        
                        <div className={styles.eventCard}>
                            <div className={styles.eventDate}>
                                <div className={styles.month}>Feb</div>
                                <div className={styles.day}>3</div>
                            </div>
                            <div className={styles.eventInfo}>
                                <h3>League Tournament #3</h3>
                                <p>Final league tournament before championship qualifier selection.</p>
                                <div className={styles.eventLocation}>📍 Competitor School, Orange County CA</div>
                            </div>
                        </div>
                        
                        <div className={styles.eventCard}>
                            <div className={styles.eventDate}>
                                <div className={styles.month}>Feb</div>
                                <div className={styles.day}>24</div>
                            </div>
                            <div className={styles.eventInfo}>
                                <h3>Regional Championship</h3>
                                <p>Championship tournament with top teams from across the region competing for state advancement.</p>
                                <div className={styles.eventLocation}>📍 Regional Venue, Orange County CA</div>
                            </div>
                        </div>
                        
                        <div className={styles.eventCard}>
                            <div className={styles.eventDate}>
                                <div className={styles.month}>Mar</div>
                                <div className={styles.day}>16</div>
                            </div>
                            <div className={styles.eventInfo}>
                                <h3>State Championship</h3>
                                <p>California State FTC Championship featuring the best teams from across the state.</p>
                                <div className={styles.eventLocation}>📍 State Venue, California</div>
                            </div>
                        </div>
                        
                        <div className={styles.eventCard}>
                            <div className={styles.eventDate}>
                                <div className={styles.month}>Apr</div>
                                <div className={styles.day}>20</div>
                            </div>
                            <div className={styles.eventInfo}>
                                <h3>FIRST World Championship</h3>
                                <p>Ultimate competition bringing together the world&apos;s best FTC teams.</p>
                                <div className={styles.eventLocation}>📍 Houston, Texas</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Stats stats={ftcStats} />
            <Achievements achievements={ftcAchievements} />
            <TeamMembers members={ftcTeamMembers} />
            <NewsSection articles={ftcNews} />
            <Footer/>
        </div>
    )
}