import Card from "./card/Card";
import React from "react";
import styles from './Cards.module.css'
import {CardType} from "../../../bll/reducer";
import CardContainer from "./card/CardContainer";

type OwnPropsType = {
    cards: Array<CardType>
    counter: number
    isLoading: boolean
}
type PropsType = OwnPropsType

const Cards: React.FC<PropsType> = (props) => {

    if (props.cards.every(c => c.isOpen)) {
        alert(`Поздравляю, Вы победили! Ваш итоговый счет ${props.counter}.`)
    }

    const cardsElements = props.cards.map(c => <CardContainer key={c.id} card={c}/>)

    return (
        <div className={props.isLoading ? styles.loading : styles.cards}>
            {cardsElements}
        </div>
    )
}
export default Cards