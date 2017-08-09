import React from "react";

import Nav_Main from './nav-main';
import Title from './Title';

export default function Header( props ) {
        return(
            <div>
                <Title title={props.text.title} subtitle={props.text.subtitle} />
                <Nav_Main/>
            </div>
        );
}