import React from 'react';

// Functional Footer Component
const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.section}>
                    <h3 style={styles.heading}>Company</h3>
                    <p style={styles.text}>© 2024 MyCompany, Inc. All rights reserved.</p>
                </div>
                <div style={styles.section}>
                    <h3 style={styles.heading}>Quick Links</h3>
                    <ul style={styles.linkList}>
                        <li style={styles.linkItem}><a href="/about" style={styles.link}>About Us</a></li>
                        <li style={styles.linkItem}><a href="/services" style={styles.link}>Services</a></li>
                        <li style={styles.linkItem}><a href="/contact" style={styles.link}>Contact</a></li>
                        <li style={styles.linkItem}><a href="/privacy" style={styles.link}>Privacy Policy</a></li>
                    </ul>
                </div>
                <div style={styles.section}>
                    <h3 style={styles.heading}>Follow Us</h3>
                    <div style={styles.socialLinks}>
                        <a href="https://facebook.com" style={styles.socialLink}>Facebook</a>
                        <a href="https://twitter.com" style={styles.socialLink}>Twitter</a>
                        <a href="https://instagram.com" style={styles.socialLink}>Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Simple Inline CSS for the Footer
const styles = {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    },
    section: {
        flex: '1 1 300px',
        margin: '10px',
    },
    heading: {
        fontSize: '20px',
        marginBottom: '10px',
    },
    text: {
        fontSize: '14px',
    },
    linkList: {
        listStyle: 'none',
        padding: 0,
    },
    linkItem: {
        margin: '5px 0',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '14px',
    },
    socialLinks: {
        display: 'flex',
        flexDirection: 'column',
    },
    socialLink: {
        color: '#fff',
        textDecoration: 'none',
        margin: '5px 0',
        fontSize: '14px',
    },
};

export default Footer;
