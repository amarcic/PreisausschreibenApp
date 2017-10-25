import React from 'react';

import { Layout } from 'antd';

import SearchBox from './SearchBox';

export default function SearchBanner( props ) {

    return(
        <Layout style={{ 
            backgroundImage: 'url("./CollageA_Farbe1.jpg")', 
            height: "75vH", 
            backgroundPosition: "center",
            backgroundSize: "cover" 
        }}>
            <div style={{
                backgroundColor: "#d4dff3",
                padding: "20px",
                textAlign: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}>
                <h1 style={{fontSize:40}}>Musikalische Preisausschreiben 1820 bis 1870</h1>
                <h2>Grundriss, Datenbank und Bibliografie auf Grundlage von Musikperiodika</h2>

                <SearchBox />
            </div>
        </Layout>
    );
}