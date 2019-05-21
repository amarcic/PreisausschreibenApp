import React from 'react';
import elasticsearch from 'elasticsearch';

let client = new elasticsearch.Client({
    host: 'projects.cceh.uni-koeln.de:9200',
    log: 'trace'
});


function fetchFromES( queryObj, view, type ) {
//console.log(view);
    const index = view || 'couchdata3';
    const doctype = type || '_all';
    const fields = fields || '_all';

    client.ping({
        // ping usually has a 3000ms timeout
        requestTimeout: 1000
      }, function (error) {
        if (error) {
          console.trace('elasticsearch cluster is down!');
        } else {
          console.log('All is well');
        }
      });
     

      client.search({
        index: index,
        type: 'contest',
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
//                console.log("hello from withPromise componentDidMount()");
                this.fetchData( this.props.query, this.props.view );
            }

            componentDidUpdate( prevProps ) {
                if (this.props.query !== prevProps.query) {
                    this.fetchData( this.props.query, this.props.view );
                }
            }

            render() {
                const { hocProp, ...passthroughProps } = this.props;
                const fetchedData = this.state.data;
                const hitsCount = this.state.hitsCount;
                const isLoading = this.state.loading;

                console.log(fetchedData);

                if (this.state.loading) {
                    return (<p>your request is being fetched at this very moment</p>);
                } else {
                    return(
                        <WrappedComponent requestData={fetchedData} hitsCount={hitsCount} {...passthroughProps} />
                    );
                }
            };
        }
    );
}