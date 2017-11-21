import React from 'react';

const apiUrl = 'http://www.mocky.io/v2/59e752d10f00003107ee99e7';
const requestOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    };

export default function withPromise( WrappedComponent ) {

    return(
        class extends React.Component {
            constructor( props ) {
                super( props );
                this.state = {
                    loading: true,
                    data: null
                }
            }
        
            componentDidMount() {
                console.log("hello from withPromise componentDidMount()");
                const query = this.props.query;
                //example for couchdb query: db.view( 'preisausschreiben/fulltext?startkey="' + inpt + '"&&endkey="' + inpt + '\ufff0"&&reduce=false',
                const url = query? apiUrl + '?startkey="' + query + '"&&endkey="' + query + '\ufff0"&&reduce=false' : apiUrl;
                //not a good place for data fetching, since it only renders when the component first mounts. but I want to rerender when prop value changes
                console.log(url);
                fetch( url, requestOptions )
                    .then( response => response.json() )
                    .then( data => this.setState( { data: data.rows, loading: false } ) )
            }

            componentWillReceiveProps( nextProps ) {
                //I could check if this.props.query !== nextProps.query before I send another fetch request
                // I could abstract the fetching away into a fetching method since it is the same here and in componentDidMount()
                
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

                /*
                const query = nextProps.query;
                const url = query? apiUrl + '?startkey="' + query + '"&&endkey="' + query + '\ufff0"&&reduce=false' : apiUrl;
                console.log(url);
                fetch( url, requestOptions )
                    .then( response => response.json() )
                    .then( data => this.setState( { data: data.rows, loading: false } ) )
                    */
            }

            //needs work, not used yet
            fetchFromCouch(/**/) {
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