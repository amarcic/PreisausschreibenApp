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
            <div style={{ 
                textAlign: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}>
                <h1 style={{fontSize:50}}>Musikalische Preisausschreiben</h1>
                <h2>Grundriss, Datenbank und Bibliografie auf Grundlage von Musikperiodika</h2>

                <SearchBox />
            </div>
        </Layout>
    );
}