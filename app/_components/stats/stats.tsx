"use client";
import React from 'react';
import styles from './stats.module.scss';
import { TW_900 } from '@/utils/globalFonts';

type Stat = {
    id: string;
    label: string;
    value: string;
    description?: string;
    icon?: string;
}

type StatsProps = {
    children?: React.ReactNode;
    stats?: Stat[];
    title?: string;
}

const defaultStats: Stat[] = [
    {
        id: '1',
        label: 'Years Active',
        value: '12+',
        description: 'Since 2012',
        icon: '🏆'
    },
    {
        id: '2',
        label: 'Team Members',
        value: '45+',
        description: 'Active students',
        icon: '👥'
    },
    {
        id: '3',
        label: 'Competitions',
        value: '30+',
        description: 'Participated in',
        icon: '🤖'
    },
    {
        id: '4',
        label: 'Awards Won',
        value: '10+',
        description: 'Regional, On-season & Off-season',
        icon: '🥇'
    }
];

export default function Stats({ 
    children, 
    stats = defaultStats, 
    title = "Our Impact" 
}: StatsProps): React.ReactElement {
    const [animatedStats, setAnimatedStats] = React.useState<boolean>(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAnimatedStats(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const element = document.getElementById('stats-section');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="stats-section" className={`${styles.stats} ${TW_900}`}>
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                
                <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <div 
                            key={stat.id} 
                            className={`${styles.statCard} ${animatedStats ? styles.animate : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {stat.icon && (
                                <div className={styles.statIcon}>
                                    {stat.icon}
                                </div>
                            )}
                            <div className={styles.statValue}>
                                {stat.value}
                            </div>
                            <div className={styles.statLabel}>
                                {stat.label}
                            </div>
                            {stat.description && (
                                <div className={styles.statDescription}>
                                    {stat.description}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {children}
        </section>
    );
}
