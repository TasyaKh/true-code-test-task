import React, {FC, useEffect, useState} from 'react';
import './FormPage.scss';
import {Form} from "../../components/Form/Form";
import {getMainPageContent} from "../../api/pages";
import {Footer} from "../../components/Footer/Footer";

interface Props {

}

export const FormPage: FC<Props> = () => {

    const [data, setData] = useState<any>()

    useEffect(() => {
        getMainPage()
    }, []);

    const getMainPage = async () => {
        const d = await getMainPageContent()
        setData(d)
    }

    return (
        <div className="form-page">
            <div className="container">
                <div className="form-page-wrapper">
                    <div className={"form-elem"} style={{width: "100%"}}>
                        <div className={"form-header"}>{data?.header_form}</div>
                        <Form/>
                    </div>
                </div>
            </div>

            <div className={"img-gauss mobile-hide"}>
                <img className={"img-resizable"} src={"/img/gauss.png"} alt={""}/>
            </div>

            <Footer/>
        </div>
    )
};

