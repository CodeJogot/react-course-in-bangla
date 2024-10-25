import React from 'react';

// Functional Navbar Component
const Navbar = () => {
    return (
        <>
        <nav style={styles.navbar}>
            <div style={styles.logo}>
                MyLogo
            </div>
            <ul style={styles.navLinks}>
                <li style={styles.navItem}><a href="/" style={styles.navLink}>Home</a></li>
                <li style={styles.navItem}><a href="/about" style={styles.navLink}>About</a></li>
                <li style={styles.navItem}><a href="/services" style={styles.navLink}>Services</a></li>
                <li style={styles.navItem}><a href="/contact" style={styles.navLink}>Contact</a></li>
            </ul>
        </nav>
        </>
    );
};

// Simple Inline CSS for the Navbar
const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff',
    },
    logo: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    navLinks: {
        display: 'flex',
        listStyle: 'none',
    },
    navItem: {
        marginLeft: '20px',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
    },
};

export default Navbar;
