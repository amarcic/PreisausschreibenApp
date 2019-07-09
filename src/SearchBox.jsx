import React from 'react';
import { withRouter } from 'react-router-dom';

import { Select, Icon, Input } from 'antd';
const Option = Select.Option;


function SearchBox( props ) {
    let selectValue = props.searchCollection;
    const selectBefore = (
        // prop for default value: default value should be dynamic to reflect the current choice
        <Select defaultValue={props.searchCollection} 
            onChange={ value => selectValue = value }
            >
            {/*<Option value="preisausschreiben">Preisausschreiben</Option>
            <Option value="personen">Personen</Option>
            <Option value="koerperschaften">Körperschaften</Option>
            <Option value="serien">Serien</Option>
            <Option value="unspezifisch">Sämtliche Daten</Option> */}
        </Select>
    );

    return(
        <Input.Search
            size="small"
            placeholder="Suchbegriff (z.B. 'Rom', 'Paris', 'Beethoven')"
            enterButton
            //addonBefore={selectBefore}
            style={{

                width: 500,
                backgroundColor: "#FBF7F7",
                borderRadius: ".5rem"
            }}
            onSearch={ value => {
                        //if component is changed to a stateful component extending React.Component, use this.props.history.push(...)
                        let cleanedInput = value.toLowerCase();
                        props.history.push('/search');
                        props.updateInput({ input: cleanedInput, collection: selectValue});
                        } 
                    }
        />
    );
}

export default withRouter( SearchBox );