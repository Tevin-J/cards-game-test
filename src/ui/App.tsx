import React from 'react';
import './App.css';
import GamePageContainer from "./gamePage/GamePageContainer";
import { Switch, Route } from 'react-router-dom';
import StartPageContainer from "./startPage/StartPageContainer";
import VictoryPageContainer from "./victoryPage/VictoryPageContainer";

const App: React.FC = () => {

    return (
        <div className="App">
            <Switch>
                <Route path={'/'} exact render={() => <StartPageContainer/>}/>
                <Route path={'/game/'} render={() => <GamePageContainer/>}/>
                <Route path={'/victory/'} render={() => <VictoryPageContainer/>}/>
            </Switch>
        </div>
    );
}

export default App;
