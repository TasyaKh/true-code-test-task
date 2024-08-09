import React, {FC} from 'react';
import './Vacancy.scss';
import {VacancyTemplate} from "./VacancyTemplate";
import {Link} from "react-router-dom";

interface Props {
    vacancy: any
    data:any
}

export const Vacancy2: FC<Props> = ({vacancy, data}) => {

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
                            <Link to={"/form"}>
                            <button className={"btn light"}>
                                {data?.button_request}
                            </button>
                            </Link>
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

