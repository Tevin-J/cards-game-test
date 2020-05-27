import Cards from "./Cards";
import React from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../bll/store";
import {Redirect} from "react-router";

const CardsContainer: React.FC = () => {

    /*получаем из store карты с помощью useSelector*/
    const {cards, isLoading} = useSelector((store: AppStateType) => store.reducer)

    if (cards.every(c => c.isOpen)) {
        return <Redirect to={'/victory/'}/>
    }

    return (
        <Cards cards={cards} isLoading={isLoading}/>
    )
}
export default CardsContainer