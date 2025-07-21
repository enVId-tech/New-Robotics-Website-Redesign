"use client";
import React from 'react';
import styles from './achievements.module.scss';
import { TW_700, TW_900 } from '@/utils/globalFonts';

type Achievement = {
    id: string;
    title: string;
    description: string;
    year: string;
    type: 'FRC' | 'FTC' | 'VEX' | 'General';
    award: string;
    image?: string;
}

type AchievementsProps = {
    children?: React.ReactNode;
    achievements?: Achievement[];
    title?: string;
}

const defaultAchievements: Achievement[] = [
    {
        id: '1',
        title: 'Regional Champions',
        description: 'Team 4079 achieved first place at the Los Angeles Regional Competition',
        year: '2024',
        type: 'FRC',
        award: '1st Place - Regional Champions',
        image: '/images/comp/FRC_1.jpg'
    },
    {
        id: '2',
        title: 'Engineering Excellence',
        description: 'Recognized for outstanding robot design and documentation',
        year: '2024',
        type: 'FTC',
        award: 'Engineering Excellence Award'
    },
    {
        id: '3',
        title: 'Rookie All Star',
        description: 'Outstanding performance in first year of competition',
        year: '2023',
        type: 'VEX',
        award: 'Rookie All Star Award'
    },
    {
        id: '4',
        title: 'Community Impact',
        description: 'Recognition for STEM outreach and community engagement',
        year: '2024',
        type: 'General',
        award: 'Community Impact Award'
    }
];

export default function Achievements({ 
    children, 
    achievements = defaultAchievements, 
    title = "Our Achievements" 
}: AchievementsProps): React.ReactElement {
    const [selectedType, setSelectedType] = React.useState<string>('All');
    const [filteredAchievements, setFilteredAchievements] = React.useState<Achievement[]>(achievements);

    const filterTypes = ['All', 'FRC', 'FTC', 'VEX', 'General'];

    React.useEffect(() => {
        if (selectedType === 'All') {
            setFilteredAchievements(achievements);
        } else {
            setFilteredAchievements(achievements.filter(achievement => achievement.type === selectedType));
        }
    }, [selectedType, achievements]);

    return (
        <section className={`${styles.achievements} ${TW_700}`}>
            <div className={styles.container}>
                <h1 className={`${styles.title} ${TW_900}`}>{title}</h1>
                
                <div className={styles.filterTabs}>
                    {filterTypes.map((type) => (
                        <button
                            key={type}
                            className={`${styles.filterTab} ${selectedType === type ? styles.active : ''}`}
                            onClick={() => setSelectedType(type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                <div className={styles.achievementsGrid}>
                    {filteredAchievements.map((achievement) => (
                        <div key={achievement.id} className={styles.achievementCard}>
                            {achievement.image && (
                                <div className={styles.achievementImage}>
                                    <img src={achievement.image} alt={achievement.title} />
                                </div>
                            )}
                            <div className={styles.achievementContent}>
                                <div className={styles.achievementHeader}>
                                    <span className={`${styles.achievementType} ${styles[achievement.type.toLowerCase()]}`}>
                                        {achievement.type}
                                    </span>
                                    <span className={styles.achievementYear}>{achievement.year}</span>
                                </div>
                                <h3 className={TW_900}>{achievement.title}</h3>
                                <p className={styles.award}>{achievement.award}</p>
                                <p className={styles.description}>{achievement.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {children}
        </section>
    );
}
