import React, {FC, useEffect, useState} from 'react';
import './ErrorPage.scss';
import {Navbar} from "../../components/Navbar/Navbar";
import {Footer} from "../../components/Footer/Footer";
import {Link} from "react-router-dom";
import {getErrorPage} from "../../api/pages";
import gauss from "assets/gauss.png"

interface Props {
}

export const ErrorPage: FC<Props> = () => {

    const [data, setData] = useState<any>()

    useEffect(() => {
        getErrPage()
    }, []);

    const getErrPage = async () => {
        const d = await getErrorPage()
        setData(d)
    }

    return (
        <div className="error-page">
            <div className={"container-full"}>
                <Navbar/>
                <div className="content error-wrapper">
                    <div className={"container"}>
                        <div className={"header-number"}>
                            {data?.err_code}
                        </div>
                        <div className={"header-text"}>
                            {data?.text}
                        </div>
                        <div className={"d-flex justify-content-center btn-wrapper"}>
                            <Link to={"/"}>
                                <button className={"btn light"}> {data?.btn_back}   </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer/>


            </div>
            <div className={"img-gauss"}>
                <img className={"img-resizable"} src={gauss} alt={""}/>
            </div>

        </div>
    )
};

