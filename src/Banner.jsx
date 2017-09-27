import React from 'react';

import { Layout } from 'antd';

import SearchBox from './SearchBox';

export default function Banner( props ) {
    /*const bannerStyle = {
        imageStyle: {
            background-image: url(./CollageA_Farbe1.jpg);
            height: 50%
        },
        textStyle: {},
        buttonStyle: {}
    }*/

    return(
        <Layout style={{ 
            backgroundImage: 'url("./CollageA_Farbe1.jpg")', 
            height: "500px", 
            backgroundPosition: "center",
            backgroundSize: "cover" 
        }}>
            <SearchBox />
        </Layout>
    );
}