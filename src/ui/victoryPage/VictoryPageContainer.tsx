import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../bll/reducer";
import {AppStateType} from "../../bll/store";
import VictoryPage from "./VictoryPage";

const VictoryPageContainer: React.FC = () => {

    /*getting the counter value from the state via useSelector hook*/
    const {counter} = useSelector((state: AppStateType) => state.reducer)
    /*counting the final score of the game*/
    let score = 108 - counter

    const dispatch = useDispatch()
    /*setting cards to initial state and shuffling array of cards*/
    const onRestartClick = () => {
        dispatch(actions.victoryToggling())
        dispatch(actions.shufflingCards())
    }

    return (
        <VictoryPage score={score} onRestartClick={onRestartClick}/>
    )
}
export default VictoryPageContainer