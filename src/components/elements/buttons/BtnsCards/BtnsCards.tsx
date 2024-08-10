import React, {FC} from 'react';
import './BtnsCards.scss';
import arrow_back from "assets/icons/arrow-back.svg"
import arrow_forward from "assets/icons/arrow-forward.svg"

interface Props {
    onForwardClick: () => void;
    onBackClick: () => void;
}

export const BtnsCards: FC<Props> = ({onForwardClick, onBackClick}) => {


    return (
        <div className={"btns-cards"}>
            <div className={"row buttons"}>
                <div className={"col-auto"}>
                    <div className={"btn-icon"} onClick={onBackClick}>
                        <img src={arrow_back} alt={"back"}/>
                    </div>
                </div>
                <div className={"col-auto"}  onClick={onForwardClick}>
                    <div className={"btn-icon"}>
                    <img src={arrow_forward} alt={"forward"}/>
                </div>
                </div>
            </div>
        </div>
    )

};

