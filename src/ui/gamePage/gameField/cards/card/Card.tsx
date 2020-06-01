import React from "react";
import styles from './Card.module.css'
import {CardType} from "../../../../../bll/reducer";

type PropsType = {
    card: CardType
    openCard: () => void
}

const Card: React.FC<PropsType> = (props) => {

    /*setting css styles for card depending on isOpen prop*/
    const classForCard = props.card.isOpen ? `${styles.openedCard} ${styles.card}` : styles.card

    return (
        <div className={classForCard} onClick={props.openCard}>
            <img src={props.card.img} alt={props.card.title} className={props.card.isShow ? styles.showedCard : styles.closedCard}/>
        </div>
    )
}
export default Card