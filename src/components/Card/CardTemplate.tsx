import React, {FC} from 'react';
import './CardTemplate.scss';

interface Props {
    imgSrc: string
    footerChild: React.ReactNode
    title: string
}

export const Card: FC<Props> = ({
                                    imgSrc,
                                    title,
                                    footerChild,
                                }) => {


    return (
        <div className={"card-template p-3"} >
            <div className={"row"} >
                <div className={"col-auto"}>
                    <div className={"card"}>
                        <div className={"img-wrapper"}>
                            <img src={imgSrc} className={""} alt={""}/>
                        </div>
                        <div className={"card-name"}>
                            {title}
                        </div>
                        <div className={""}>
                            {footerChild}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

