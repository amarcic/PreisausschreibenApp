//higher order component to wrap all components that need data fetched from elasticsearch
//elasticsearch 1.76 is expected

import React from 'react';
import elasticsearch from 'elasticsearch';

import { Spin } from 'antd';

let client = new elasticsearch.Client({
    host: 'projects.cceh.uni-koeln.de:9200',
    log: 'trace'
});


function fetchFromES( queryObj, optionObj ) {

    const options = optionObj || {};
    const index = 'couchdata3';
    //const doctype = type || '_all';
    const fields = fields || '_all';
    const sort = options.sort || "";
    const from = options.offset || 0;
    const filterObject = options.filterObj || {};
    const queryObject = options.strQuery || queryObj;

    //console.log(view);
    /*client.ping({
        // ping usually has a 3000ms timeout
        requestTimeout: 1000
      }, function (error) {
        if (error) {
          console.trace('elasticsearch cluster is down!');
        } else {
          console.log('All is well');
        }
      });*/
      
      //sort does not work
      console.log("sort:" + JSON.stringify(sort));
      let sortObj = {};
      console.log("object key length: "+ Object.keys(sort).length)
      if (Object.keys(sort).length>0&&sort!=="") {
          sortObj[sort.on] = {order: sort.order};
      }

      client.search({
        index: index,
        type: 'contest',
        from: from,
        body: { 
            sort: [sortObj],
            query:
                {
                    filtered: {
                        query: queryObject,
                        //filter: filterObject
                        //for testing purposes a fixed filter object is used below; delete after testing and use line above
                        filter: {
                            and: [
                                {
                                    nested: {
                                        path: "aufgaben",
                                        filter: {
                                            and: [
                                                {
                                                    term: { "aufgaben.aufgabentyp": "komposition" }
                                                },
                                                {
                                                    term: { systematik: "kantate" }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    term: { schlagwoerter: "italien" }
                                }
                            ]
                            
                        }
                }
            }
        }
    }).then( resp => this.setState({ data: resp.hits.hits, loading: false, hitsCount: resp.hits.total }), err => console.trace(err.message) )
}

export default function withESData( WrappedComponent ) {
    
    return(
        class extends React.Component {
            constructor( props ) {
                super( props );
                this.state = {
                    loading: true,
                    data: null,
                    hitsCount: null
                }
                this.fetchData= fetchFromES.bind(this);
            }

            componentDidMount() {
                //console.log("hello from withESData componentDidMount()");
                //there is no this.props.view
                this.fetchData( this.props.query, {offset: this.props.offset, sort: this.props.sort, strQuery: this.props.strQuery } );
            }

            componentDidUpdate( prevProps ) {
                console.log("offset:" + this.props.offset);
                //if I want rerendering when offset is changed, I will have to include a comparison of the offset parameter
                if ((JSON.stringify(this.props.query) !== JSON.stringify(prevProps.query))||(this.props.offset !== prevProps.offset)||(this.props.sort !== prevProps.sort)||(this.props.strQuery !== prevProps.strQuery)) {
                    //console.log(JSON.stringify(this.props.query), JSON.stringify(prevProps.query) );
                    //there is no this.props.view
                    this.fetchData( this.props.query, {offset: this.props.offset, sort: this.props.sort, strQuery: this.props.strQuery } );
                }
            }

            render() {
                const { hocProp, ...passthroughProps } = this.props;
                const fetchedData = this.state.data;
                const hitsCount = this.state.hitsCount;
                const isLoading = this.state.loading;

                console.log(fetchedData);

                if (this.state.loading) {
                    return (<div style={ {marginTop: 200} }><Spin size="large" tip="Die Daten werden geladen." /></div> );
                } else {
                    return(
                        <WrappedComponent requestData={fetchedData} hitsCount={hitsCount} {...passthroughProps} />
                    );
                }
            };
        }
    );
}