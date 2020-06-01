import React from "react";
import styles from './GamePage.module.css'
import CardsContainer from "./gameField/cards/CardsContainer";

type PropsType = {
    counter: number
}

const GamePage: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.gamePage}>
            <CardsContainer/>
            <div className={styles.counter}>
                {props.counter}
            </div>
        </div>
    )
}
export default GamePage