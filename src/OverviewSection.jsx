import React from 'react';
import { Row, Col } from 'antd';

import niceJoinHelper from './niceJoinHelper';
import dateHelper from './dateHelper';

export default function OverviewSection( props ) {

    const taskTypes=props.taskTypes;
    const occasion=props.occasion;
    const tender=props.tender.map( tparticipant => tparticipant.name );
    const series=props.series;
    const duration=props.duration.map( date => dateHelper(date) );
    const place=props.place;
    let pAmount;

    console.log(tender);

    if (props.pAmount) { pAmount=props.pAmount.filter( nof => !nof.hasOwnProperty("wettbewerbskontext") ) }

    const contestTypes = taskTypes.map( taskType => { switch (taskType) {
                                                                            case "zu vertonender Text":
                                                                                return "Dichtung zur Vertonung";
                                                                            case "Komposition":
                                                                                return "Komposition";
                                                                            case "Text über Musik":
                                                                                return "Schrift über Musik";
                                                                            case "Sonstiges":
                                                                                return "Sonstiges";
                                                                            case "Performance":
                                                                                return "Gesang/Instrumentalspiel";
                                                                            default:
                                                                                return "[Fehler bei der Zuordnung]";
                                                                        } } );
    
    const uniqContTypes=[...new Set(contestTypes)];                                                                        

    return(
    <div>
        <Row>
            <Col span={20} offset={0}>
                <div>
                <h3><p>
                    <span>{ "Wettbewerb für " + niceJoinHelper(uniqContTypes) }</span><br />
                    { tender.length>0 ? <span>{"Ausgeschrieben von: " + tender.join(", ")}<br /></span> : "" }
                    { duration ? (duration[0]!==duration[1] ? <span>{duration[0] + " bis " + duration[1] }</span> : <span>{duration[0]}</span>) : ""}, {place ? place : ""} <br />
                    { series ? <span>{ 'Teil der Serie: "' + series.serienBezeichnung + '"'  }<br /></span> : "" }
                    { occasion ? <span>{ "Anlass: " + occasion }<br /></span> : "" }
                    { pAmount&&pAmount.length>0 ? <span>{ "Zahl der TeilnehmerInnen: " + pAmount.map( amount => amount.anzahl ).join(", ") }</span> : "" }
                    </p></h3>
                </div>
            </Col>
        </Row>
    </div>
    );
}