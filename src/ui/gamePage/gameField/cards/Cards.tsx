import React from "react";
import styles from './Cards.module.css'
import {CardType} from "../../../../bll/reducer";
import CardContainer from "./card/CardContainer";

type PropsType = {
    cards: Array<CardType>
    isLoading: boolean
}

const Cards: React.FC<PropsType> = (props) => {

    /*mapping card components from array of cards*/
    const cardsElements = props.cards.map(c => <CardContainer key={c.id} card={c}/>)

    /*setting css styles for cards depending on isLoading prop*/
    const classForCards = props.isLoading ? `${styles.loading} ${styles.cards}` : styles.cards

    return (
        <div className={classForCards}>
            {cardsElements}
        </div>
    )
}
export default Cards