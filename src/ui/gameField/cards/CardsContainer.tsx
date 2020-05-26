import Cards from "./Cards";
import React from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store";

const CardsContainer: React.FC = () => {

    /*получаем из store карты с помощью useSelector*/
    const {cards, counter, isLoading} = useSelector((store: AppStateType) => store.reducer)

    return (
        <Cards cards={cards} counter={counter} isLoading={isLoading}/>
    )
}
export default CardsContainer