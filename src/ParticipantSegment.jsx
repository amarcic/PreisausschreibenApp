import React from 'react';
import { Row, Col, Collapse, Table } from 'antd';


const Panel = Collapse.Panel;

export default function ParticipantSegment( props ) {

    const participants = props.participants;

    const columns = [
        {
            title: "Name",
            dataIndex: "name"
        },
        {
            title: "Rolle",
            dataIndex: "rolle"
        }
    ]



    return(
        <div>
            <Table columns={columns} data={participants} />
        </div>
    );

}