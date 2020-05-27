import React from "react";
import {NavLink} from "react-router-dom";
import styles from './VictoryPage.module.css'

const VictoryPage: React.FC = () => {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.congrats}>
                Поздравляю, Вы победили!
            </div>
            <NavLink to={'/game/'}>
                Начать сначала
            </NavLink>
        </div>
    )
}
export default VictoryPage