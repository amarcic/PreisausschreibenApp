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
        <Input.Search 
            size="large"
            placeholder="suche..."
            addonBefore={selectBefore}
            style={{ width: 500 }}
            onSearch={ value => {
                        //this.context.router.transitionTo('/search');
                        return console.log(value)
                        } 
                    }
        />
    );
}