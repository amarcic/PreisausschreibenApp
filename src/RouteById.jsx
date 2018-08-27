//the whole thing is not ideal, since the same data is fetched twice. this means a list with 100 Jury Mmbers creates 100 roundtrip to the server... but for now it works.

import React from 'react';
import { Link } from 'react-router-dom';

export default function RouteById( props ) {

let data = props.requestData;
let linkLabel = props.text;

let route = "";

//console.log( "id: " + data._id + ", type: " + data.type );

switch( data.type ) {
    case "person": route="/dokumente/person/"+data._id; break;
    case "corporation": route = "/dokumente/koerperschaft/"+data._id; break;
}

//console.log("route: " + route + ", text: " + linkLabel);

return(
<Link to={route}>{linkLabel}</Link>
);
}
