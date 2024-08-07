import React, {FC} from 'react';
import './Vacancy.scss';
import {VacancyTemplate} from "../../components/VacancyTemplate";

interface Props {
    vacancy: any
}

export const Vacancy2: FC<Props> = ({vacancy}) => {

    const child = (
        <div className={"vacancy2"}>
            <div className={"row"}>
                <div className={"col-auto "}>
                    <div className={"text"}>
                        <h4 className={"subtitle"}>
                            {vacancy?.subheader}
                        </h4>
                        <p className={"p1"} dangerouslySetInnerHTML={{__html: vacancy?.text}}>
                        </p>
                        <div className={"btn-wrapper"}>
                            <button className={"btn light"}>
                                Подать заявку
                            </button>
                        </div>
                    </div>
                </div>
                <div className={"col d-flex mobile-hide"} style={{maxHeight: "147px"}}>
                    <img src={vacancy?.img} alt={""}/>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            <VacancyTemplate child={child} title={vacancy?.header}/>
        </div>
    )

};

