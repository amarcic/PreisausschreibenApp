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
            height: "40vH",
            backgroundPosition: "center",
            backgroundSize: "cover" 
        }}>
            <div style={{
                backgroundColor: "#F5F7F6",
                boxShadow: "5px 5px 10px grey",
                borderRadius: 10,
                padding: "20px",
                textAlign: "center",
                position: "absolute",
                top: "99%",
                left: "50%",
                transform: "translate(-50%, -50%)"
                
            }}>
                <span>Globale Volltextsuche in der Datenbank Musikalische Preisausschreiben 1820-1870.</span>

                <SearchBox updateInput={props.updateInput} searchCollection={props.searchCollection} />
            </div>
        </Layout>
    );
}