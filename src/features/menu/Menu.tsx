import React from 'react';
import styles from './Menu.module.css';
import {useHistory} from 'react-router-dom' ;

export function Menu() {
    const history = useHistory()
    return (
        <div className={styles.whole}>
            <div className={styles.header}>
                <div className={styles.arrow}
                onClick={() => { history.push("/");}}
                ></div>
                <h3 className={styles.title}>Menu</h3>
            </div>
            <div className={styles.form}>
                <p className={styles.message}>This is menu content</p>
            </div>
        </div>
    )
}