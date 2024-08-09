import {FC, useEffect, useState} from "react";
import "./Footer.scss"
import {Link} from "react-router-dom";
import {getFooterContent,} from "../../api/pages";

interface Props {

}

export const Footer: FC<Props> = () => {

    const [data, setData] = useState<any>()

    useEffect(() => {
        getFooter()
    }, []);

    const getFooter = async () => {
        const d = await getFooterContent()
        setData(d)
    }

    return (
        <div className={"footer"}>
            <div className={"footer-wrapper"}>
                <div className={"row footer-content-wrapper "}>
                    {/*logo*/}
                    <div className={"col-sm-auto col-12 justify-content-center justify-content-sm-start d-flex"}>
                        <div className={"logo-wrapper"}>
                            <Link to={"/"}>
                                <img className={"img-contain"} src={data?.logo_full} alt={"logo"}/>
                            </Link>
                            <div className={"text-main mobile-hide year"}>{data?.year}</div>
                        </div>
                    </div>
                    {/*contacts*/}
                    <div className={"col-sm col-12"}>
                        <div className={"row contacts"}>
                            <div className={"col-12 d-flex justify-content-sm-end justify-content-center"}>
                                <a className={"phone "} href={`tel:${data?.phone?.number_link}`}>
                                    <div className={"p4"}>{data?.phone?.number}</div>
                                </a>
                            </div>
                            <div
                                className={"col-12 d-flex icons-wrapper justify-content-sm-end justify-content-center"}>
                                <a href={data?.socials?.vk?.link}>
                                    <div className={"icon-rounded"}>
                                        <div className={"footer-icon icon-vk"}></div>
                                    </div>
                                </a>
                                <a href={data?.socials?.facebook?.link}>
                                    <div className={"icon-rounded"}>
                                        <div className={"footer-icon icon-facebook"}></div>
                                    </div>
                                </a>
                                <a href={data?.socials?.instagram?.link}>
                                    <div className={"icon-rounded"}>
                                        <div className={"footer-icon icon-instagram"}></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className={"col-sm-auto col-12 d-flex justify-content-sm-end justify-content-center btn-footer"}>
                        <Link to={"/form"}>
                            <button className={"m-md-0 mx-4 btn light btn-footer"}>{data?.button_request}</button>
                        </Link>
                    </div>
                    <div className={"col-sm-auto col-12 d-flex justify-content-center"}>
                        <div className={" pc-hide year"}>
                            {data?.year}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
