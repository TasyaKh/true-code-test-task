import "./CarouselBasic.scss"
import React, {FC, useEffect, useState} from "react";
import {BtnsCards} from "../buttons/BtnsCards/BtnsCards";

interface Props {
    childs: React.ReactNode[]
    expandCount: number
    visibleCount: number
    cardsStyle?: string
}

export const CarouselBasic: FC<Props> = ({
                                             childs, expandCount,
                                             visibleCount,
                                             cardsStyle
                                         }) => {
    const [activeElems, setActiveElems] = useState<React.ReactNode[]>()
    const [activeElemsBreakpoins, setActiveElemsBreakpoins] = useState({
        start: 0,
        end: visibleCount
    })

    useEffect(() => {
        if (childs) {
            setActiveElems([])
            init(activeElemsBreakpoins.start, activeElemsBreakpoins.end)
        }

    }, [childs]);


    const init = (start: number, end: number) => {

        if(childs.length > 0) {
            if (start < 0) {
                start = 0
                end = expandCount
            }
            // console.log("end", end)

            if (end >= childs.length ) {
                end = childs.length
                start = end - expandCount
            }

            // console.log("endss ", end)

            let elems = []

            for (let i = start; i < end; i++) {
                elems.push(childs[i])
            }

            setActiveElems(elems)
            setActiveElemsBreakpoins({start, end})


        }

    }

    const onForward = () => {
        init(activeElemsBreakpoins.end, activeElemsBreakpoins.end + expandCount)
    }


    const onBack = () => {
        console.log("exx ", activeElemsBreakpoins.end - expandCount, activeElemsBreakpoins.end)
        init(activeElemsBreakpoins.start - expandCount, activeElemsBreakpoins.start)
    }

    return (
        <div className={"carousel-basic"}>
            <div className={`row ${cardsStyle}`}>
                {activeElems}
            </div>
            <div className={"d-flex justify-content-center"}>
                <div className={"buttons-forward"}>
                    <BtnsCards onBackClick={onBack} onForwardClick={onForward}/>
                </div>
            </div>
        </div>
    )
}
