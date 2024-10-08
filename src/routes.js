import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Vacancies} from "./pages/MainPage/Vacancies";
import {ErrorPage} from "./pages/ErrorPage/ErrorPage";
import {RulesPage} from "./pages/RulesPage/RulesPage";
import {WeOffersPage} from "./pages/WeOffersPage/WeOffersPage";
import {Vacancy1} from "./pages/Vacancies/Vacancy1";
import {Vacancy2} from "./pages/Vacancies/Vacancy2";
import {Vacancy3} from "./pages/Vacancies/Vacancy3";
import {WhoWePage} from "./pages/WhoWePage/WhoWePage";
import {ReviewsPage} from "./pages/ReviewsPage/ReviewsPage";


export const useRoutes = () => {
    return (
        <Switch>

            <Route exact path="/">
                <Vacancies/>
            </Route>

            <Route  path="/rules">
                <RulesPage/>
            </Route>

            <Route  path="/we-offers">
                <WeOffersPage/>
            </Route>

            <Route path="/who-we">
                <WhoWePage/>
            </Route>

            <Route path="/reviews">
                <ReviewsPage/>
            </Route>

            {/*vacancies */}
            <Route  path="/vacancy-1">
                <Vacancy1/>
            </Route>
            <Route  path="/vacancy-2">
                <Vacancy2/>
            </Route>
            <Route  path="/vacancy-3">
                <Vacancy3/>
            </Route>

            <Route path="*">
                <ErrorPage/>
            </Route>

        </Switch>
    )
}
