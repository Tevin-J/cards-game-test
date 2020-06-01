import React from "react";
import CardsContainer from "./cards/CardsContainer";
import styles from './GameField.module.css'

const GameField: React.FC = () => {
    return (
        <div className={styles.gameField}>
            <CardsContainer/>
        </div>
    )
}
export default GameField