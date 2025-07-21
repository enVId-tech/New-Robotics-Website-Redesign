"use client";
import React from 'react';
import styles from './newsSection.module.scss';
import { TW_600, TW_900 } from '@/utils/globalFonts';

type NewsArticle = {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    publishDate: string;
    category: 'Competition' | 'Achievement' | 'Event' | 'General';
    image?: string;
    tags: string[];
}

type NewsSectionProps = {
    children?: React.ReactNode;
    articles?: NewsArticle[];
    title?: string;
    showAll?: boolean;
    maxArticles?: number;
}

const defaultArticles: NewsArticle[] = [
    {
        id: '1',
        title: 'FRC Team 4079 Wins Regional Championship',
        excerpt: 'Our FRC team achieved first place at the Los Angeles Regional, securing a spot at the World Championships.',
        content: 'After months of preparation and hard work, FRC Team 4079 "Quantum Leap" has won the Los Angeles Regional Championship...',
        author: 'Erick Tran',
        publishDate: '2024-03-15',
        category: 'Achievement',
        image: '/images/comp/FRC_1.jpg',
        tags: ['FRC', 'Championship', 'Regional']
    },
    {
        id: '2',
        title: 'New VEX Season Kicks Off',
        excerpt: 'Our VEX teams are ready for the new competitive season with innovative robot designs.',
        content: 'The new VEX season brings exciting challenges and our teams have been working hard on their robot designs...',
        author: 'Erick Tran',
        publishDate: '2024-03-10',
        category: 'Competition',
        tags: ['VEX', 'Season', 'Design']
    },
    {
        id: '3',
        title: 'STEM Outreach Program Reaches 500 Students',
        excerpt: 'Our community outreach program has successfully engaged over 500 local students in STEM activities.',
        content: 'Through various workshops and presentations, our team has inspired hundreds of students to explore STEM fields...',
        author: 'Erick Tran',
        publishDate: '2024-03-05',
        category: 'Event',
        tags: ['Outreach', 'STEM', 'Community']
    },
    {
        id: '4',
        title: 'FTC Teams Advance to State Championship',
        excerpt: 'Both of our FTC teams have qualified for the state championship tournament.',
        content: 'After impressive performances at regionals, teams 19812 and 23796 are heading to state championships...',
        author: 'Erick Tran',
        publishDate: '2024-02-28',
        category: 'Achievement',
        image: '/images/robotics/competition_working.jpg',
        tags: ['FTC', 'State', 'Qualification']
    },
    {
        id: '5',
        title: 'Meet Our New Team Members',
        excerpt: 'We welcome several new talented students to our robotics family this semester.',
        content: 'This semester brings fresh faces and new perspectives to our robotics teams...',
        author: 'Erick Tran',
        publishDate: '2024-02-20',
        category: 'General',
        tags: ['Team', 'Members', 'Welcome']
    }
];

export default function NewsSection({ 
    children, 
    articles = defaultArticles,
    title = "Latest News",
    showAll = false,
    maxArticles = 3
}: NewsSectionProps): React.ReactElement {
    const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
    const [filteredArticles, setFilteredArticles] = React.useState<NewsArticle[]>(articles);
    const [displayedArticles, setDisplayedArticles] = React.useState<NewsArticle[]>([]);

    const categories = ['All', 'Competition', 'Achievement', 'Event', 'General'];

    React.useEffect(() => {
        let filtered = selectedCategory === 'All' 
            ? articles 
            : articles.filter(article => article.category === selectedCategory);
        
        setFilteredArticles(filtered);
        
        if (!showAll) {
            filtered = filtered.slice(0, maxArticles);
        }
        
        setDisplayedArticles(filtered);
    }, [selectedCategory, articles, showAll, maxArticles]);

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    const getCategoryColor = (category: string): string => {
        switch (category) {
            case 'Competition': return '#4285f4';
            case 'Achievement': return '#ff6b35';
            case 'Event': return '#9c27b0';
            case 'General': return '#ff5722';
            default: return '#666';
        }
    };

    return (
        <section className={`${styles.newsSection} ${TW_600}`}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={`${styles.title} ${TW_900}`}>{title}</h1>
                    
                    {showAll && (
                        <div className={styles.filterTabs}>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`${styles.filterTab} ${selectedCategory === category ? styles.active : ''}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {displayedArticles.length === 0 ? (
                    <div className={styles.noArticles}>
                        <p>No articles found for the selected category.</p>
                    </div>
                ) : (
                    <div className={styles.articlesGrid}>
                        {displayedArticles.map((article, index) => (
                            <article key={article.id} className={`${styles.articleCard} ${index === 0 ? styles.featured : ''}`}>
                                {article.image && (
                                    <div className={styles.articleImage}>
                                        <img src={article.image} alt={article.title} />
                                        <div className={styles.imageOverlay}>
                                            <span 
                                                className={styles.categoryBadge}
                                                style={{ backgroundColor: getCategoryColor(article.category) }}
                                            >
                                                {article.category}
                                            </span>
                                        </div>
                                    </div>
                                )}
                                
                                <div className={styles.articleContent}>
                                    <div className={styles.articleMeta}>
                                        <span className={styles.author}>{article.author}</span>
                                        <span className={styles.date}>{formatDate(article.publishDate)}</span>
                                    </div>
                                    
                                    <h2 className={TW_900}>{article.title}</h2>
                                    <p className={styles.excerpt}>{article.excerpt}</p>
                                    
                                    <div className={styles.articleTags}>
                                        {article.tags.slice(0, 3).map((tag, tagIndex) => (
                                            <span key={tagIndex} className={styles.tag}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <button className={styles.readMore}>
                                        Read More
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {!showAll && filteredArticles.length > maxArticles && (
                    <div className={styles.viewAll}>
                        <button className={styles.viewAllBtn}>
                            View All News ({filteredArticles.length} articles)
                        </button>
                    </div>
                )}
            </div>
            {children}
        </section>
    );
}
