import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import IndexPage from "./pages/IndexPage";
import DetailPage from "./pages/DetailPage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route path="/:id" component={DetailPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
