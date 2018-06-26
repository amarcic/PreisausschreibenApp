import React from 'react';
import { Row, Col, List, Tag, Tabs, Icon, Popover } from 'antd';
import { Link } from 'react-router-dom';

import MemberListJury from './MemberListJury';
import AwardsList from './AwardsList';
import ContestantList from './ContestantList';
import Prerequisits from './Prerequisits';
const TabPane = Tabs.TabPane;

export default function SubcompetitionTabs( props ) {

    const participants = props.participants;
    const subcompetitions = props.subcompetitions;
    //const rankedParticipants = props.ranked;
    const awards = props.awards;
    const teilnahmevoraussetzungen = props.teilnahmevoraussetzungen;
    const teilnehmerleistungen = props.teilnehmerleistungen;
    const teilnehmerInnenzahl = props.teilnehmerInnenzahl;
    const awardedParticipants = participants.filter( participant => participant.hasOwnProperty('ranks') );

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
                <Tabs>
                    {subcompetitions.map( (subcomp, index) => 
                        <TabPane tab={subcomp} key={subcomp}>
                        {/*the following line checks if there are participants with the role "Jurymitglied"; in that case the display of jury info will be rendered */}
                        { subcompParticipants[subcomp] && subcompParticipants[subcomp].filter( participant => participant.rolle.indexOf( "Jurymitglied" )>=0 ).length>1
                             && <MemberListJury juryMembers={ subcompParticipants[subcomp].filter( participant => participant.rolle.indexOf( "Jurymitglied" ) >= 0 ) } /> 
                             /* the code below has been replaced by the component <MemberListJury>
                            <Row>
                            <List 
                                //grid={ subcompParticipants[subcomp].filter( participant => participant.rolle.indexOf( "Jurymitglied" ) >= 0 ).length > 4 ? {column: 2} : {column: 1} }
                                grid={{column: 2}}
                                header={<div><h3>Jury</h3></div>}
                                size="small"
                                dataSource={ subcompParticipants[subcomp].filter( participant => participant.rolle.indexOf( "Jurymitglied" ) >= 0 ) }
                                    //{participants.filter(participant => participant.rolle.indexOf( "Jurymitglied" ) >=0 && ( participant.wettbewerbskontext ? participant.wettbewerbskontext.indexOf(subcomp) >= 0 : true ) ) }
                                renderItem={ item =>
                                    <Col offset={1}>
                                        <List.Item>
                                            <List.Item.Meta 
                                                title={item.name}
                                                description={item.anmerkung}
                                            />
                                        </List.Item>
                                    </Col>
                                }
                            />
                            </Row>*/}
                        {/*award.wettbewerbskontext && award.wettbewerbskontext===subcomp&&*/
                            awards.find( award => award.wettbewerbskontext===subcomp) && <AwardsList awards={awards.filter( award => award.wettbewerbskontext===subcomp) } awardedParticipants={awardedParticipants.filter( participant => participant.wettbewerbskontext.indexOf(subcomp)>-1 )} />
                            /*awards.map( award =>
                                {
                                    if(award.wettbewerbskontext && award.wettbewerbskontext===subcomp) {
                                        return( 
                                            <List 
                                                key={subcomp}
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
                                                        <ul>
                                                            {item.platzierte.map( platzierter => <li key={platzierter}> { platzierter==="nv" ? "nicht vergeben" : participants.find( participant => participant.identifier.indexOf(platzierter)===0 ).name
                                                            //(participants.map( participant => participant.identifier.indexOf(platzierter)===0? participant.name : ("") ) )
                                                        }{ teilnehmerleistungen && teilnehmerleistungen.map( leistung => leistung.teilnehmer && leistung.teilnehmer.indexOf(platzierter) >= 0 ? ", mit: " + leistung.beschreibung  : "" ) } </li>)}
                                                            {//<Tag key={platzierter}>{participants.map( participant => participant.identifier.indexOf(platzierter)===0? participant.name : "" )}</Tag> )}
                                                        </ul>
                                                        </Col>
                                                    </List.Item>
                                                }
                                            />
                                        );
                                    }
                                }
                            )
                            */
                        }
                        { subcompParticipants[subcomp] && <ContestantList contestants={participants.filter( participant => !participant.hasOwnProperty('ranks') && participant.wettbewerbskontext.indexOf(subcomp)>-1 ) } /> }
                        {/*<Row>
                            <List 
                                header={<div><h3>Weitere TeilnehmerInnen in diesem Teilwettbewerb</h3></div>}
                                grid={ {column: 2} }
                                dataSource={ subcompParticipants[subcomp].filter( participant =>
                                    participant.rolle.indexOf( "TeilnehmerIn" ) >= 0 && !participant.ranks /*rankedParticipants.indexOf( participant.identifier[0] ) === -1*
                                ) }
                                renderItem={ item =>
                                    <Col offset={1}>
                                    <List.Item>
                                        <List.Item.Meta 
                                            // there is still a bug in here showing unnecessary comma in some cases
                                            title={ item.name + ( teilnehmerleistungen ? teilnehmerleistungen.map( leistung => leistung.teilnehmer && leistung.teilnehmer.indexOf(item.identifier[0])>0 ? ", mit: " + leistung.beschreibung : "") : "" )}
                                            description={item.anmerkung}
                                        />       
                                    </List.Item>
                                    </Col>
                                }
                            />
                            </Row>*/}                   
                        { teilnahmevoraussetzungen && teilnahmevoraussetzungen.filter( criterion => criterion.wettbewerbskontext === subcomp).length > 0
                        && <Prerequisits prereqs={teilnahmevoraussetzungen.filter( criterion => criterion.wettbewerbskontext === subcomp)} /> }{/*<Row>
                            <List 
                                header={<h3>Teilnahmevoraussetzungen</h3>}
                                dataSource={teilnahmevoraussetzungen.filter( criterion => criterion.wettbewerbskontext === subcomp)}
                                renderItem={ item =>
                                    <List.Item>
                                        <Col span={5} offset={1} >
                                            {item.kriterium.join(", ")}
                                        </Col>
                                        <Col span={18}>
                                            {item.beschreibung}
                                        </Col>
                                    </List.Item>
                                }
                            />
                            </Row>*/}
                        { teilnehmerInnenzahl && teilnehmerInnenzahl.filter( amount => amount.wettbewerbskontext === subcomp).length > 0
                            && <Row>
                                <List
                                    header={<h3>TeilnehmerInnenzahl in diesem Teilwettbewerb</h3>}
                                    dataSource={ teilnehmerInnenzahl.filter( amount => amount.wettbewerbskontext === subcomp ) }
                                    renderItem={ item =>
                                        <List.Item>
                                            <Col span={5} offset={1} >
                                                {item.anzahl}
                                            </Col>
                                            <Col>
                                                {item.anmerkung}
                                            </Col>
                                        </List.Item>
                                    }
                                />
                            </Row>
                        }
                        </TabPane>
                    )}
                </Tabs>
            </div>

    );
}