import React from 'react';
import { Row, Col, List } from 'antd';
import { Link } from 'react-router-dom';

export default function AwardsList( props ) {
    
    let awards = props.awards;
    let awardedParticipants = props.awardedParticipants;
    //console.log(awards);
    console.log(awardedParticipants);

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
                                        <li style={{listStyleType: 'none'}} key={i}>
                                            { placed==='nv' ? "nicht vergeben" 
                                                                : awardedParticipants.find( participant => participant.identifier[0]===placed ) ? 
                                                                        <span><Link to={"/dokumente/" + awardedParticipants.find( participant => participant.identifier[0]===placed ).identifier[0]} >{awardedParticipants.find( participant => participant.identifier[0]===placed ).name}</Link>
                                                                         {( awardedParticipants.find( participant => participant.identifier[0]===placed ).hasOwnProperty('leistungen') ?
                                                                                ", mit: " + awardedParticipants.find(participant => participant.identifier[0]===placed ).leistungen.join(", ")
                                                                            : "") }</span>
                                                                                :  placed + "(nicht gefunden...)"
                                                                }
                                        </li>
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