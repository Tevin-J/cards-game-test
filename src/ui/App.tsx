import React from 'react';
import './App.css';
import GameField from "./gameField/GameField";
import {useSelector} from "react-redux";
import {AppStateType} from "../bll/store";

const App: React.FC = () => {
    const {counter} = useSelector((store: AppStateType) => store.reducer)
    return (
        <div className="App">
            {counter}
            <GameField/>
        </div>
    );
}

export default App;
