import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { createRef } from 'react';

export default function Home() {
    const [validEmail, setValidEmail] = useState(null);
    const inputRef = createRef();

    const dataFetch = async (e) => {
        e.preventDefault();
        const email = inputRef.current.value;
        fetch(
            `https://ipqualityscore.com/api/json/email/MLO0ZKTLix8D6R6daj0eNNfTy0fYVPIp/${email}`
        )
            .then((res) => res.json())
            .then((result) => setValidEmail(result.valid));
        console.log(validEmail);
    };
    return (
        <div className={styles.content}>
            <span className={styles.title}>Введите эмейл</span>
            <form action='post' className={styles.form}>
                <input
                    type='email'
                    className={styles.input_email}
                    ref={inputRef}
                />
                <input
                    type='submit'
                    value='Submit'
                    className={styles.btn_submit}
                    onClick={dataFetch}
                />
            </form>
            {validEmail ? (
                <span className={styles.email_true}>
                    Такой емейл существует
                </span>
            ) : (
                ''
            )}
            {validEmail === false ? (
                <span className={styles.email_false}>
                    Не существует такого эмейла
                </span>
            ) : (
                ''
            )}
        </div>
    );
}
