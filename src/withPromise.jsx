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
                fetch( apiUrl, requestOptions )
                    .then( response => response.json() )
                    .then( data => this.setState( { data: data.rows, loading: false } ) )
            }

           render() {
               const { hocProp, ...passthroughProps } = this.props;
               const fetchedData = this.state.data;
               const isLoading = this.state.loading;

               return(
                   <WrappedComponent requestData={fetchedData} isLoading={this.state.loading} {...passthroughProps} />
               );
            }
        
        }
    );
}