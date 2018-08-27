import React from 'react';

const api = "http://musical-competitions.uni-koeln.de/api/";
const requestOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    };


function fetchFromCouch( queryString, apiUrl, view ) {
console.log(view);
    let selectView = "";
    switch( view ) {
        case "inPreisausschreiben": selectView = "_design/preisausschreiben/_view/idsinpas"; break;
//        case "directDoc": selectView = "preisausschreiben/"; break;
    }

    const apiViewSelect = apiUrl +  selectView;
    //console.log("apireq: " + apiUrl + selectView );
    const apiRequest = apiUrl + selectView + '?key="' + queryString + '"';
    //view? apiViewSelect + '?startkey="' + queryString + '"&&endkey="' + queryString + '\ufff0"&&reduce=false': apiUrl + queryString;
    //console.log("apireq: " + apiRequest );
     
    fetch( apiRequest, requestOptions )
        .then( response => response.json() )
        .then( data => view? this.setState({ data: data.rows, loading: false }) : this.setState({ data: data, loading: false}) );
}

export default function withLookup( WrappedComponent ) {

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
//                console.log("hello from withPromise componentDidMount()");
                this.fetchStuff( this.props.query, api, this.props.view );
            }

            componentWillReceiveProps( nextProps ) {
                
                // the following line fixes the bug, that was using fetched data from previous queries to build the result table (which led to crashes)
                this.setState( { data: null} );

                //I could check if this.props.query !== nextProps.query before I send another fetch request
               
                this.fetchStuff( nextProps.query, api, nextProps.view );
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