import React from "react";
import { Metadata } from "next";
import styles from "@/app/vex/vex.module.scss";
import Navbar from "@/app/_components/navbar/navbar";
import Footer from "@/app/_components/footer/footer";
import Title from "@/app/_components/title/title";
import TeamMembers from "@/app/_components/teamMembers/teamMembers";
import Achievements from "@/app/_components/achievements/achievements";
import Stats from "@/app/_components/stats/stats";
import NewsSection from "@/app/_components/newsSection/newsSection";

export const metadata: Metadata = {
    title: 'VEX Teams 1108A & 1108B - OA Robotics',
    description: 'Oxford Academy VEX Teams 1108A & 1108B - High school robotics competition excellence. Join our award-winning VEX teams.',
    keywords: 'VEX Teams 1108A 1108B, VEX Robotics Competition, Oxford Academy VEX, High School Robotics, VEX Teams'
}

export default async function Vex(): Promise<React.ReactElement> {
    const vexStats = [
        { id: "1", label: "Tournament Wins", value: "18" },
        { id: "2", label: "Skills Championships", value: "4" },
        { id: "3", label: "Excellence Awards", value: "7" },
        { id: "4", label: "Design Awards", value: "9" },
        { id: "5", label: "Team Members", value: "24" },
        { id: "6", label: "Qualification Rank", value: "#2" }
    ];

    const vexAchievements = [
        {
            id: "1",
            title: "State Skills Championship",
            description: "Team 1108A achieved the highest programming and driver skills scores in the state",
            year: "2024",
            type: "VEX" as const,
            award: "Skills Champion"
        },
        {
            id: "2",
            title: "Excellence Award Winner",
            description: "Multiple Excellence Awards recognizing overall team performance and robot design",
            year: "2023-2024",
            type: "VEX" as const,
            award: "Excellence Award"
        },
        {
            id: "3",
            title: "World Championship Qualifier",
            description: "Both teams qualified for VEX World Championship in Dallas, Texas",
            year: "2023",
            type: "VEX" as const,
            award: "World Qualifier"
        },
        {
            id: "4",
            title: "Design Award Recipients",
            description: "Recognition for innovative engineering design and build quality",
            year: "2022-2024",
            type: "VEX" as const,
            award: "Design Award"
        }
    ];

    const vexTeamMembers = [
        {
            id: "1",
            name: "Ryan Park",
            role: "Team Captain - Team 1108A",
            image: "/images/team/placeholder.jpg",
            specialties: ["Robot Design", "Strategy", "Programming"],
            grade: "12th Grade",
            bio: "Senior team captain with expertise in robot design and competition strategy. Leads Team 1108A through complex engineering challenges.",
            skills: ["C++", "Robot Design", "Strategy", "Leadership"],
            team: "VEX" as const
        },
        {
            id: "2",
            name: "Jessica Liu",
            role: "Programming Lead - Team 1108B",
            image: "/images/team/placeholder.jpg",
            specialties: ["C++ Programming", "Autonomous Routines", "Sensor Integration"],
            grade: "11th Grade",
            bio: "Expert programmer specializing in complex autonomous routines and PID control systems for precise robot movement.",
            skills: ["C++", "PID Control", "Autonomous Programming", "Sensor Integration"],
            team: "VEX" as const
        },
        {
            id: "3",
            name: "David Kim",
            role: "Mechanical Lead",
            image: "/images/team/placeholder.jpg",
            specialties: ["CAD Design", "Mechanism Engineering", "Build Quality"],
            grade: "11th Grade", 
            bio: "Mechanical engineering specialist focused on innovative mechanism design and precision manufacturing.",
            skills: ["Inventor", "Mechanism Design", "Fabrication", "Assembly"],
            team: "VEX" as const
        },
        {
            id: "4",
            name: "Sophie Chen",
            role: "Strategy Coordinator",
            image: "/images/team/placeholder.jpg",
            specialties: ["Game Analysis", "Alliance Selection", "Match Strategy"],
            grade: "10th Grade",
            bio: "Strategic mastermind responsible for game analysis, scouting data collection, and optimal alliance strategies.",
            skills: ["Game Analysis", "Data Collection", "Strategy", "Communication"],
            team: "VEX" as const
        }
    ];

    const vexNews = [
        {
            id: "1",
            title: "VEX Teams Dominate Regional Skills Challenge",
            excerpt: "Both Team 1108A and 1108B finished top 3 in programming and driver skills at the regional competition...",
            content: "Both Team 1108A and 1108B finished top 3 in programming and driver skills at the regional competition, showcasing months of practice and refinement. Team 1108A achieved a perfect autonomous score of 70 points, while 1108B demonstrated exceptional driver control with precise game piece manipulation. This performance positions both teams well for upcoming qualification tournaments.",
            publishDate: "February 28, 2024",
            category: "Competition" as const,
            author: "VEX Coaching Team",
            tags: ["Skills Challenge", "Regional", "Programming", "Driver Skills"]
        },
        {
            id: "2",
            title: "Innovative Flywheel Design Sets New Standard",
            excerpt: "Team 1108A's double flywheel system achieves unprecedented accuracy in disc launching...",
            content: "Team 1108A's double flywheel system achieves unprecedented accuracy in disc launching, revolutionizing their scoring capabilities for the current season. The design features dual motors with independent PID control, allowing for variable spin rates and trajectory adjustments. This innovation has been shared with other teams as part of gracious professionalism.",
            publishDate: "January 12, 2024",
            category: "Achievement" as const,
            author: "Mechanical Engineering Team",
            tags: ["Innovation", "Flywheel", "Engineering", "Design"]
        },
        {
            id: "3",
            title: "VEX Robotics Workshop for Middle School Students",
            excerpt: "High school VEX teams mentor middle school students in introductory robotics and programming concepts...",
            content: "High school VEX teams mentor middle school students in introductory robotics and programming concepts through hands-on workshops. The program introduces younger students to C++ programming, basic robot construction, and problem-solving methodologies. Over 50 middle school students have participated in the program this year, with several expressing interest in joining the high school team.",
            publishDate: "December 3, 2023",
            category: "Event" as const,
            author: "Student Mentors",
            tags: ["Outreach", "Education", "Mentoring", "Middle School"]
        }
    ];

    return (
        <div className={styles.vex}>
            <Navbar />
            <Title
                title={"VEX Robotics Competition"}
                description={"VEX Teams 1108A & 1108B"}
                bgMoveUp={5}
            />
            
            {/* Team Overview Section */}
            <section className={styles.teamOverview}>
                <div className={styles.container}>
                    <div className={styles.overviewContent}>
                        <div className={styles.overviewText}>
                            <h1>Oxford Academy VEX Teams</h1>
                            <p>
                                Our VEX Robotics Competition teams, 1108A and 1108B, represent the cutting edge of high school 
                                robotics engineering. These teams design and build robots using the VEX platform to compete 
                                in challenging game scenarios that test autonomous programming, precise control, and strategic thinking.
                            </p>
                            <p>
                                VEX teams work with metal construction systems and advanced programming environments to create 
                                sophisticated robots capable of complex tasks. Our teams have consistently excelled in both 
                                robot skills challenges and alliance-based tournament competitions.
                            </p>
                            
                            <div className={styles.highlights}>
                                <div className={styles.highlight}>
                                    <h3>🎯 Skills Excellence</h3>
                                    <p>State champions in programming and driver skills competitions</p>
                                </div>
                                <div className={styles.highlight}>
                                    <h3>🏗️ Advanced Engineering</h3>
                                    <p>Innovative mechanical designs pushing the limits of VEX components</p>
                                </div>
                                <div className={styles.highlight}>
                                    <h3>💻 Programming Mastery</h3>
                                    <p>Complex autonomous routines using C++ and advanced PID control</p>
                                </div>
                                <div className={styles.highlight}>
                                    <h3>🌟 Competition Success</h3>
                                    <p>Multiple tournament wins and World Championship qualifications</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.overviewImage}>
                            <img src="/images/robotics/group.jpeg" alt="VEX Team Working" />
                            <p className={styles.imageCaption}>VEX teams collaborating on robot design</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Robot Gallery Section */}
            <section className={styles.robotGallery}>
                <div className={styles.container}>
                    <h1>Robot Evolution</h1>
                    <div className={styles.robotGrid}>
                        <div className={styles.robotCard}>
                            <div className={styles.robotImage}>
                                <img src="/images/comp/FRC_1.jpg" alt="2023-24 Over Under Robot" />
                            </div>
                            <div className={styles.robotInfo}>
                                <h3>Over Under Robot (2023-24)</h3>
                                <p>
                                    Advanced catapult system with precise trajectory control for triball scoring. 
                                    Features innovative intake mechanism and reliable elevation system.
                                </p>
                                <div className={styles.robotSpecs}>
                                    <span>Catapult Launch</span>
                                    <span>Triball Intake</span>
                                    <span>Elevation System</span>
                                    <span>Autonomous Scoring</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.robotCard}>
                            <div className={styles.robotImage}>
                                <img src="/images/robotics/robotics_working.jpg" alt="2022-23 Spin Up Robot" />
                            </div>
                            <div className={styles.robotInfo}>
                                <h3>Spin Up Robot (2022-23)</h3>
                                <p>
                                    Dual flywheel system optimized for disc launching with variable velocity control. 
                                    Championship-winning design with exceptional accuracy and speed.
                                </p>
                                <div className={styles.robotSpecs}>
                                    <span>Dual Flywheel</span>
                                    <span>Disc Launcher</span>
                                    <span>Roller Spinner</span>
                                    <span>Expansion Wings</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.robotCard}>
                            <div className={styles.robotImage}>
                                <img src="/images/robotics/marketing_working.jpg" alt="2021-22 Tipping Point Robot" />
                            </div>
                            <div className={styles.robotInfo}>
                                <h3>Tipping Point Robot (2021-22)</h3>
                                <p>
                                    Mobile goal specialist with four-bar lift system and ring scoring capabilities. 
                                    First design to achieve consistent autonomous goal navigation.
                                </p>
                                <div className={styles.robotSpecs}>
                                    <span>Mobile Goal Lift</span>
                                    <span>Ring Scoring</span>
                                    <span>Four-Bar System</span>
                                    <span>Platform Balance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Structure Section */}
            <section className={styles.teamStructure}>
                <div className={styles.container}>
                    <h1>Team Specializations</h1>
                    <div className={styles.subteamsGrid}>
                        <div className={styles.subteam}>
                            <div className={styles.subteamIcon}>🔧</div>
                            <h3>Mechanical Design</h3>
                            <p>Engineer and fabricate robot mechanisms using VEX metal components, focusing on durability, precision, and competitive performance.</p>
                            <div className={styles.subteamSkills}>
                                <span>Autodesk Inventor</span>
                                <span>Metal Fabrication</span>
                                <span>Mechanism Design</span>
                                <span>Assembly</span>
                            </div>
                        </div>
                        
                        <div className={styles.subteam}>
                            <div className={styles.subteamIcon}>💻</div>
                            <h3>Programming</h3>
                            <p>Develop autonomous routines and teleop control systems using C++ and VEXcode Pro for optimal robot performance.</p>
                            <div className={styles.subteamSkills}>
                                <span>C++</span>
                                <span>VEXcode Pro</span>
                                <span>PID Control</span>
                                <span>Autonomous Programming</span>
                            </div>
                        </div>
                        
                        <div className={styles.subteam}>
                            <div className={styles.subteamIcon}>📊</div>
                            <h3>Skills Challenge</h3>
                            <p>Specialize in programming and driver skills competitions, optimizing robot performance for maximum scoring potential.</p>
                            <div className={styles.subteamSkills}>
                                <span>Skills Programming</span>
                                <span>Driver Training</span>
                                <span>Score Optimization</span>
                                <span>Route Planning</span>
                            </div>
                        </div>
                        
                        <div className={styles.subteam}>
                            <div className={styles.subteamIcon}>⚙️</div>
                            <h3>Build Quality</h3>
                            <p>Ensure structural integrity, reliability, and maintenance of robot systems throughout the competitive season.</p>
                            <div className={styles.subteamSkills}>
                                <span>Quality Control</span>
                                <span>System Testing</span>
                                <span>Maintenance</span>
                                <span>Troubleshooting</span>
                            </div>
                        </div>
                        
                        <div className={styles.subteam}>
                            <div className={styles.subteamIcon}>🎯</div>
                            <h3>Strategy & Scouting</h3>
                            <p>Analyze game mechanics, develop competitive strategies, and coordinate alliance selections for tournament success.</p>
                            <div className={styles.subteamSkills}>
                                <span>Game Analysis</span>
                                <span>Match Strategy</span>
                                <span>Alliance Selection</span>
                                <span>Data Analysis</span>
                            </div>
                        </div>
                        
                        <div className={styles.subteam}>
                            <div className={styles.subteamIcon}>📝</div>
                            <h3>Documentation</h3>
                            <p>Maintain engineering notebooks, document design processes, and prepare award submissions for competitions.</p>
                            <div className={styles.subteamSkills}>
                                <span>Engineering Notebook</span>
                                <span>Design Documentation</span>
                                <span>Award Preparation</span>
                                <span>Process Recording</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Competition Schedule Section */}
            <section className={styles.competitionSchedule}>
                <div className={styles.container}>
                    <h1>2024 Competition Season</h1>
                    <div className={styles.scheduleGrid}>
                        <div className={styles.eventCard}>
                            <div className={styles.eventDate}>
                                <div className={styles.month}>Nov</div>
                                <div className={styles.day}>18</div>
                            </div>
                            <div className={styles.eventInfo}>
                                <h3>Season Opener Tournament</h3>
                                <p>First tournament of the Over Under season featuring preliminary alliance competitions.</p>
                                <div className={styles.eventLocation}>📍 Local High School, Orange County CA</div>
                            </div>
                        </div>
                        
                        <div className={styles.eventCard}>
                            <div className={styles.eventDate}>
                                <div className={styles.month}>Dec</div>
                                <div className={styles.day}>16</div>
                            </div>
                            <div className={styles.eventInfo}>
                                <h3>Holiday Tournament</h3>
                                <p>Mid-season tournament with refined robots and advanced autonomous programming.</p>
                                <div className={styles.eventLocation}>📍 Oxford Academy, Cypress CA</div>
                            </div>
                        </div>
                        
                        <div className={styles.eventCard}>
                            <div className={styles.eventDate}>
                                <div className={styles.month}>Jan</div>
                                <div className={styles.day}>20</div>
                            </div>
                            <div className={styles.eventInfo}>
                                <h3>Skills Challenge Championship</h3>
                                <p>Regional skills competition featuring programming and driver skills challenges.</p>
                                <div className={styles.eventLocation}>📍 Skills Venue, Southern California</div>
                            </div>
                        </div>
                        
                        <div className={styles.eventCard}>
                            <div className={styles.eventDate}>
                                <div className={styles.month}>Feb</div>
                                <div className={styles.day}>17</div>
                            </div>
                            <div className={styles.eventInfo}>
                                <h3>Regional Championship</h3>
                                <p>High-stakes regional competition with top teams vying for state advancement.</p>
                                <div className={styles.eventLocation}>📍 Regional Center, Orange County CA</div>
                            </div>
                        </div>
                        
                        <div className={styles.eventCard}>
                            <div className={styles.eventDate}>
                                <div className={styles.month}>Mar</div>
                                <div className={styles.day}>23</div>
                            </div>
                            <div className={styles.eventInfo}>
                                <h3>State Championship</h3>
                                <p>California State VEX Championship with qualification opportunities for Worlds.</p>
                                <div className={styles.eventLocation}>📍 State Venue, California</div>
                            </div>
                        </div>
                        
                        <div className={styles.eventCard}>
                            <div className={styles.eventDate}>
                                <div className={styles.month}>May</div>
                                <div className={styles.day}>8</div>
                            </div>
                            <div className={styles.eventInfo}>
                                <h3>VEX World Championship</h3>
                                <p>Ultimate global competition featuring the world&apos;s best VEX teams.</p>
                                <div className={styles.eventLocation}>📍 Dallas, Texas</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Stats stats={vexStats} />
            <Achievements achievements={vexAchievements} />
            <TeamMembers members={vexTeamMembers} />
            <NewsSection articles={vexNews} />
            <Footer />
        </div>
    )
};