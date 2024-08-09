import {Vacancy1} from "../Vacancies/Vacancy1";
import {Vacancy3} from "../Vacancies/Vacancy3";
import {Vacancy} from "../Vacancies/Vacancy";
import React, {useEffect, useState} from "react";
import {Vacancy2} from "../Vacancies/Vacancy2";
import {useLocation} from "react-router-dom";
import {getAllVacancies} from "../../api/pages";

export const VacancyWrapper = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const key = searchParams.get('key');

    const [data, setData] = useState<any>()
    const [currentVacancy, setCurrentVacancy] = useState()

    useEffect(() => {
        getVacancies()
    }, []);

    const getVacancies = async () => {
        const d = await getAllVacancies()
        setData(d)
        const cV = d?.vacancies[key ?? ""]
        setCurrentVacancy(cV)
    }

    switch (key) {
        case 'vacancy1':
            return <Vacancy1 vacancy={currentVacancy} data={data}/>;
        case 'vacancy2':
            // eslint-disable-next-line react/jsx-no-undef
            return <Vacancy2 vacancy={currentVacancy} data={data}/>;
        case 'vacancy3':
            return <Vacancy3 vacancy={currentVacancy} data={data}/>;
        default:
            // eslint-disable-next-line react/jsx-no-undef
            return <Vacancy vacancy={currentVacancy} data={data}/>;
    }
}
