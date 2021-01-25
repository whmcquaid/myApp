import React from 'react'
import styles from './NavBar.module.css'

const navBar = () => {
    return (
        <div className={styles.navBarContainer}>
            <div className={styles.col1}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' className={styles.logo} alt='logo'></img>
            </div>
            <div className={styles.col2}>
                <h2 className={styles.title}>Developed in React JS by William McQuaid</h2>
            </div>
            <div className={styles.col3}>
                <a href='../index.html' className={styles.navButtons}>Home</a>
                <a href='./Projects.html' className={styles.navButtons}>Projects</a>
                <a href='./About.html' className={styles.navButtons}>About</a>
                <a href='./Contact.html' className={styles.navButtons}>Contact</a>
            </div>
        </div>
    )
}
export default navBar