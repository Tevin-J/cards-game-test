import React from 'react';
import './App.css';
import GamePageContainer from "./gamePage/GamePageContainer";
import { Switch, Route } from 'react-router-dom';
import StartPage from "./startPage/StartPage";
import VictoryPage from "./victoryPage/VictoryPage";

const App: React.FC = () => {

    return (
        <div className="App">
            <Switch>
                <Route path={'/'} exact render={() => <StartPage/>}/>
                <Route path={'/game/'} render={() => <GamePageContainer/>}/>
                <Route path={'/victory/'} render={() => <VictoryPage/>}/>
            </Switch>
        </div>
    );
}

export default App;
