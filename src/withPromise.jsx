//planing hoc for data fetching
// arguments component; source/api; query
//extra funtionality of enhanced component: loading, Error
// should isLoading, Error be optional?
import React from 'react';

export default function withPromise( promProp, WrappedComponent ) { 
    return(
        class extends React.Component {
            constructor( props ) {
                super(props);
                this.state = {
                    loading: true,
                    error: null,
                    value: null
                }
            }

            componentDidMount() {
                this.props[promProp].then(
                    response => response.json()
                )
                .then(
                    json => this.setState( { value: json.rows, loading: false } )
                )
            }

            render() {
                this.state.loading
                    ? <p>this application is currently fetching the data you have requested. let's hope for the best...</p>
                    : <WrappedComponent {...this.props} />;
            }
        }
    )
}