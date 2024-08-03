import React, {FC} from 'react';
import './Vacancy.scss';
import {VacancyTemplate} from "../../components/VacancyTemplate";

interface Props {
}

export const Vacancy2: FC<Props> = () => {

    const child = (
        <div className={"vacancy2"}>
            <div className={"row"}>
                <div className={"col-auto "}>
                    <div className={"text"}>
                        <h4 className={"subtitle"}>
                            ЧЕГО МЫ ЖДЕМ ОТ ТЕБЯ
                        </h4>
                        <p className={"p1"}>
                            <ul>
                                <li>
                                    Опыт верстки простых страниц;
                                </li>
                                <li>
                                    Основы HTML5, CSS, SVG;
                                </li>
                                <li>
                                    Понимание принципов адаптивной верстки сайтов;
                                </li>
                                <li>
                                    Знание дизайн-инструментов (Figma);
                                </li>
                                <li>
                                    Плюсом будет:
                                </li>
                                <li>
                                    Основы Git или другой системы контроля версий;
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
                <div className={"col d-flex mobile-hide"} style={{maxHeight: "147px"}}>
                    <img src={"/img/vacancy2.png"} alt={""}/>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            <VacancyTemplate child={child} title={"Разработчик"}/>
        </div>
    )

};

