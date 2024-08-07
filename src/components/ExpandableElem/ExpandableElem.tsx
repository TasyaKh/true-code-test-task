import "./ExpandableElem.scss"
import React, {FC, useEffect, useState} from "react";
import {BtnArrowDown} from "../elements/buttons/BtnArrowDown/BtnArrowDown";

interface Props {
    child: React.ReactNode
    expandCount: number
    visibleCount: number
}

export const ExpandableElem: FC<Props> = ({
                                              child, expandCount,
                                              visibleCount
                                          }) => {
    const [visibleElems, setVisibleElems] = useState(0)

    useEffect(() => {
        init()
    }, [child]);

    // useEffect(() => {
    // }, []);

    const init = () => {
        for (let i = 0; i < visibleCount; i++) {
            const el = document.getElementById("elem-" + i)

            if (el) {
                el.classList.remove("invisible")
            }
        }

        setVisibleElems(visibleCount)
    }

    const onExpand = () => {

        let visibleCount = 0
        console.log(visibleElems)
        for (let i = visibleElems; i < visibleElems + expandCount; i++) {
            const el = document.getElementById("elem-" + i)
            console.log(el)
            if (el) {
                el.classList.remove("invisible")
            }
            visibleCount++
        }

        setVisibleElems(visibleElems + visibleCount)
    }

    return (
        <div className={"expandable-elem"}>
            <div className={""}>
                {child}
            </div>
            <div className={" d-flex justify-content-center button-down"} onClick={onExpand}>
                <BtnArrowDown/>
            </div>

        </div>
    )
}
