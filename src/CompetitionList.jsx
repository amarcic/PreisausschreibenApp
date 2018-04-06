import React from 'react';
import { Link } from 'react-router-dom';

export default function CompetitionList(props) {
    const data = props.requestData;
    console.log("this: " + data);

    return(
        <ul>
            {data.map( item => <li> <Link to={"/dokumente/preisausschreiben/" + item.id}>{item.value.bezeichnung}, {item.value.ort}</Link> </li> )}
        </ul>
    );

}