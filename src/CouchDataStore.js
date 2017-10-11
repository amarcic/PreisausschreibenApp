import events from 'events';

let emitter = new events.EventEmitter();

let queryResults = [ 'achim' ];

/*
let promise1 = fetch('http://134.95.80.232:5984/preisausschreiben/_design/preisausschreiben/_view/all_keywords?group_level=1&&reduce=true', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    mode: 'cors'
})*/
  //  .then( response => response.json() )
   // .then( data => { console.log( data.rows); } )
;

export default {
    getResults: function( callback ) {                   
        return queryResults.concat();
    },

    subscribe: function( callback ) {
        emitter.addListener( 'update', callback );
    },

    unsubscribe: function( callback ) {
        emitter.removeListener( 'update', callback );
    },

    newQueryResult: function( queryResult ) {
        queryResults.push( queryResult );
        emitter.emit( 'update' );
    }
}