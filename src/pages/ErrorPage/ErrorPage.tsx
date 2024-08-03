import React, {FC} from 'react';
import './ErrorPage.scss';
import {Navbar} from "../../components/Navbar/Navbar";
import {Footer} from "../../components/Footer/Footer";
import {Link} from "react-router-dom";

interface Props {
}

export const ErrorPage: FC<Props> = () => {

    return (
        <div className="error-page">
            <div className={"container-full"}>
                <Navbar/>
                <div className="content">
                    <div className={"container"}>
                        <div className={"header-number"}>
                            404
                        </div>
                        <div className={"header-text"}>
                            Упс! Что-то пошло не так
                        </div>
                        <div className={"d-flex justify-content-center"}>
                            <Link to={"/"}>
                                <button className={"btn light"}> Вернуться на главную страницу</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer/>


            </div>
            <div className={"img-gauss"}>
                <img className={"img-resizable"} src={"/img/gauss.png"} alt={""}/>
            </div>

        </div>
    )
};

