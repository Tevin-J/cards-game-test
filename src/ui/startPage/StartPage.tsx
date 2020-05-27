import React from "react";
import styles from './StartPage.module.css'
import {NavLink} from "react-router-dom";

const StartPage: React.FC = () => {

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.title}>
                Название игры
            </div>
            <div className={styles.rules}>
                Правила игры
            </div>
            <NavLink to={'/game/'} className={styles.button}>
                <div className={styles.buttonWrapper}>
                    Начать игру
                </div>
            </NavLink>

        </div>
    )
}
export default StartPage