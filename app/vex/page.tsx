"use client";
import React from "react";
import img1 from "../../public/images/PlaceholderBanner.jpg";
import TeamPageLayout from "../_components/teamPageLayout/teamPageLayout";
import TeamOverviewSection from "../_components/teamOverviewSection/teamOverviewSection";
import RobotGallery from "../_components/robotGallery/robotGallery";
import TeamStructure from "../_components/teamStructure/teamStructure";
import CompetitionSchedule from "../_components/competitionSchedule/competitionSchedule";
import { useContent } from "@/hooks/useContent";

export default function VEX() {
    const { content, loading } = useContent();
    
    const vexStats = content?.teams?.vex?.stats || [
        { id: "1", label: "Tournament Wins", value: "18" },
        { id: "2", label: "Skills Championships", value: "4" },
        { id: "3", label: "Excellence Awards", value: "7" },
        { id: "4", label: "Design Awards", value: "9" },
        { id: "5", label: "Team Members", value: "24" },
        { id: "6", label: "Qualification Rank", value: "#2" }
    ];

    const vexAchievements = content?.teams?.vex?.achievements || [
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

    const vexNews = content?.teams?.vex?.news || [
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

    // Team overview data
    const teamOverviewData = content?.teams?.vex?.teamOverview || {
        teamName: 'Oxford Academy VEX Teams',
        teamDescription: [
            'Our VEX Robotics Competition teams, 1108A and 1108B, represent the cutting edge of high school robotics engineering. These teams design and build robots using the VEX platform to compete in challenging game scenarios that test autonomous programming, precise control, and strategic thinking.',
            'VEX teams work with metal construction systems and advanced programming environments to create sophisticated robots capable of complex tasks. Our teams have consistently excelled in both robot skills challenges and alliance-based tournament competitions.'
        ],
        highlights: [
            {
                icon: '🎯',
                title: 'Skills Excellence',
                description: 'State champions in programming and driver skills competitions'
            },
            {
                icon: '🏗️',
                title: 'Advanced Engineering',
                description: 'Innovative mechanical designs pushing the limits of VEX components'
            },
            {
                icon: '💻',
                title: 'Programming Mastery',
                description: 'Complex autonomous routines using C++ and advanced PID control'
            },
            {
                icon: '🌟',
                title: 'Competition Success',
                description: 'Multiple tournament wins and World Championship qualifications'
            }
        ],
        image: '/images/robotics/group.jpeg',
        imageCaption: 'VEX teams collaborating on robot design'
    };

    // Robot gallery data
    const robots = content?.teams?.vex?.robots || [
        {
            name: 'Over Under Robot',
            year: '2023-24',
            description: 'Advanced catapult system with precise trajectory control for triball scoring. Features innovative intake mechanism and reliable elevation system.',
            image: '/images/comp/FRC_1.jpg',
            specs: ['Catapult Launch', 'Triball Intake', 'Elevation System', 'Autonomous Scoring']
        },
        {
            name: 'Spin Up Robot',
            year: '2022-23',
            description: 'Dual flywheel system optimized for disc launching with variable velocity control. Championship-winning design with exceptional accuracy and speed.',
            image: '/images/robotics/robotics_working.jpg',
            specs: ['Dual Flywheel', 'Disc Launcher', 'Roller Spinner', 'Expansion Wings']
        },
        {
            name: 'Tipping Point Robot',
            year: '2021-22',
            description: 'Mobile goal specialist with four-bar lift system and ring scoring capabilities. First design to achieve consistent autonomous goal navigation.',
            image: '/images/robotics/marketing_working.jpg',
            specs: ['Mobile Goal Lift', 'Ring Scoring', 'Four-Bar System', 'Platform Balance']
        }
    ];

    // Team structure data
    const subteams = content?.teams?.vex?.teamStructure || [
        {
            icon: '🔧',
            name: 'Mechanical Design',
            description: 'Engineer and fabricate robot mechanisms using VEX metal components, focusing on durability, precision, and competitive performance.',
            skills: ['Autodesk Inventor', 'Metal Fabrication', 'Mechanism Design', 'Assembly']
        },
        {
            icon: '💻',
            name: 'Programming',
            description: 'Develop autonomous routines and teleop control systems using C++ and VEXcode Pro for optimal robot performance.',
            skills: ['C++', 'VEXcode Pro', 'PID Control', 'Autonomous Programming']
        },
        {
            icon: '📊',
            name: 'Skills Challenge',
            description: 'Specialize in programming and driver skills competitions, optimizing robot performance for maximum scoring potential.',
            skills: ['Skills Programming', 'Driver Training', 'Score Optimization', 'Route Planning']
        },
        {
            icon: '⚙️',
            name: 'Build Quality',
            description: 'Ensure structural integrity, reliability, and maintenance of robot systems throughout the competitive season.',
            skills: ['Quality Control', 'System Testing', 'Maintenance', 'Troubleshooting']
        },
        {
            icon: '🎯',
            name: 'Strategy & Scouting',
            description: 'Analyze game mechanics, develop competitive strategies, and coordinate alliance selections for tournament success.',
            skills: ['Game Analysis', 'Match Strategy', 'Alliance Selection', 'Data Analysis']
        },
        {
            icon: '📝',
            name: 'Documentation',
            description: 'Maintain engineering notebooks, document design processes, and prepare award submissions for competitions.',
            skills: ['Engineering Notebook', 'Design Documentation', 'Award Preparation', 'Process Recording']
        }
    ];

    // Competition schedule data
    const events = content?.teams?.vex?.schedule || [
        {
            month: 'NOV',
            day: '18',
            title: 'Season Opener Tournament',
            description: 'First tournament of the Over Under season featuring preliminary alliance competitions.',
            location: 'Local High School, Orange County CA'
        },
        {
            month: 'DEC',
            day: '16',
            title: 'Holiday Tournament',
            description: 'Mid-season tournament with refined robots and advanced autonomous programming.',
            location: 'Oxford Academy, Cypress CA'
        },
        {
            month: 'JAN',
            day: '20',
            title: 'Skills Challenge Championship',
            description: 'Regional skills competition featuring programming and driver skills challenges.',
            location: 'Skills Venue, Southern California'
        },
        {
            month: 'FEB',
            day: '17',
            title: 'Regional Championship',
            description: 'High-stakes regional competition with top teams vying for state advancement.',
            location: 'Regional Center, Orange County CA'
        },
        {
            month: 'MAR',
            day: '23',
            title: 'State Championship',
            description: 'California State VEX Championship with qualification opportunities for Worlds.',
            location: 'State Venue, California'
        },
        {
            month: 'MAY',
            day: '8',
            title: 'VEX World Championship',
            description: 'Ultimate global competition featuring the world\'s best VEX teams.',
            location: 'Dallas, Texas'
        }
    ];

    if (loading) return <div>Loading...</div>;

    return (
        <TeamPageLayout 
            title="VEX Robotics Competition"
            description="VEX Teams 1108A & 1108B"
            bannerImage={img1}
            bgMoveUp={5}
        >
            <TeamOverviewSection 
                {...teamOverviewData} 
                basePath="teams.vex.teamOverview"
            />
            
            <RobotGallery 
                title="Robot Evolution"
                robots={robots}
                basePath="teams.vex"
            />

            <TeamStructure 
                title="Team Specializations"
                subteams={subteams}
                basePath="teams.vex"
            />

            <CompetitionSchedule 
                title="2024 Competition Season"
                events={events}
                basePath="teams.vex"
            />
        </TeamPageLayout>
    );
}
