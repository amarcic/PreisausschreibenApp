import React from 'react';

import { List, Card } from 'antd';

export default function SeriesPage( props ) {
    console.log( props.requestData );

    return(
        <List
            grid={{ gutter:16, column: 4}}
            dataSource={props.requestData}
            renderItem={ item => (
                <List.Item>
                    <Card title={item.vorname + " " + item.nachname}>
                        <span>
                            {item.aufgaben }
                        </span>
                        <ul>
                            {item.ereignisse.map( ereignis => <li>  {(ereignis.zeit? ereignis.zeit.datum : "") + ", " + ereignis.ereignistyp + ", " + ( ereignis.ort? ereignis.ort.ortsname : "" )} </li>)}
                        </ul>
                    </Card>
                </List.Item>
                )
            }
        />
    );
}