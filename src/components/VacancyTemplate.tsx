import React, {FC} from 'react';
import './VacancyTemplate.scss';
import {Navbar} from "./Navbar/Navbar";
import {Footer} from "./Footer/Footer";

interface Props {
    child: React.ReactNode
    title: string
    // subtitle: string
}

export const VacancyTemplate: FC<Props> = ({child, title}) => {

    return (
        <div className={"vacancy-template"}>
            <div className={"container-full"}>
                <Navbar/>
                <div className={"container"}>
                    <div className={"content"}>
                        <h3 className={"title"}>
                            {title}
                        </h3>
                        {child}
                    </div>

                    <div className={"img-gauss pc-hide"}>
                        <img className={"img-resizable"} src={"/img/gauss.png"} alt={""}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )

};

