import React, {FC, useEffect, useState} from 'react';
import './ReviewsPage.scss';
import {Navbar} from "../../components/Navbar/Navbar";
import {Footer} from "../../components/Footer/Footer";
import {Comment} from "./Comment/Comment";
import {getReviewsPage,} from "../../api/pages";
import {ExpandableElem} from "../../components/ExpandableElem/ExpandableElem";

interface Props {
}

export const ReviewsPage: FC<Props> = () => {

    const [data, setData] = useState<any>()

    useEffect(() => {
        getReviews()
    }, []);

    const getReviews = async () => {
        const d = await getReviewsPage()
        setData(d)
    }


    return (
        <div className="reviews-page">
            {/*<div className={"container-full"}>*/}
            <Navbar/>
            <div className={"reviews-wrapper container"}>
                <h3 style={{textAlign: "center"}}>
                    {data?.header}
                </h3>

                <div className={"reviews"}>
                    <ExpandableElem child={
                        <div className={"row comments"}>
                            {data?.comments && Object.keys(data.comments).map((key, index) => (
                                <div className={`col-12 invisible`} id={`elem-${index}`}>
                                    <Comment text={data.comments[key].text} author={data.comments[key].author_name}
                                             avatar={data.comments[key].avatar}
                                             isAuthorLeftSide={data.comments[key].is_author_left_side}/>
                                </div>
                            ))}
                        </div>

                    } expandCount={2} visibleCount={2}/>

                </div>
            </div>

            <div className={"img-gauss mobile-hide"}>
                <img className={"img-resizable"} src={"/img/gauss.png"} alt={""}/>
            </div>

            <div className={"img-gauss1 pc-hide"}>
                <img className={"img-resizable"} src={"/img/gauss.png"} alt={""}/>
            </div>

            {/*experience*/}
            <div className={"img-experience mobile-hide"}>
                <div className={"animate-circle"}>
                    <img className={"img-contain"} src={"img/animate/experience.png"} alt={""}/>
                </div>
            </div>

            <Footer/>

        </div>
    )
};

