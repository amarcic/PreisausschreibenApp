import React from 'react';
import { Link } from 'react-router-dom';

export default function CompetitionList(props) {
    //const data = [...new Set(props.requestData.map( item => item ))];
    //const data = props.requestData;
    let compsIds = [];
    const data = props.requestData.filter( item => compsIds.indexOf(item.id)===-1&&compsIds.push(item.id) );

    console.log(data);

    return(
        <ul>
            {data.map( item => <li key={item.id}> <Link to={"/dokumente/" + item.id}>{item.value.bezeichnung}, {item.value.ort}</Link> </li> )}
        </ul>
    );

}