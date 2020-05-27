import GamePage from "./GamePage";
import React from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";

const GamePageContainer: React.FC = () => {
    const {counter} = useSelector((store: AppStateType) => store.reducer)
    return (
        <GamePage counter={counter}/>
    )
}
export default GamePageContainer