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
                const query = this.props.query;
                //example for couchdb query: db.view( 'preisausschreiben/fulltext?startkey="' + inpt + '"&&endkey="' + inpt + '\ufff0"&&reduce=false',
                const url = this.props.query? apiUrl + '?startkey="' + query + '"&&endkey="' + query + '\ufff0"&&reduce=false' : apiUrl;
                //if I do it like this, the component is no rerendered when a new input is submitted. fix
                console.log(url);
                fetch( apiUrl, requestOptions )
                    .then( response => response.json() )
                    .then( data => this.setState( { data: data.rows, loading: false } ) )
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
            }
        
        }
    );
}