//import React from 'react';

import CouchDataStore from './CouchDataStore';

export default function GetFromCouch( props ) {

    fetch('http://134.95.80.232:5984/preisausschreiben/_design/preisausschreiben/_view/all_keywords?group_level=1&&reduce=true', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    mode: 'cors'
    })
    .then( response => response.json() )
    .then( data => { CouchDataStore.newQueryResult( data.rows[0].Key ); } )

}