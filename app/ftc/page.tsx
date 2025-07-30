import React from "react";
import { Metadata } from "next";
import img1 from "../../public/images/robotics/ftcbg_main.jpg";
import TeamMembers from "../_components/teamMembers/teamMembers";
import Achievements from "../_components/achievements/achievements";
import NewsSection from "../_components/newsSection/newsSection";
import Stats from "../_components/stats/stats";
import TeamPageLayout from "../_components/teamPageLayout/teamPageLayout";
import TeamOverviewSection from "../_components/teamOverviewSection/teamOverviewSection";
import RobotGallery from "../_components/robotGallery/robotGallery";
import TeamStructure from "../_components/teamStructure/teamStructure";
import CompetitionSchedule from "../_components/competitionSchedule/competitionSchedule";

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
            name: "Erick Tran", 
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
            name: "Erick Tran",
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
            name: "Erick Tran",
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

    // Team overview data
    const teamOverviewData = {
        teamName: 'Oxford Academy FTC Teams',
        teamDescription: [
            'Our FIRST Tech Challenge teams, 19812 and 23796, represent the pinnacle of middle school robotics excellence. These teams compete with robots built entirely by students using the Android-based control system and FIRST-approved materials.',
            'FTC challenges students to design, build, program, and operate robots to compete in a head-to-head challenge in an alliance format. Our teams have consistently demonstrated innovation, teamwork, and gracious professionalism throughout their competitive seasons.'
        ],
        highlights: [
            {
                icon: '🏆',
                title: 'Competition Excellence',
                description: 'Multiple regional championships and state-level competition appearances'
            },
            {
                icon: '🔧',
                title: 'Engineering Innovation',
                description: 'Award-winning robot designs featuring creative solutions to game challenges'
            },
            {
                icon: '🤝',
                title: 'Gracious Professionalism',
                description: 'Commitment to helping other teams and fostering a collaborative environment'
            },
            {
                icon: '📚',
                title: 'STEM Education',
                description: 'Hands-on learning in engineering, programming, project management, and teamwork'
            }
        ],
        image: '/images/robotics/competition_working.jpg',
        imageCaption: 'FTC teams collaborating during competition'
    };

    // Robot gallery data
    const robots = [
        {
            name: 'CENTERSTAGE Robot',
            year: '2023-24',
            description: 'Advanced pixel placement system with precise autonomous capabilities. Features innovative intake mechanism and reliable climbing system for endgame points.',
            image: '/images/comp/FRC_1.jpg',
            specs: ['Pixel Placement', 'Autonomous Scoring', 'Climbing System', 'Vision Processing']
        },
        {
            name: 'POWERPLAY Robot',
            year: '2022-23',
            description: 'Cone stacking specialist with four-bar lift system. Dominated regional competitions with consistent high-scoring autonomous routines.',
            image: '/images/robotics/robotics_working.jpg',
            specs: ['Cone Stacking', 'Four-Bar Lift', 'Ground Junction', 'Terminal Cycles']
        },
        {
            name: 'FREIGHT FRENZY Robot',
            year: '2021-22',
            description: 'Carousel spinner and freight transport system. First robot to achieve consistent autonomous cycles in our team history.',
            image: '/images/robotics/marketing_working.jpg',
            specs: ['Carousel Spinner', 'Freight Transport', 'Shipping Hub', 'Duck Delivery']
        }
    ];

    // Team structure data
    const subteams = [
        {
            icon: '🔧',
            name: 'Mechanical Engineering',
            description: 'Design and build the robot chassis, drive train, and game-specific mechanisms using CAD software and precision manufacturing techniques.',
            skills: ['SolidWorks', '3D Printing', 'Aluminum Fabrication', 'Assembly']
        },
        {
            icon: '💻',
            name: 'Programming',
            description: 'Develop autonomous routines, teleop controls, and sensor integration using Java and the FTC SDK for Android-based robot control.',
            skills: ['Java', 'Android Studio', 'OpenCV', 'PID Control']
        },
        {
            icon: '⚡',
            name: 'Electrical Systems',
            description: 'Handle wiring, sensor placement, and electrical troubleshooting to ensure reliable robot operation throughout competitions.',
            skills: ['REV Hardware', 'Sensor Integration', 'Wiring Management', 'Troubleshooting']
        },
        {
            icon: '📊',
            name: 'Strategy & Scouting',
            description: 'Analyze game strategy, scout other teams, and coordinate alliance selections to maximize competitive performance.',
            skills: ['Data Analysis', 'Alliance Strategy', 'Match Scouting', 'Competition Planning']
        },
        {
            icon: '🎨',
            name: 'Marketing & Outreach',
            description: 'Promote the team, create presentation materials, and engage with the community to spread STEM awareness.',
            skills: ['Social Media', 'Presentations', 'Community Events', 'Team Branding']
        },
        {
            icon: '📝',
            name: 'Engineering Notebook',
            description: 'Document the engineering design process, team progress, and competition experiences for awards consideration.',
            skills: ['Technical Writing', 'Design Documentation', 'Photo Documentation', 'Awards Submission']
        }
    ];

    // Competition schedule data
    const events = [
        {
            month: 'DEC',
            day: '9',
            title: 'League Tournament #1',
            description: 'First qualifying tournament of the season featuring both teams competing for ranking points.',
            location: 'Local High School, Cypress CA'
        },
        {
            month: 'JAN',
            day: '13',
            title: 'League Tournament #2',
            description: 'Second qualifying event with improved robots and refined autonomous programs.',
            location: 'Oxford Academy, Cypress CA'
        },
        {
            month: 'FEB',
            day: '3',
            title: 'League Tournament #3',
            description: 'Final league tournament before championship qualifier selection.',
            location: 'Competitor School, Orange County CA'
        },
        {
            month: 'FEB',
            day: '24',
            title: 'Regional Championship',
            description: 'Championship tournament with top teams from across the region competing for state advancement.',
            location: 'Regional Venue, Orange County CA'
        },
        {
            month: 'MAR',
            day: '16',
            title: 'State Championship',
            description: 'California State FTC Championship featuring the best teams from across the state.',
            location: 'State Venue, California'
        },
        {
            month: 'APR',
            day: '20',
            title: 'FIRST World Championship',
            description: 'Ultimate competition bringing together the world\'s best FTC teams.',
            location: 'Houston, Texas'
        }
    ];

    return (
        <TeamPageLayout 
            title="FIRST Tech Challenge"
            description="FTC Teams 19812 & 23796"
            bannerImage={img1}
            bgMoveUp={50}
            bgShift={100}
        >
            <TeamOverviewSection {...teamOverviewData} />
            
            <Stats 
                stats={ftcStats}
                title="FTC Teams by the Numbers" 
            />

            <RobotGallery 
                title="Robot Showcase"
                robots={robots}
            />

            <TeamStructure 
                title="Team Organization"
                subteams={subteams}
            />

            <CompetitionSchedule 
                title="2024 Season Schedule"
                events={events}
            />

            <Achievements 
                achievements={ftcAchievements}
                title="FTC Team Achievements"
            />

            <TeamMembers 
                showFilter={false}
                title="Meet Our FTC Teams"
            />

            <NewsSection 
                articles={ftcNews}
                title="Latest FTC Updates"
                showAll={false}
                maxArticles={3}
            />
        </TeamPageLayout>
    )
}