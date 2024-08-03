import React, {FC} from 'react';
import './BtnsCards.scss';


interface Props {
}

export const BtnsCards: FC<Props> = () => {


    return (
        <div className={"btns-cards"}>
            <div className={"row buttons"}>
                <div className={"col-auto"}>
                    <div className={"btn-icon"}>
                        <img src={"img/assets/icons/arrow-back.svg"} alt={"back"}/>
                    </div>
                </div>
                <div className={"col-auto"}>
                    <div className={"btn-icon"}>
                    <img src={"img/assets/icons/arrow-forward.svg"} alt={"forward"}/>
                </div>
                </div>
            </div>
        </div>
    )

};

