import React from 'react';

import { Layout } from 'antd';

import SearchBox from './SearchBox';

//absolute path for backgroundImage for 
//backgroundImage: 'url("preisausschreiben/_design/intern/collage.jpg")',
//relative path for dev server
//backgroundImage: 'url("./collage.jpg")',
//backgroundImage: 'url("collage.jpg")', 
export default function SearchBanner( props ) {

    return(
        <Layout style={{ 
            backgroundImage: 'url("collage.jpg")', 
            height: "75vH", 
            backgroundPosition: "center",
            backgroundSize: "cover" 
        }}>
            <div style={{
                backgroundColor: "#fffbe6",
                padding: "20px",
                textAlign: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}>
                <h1 style={{fontSize:40}}>Musikalische Preisausschreiben<br />1820 bis 1870</h1>
                <h2>Grundriss, Datenbank und Bibliografie auf Grundlage von Musikperiodika</h2>

                <SearchBox updateInput={props.updateInput} searchCollection={props.searchCollection} />
            </div>
        </Layout>
    );
}