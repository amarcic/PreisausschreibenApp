import React from 'react';
import { Row, Col, List, Tag, Tabs, Icon, Popover } from 'antd';
import { Link } from 'react-router-dom';

const TabPane = Tabs.TabPane;

export default function SubcompetitionTabs( props ) {

    const participants = props.participants;
    const subcompetitions = props.subcompetitions;
    const rankedParticipants = props.ranked;
    const awards = props.awards;
    const teilnahmevoraussetzungen = props.teilnahmevoraussetzungen;
    const teilnehmerleistungen = props.teilnehmerleistungen;

    let subcompParticipants = {};
    participants.forEach( participant => {
        if(participant.wettbewerbskontext) {
            participant.wettbewerbskontext.forEach( context =>
            {
                if(!subcompParticipants[context]) {
                    subcompParticipants[context] = [];
                }
                subcompParticipants[context].push( participant );
            }
            );
        } 
    } );
    //console.log(subcompParticipants);

    return(
        <div style={{marginTop: 50}} >
                <Tabs defaultActiveKey="0">
                    {subcompetitions.map( (subcomp, index) => 
                        <TabPane tab={subcomp} key={index}>
                        {/*the following line checks if there are participants with the role "Jurymitglied"; in that case the display of jury info will be rendered */}
                        { subcompParticipants[subcomp] && subcompParticipants[subcomp].filter( participant => participant.rolle.indexOf( "Jurymitglied" )>=0 ).length>1
                             && <Row>
                            <List 
                                
                                header={<div><h3>Jury</h3></div>}
                                size="small"
                                dataSource={ subcompParticipants[subcomp].filter( participant => participant.rolle.indexOf( "Jurymitglied" ) >= 0 ) }
                                    //{participants.filter(participant => participant.rolle.indexOf( "Jurymitglied" ) >=0 && ( participant.wettbewerbskontext ? participant.wettbewerbskontext.indexOf(subcomp) >= 0 : true ) ) }
                                renderItem={ item =>
                                    <List.Item>
                                        <List.Item.Meta 
                                            title={item.name}
                                            description={item.anmerkung}
                                        />
                                        {/*
                                        <Col span={6} offset={1}>
                                            {item.name}
                                        </Col>
                                        <Col span={17}>
                                            { item.anmerkung ? item.anmerkung : "" }
                                        </Col>
                                        */}
                                    </List.Item>
                                }
                            />
                        </Row>}
                        <Row>
                            {awards.map( award =>
                                {
                                    if(award.wettbewerbskontext && award.wettbewerbskontext===subcomp) {
                                        return( 
                                            <List 
                                                key={subcomp}
                                                header={<div><h3>Auszeichnungen und Preisträger </h3><br /> {award.auszeichnungsarten? award.auszeichnungsarten.map( prize => <Tag key={prize}>{prize}</Tag> ) : "Verliehne Auszeichnungen sind nicht bekannt" }</div>}
                                                dataSource={award.platzierungen.sort( (a,b) => a.rang - b.rang )}
                                                renderItem={ item =>
                                                    <List.Item>
                                                        <Col span={3} offset={1}>
                                                            { item.rang==="n" ? "nachrangig" : ( item.rang==="ak" ? "außer Konkurrenz" : item.rang + ". Rang" ) }
                                                        </Col>
                                                        <Col span={12}>
                                                            {item.beschreibung}
                                                        </Col>
                                                        <Col span={8}>
                                                        <ul>
                                                            {item.platzierte.map( platzierter => <li key={platzierter}> {participants.map( participant => participant.identifier.indexOf(platzierter)===0? participant.name : "" )
                                                        } { teilnehmerleistungen && teilnehmerleistungen.map( leistung => leistung.teilnehmer.indexOf(platzierter) >= 0 ? " mit: " + leistung.beschreibung  : "" ) } </li>)}
                                                            {/*<Tag key={platzierter}>{participants.map( participant => participant.identifier.indexOf(platzierter)===0? participant.name : "" )}</Tag> )*/}
                                                        </ul>
                                                        </Col>
                                                    </List.Item>
                                                }
                                            />
                                        );
                                    }
                                }
                            )
                            }
                        </Row>
                        { subcompParticipants[subcomp] && <Row>
                            <List 
                                header={<div><h3>Weitere Teilnehmer in diesem Teilwettbewerb</h3></div>}
                                grid={ {column: 2} }
                                dataSource={ subcompParticipants[subcomp].filter( participant =>
                                    participant.rolle.indexOf( "TeilnehmerIn" ) >= 0 && rankedParticipants.indexOf( participant.identifier ) === -1
                                ) }
                                renderItem={ item =>
                                    <List.Item>
                                        <List.Item.Meta 
                                            title={item.name}
                                            description={item.anmerkung}
                                        />
                                        {/*<Col span={3} offset={1}>
                                            {item.name} 
                                        </Col>
                                        <Col span={6}>
                                            { item.anmerkung }
                                        </Col>
                                */}                   
                                    </List.Item>
                                }
                            />
                        </Row>}                    
                        { teilnahmevoraussetzungen && teilnahmevoraussetzungen.filter( criterion => criterion.wettbewerbskontext === subcomp).length > 0
                        && <Row>
                            <List 
                                header={<h3>Teilnahmevoraussetzungen</h3>}
                                dataSource={teilnahmevoraussetzungen.filter( criterion => criterion.wettbewerbskontext === subcomp)}
                                renderItem={ item =>
                                    <List.Item>
                                        <Col span={3} offset={1} >
                                            {item.kriterium.map( crit => <Tag>{crit}</Tag> )}
                                        </Col>
                                        <Col span={20}>
                                            {item.beschreibung}
                                        </Col>
                                    </List.Item>
                                }
                            />
                        </Row>}
                        </TabPane>
                    )}
                </Tabs>
            </div>

    );
}