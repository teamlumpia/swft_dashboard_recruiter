import React,{ useState } from 'react';
import styles from '../../styles/Header.module.css';
import Logo from '../../public/logo_white.png';

const header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.dashboard}>
                    LOGO HERE
            </div>
        </div>
    );
}

export default header;