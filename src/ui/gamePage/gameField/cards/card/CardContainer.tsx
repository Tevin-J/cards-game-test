import Card from "./Card";
import {CardType, showCard} from "../../../../../bll/reducer";
import React from "react";
import { useDispatch } from "react-redux";
const clickSound = require('../../../../../assets/audio/click.mp3')

type PropsType = {
    card: CardType
}

const CardContainer: React.FC<PropsType> = (props) => {

    /*dispatch showCard action to show the clicked card*/
    const dispatch = useDispatch()
    const openCard = () => {
        /*making card click sound*/
        new Audio(clickSound).play()
        dispatch(showCard(props.card))
    }

    return (
        <Card card={props.card} openCard={openCard}/>
    )
}
export default CardContainer