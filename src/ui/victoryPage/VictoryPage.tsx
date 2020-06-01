import React from "react";
import styles from './VictoryPage.module.css'
import Button from "../common/button/Button";

type PropsType = {
    score: number
    onRestartClick: () => void
}

const VictoryPage: React.FC<PropsType> = (props) => {

    const onButtonClick = () => {
        props.onRestartClick()
    }

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.congrats}>
                You won!
            </div>
            <div className={styles.score}>
                Your score is {props.score}.
            </div>
            <Button path={'/game/'} onClick={onButtonClick} text={'RESTART'}/>
            <Button path={'/'} onClick={onButtonClick} text={'MAIN PAGE'}/>
        </div>
    )
}
export default VictoryPage