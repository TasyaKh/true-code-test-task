import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Vacancies} from "./pages/MainPage/Vacancies";
import {ErrorPage} from "./pages/ErrorPage/ErrorPage";
import {RulesPage} from "./pages/RulesPage/RulesPage";
import {WeOffersPage} from "./pages/WeOffersPage/WeOffersPage";
import {WhoWePage} from "./pages/WhoWePage/WhoWePage";
import {ReviewsPage} from "./pages/ReviewsPage/ReviewsPage";
import {VacancyWrapper} from "./pages/MainPage/VacancyWrapper";
import {FormPage} from "./pages/FormPage/FormPage";


export const useRoutes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Vacancies/>
            </Route>

            <Route exact path="/vacancies">
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

            <Route path="/form">
                <FormPage/>
            </Route>

            {/*vacancies */}
            <Route path="/vacancy" component={VacancyWrapper} />

            <Route path="*">
                <ErrorPage/>
            </Route>

        </Switch>
    )
}
