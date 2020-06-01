import React from "react";
import {useDispatch} from "react-redux";
import {actions} from "../../bll/reducer";
import StartPage from "./StartPage";

const StartPageContainer: React.FC = () => {

    /*uses useDispatch hook to have an ability to dispatch actions*/
    const dispatch = useDispatch()

    const onStartClick = () => {
        dispatch(actions.shufflingCards())
    }
    return (
        <StartPage onStartClick={onStartClick}/>
    )
}
export default StartPageContainer