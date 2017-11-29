import React from 'react';

/* mock api
const apiUrl = 'http://www.mocky.io/v2/59e752d10f00003107ee99e7';
*/
const api = "http://134.95.80.232:5984/preisausschreiben/";

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
    }

    const apiViewSelect = apiUrl + selectView;
    const apiRequest = collection? apiViewSelect + '?startkey="' + queryString + '"&&endkey="' + queryString + '\ufff0"&&reduce=false': apiUrl + queryString;
    //const url = collection? api + '?startkey="' + query + '"&&endkey="' + query + '\ufff0"&&reduce=false' : apiUrl;
    fetch( apiRequest, requestOptions )
    .then( response => response.json() )
    .then( data => this.setState( { data: data.rows, loading: false } ) )

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
                this.fetchStuff = fetchFromCouch.bind(this);
            }
        
            componentDidMount() {
                //console.log("hello from withPromise componentDidMount()");
                this.fetchStuff( this.props.query, api, this.props.collection );
                /*
                const query = this.props.query;
                let selectView = "";

                switch( this.props.collection ) {
                    case "preisausschreiben": selectView = "_design/preisausschreiben/_view/fulltext"; break;
                    case "koerperschaften": selectView = "_design/preisausschreiben/_view/all_corporations"; break;
                    case "personen": selectView = "_design/preisausschreiben/_view/all_persons"; break;
                    case "serien": selectView = "_design/preisausschreiben/_view/all_series"; break;
                }

                const api = "http://134.95.80.232:5984/preisausschreiben/" + selectView;

                const url = query? api + '?startkey="' + query + '"&&endkey="' + query + '\ufff0"&&reduce=false' : apiUrl;
            
                //console.log(url);
                fetch( url, requestOptions )
                    .then( response => response.json() )
                    .then( data => this.setState( { data: data.rows, loading: false } ) )
                    */
            }

            componentWillReceiveProps( nextProps ) {
                
                //I could check if this.props.query !== nextProps.query before I send another fetch request
                // I could abstract the fetching away into a fetching method since it is the same here and in componentDidMount()
                this.fetchStuff( nextProps.query, api, nextProps.collection );
                /*
                const query = nextProps.query;
                let selectView = "";
                switch( nextProps.collection ) {
                    case "preisausschreiben": selectView = "fulltext"; break;
                    case "koerperschaften": selectView = "all_corporations"; break;
                    case "personen": selectView = "all_persons"; break;
                    case "serien": selectView = "all_series"; break;
                }

                //const api = apiUrl + "/" + selectView;
                const api = "http://134.95.80.232:5984/preisausschreiben/_design/preisausschreiben/_view/" + selectView;

                const url = query? api + '?startkey="' + query + '"&&endkey="' + query + '\ufff0"&&reduce=false' : apiUrl;
                console.log(url);
                fetch( url, requestOptions )
                    .then( response => response.json() )
                    .then( data => this.setState( { data: data.rows, loading: false } ) )
                    */
            }

            /*needs work, not used yet
            fetchFromCouch() {
                const query = nextProps.query;
                let selectView = "";
                switch( props.collection ) {
                    case "preisausschreiben": selectView = "fulltext"; break;
                    case "koerperschaften": selectView = "all_corporations"; break;
                    case "personen": selectView = "all_persons"; break;
                    case "serien": selectView = "all_series"; break;
                }

                const api = apiUrl + selectView;

                const url = query? api + '?startkey="' + query + '"&&endkey="' + query + '\ufff0"&&reduce=false' : apiUrl;
                console.log(url);
                fetch( url, requestOptions )
                    .then( response => response.json() )
                    // maybe I need to map the fetched data rows to avoid duplicate keys (problem for ant design table of results)
                    .then( data => this.setState( { data: data.rows, loading: false } ) )
            }
            */


           render() {
            //console.log("hello from withPromise render()");
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
            }
        
        }
    );
}