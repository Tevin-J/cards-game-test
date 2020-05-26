import Card from "./Card";
import {CardType, showCard} from "../../../../bll/reducer";
import React from "react";
import { useDispatch } from "react-redux";

type OwnPropsType = {
    card: CardType
}
type PropsType = OwnPropsType

const CardContainer: React.FC<PropsType> = (props) => {

    /*получаем action по открытию карточки*/
    const dispatch = useDispatch()
    const openCard = () => {
        dispatch(showCard(props.card))
    }

    return (
        <Card card={props.card} openCard={openCard}/>
    )
}
export default CardContainer