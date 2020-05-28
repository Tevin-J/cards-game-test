import React from "react";
import styles from './VictoryPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../bll/reducer";
import {AppStateType} from "../../bll/store";
import Button from "../common/button/Button";

const VictoryPage: React.FC = () => {

    const {counter} = useSelector((state: AppStateType) => state.reducer)
    let score = 108 - counter
    const dispatch = useDispatch()

    const onRestartClick = () => {
        dispatch(actions.victoryToggling())
        dispatch(actions.shufflingCards())
    }

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.congrats}>
                You won!
            </div>
            <div className={styles.score}>
                Your score is {score}.
            </div>
            <Button path={'/game/'} onClick={onRestartClick} text={'RESTART'}/>
            <Button path={'/'} onClick={onRestartClick} text={'MAIN PAGE'}/>
        </div>
    )
}
export default VictoryPage