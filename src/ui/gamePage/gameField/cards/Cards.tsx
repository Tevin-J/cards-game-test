import React from "react";
import styles from './Cards.module.css'
import {CardType} from "../../../../bll/reducer";
import CardContainer from "./card/CardContainer";

type OwnPropsType = {
    cards: Array<CardType>
    isLoading: boolean
}
type PropsType = OwnPropsType

const Cards: React.FC<PropsType> = (props) => {

    const cardsElements = props.cards.map(c => <CardContainer key={c.id} card={c}/>)
    const classForCards = props.isLoading ? `${styles.loading} ${styles.cards}` : styles.cards
    return (
        <div className={classForCards}>
            {cardsElements}
        </div>
    )
}
export default Cards