import React from 'react';
import { Tabs } from 'antd';

import Tasks from './Tasks';

const TabPane = Tabs.TabPane;

export default function TaskTabs( props ) {

    const subcompetitions = props.subcompetitions;
    const tasks = props.tasks;
    const formalia = props.formalia;
    const conditions = props.conditions || [];



    const taskBySubComp = {};
    //console.log(tasks);
    //for each subcompetition there should be a value on the object taskBySubComp, so with the string for the subcomp the task value can be accessed for display
    tasks.forEach( task => !taskBySubComp[task.wettbewerbskontext]? taskBySubComp[task.wettbewerbskontext]=[{ aufgabentyp: task.aufgabentyp, spezifizierung: task.spezifizierung }] : taskBySubComp[task.wettbewerbskontext].push({ aufgabentyp: [task.aufgabentyp], spezifizierung: [task.spezifizierung] }) );

    return(
        <div style={{backgroundColor: "white", border: "1px solid #E2E8F0"}} >
                <Tabs>
                    {subcompetitions.map( (subcomp) =>
                        <TabPane tab={subcomp} key={subcomp}>
                            {taskBySubComp.hasOwnProperty(subcomp)&&
                            <Tasks tasks={taskBySubComp[subcomp]} conditions={conditions.filter(condition=>condition.wettbewerbskontext===subcomp)} /*formalia={formalia}*/ />}

                        </TabPane>    
                    )}                    
                </Tabs>
            </div>

    );
}