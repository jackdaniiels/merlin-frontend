import { useState } from 'react';
import styles from '../styles/button.module.scss';

export const Button = () => {
    const [reload, setReload] = useState(true);

    const handleClick = () => {
        console.log('ok');
        setReload(!reload);
    }


    return (
        <button className={styles.button} onClick={handleClick}>
            Button
        </button>
    )
}
