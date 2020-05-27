import Cards from "./Cards";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../bll/store";
import {Redirect} from "react-router";
import {actions} from "../../../../bll/reducer";

const CardsContainer: React.FC = () => {

    /*получаем из store карты с помощью useSelector*/
    const {cards, isLoading} = useSelector((store: AppStateType) => store.reducer)

    const dispatch = useDispatch()

    if (cards.every(c => c.isOpen)) {
        /*dispatch(actions.victoryToggling())*/
        return <Redirect to={'/victory/'}/>
    }

    return (
        <Cards cards={cards} isLoading={isLoading}/>
    )
}
export default CardsContainer