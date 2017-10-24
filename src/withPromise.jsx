//planing hoc for data fetching
// arguments component; source/api; query
//extra funtionality of enhanced component: loading, Error
// should isLoading, Error be optional?
import React from 'react';

export default function withPromise( promProp, Wrapped ) { 
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
                    //...
                )
            }

            render() {
                //...
            }
        }
    )
}