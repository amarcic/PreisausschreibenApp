import React from 'react';
import { withRouter } from 'react-router-dom';

import { Select, Icon, Input } from 'antd';
//const Option = Select.Option;


function EsSearchBox( props ) {
    //let selectValue = props.searchCollection;

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
                        //this.state.strQueryObj = {simple_query_string: { query: cleanedInput, fields: this.state.onFields } };
                        props.history.push('/prosearch');
                        props.updateQuery({ 
                            strQueryObj: {simple_query_string: { query: cleanedInput, fields: ["_all"] } }, 
                            filterTaskTypes: []/*props.filterTaskTypes*/, 
                            filterCountry: []/*props.filterCountry*/, 
                            /*filterTimeSpan: [] props.filterTimeSpan,*/
                            type: props.searchType /*props.searchCollection*/});
                    } 
                    }
        />
    );
}

export default withRouter( EsSearchBox );