import React from 'react';
import {useRoutes} from "./routes"
import './App.scss';
import {HashRouter} from "react-router-dom"

function App() {
    const routes = useRoutes();

    return (
        <div>
            <HashRouter>
                {routes}
            </HashRouter>
        </div>
    );
}

export default App;
