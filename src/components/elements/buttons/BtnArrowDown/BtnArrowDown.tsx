import React, {FC} from 'react';
import './BtnArrowDown.scss';
import arrow_down from "assets/icons/arrow-down.svg"

interface Props {
    onExpand?:()=>void
}

export const BtnArrowDown: FC<Props> = ({onExpand}) => {

    return (
        <div className={"btn-arrow-down"}>
            <div className={"btn-icon"} onClick={onExpand}>
                <img src={arrow_down} alt={"arrow-down"}/>
            </div>
        </div>
    )

};

