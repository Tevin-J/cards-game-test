import React from "react";
import {NavLink, Redirect} from "react-router-dom";
import styles from './VictoryPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../bll/reducer";
import {AppStateType} from "../../bll/store";

const VictoryPage: React.FC = () => {

    const {counter} = useSelector((state: AppStateType) => state.reducer)

    const dispatch = useDispatch()

    const onRestartClick = () => {
        dispatch(actions.victoryToggling())
        dispatch(actions.shufflingCards())
    }

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.congrats}>
                You win!
            </div>
            <div className={styles.score}>
                Your score is {counter}.
            </div>
            <NavLink to={'/game/'} className={styles.buttonWrapper}>
                <p onClick={onRestartClick}>
                    RESTART
                </p>
            </NavLink>
            <NavLink to={'/'} className={styles.buttonWrapper}>
                <p onClick={onRestartClick}>
                    MAIN PAGE
                </p>
            </NavLink>
        </div>
    )
}
export default VictoryPage