import React from 'react';

import OverviewSection from "./OverviewSection";
import Tasks from './Tasks';
import TaskTabs from './TaskTabs';

export default function OverviewTaskSegment( props ) {

    return(
        <div>
            <OverviewSection occasion={props.occasion} duration={props.duration} place={props.place} tender={props.tender} series={props.series} pAmount={props.pAmount} taskTypes={props.taskTypes} />

            {props.subcompetitions
                        ? <div><h3>Aufgaben nach Teilwettbewerb</h3><TaskTabs tasks={props.tasks} subcompetitions={props.subcompetitions} conditions={props.conditions} formalia={props.formalia} /></div>
                        : <div><h3>Aufgaben</h3><Tasks tasks={props.tasks} conditions={props.conditions} formalia={props.formalia} /></div>}
        </div>
    );

}