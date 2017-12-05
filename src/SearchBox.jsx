import React from 'react';
import { withRouter } from 'react-router-dom';

import { Select, Icon, Input } from 'antd';
const Option = Select.Option;
let selectValue = "preisausschreiben";

function SearchBox( props ) {

    const selectBefore = (
        <Select defaultValue="preisausschreiben" style={{ width: 160}}
            onChange={ value => selectValue = value }
            >
            <Option value="preisausschreiben">Preisausschreiben</Option>
            <Option value="personen">Personen</Option>
            <Option value="koerperschaften">Köperschaften</Option>
            <Option value="serien">Serien</Option>
            <Option value="unspezifisch">Sämtliche Daten</Option>
        </Select>
    );

    return(
        <Input.Search 
            size="large"
            placeholder="deine suche..."
            addonBefore={selectBefore}
            style={{ width: 500 }}
            onSearch={ value => {
                        //if component is changed to a stateful component extending React.Component, use this.props.history.push(...)
                        props.history.push('/search');
                        props.updateInput({ input: value, collection: selectValue});
                        //props.updateInput(value);
                        //return console.log(value);
                        } 
                    }
        />
    );
}

export default withRouter( SearchBox );