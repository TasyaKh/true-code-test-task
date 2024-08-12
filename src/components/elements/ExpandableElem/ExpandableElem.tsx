import "./ExpandableElem.scss"
import React, {FC, useEffect, useState} from "react";
import {BtnArrowDown} from "../buttons/BtnArrowDown/BtnArrowDown";

interface Props {
    childs: React.ReactNode[]
    expandCount: number
    visibleCount: number
    cardsStyle?:string
}

export const ExpandableElem: FC<Props> = ({
                                              childs, expandCount,
                                              visibleCount,
                                              cardsStyle
                                          }) => {
    const [activeElems, setActiveElems] = useState<React.ReactNode[]>()
    const [activeElemsBreakpoins, setActiveElemsBreakpoins] = useState({
        start:0,
        end:visibleCount
    })

    useEffect(() => {
        if(childs){
            setActiveElems([])
            init(activeElemsBreakpoins.start, activeElemsBreakpoins.end,[] )
        }

    }, [childs]);


    const init = (start:number, end:number, activeElems:React.ReactNode[]) => {

        let elems = activeElems ?? []
        for (let i = start; i < end; i++) {
            elems.push(childs[i])
        }

        setActiveElems(elems)
        setActiveElemsBreakpoins({start, end})
    }

    const onExpand = () => {
        init(activeElemsBreakpoins.end, activeElemsBreakpoins.end + expandCount, activeElems ?? [])
    }

    return (
        <div className={"expandable-elem"}>
            <div className={`row ${cardsStyle} `}>
                {activeElems}
            </div>
            <div className={" d-flex justify-content-center button-down"} onClick={onExpand}>
                <BtnArrowDown/>
            </div>
        </div>
    )
}
