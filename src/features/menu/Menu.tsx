import React from 'react';
import styles from './Menu.module.css';

export function Menu() {

    return (
        <div className={styles.whole}>
            <div className={styles.header}>
                {/* <img src='./burger.png' alt='menu' className={styles.icon}></img> */}
                <div className={styles.arrow}></div>
                <h3 className={styles.title}>Menu</h3>
            </div>
            <div className={styles.form}>
                <p className={styles.message}>This is menu content</p>
            </div>
        </div>
    )
}