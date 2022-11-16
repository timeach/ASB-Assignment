import React from 'react';
import styles from './RegisterCard.module.css';
import {
    useHistory,
    useLocation,
    useParams,
    useRouteMatch,
  } from "react-router-dom";
export function RegisterCard() {
const history = useHistory()
    return (
        <div className={styles.whole}>
            <div className={styles.header}>
                <div className={styles.menu}
                onClick={ () => {history.push("/menu")}}
                ></div>
                <h3 className={styles.title}>Register card form</h3>
            </div>
            <div className={styles.form}>
                <p className={styles.message}>Welcome  User FirstName</p>
                <div className={styles.card}>
                <input className={styles.input1} placeholder='Credit card number'/>
                </div>
                <div className={styles.card}>
                <input className={styles.input2} placeholder='expiry'/>
                <input className={styles.input2} placeholder='CVC'/>
                </div>
                <button>Submit</button>
            </div>
        </div>
    )
}