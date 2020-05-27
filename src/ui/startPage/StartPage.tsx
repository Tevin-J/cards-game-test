import React from "react";
import styles from './StartPage.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {actions} from "../../bll/reducer";

const StartPage: React.FC = () => {

    const dispatch = useDispatch()

    const onStartClick = () => {
        dispatch(actions.shufflingCards())
    }
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.title}>
                FIND A PAIR
            </div>
            <div className={styles.rules}>
                Try to find all pairs of cards opening one by one.
            </div>
            <NavLink to={'/game/'} className={styles.buttonWrapper} onClick={onStartClick}>
                <p>START</p>
            </NavLink>

        </div>
    )
}
export default StartPage