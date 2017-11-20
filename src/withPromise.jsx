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
                    data: null,
                    query: this.props.query
                }
            }
        
            componentDidMount() {
                console.log("hello from withPromise componentDidMount()");
                const query = this.state.query;
                //example for couchdb query: db.view( 'preisausschreiben/fulltext?startkey="' + inpt + '"&&endkey="' + inpt + '\ufff0"&&reduce=false',
                const url = query? apiUrl + '?startkey="' + query + '"&&endkey="' + query + '\ufff0"&&reduce=false' : apiUrl;
                //not a good place for data fetching, since it only renders when the component first mounts. but I want to rerender when prop value changes
                console.log(url);
                fetch( url, requestOptions )
                    .then( response => response.json() )
                    .then( data => this.setState( { data: data.rows, loading: false } ) )
            }

           render() {
            console.log("hello from withPromise render()");
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