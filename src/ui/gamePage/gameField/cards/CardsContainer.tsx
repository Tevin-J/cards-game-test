import Cards from "./Cards";
import React from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../bll/store";
import {Redirect} from "react-router";

const CardsContainer: React.FC = () => {

    const {cards, isLoading} = useSelector((store: AppStateType) => store.reducer)

    /*redirect to victory page if all cards has opened */
    if (cards.every(c => c.isOpen)) {
        return <Redirect to={'/victory/'}/>
    }

    return (
        <Cards cards={cards} isLoading={isLoading}/>
    )
}
export default CardsContainer