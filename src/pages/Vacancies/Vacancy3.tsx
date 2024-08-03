import React, {FC} from 'react';
import './Vacancy.scss';
import {VacancyTemplate} from "../../components/VacancyTemplate";

interface Props {
}

export const Vacancy3: FC<Props> = () => {

    const child = (
        <div className={"vacancy3"}>
            <div className={"row"}>
                <div className={"col-auto"}>
                    <div className={"text"}>
                        <h4 className={"subtitle"}>
                            ЧЕГО МЫ ЖДЕМ ОТ ТЕБЯ
                        </h4>
                        <p className={"p1"}>
                            <ul>
                                <li>
                                    Понимание того, чем мы занимаемся (digital, маркетинг, разработка);
                                </li>
                                <li>
                                    Грамотная устная и письменная речь (русский, английский);
                                </li>
                                <li>
                                    Ответственность и исполнительность (даже если нужно принести кофе);
                                </li>
                                <li>
                                    Умение находить общий язык с людьми;
                                </li>
                                <li>
                                    Желание в перспективе стать полноценным digital-продюсером (менеджером проектов).
                                </li>
                                <li>
                                    Вы можете не знать некоторых аспектов, но мы рассматриваем и кандидатов с базовыми
                                    знаниями для обучения.
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
                    <img src={"/img/vacancy3.png"} alt={""}/>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            <VacancyTemplate child={child} title={"Менеджер проектов"}/>
        </div>
    )

};

