import React, {FC} from 'react';
import './Vacancy.scss';
import {VacancyTemplate} from "../../components/VacancyTemplate";

interface Props {
}

export const Vacancy1: FC<Props> = () => {

    const child = (
        <div className={"vacancy1"}>
            <div className={"row"}>
                <div className={"col-auto "}>
                    <div className={"text"}>
                        <h4 className={"subtitle"}>
                            ЧЕМ ПРЕДСТОИТ ЗАНИМАТЬСЯ
                        </h4>
                        <p className={"p1"}>
                            <ul>
                                <li>
                                    Получать и анализировать поступающие задачи по дизайну проектов;
                                </li>
                                <li>
                                    Разрабатывать концепции дизайна и интерфейса сайтов;

                                </li>
                                <li>
                                    Разрабатывать веб- и мобильные интерфейсы разной сложности;

                                </li>
                                <li>
                                    Создавать графические и стилистические элементы для сайтов, дизайн баннеров и
                                    промо-страниц,
                                    рисовать презентации;
                                </li>
                                <li>
                                    Трезво оценивать время, которое уйдет на дизайн проекта;

                                </li>
                                <li>
                                    Контролировать свой дизайн на последующих этапах реализации проекта, следить, чтобы
                                    технические
                                    специалисты сделали равно так, как задумывалось вами;

                                </li>
                                <li>
                                    Следить за трендами в дизайне и в индустрии;
                                </li>
                                <li>
                                    Работать в команде.
                                </li>
                            </ul>
                        </p>

                        <div className={"btn-wrapper"}>
                            <button className={"btn light"}>
                                Подать заявку
                            </button>
                        </div>
                    </div>
                </div>
                <div className={"col d-flex mobile-hide"}>
                    <img src={"/img/vacancy1.png"} alt={""}/>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            <VacancyTemplate child={child} title={"Веб-дизайнер"}/>
        </div>
    )

};

