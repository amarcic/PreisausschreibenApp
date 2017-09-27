import React from 'react';

import { Select, Icon, Input } from 'antd';
const Option = Select.Option;

export default function SearchBar( props ) {
    const selectBefore = (
        <Select defaultValue="preisausschreiben" style={{ width: 140}}>
            <Option value="preisausschreiben">Preisausschreiben</Option>
            <Option value="personen">Personen</Option>
            <Option value="koerperschaften">Köperschaften</Option>
            <Option value="serien">Serien</Option>
        </Select>
    );

    return(
        <div style={{ 
                textAlign: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}>
            <h1 style={{fontSize:50}}>Musikalische Preisausschreiben</h1>
            <h2>Grundriss und Datenbank auf Grundlage musikalischer Periodika</h2>
            <Input.Search 
                addonBefore={selectBefore}
                style={{ width: 500 }}
                onSearch={ value => console.log(value) } 
            />
        </div>
    );
}