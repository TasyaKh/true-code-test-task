import React, {FC, useEffect, useState} from "react";
import "./Navbar.scss"
import {Link} from "react-router-dom";
import {Dropdown} from "../elements/Dropdown";
import {getHeaderContent} from "../../api/pages";
import {SplineContacts} from "../elements/SplineContacts/SplineContacts";

interface Props {

}

export const Navbar: FC<Props> = () => {

    const [data, setData] = useState<any>()

    useEffect(() => {
        getHeader()
    }, []);

    const getHeader = async () => {
        const d = await getHeaderContent()
        setData(d)
    }

    function openNav() {
        const f = document.getElementById("myNav");
        if (f) f.style.width = "100%"
    }

    function closeNav() {
        const f = document.getElementById("myNav");
        if (f) f.style.width = "0%";
    }

    return (
        <div className={"container"}>
            <nav className={"navbar"}>

                <div className={"row"}>
                    <div className={"d-lg-none col"} style={{marginBottom: "23px"}}>
                        <Link to={"/"} className={""}>
                            <div className={"logo-header "}>
                                <img src={data?.logo_full} className={"img-contain"}
                                     alt={"logo"}/>
                            </div>
                        </Link>
                    </div>
                    <div className={"col-auto"}>
                        <label htmlFor="collapse">
                            <img src={data?.img_hamburger} alt="hamburger"/>
                        </label>
                    </div>
                </div>

                <div className={"d-lg-none row"}>
                    <div className={"col"}>
                        <div className={"col-auto contacts"}>
                            <div className={" phone-number phone-top"}>
                                <a className={"phone "} href={`tel:${data?.phone?.number_link}`}>
                                    {data?.phone?.number}
                                </a>
                            </div>
                            <a className={""} href={`mailto:${data?.mail}`}>{data?.mail}</a>
                        </div>
                    </div>
                    <div className={"col-auto d-flex justify-content-center"}>
                        <Link to={"/form"}>
                            <button className={"btn light btn-send-request"}>{data?.button_request}</button>
                        </Link>
                    </div>
                </div>
                <input type="checkbox" id="collapse"/>
                {/*collapsible*/}
                <div className="collapsible">
                    <div className={"collapsible-wrapper"}>
                        <div className={"container" }>
                            <div className={"row justify-content-end "} style={{textAlign: "end"}}>
                                <label htmlFor="collapse" style={{marginRight:"20px"}}>
                                    <img src={data?.img_hamburger} alt="hamburger"/>
                                </label>
                            </div>
                        </div>

                            <div className={"row nav-content-wrapper"} >
                                {/*logo*/}
                                <div className={"d-none d-lg-block col-auto logo-wrapper"}
                                     style={{paddingRight: "125px"}}>
                                    <Link to={"/"}>
                                        <img src={data?.logo_full} style={{width: "174px", height: "56px"}}
                                             alt={"logo"}/>
                                    </Link>
                                </div>
                                <div className={"d-none d-lg-flex col-auto d-flex align-items-center phone-number"}>
                                    <a className={"phone "} href={`tel:${data?.phone?.number_link}`}>
                                        {data?.phone?.number}
                                    </a>
                                </div>

                                <div className={"col-auto d-flex align-items-center justify-content-center"}>
                                    <div className={"row menu-wrapper"}>
                                        {data?.links && Object.keys(data?.links).map((key, index) =>
                                            <div className={"col-12 col-lg-auto p-0 d-flex justify-content-center"}>
                                                {/* dropdown */}

                                                {key === "vacancies" &&
                                                    <div className={"d-lg-none d-block"}>
                                                        <Dropdown child={
                                                            <div className={"row sub-menu-wrapper"}>

                                                                {data?.vacancies && Object.keys(data?.vacancies).map((key2, index) => (

                                                                    <div
                                                                        className={"col-12 col-lg-auto p-0 d-flex justify-content-center " +
                                                                            ""}>
                                                                        <Link to={`/vacancy?key=${key2}`}>
                                                                            <div
                                                                                className={"sub-link link"}> {data?.vacancies[key2]?.header}</div>
                                                                        </Link>

                                                                    </div>

                                                                ))}
                                                            </div>
                                                        } title={data?.links[key]}/>
                                                    </div>}

                                                <div className={`${key === "vacancies" ? "d-lg-block d-none" : ""} `}>
                                                    <Link to={key}>
                                                        <div className={"link"}> {data?.links[key]}</div>
                                                    </Link>
                                                </div>

                                            </div>
                                        )}
                                    </div>

                                </div>
                                <div className={"col-12 col-lg d-flex btn-invisible align-items-center"}>
                                    <Link to={"/form"}>
                                        <button className={"btn light btn-send-request"}>{data?.button_request}</button>
                                    </Link>
                                </div>
                                <div className={"contacts-mobile row d-lg-none d-flex"}>

                                    <div className={"col-12 d-flex justify-content-center phone-number"}>
                                        <a className={"phone "} href={`tel:${data?.phone?.number_link}`}>
                                            {data?.phone?.number}
                                        </a>
                                    </div>

                                    <div className={"col-12 d-flex justify-content-center "}>
                                        <SplineContacts widthIcon={14} heightIcon={14} radius={8} data={data?.socials} gap={"15.7px"}/>
                                    </div>
                                </div>


                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}
