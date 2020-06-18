//higher order component to wrap all components that need data fetched from elasticsearch
//elasticsearch 1.76 is expected

import React from 'react';
import elasticsearch from 'elasticsearch';

import { Spin } from 'antd';

import * as packageJSON from '../package.json';

console.log("couchdb: " +packageJSON.default.config.basename);

let client = new elasticsearch.Client({
    host: packageJSON.default.config.elasticsearch,
    //host: 'search.musical-competitions.uni-koeln.de:80',
    log: 'trace'
});


function fetchFromES( strQueryObj, optionObj ) {

    const options = optionObj || {};
    //const index = 'couchdata3';
    const index = 'preisausschreibendb';
    //const doctype = type || '_all';
    //maybe I could have used withESData if I would
    //const fields = fields || '_all';
    //const sort = options.sort || "";
    //const from = options.offset || 0;
    const filterTimeSpan = options.filterTimeSpan || {};
    const filterTaskTypes = options.filterTaskTypes || {};
    const filterCountry = options.filterCountry || {};
    //const filterObject = options.filterObj || {};
    const queryObject = strQueryObj;

    //console.log(view);
    /*client.ping({
        // ping usually has a 3000ms timeout
        requestTimeout: 1000
      }, function (error) {
        if (error) {
          console.trace('elasticsearch cluster is down!');
        } else {
          console.log('All is well');
        }
      });*/

    let taskTypeFilter = {
        nested: {
            path: "aufgaben",
            filter: {
                and: [
                    /*{
                        term: { systematik: "kantate" }
                    }*/
                ]
            }
        }
    }
    if ( filterTaskTypes.length>0 ) {
        taskTypeFilter.nested.filter.and.push( { terms: { "aufgaben.aufgabentyp.raw": filterTaskTypes } } );
    } else {
        taskTypeFilter = {};
    }

    let timeSpanFilter = {
        range: {
            esStart: {
                from: "1801-01-01",
                to: "1899-12-31"
            }
        }
    }
    
    if (!isNaN(filterTimeSpan[0]&&!isNaN(filterTimeSpan[1])) ) {
        timeSpanFilter.range.esStart.from=(1800+filterTimeSpan[0]).toString()+"-01-01"
        timeSpanFilter.range.esStart.to=(1800+filterTimeSpan[1]).toString()+"-12-31"
    } else {
        timeSpanFilter = {}
    }

    let countryFilter = {
        nested: {
            path: "ereignisse",
            filter: {
                and: [
                    /*{
                        term: { esCountry: "*" }
                    }*/
                ]
            }
        }
    }

    if ( filterCountry.length>0 ) {
        countryFilter.nested.filter.and.push( { terms: { "esCountry": filterCountry } } );
    } else {
        countryFilter = {};
    }
      
      /*
      let sortObj = {};
      console.log("object key length: "+ Object.keys(sort).length)
      if (Object.keys(sort).length>0&&sort!=="") {
          sortObj[sort.on] = {order: sort.order};
      }
      */

      client.search({
        index: index,
        type: 'contest',
        body: { 
            //sort: [sortObj],
            size: 1500,
            fields: ["esPlacename", "esGeoP"],
            query:
                {
                    filtered: {
                        query: queryObject,
                        //filter: filterObject
                        //for testing purposes a fixed filter object is used below; delete after testing and use line above
                        filter: {
                            and: [taskTypeFilter, timeSpanFilter, countryFilter]
                            
                        }
                }
            }
        }
    }).then( resp => this.setState({ data: resp.hits.hits, loading: false, hitsCount: resp.hits.total }), err => console.trace(err.message) )
}

export default function withESData( WrappedComponent ) {
    
    return(
        class extends React.Component {
            constructor( props ) {
                super( props );
                this.state = {
                    loading: true,
                    data: null,
                    hitsCount: null
                }
                this.fetchData= fetchFromES.bind(this);
            }

            componentDidMount() {
                //console.log("hello from withESData componentDidMount()");
                //there is no this.props.view
                this.fetchData( this.props.strQuery, {/*filterObj: this.props.filterObj,*/ filterCountry: this.props.filterCountry, filterTimeSpan: this.props.filterTimeSpan, filterTaskTypes: this.props.filterTaskTypes, /*offset: this.props.offset, sort: this.props.sort, strQuery: this.props.strQuery*/ } );
            }

            componentDidUpdate( prevProps ) {

                //there is something wrong here: prevProps.filterObj shows the current, not the previous props
                //because of this the comparison below does not work
                console.log("prevProps filterCountry:" + JSON.stringify(prevProps.filterCountry));

                //if I want rerendering when offset is changed, I will have to include a comparison of the offset parameter
                //same with other parameters/props

                if (
                        (JSON.stringify(this.props.strQuery) !== JSON.stringify(prevProps.strQuery))
                //        ||(this.props.offset !== prevProps.offset)
                //        ||(this.props.sort !== prevProps.sort)
                        ||(JSON.stringify(this.props.filterTimeSpan) !== JSON.stringify(prevProps.filterTimeSpan))
                        ||(JSON.stringify(this.props.filterCountry) !== JSON.stringify(prevProps.filterCountry))
                        ||(JSON.stringify(this.props.filterTaskTypes) !== JSON.stringify(prevProps.filterTaskTypes))
                        //||(JSON.stringify(this.props.filterObj) !== JSON.stringify(prevProps.filterObj))
                    ) {
                    console.log(this.props.filterCountry, JSON.stringify(prevProps.filterCountry) );
                    this.fetchData( this.props.strQuery, {/*filterObj: this.props.filterObj,*/ filterCountry: this.props.filterCountry, filterTimeSpan: this.props.filterTimeSpan, filterTaskTypes: this.props.filterTaskTypes, /*offset: this.props.offset, sort: this.props.sort, strQuery: this.props.strQuery*/ } );
                }
            }

            render() {
                const { hocProp, ...passthroughProps } = this.props;
                const fetchedData = this.state.data;
                const hitsCount = this.state.hitsCount;
                //const isLoading = this.state.loading;

                //console.log(fetchedData);

                if (this.state.loading) {
                    return (<div style={ {marginTop: 200} }><Spin size="large" tip="Die Daten werden geladen." /></div> );
                } else {
                    return(
                        <WrappedComponent requestData={fetchedData} hitsCount={hitsCount} {...passthroughProps} />
                    );
                }
            };
        }
    );
}