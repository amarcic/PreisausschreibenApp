import React from 'react';
import elasticsearch from 'elasticsearch';

let client = new elasticsearch.Client({
    host: 'projects.cceh.uni-koeln.de:9200',
    log: 'trace'
});


function fetchFromES( queryString, view ) {
//console.log(view);
    let index = view || 'all';

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
        index: 'couchdata3',
        type: 'contest',
        q: 'anlass:könig'
    }).then(function(resp) {
        return resp;
    }, function(err) {
        console.trace(err.message);
    }).then( data => this.setState({ data: data.hits.hits, loading: false }) ) ;
    /*try {
        const response = await client.search( {
            q: queryString
        } );
    } catch (error) {
        console.trace(error.message);
    }*/
}

export default function withESData( WrappedComponent ) {

    return(
        class extends React.Component {
            constructor( props ) {
                super( props );
                this.state = {
                    loading: true,
                    data: null
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
                const isLoading = this.state.loading;

                if (this.state.loading) {
                    return (<p>your request is being fetched at this very moment</p>);
                } else {
                    return(
                        <WrappedComponent requestData={fetchedData} {...passthroughProps} />
                    );
                }
            };
        }
    );
}