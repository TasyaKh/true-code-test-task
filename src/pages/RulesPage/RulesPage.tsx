import React, {FC, useEffect, useState} from 'react';
import './RulesPage.scss';
import {Footer} from "../../components/Footer/Footer";
import {Navbar} from "../../components/Navbar/Navbar";
import {getRulesContent} from "../../api/pages";
import gauss from "assets/gauss.png"

interface Props {
}

export const RulesPage: FC<Props> = () => {

    const [data, setData] = useState<any>()

    useEffect(() => {
        getRules()
    }, []);

    const getRules = async () => {
        const d = await getRulesContent()
        setData(d)
    }

    return (
        <div className="rules-page">

            <Navbar/>
            <div className={"container"}>
                <h3 style={{textAlign: "center"}}>
                    {data?.header_main}
                </h3>
                <p className={"p1"} style={{maxWidth: "910px"}}
                   dangerouslySetInnerHTML={{__html: data?.subtext_header}}>

                </p>

                {data?.sections && Object.keys(data?.sections).map((key, index) => (
                    <>
                        <h4> {data?.sections[key]?.header}</h4>
                        <p className={`p1`} style={{maxWidth: "1026px"}}
                           dangerouslySetInnerHTML={{__html: data?.sections[key]?.text}}>
                        </p>
                    </>
                ))}

                <div className={"img-gauss mobile-hide"}>
                    <img className={"img-resizable"} src={gauss} alt={""}/>
                </div>

                <div className={"img-gauss1 pc-hide"}>
                    <img className={"img-resizable"} src={gauss} alt={""}/>
                </div>
            </div>

            <Footer/>
        </div>
    )
};

