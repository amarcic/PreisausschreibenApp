import React from 'react';

import { Layout } from 'antd';

import SearchBox from './SearchBox';

export default function SearchRow( props ) {
    return(
        <Layout style={{ 
            backgroundImage: 'url("./CollageA_Farbe1.jpg")', 
            height: "100px", 
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
                <SearchBox updateInput={props.updateInput} searchCollection={props.searchCollection} />
            </div>
        </Layout>
    );
}