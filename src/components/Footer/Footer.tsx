import {FC} from "react";
import "./Footer.scss"
import {Link} from "react-router-dom";

interface Props {

}

export const Footer: FC<Props> = () => {


    return (
            <div className={"footer"}>
                <div className={"footer-wrapper"}>
                <div className={"row footer-content-wrapper"}>
                    {/*logo*/}
                    <div className={"col-sm-auto col-12 justify-content-center justify-content-sm-start d-flex"}>
                        <div className={"logo-wrapper"}>
                            <Link to={"/"}>
                                <img className={"img-contain"} src={"/img/logo-full.png"} alt={"logo"}/>
                            </Link>
                            <div className={"text-main mobile-hide year"} >@ 2021</div>
                        </div>
                    </div>
                    {/*contacts*/}
                    <div className={"col-sm col-12"}>
                        <div className={"row contacts"}>
                            <div className={"col-12 d-flex justify-content-sm-end justify-content-center"} >
                                <a className={"phone "} href={"tel:+73952261260"}>
                                    <div className={"p4"}>+7 (3952) 26-12-60</div>
                                </a>
                            </div>
                            <div className={"col-12 d-flex icons-wrapper justify-content-sm-end justify-content-center"} >
                                <div className={"footer-icon icon-vk"}></div>
                                <div className={"footer-icon icon-facebook"}></div>
                                <div className={"footer-icon icon-instagram"}></div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={"col-sm-auto col-12 d-flex justify-content-sm-end justify-content-center btn-footer"}>
                        <button className={"mx-4 m-md-0 btn light"}>Подать заявку</button>
                    </div>
                    <div className={"col-sm-auto col-12 d-flex justify-content-center"}>
                        <div className={" pc-hide year"}>
                            @ 2021
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
