import React from 'react';
import elasticsearch from 'elasticsearch';

import { Spin } from 'antd';

let client = new elasticsearch.Client({
    host: 'projects.cceh.uni-koeln.de:9200',
    log: 'trace'
});


function fetchFromES( queryObj, view, offset ) {

    const index = view || 'couchdata3';
    //const doctype = type || '_all';
    const fields = fields || '_all';
    const from = offset || 0;

    console.log(view);
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
     

      client.search({
        index: index,
        type: 'contest',
        from: from,
        body: {
            query: queryObj
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
                this.fetchData( this.props.query, this.props.view, this.props.offset );
            }

            componentDidUpdate( prevProps ) {
                console.log("offset:" + this.props.offset);
                //if I want rerendering when offset is changed, I will have to include a comparison of the offset parameter
                if ((JSON.stringify(this.props.query) !== JSON.stringify(prevProps.query))||(this.props.offset !== prevProps.offset)) {
                    //console.log(JSON.stringify(this.props.query), JSON.stringify(prevProps.query) );
                    //there is no this.props.view
                    this.fetchData( this.props.query, this.props.view, this.props.offset );
                }
            }

            render() {
                const { hocProp, ...passthroughProps } = this.props;
                const fetchedData = this.state.data;
                const hitsCount = this.state.hitsCount;
                const isLoading = this.state.loading;

                console.log(fetchedData);

                if (this.state.loading) {
                    return (<Spin size="large" tip="Die Daten werden geladen." />);
                } else {
                    return(
                        <WrappedComponent requestData={fetchedData} hitsCount={hitsCount} {...passthroughProps} />
                    );
                }
            };
        }
    );
}