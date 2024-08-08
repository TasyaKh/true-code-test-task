import React, {FC, useEffect, useState} from 'react';
import './Vacancies.scss';
import {Cards} from "./Cards/Cards";
import {Navbar} from "../../components/Navbar/Navbar";
import {Footer} from "../../components/Footer/Footer";
import {Form} from "../../components/Form/Form";
import {getMainPageContent} from "../../api/pages";

interface Props {
}

export const Vacancies: FC<Props> = () => {

    const [data, setData] = useState<any>()

    useEffect(() => {
        getMainPage()
    }, []);

    const getMainPage = async () => {
        const d = await getMainPageContent()
        setData(d)
    }


    return (
        <div className={""}>
            <Navbar/>
            <div className={"container"}>
                <div className="main-page">
                    {/* upper section */}
                    <div className={"row"}>

                        <div className={"col open-gather"}>
                            <h3 className={"mt-0"}>{data?.header1}</h3>
                            <h6>{data?.subheader}</h6>
                        </div>

                        <div className={"col-auto mobile-hide "} style={{marginRight: "112px", zIndex:-1}}>
                            <img src={data?.img_top} className={"img-resizable"}
                                 style={{width: "363px", height: "406px", transform: "translate(0px, -37px)"}}
                                 alt={""}/>
                        </div>
                        <div className={"col-auto  mobile-hide"}>
                            {/*<div className={""} style={{position: "relative", overflow:"hide"}}>*/}
                            <div className={"img-live"}>
                                <div className={"animate-circle"}>
                                    <img className={"img-resizable"} src={data?.img_live} alt={""}/>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={"flex-column d-flex align-items-center"}>
                        {/* cards section */}
                        <div className={""}>
                            <Cards cards={data?.cards} data={data}/>
                        </div>

                        <div className={"pc-hide img-above-form"}>
                            <img className={"img-resizable"} src={"/img/img.png"} alt={""}/>
                        </div>

                        <div className={"form-elem"} style={{width: "100%"}}>
                            <div className={"form-header"}>{data?.header_form}</div>
                            <Form/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )

};

