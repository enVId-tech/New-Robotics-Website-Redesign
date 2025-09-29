'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.scss';
import { M_300, M_500 } from '@/utils/globalFonts';

export default function LoginPage() {
    const router = useRouter();
    const [loginState, setLoginState] = useState({ 
        username: '', 
        password: '', 
        error: '', 
        loading: false 
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginState({ 
            ...loginState, 
            [e.target.name]: e.target.value, 
            error: '' 
        });
    };

    const handleLoginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoginState({ ...loginState, loading: true, error: '' });
        
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    username: loginState.username, 
                    password: loginState.password 
                })
            });
            
            const data = await res.json();
            
            if (data.success) {
                // Redirect to admin page after successful login
                router.push('/admin');
            } else {
                setLoginState({ 
                    ...loginState, 
                    error: data.message || 'Login failed', 
                    loading: false 
                });
            }
        } catch (err) {
            setLoginState({ 
                ...loginState, 
                error: 'Network error', 
                loading: false 
            });
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginCard}>
                <h1 className={M_500}>Admin Login</h1>
                <form onSubmit={handleLoginSubmit} className={styles.loginForm}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="username" className={M_300}>Username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            value={loginState.username}
                            onChange={handleInputChange}
                            className={styles.input}
                            required
                        />
                    </div>
                    
                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={M_300}>Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={loginState.password}
                            onChange={handleInputChange}
                            className={styles.input}
                            required
                        />
                    </div>
                    
                    {loginState.error && (
                        <div className={styles.error}>
                            {loginState.error}
                        </div>
                    )}
                    
                    <button 
                        type="submit" 
                        disabled={loginState.loading}
                        className={`${styles.loginButton} ${M_300}`}
                    >
                        {loginState.loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                
                <div className={styles.backLink}>
                    <a href="/" className={M_300}>← Back to Home</a>
                </div>
            </div>
        </div>
    );
}