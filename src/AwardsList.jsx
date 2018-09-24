import React from 'react';
import { Row, Col, List } from 'antd';
import { Link } from 'react-router-dom';

export default function AwardsList( props ) {
    
    let awards = props.awards;
    let awardedParticipants = props.awardedParticipants;

    let awardedParticipantsByRank = {};

    if(awards[0]&&awards[0].platzierungen) { awards[0].platzierungen.forEach( rnk => { if(!awardedParticipantsByRank[rnk.rang]) awardedParticipantsByRank[rnk.rang] = {};
                                                                            rnk.platzierte.forEach( plcd => { 
                                                                                let participant = awardedParticipants.find( particip => particip.identifier[0] === plcd);
                                                                                console.log("placed: " + plcd)
                                                                                console.log(participant);                                                                               
                                                                                
                                                                                //if (participant.kollaboration) {participant.kollaboration.forEach( collab => collaborators.push( awardedParticipants.find( particip => particip.identifier[0] === collab ) ) )   }
                                                                                awardedParticipantsByRank[rnk.rang][plcd]=participant ;      

                                                                                if(participant.hasOwnProperty('kollaboration')) {
                                                                                    let collaborators=[];
                                                                                    participant.kollaboration.forEach( coll => awardedParticipants.find( particip2 => particip2.identifier[0] === coll) ? collaborators.push(awardedParticipants.find( particip2 => particip2.identifier[0] === coll).name) : collaborators.push("nicht gefunden") );
                                                                                    awardedParticipantsByRank[rnk.rang][plcd]['colls']= "gemeinsam mit " + collaborators.join(", ");
                                                                                }
                                                                            }  
                                                                        ) }
                                );
                            }

    console.log("platzierte:");
    console.log(awards);

    return(
        <Row>
            {
                awards.map( award => {
                    return( <List 
                        key={award.auszeichnungsarten.toString() }
                        header={<div><h3>Auszeichnungen und PreisträgerInnen </h3><br /> {award.auszeichnungsarten? "Auszeichnungsarten: " + award.auszeichnungsarten.join(", ") : "Verliehne Auszeichnungen sind nicht bekannt" }</div>}
                        dataSource={award.platzierungen.sort( (a,b) => a.rang - b.rang )}
                        renderItem={ item =>
                            <List.Item>
                                <Col span={5} offset={1}>
                                    { item.rang==="n" ? "nachrangig" : ( item.rang==="ak" ? "außer Konkurrenz" : item.rang + ". Rang" ) }
                                </Col>
                                <Col span={10}>
                                    {item.beschreibung}
                                </Col>
                                <Col span={8}>
                                {awardedParticipants && <ul>
                                    {item.platzierte.map( (placed, i) => 
                                        {return (<li style={{listStyleType: 'none'}} key={i}>
                                            { placed==='nv' ? "nicht vergeben" 
                                                                /*: awardedParticipants.find( participant => participant.identifier[0]===placed ) ? 
                                                                        <span>{ !awardedParticipants.find( participant => participant.identifier[0]===placed ).kollaboration ?
                                                                             <Link to={"/dokumente/" + awardedParticipants.find( participant => participant.identifier[0]===placed ).identifier[0]} >{awardedParticipants.find( participant => participant.identifier[0]===placed ).name}</Link>
                                                                            :
                                                                            <Link to={"/dokumente/" + awardedParticipants.find( participant => participant.identifier[0]===placed ).identifier[0]} >{awardedParticipants.find( participant => participant.identifier[0]===placed ).name}</Link>
                                                                            }
                                                                         {( awardedParticipants.find( participant => participant.identifier[0]===placed ).hasOwnProperty('leistungen') ?
                                                                                ", mit: " + awardedParticipants.find(participant => participant.identifier[0]===placed ).leistungen.join(", ")
                                                                            : "") }</span>
                                                                                :  placed + "(nicht gefunden...)"*/
                                                                :    <span><Link to={"/dokumente/" + awardedParticipantsByRank[item.rang][placed].identifier[0]} >{awardedParticipantsByRank[item.rang][placed].name}</Link>
                                                                {awardedParticipantsByRank[item.rang][placed].hasOwnProperty('leistungen') ? ", mit: " + awardedParticipantsByRank[item.rang][placed].leistungen.join(", ") : "" }</span>}
                                                                {awardedParticipantsByRank[item.rang][placed].hasOwnProperty('colls') ? " (" + awardedParticipantsByRank[item.rang][placed].colls + ")" : "" }
                                        </li>);}
                                        )}
                                </ul>}
                                </Col>
                            </List.Item>}
                        /> );
                } )
            }
        </Row>
    );
}

//todo catch error in case the identifier for the reward is not found among the participants