import React from "react";
import styles from './StartPage.module.css'
import {useDispatch} from "react-redux";
import {actions} from "../../bll/reducer";
import Button from "../common/button/Button";


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
            <Button path={'/game/'} onClick={onStartClick} text={'START'}/>
        </div>
    )
}
export default StartPage