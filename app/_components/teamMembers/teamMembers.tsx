"use client";
import React from 'react';
import styles from './teamMembers.module.scss';
import { TW_600, TW_900 } from '@/utils/globalFonts';

type TeamMember = {
    id: string;
    name: string;
    role: string;
    grade: string;
    bio: string;
    image?: string;
    skills: string[];
    team: 'FRC' | 'FTC' | 'VEX' | 'All';
    socialLinks?: {
        linkedin?: string;
        github?: string;
        instagram?: string;
    };
}

type TeamMembersProps = {
    children?: React.ReactNode;
    members?: TeamMember[];
    title?: string;
    showFilter?: boolean;
}

const defaultMembers: TeamMember[] = [
    {
        id: '1',
        name: 'Sarah Johnson',
        role: 'Team Captain',
        grade: '12th Grade',
        bio: 'Passionate about robotics and leading the team to success. Specializes in mechanical design and team coordination.',
        skills: ['Leadership', 'Mechanical Design', 'CAD', 'Project Management'],
        team: 'FRC',
        image: '/images/robotics/group.jpeg'
    },
    {
        id: '2',
        name: 'Alex Chen',
        role: 'Lead Programmer',
        grade: '11th Grade',
        bio: 'Expert in autonomous programming and sensor integration. Always looking for innovative coding solutions.',
        skills: ['Java', 'Python', 'Autonomous Programming', 'Vision Processing'],
        team: 'FRC'
    },
    {
        id: '3',
        name: 'Maria Rodriguez',
        role: 'Mechanical Lead',
        grade: '12th Grade',
        bio: 'Specializes in robot construction and mechanical systems. Loves working with power tools and precision engineering.',
        skills: ['Mechanical Engineering', 'Manufacturing', 'SolidWorks', 'Fabrication'],
        team: 'FTC'
    },
    {
        id: '4',
        name: 'David Kim',
        role: 'Electronics Specialist',
        grade: '10th Grade',
        bio: 'Expert in wiring, sensors, and electrical systems. Ensures all robots are properly connected and functional.',
        skills: ['Electronics', 'Wiring', 'Sensors', 'Circuit Design'],
        team: 'VEX'
    },
    {
        id: '5',
        name: 'Emma Wilson',
        role: 'Marketing Lead',
        grade: '11th Grade',
        bio: 'Handles team branding, social media, and outreach programs. Passionate about STEM advocacy.',
        skills: ['Marketing', 'Social Media', 'Graphic Design', 'Public Speaking'],
        team: 'All'
    },
    {
        id: '6',
        name: 'James Park',
        role: 'Strategy Analyst',
        grade: '10th Grade',
        bio: 'Analyzes competition data and develops winning strategies. Combines analytical thinking with robotics knowledge.',
        skills: ['Data Analysis', 'Strategy', 'Competition Planning', 'Scouting'],
        team: 'FRC'
    }
];

export default function TeamMembers({ 
    children, 
    members = defaultMembers, 
    title = "Meet Our Team",
    showFilter = true 
}: TeamMembersProps): React.ReactElement {
    const [selectedTeam, setSelectedTeam] = React.useState<string>('All');
    const [filteredMembers, setFilteredMembers] = React.useState<TeamMember[]>(members);

    const teamTypes = ['All', 'FRC', 'FTC', 'VEX'];

    React.useEffect(() => {
        if (selectedTeam === 'All') {
            setFilteredMembers(members);
        } else {
            setFilteredMembers(members.filter(member => member.team === selectedTeam || member.team === 'All'));
        }
    }, [selectedTeam, members]);

    return (
        <section className={`${styles.teamMembers} ${TW_600}`}>
            <div className={styles.container}>
                <h1 className={`${styles.title} ${TW_900}`}>{title}</h1>
                
                {showFilter && (
                    <div className={styles.filterTabs}>
                        {teamTypes.map((team) => (
                            <button
                                key={team}
                                className={`${styles.filterTab} ${selectedTeam === team ? styles.active : ''}`}
                                onClick={() => setSelectedTeam(team)}
                            >
                                {team}
                            </button>
                        ))}
                    </div>
                )}

                <div className={styles.membersGrid}>
                    {filteredMembers.map((member) => (
                        <div key={member.id} className={styles.memberCard}>
                            <div className={styles.memberImage}>
                                {member.image ? (
                                    <img src={member.image} alt={member.name} />
                                ) : (
                                    <div className={styles.placeholder}>
                                        <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                                    </div>
                                )}
                                <div className={styles.memberOverlay}>
                                    <div className={styles.memberRole}>{member.role}</div>
                                </div>
                            </div>
                            
                            <div className={styles.memberContent}>
                                <div className={styles.memberHeader}>
                                    <h3 className={TW_900}>{member.name}</h3>
                                    <span className={styles.memberGrade}>{member.grade}</span>
                                </div>
                                
                                <p className={styles.memberBio}>{member.bio}</p>
                                
                                <div className={styles.memberSkills}>
                                    {member.skills.slice(0, 3).map((skill, index) => (
                                        <span key={index} className={styles.skill}>
                                            {skill}
                                        </span>
                                    ))}
                                    {member.skills.length > 3 && (
                                        <span className={styles.skillCount}>
                                            +{member.skills.length - 3} more
                                        </span>
                                    )}
                                </div>

                                <div className={styles.memberTeam}>
                                    <span className={`${styles.teamBadge} ${styles[member.team.toLowerCase()]}`}>
                                        {member.team}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {children}
        </section>
    );
}
