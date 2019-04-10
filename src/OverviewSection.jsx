import React from 'react';
import { Row, Col } from 'antd';

import niceJoinHelper from './niceJoinHelper';

export default function OverviewSection( props ) {

    const taskTypes=props.taskTypes;
    const occasion=props.occasion;
    const tender=props.tender.map( tparticipant => tparticipant.name );
    const series=props.series;
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
                                                                                return "[keine Zuordnung]";
                                                                        } } );
    
    const uniqContTypes=[...new Set(contestTypes)];                                                                        

    return(
    <div>
        <Row>
            <Col span={20} offset={1}>
                <div>
                <p>
                    <span>{ "Wettbewerb für " + niceJoinHelper(uniqContTypes) }</span><br />
                    { tender.length>0 ? <span>{"Ausgeschrieben von: " + tender.join(", ")}<br /></span> : "" } 
                    { series ? <span>{ 'Teil der Serie: "' + series.serienBezeichnung + '"'  }<br /></span> : "" }
                    {occasion ? <span>{ "Anlass: " + occasion }<br /></span> : "" }
                    { pAmount&&pAmount.length>0 ? <span>{ "Zahl der TeilnehmerInnen: " + pAmount.map( amount => amount.anzahl ).join(", ") }</span> : "" }
                </p>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                {}
            </Col>
        </Row>
    </div>
    );
}