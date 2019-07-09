import React from 'react';

import { Layout } from 'antd';

import SearchBox from './SearchBox';
import EsSearchBox from './EsSearchBox';

//absolute path for backgroundImage for 
//backgroundImage: 'url("preisausschreiben/_design/intern/collage.jpg")',
//relative path for dev server
//backgroundImage: 'url("./collage.jpg")',
//backgroundImage: 'url("collage.jpg")', 
export default function SearchBanner( props ) {

    return(
        <Layout style={{ 
            //backgroundImage: 'url("collage.jpg")',
            backgroundImage: 'url("/assets/collage.jpg")',
            height: "40vH",
            backgroundPosition: "center",
            backgroundSize: "cover" 
        }}>
            <div style={{
                textAlign: "center",
                top: "50%",
                paddingTop: "100px",
                left: "50%",
            }}>
                <h1 style={{
                    fontSize: "2.25rem",
                    color: "#FFFFFF",
                    marginBottom: "0"
                }}>Musikalische Preisausschreiben 1820 - 1870</h1>
                <h3 style={{
                    fontSize: "1.5rem",
                    color: "#D4E3E1"
                }}>Grundriss, Datenbank und Bibliografie auf Grundlage von Musikperiodika</h3>
            </div>
            <div style={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                borderRadius: 7,
                padding: "20px",
                textAlign: "center",
                position: "absolute",
                top: "99%",
                left: "50%",
                transform: "translate(-50%, -50%)"
                
            }}>
                <EsSearchBox updateQuery={props.updateQuery} searchType={props.searchType} />
            </div>
        </Layout>
    );
}