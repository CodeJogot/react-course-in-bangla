import React from 'react';

// Functional Hero Component
const Hero = (props) => {
    return (
        <section style={styles.hero}>
            <div style={styles.container}>
                {props.data.isLogin ? (
                    <h1 style={styles.heading}>{props.data.title}</h1>
                ) : (
                    <h1 style={styles.heading}>{props.data.title2}</h1>
                )}
                <p style={styles.subheading}>{props.data.ds}</p>
                <button onClick={props.sendingFunction} style={styles.ctaButton}>Get Started</button>
            </div>
        </section>
    );
};

// Inline CSS for the Hero Section
const styles = {
    hero: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center',
    },
    container: {
        maxWidth: '800px',
        padding: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add a transparent overlay for better text readability
        borderRadius: '10px',
    },
    heading: {
        fontSize: '48px',
        marginBottom: '20px',
        fontWeight: 'bold',
    },
    subheading: {
        fontSize: '24px',
        marginBottom: '30px',
    },
    ctaButton: {
        padding: '15px 30px',
        fontSize: '18px',
        color: '#fff',
        backgroundColor: '#007BFF',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textTransform: 'uppercase',
    },
};

export default Hero;
