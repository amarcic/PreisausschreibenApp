import React from "react";

import Nav_Main from './nav-main';
import Title from './Title';
import Search_Bar_Container from './Search-Bar-Container';

export default function Header( props ) {
        return(
            <div>
                <Title title={props.title.main_title} subtitle={props.title.subtitle} />
                <Search_Bar_Container />
                <Nav_Main/>
            </div>
        );
}