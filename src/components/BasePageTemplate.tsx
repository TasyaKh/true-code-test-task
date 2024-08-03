import React, {FC} from 'react';
import './WeOffersPage.scss';
import {Navbar} from "./Navbar/Navbar";
import {Footer} from "./Footer/Footer";

interface Props {
}

export const BasePageTemplate: FC<Props> = () => {


    return (
        <div>
            <Navbar/>

            <Footer/>
        </div>
    )

};

