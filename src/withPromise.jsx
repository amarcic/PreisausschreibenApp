import React from 'react';

import * as packageJSON from '../package.json';

   // const api = "http://musical-competitions.uni-koeln.de/api/";
const api = packageJSON.default.config.couchdb;

const requestOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    };


function fetchFromCouch( queryString, apiUrl, collection ) {
    
    let selectView = "";
    switch( collection ) {
        case "preisausschreiben": selectView = "_design/preisausschreiben/_view/fulltext"; break;
        case "koerperschaften": selectView = "_design/preisausschreiben/_view/all_corporations"; break;
        case "personen": selectView = "_design/preisausschreiben/_view/all_persons"; break;
        case "serien": selectView = "_design/preisausschreiben/_view/all_series"; break;
//        case "overview_competitions": selectView = "_design/preisausschreiben/_view/all_comps"; break;
    }

    const apiViewSelect = apiUrl + selectView;

    const apiRequest = collection? apiViewSelect + '?startkey="' + queryString + '"&&endkey="' + queryString + '\ufff0"&&reduce=false': apiUrl + queryString;
     
    fetch( apiRequest, requestOptions )
        .then( response => response.json() )
        .then( data => collection? this.setState({ data: data.rows, loading: false }) : this.setState({ data: data, loading: false}) );
           // this.setState( collection? { data: data.rows, loading: false } : { data: data } ) )

}

export default function withPromise( WrappedComponent ) {

    return(
        class extends React.Component {
            constructor( props ) {
                super( props );
                this.state = {
                    loading: true,
                    data: null
                }
                this.fetchData = fetchFromCouch.bind(this);
            }
        
            componentDidMount() {
                //console.log("hello from withPromise componentDidMount()");
                this.fetchData( this.props.query, api, this.props.collection );
            }

            componentDidUpdate( prevProps ) {
                console.log(this.props.query !== prevProps.query);
                if ( this.props.query !== prevProps.query ) {
                    this.fetchData( this.props.query, api, this.props.collection );
                }
            }

            /* replaced with the componentDidUpdate method above, since componentWillReceiveProps is considered unsafe and will be depricated in the future
            componentWillReceiveProps( nextProps ) {
                
                // the following line fixes the bug, that was using fetched data from previous queries to build the result table (which led to crashes)
                this.setState( { data: null} );

                //I could check if this.props.query !== nextProps.query before I send another fetch request
               
                this.fetchData( nextProps.query, api, nextProps.collection );
            }
            */

           render() {
            //console.log("hello from withPromise render()");
               const { hocProp, ...passthroughProps } = this.props;
               const fetchedData = this.state.data;
               const isLoading = this.state.loading;

               if (this.state.loading) {
                   return (<p>Daten werden geladen...</p>);
               } else {
                    return(
                        <WrappedComponent requestData={fetchedData} {...passthroughProps} />
                    );
               }
            }
        
        }
    );
}