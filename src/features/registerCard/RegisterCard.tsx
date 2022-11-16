import React from 'react';
import styles from './RegisterCard.module.css';
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { registerCardSlice, selectRegisterCard } from './registerCardSlice'

interface State {
    creditCard: number;
    cvc: number;
    expires: number;
    list: any []
}
export function RegisterCard() {
const history = useHistory()

const [creditCard, setCreditCard] = useState<number>()
const [cvc, setCvc] = useState<number>()
const [expires, setExpires] = useState<number>()
const list = useAppSelector(selectRegisterCard)
const dispatch = useAppDispatch();

const handelCreditCard = (event) => {
    setCreditCard(event.target.value)
    
}

const handelCvc = (event) => {
    setCvc(event.target.value)
    
}

const handelExpries = (event) => {
    setExpires(event.target.value)
    
}
const handelSubmit = () => {
    // dispatch(registerCardSlice.actions.addCard(creditCard))
    // dispatch(registerCardSlice.actions.addCard(cvc))
    // dispatch(registerCardSlice.actions.addCard(expires))
    console.log(`Credit card:`,creditCard)
    console.log(`CVC:`,cvc)
    console.log(`Expiry:`,expires)
}

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
                    <input className={styles.input1} placeholder='Credit card number'
                        value={creditCard}
                        onChange={handelCreditCard}
                    />
                </div>
                <div className={styles.card}>
                    <input className={styles.input2} placeholder='expiry'
                        value={expires}
                        onChange={handelExpries}
                    />
                    <input className={styles.input2} placeholder='CVC'
                        value={cvc}
                        onChange={handelCvc}
                    />
                </div>
                <button
                onClick={handelSubmit}
                >Submit</button>
            </div>
        </div>
    )
}