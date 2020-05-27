import GameField from "./gameField/GameField";
import React from "react";
import styles from './GamePage.module.css'

type OwnPropsType = {
    counter: number
}
type PropsType = OwnPropsType

const GamePage: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.gamePage}>
            <GameField/>
            <div className={styles.counter}>
                {props.counter}
            </div>
        </div>

    )
}
export default GamePage