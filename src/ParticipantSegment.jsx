import React from 'react';
import { Row, Col, Collapse, Table } from 'antd';


const Panel = Collapse.Panel;

export default function ParticipantSegment( props ) {

    const participants = props.participants;

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            sorter: (a, b) =>  {if ( a.name > b.name ) {return 1;} 
                                if ( a.name < b.name ) {return -1;}
                                return 0;},
            sortDirection: ['descend', 'ascend']
        },
        {
            title: "Anmerkung",
            dataIndex: "anmerkung"
        },
        {
            title: "Rolle",
            dataIndex: "rolle",
            render: rolle => (
                <span>
                    {rolle.join(", ")}
                </span>
            ),
            filters: [
                {
                    text: "TeilnehmerIn",
                    value: "TeilnehmerIn"
                },
                {
                    text: "Jurymitglied",
                    value: "Jurymitglied"
                },
                {
                    text: "ausschreibende Institution/Person",
                    value: "ausschreibende Institution/Person"
                },
                {
                    text: "InterpretIn",
                    value: "InterpretIn"
                },
                {
                    text: "OrganisatorIn/RepräsentantIn",
                    value: "OrganisatorIn/RepräsentantIn"
                },
                {
                    text: "MäzenIn",
                    value: "MäzenIn"
                },
                {
                    text: "AutorIn",
                    value: "AutorIn"
                },
                {
                    text: "JournalistIn",
                    value: "JournalistIn"
                },
                {
                    text: "KomponistIn/ArrangeurIn",
                    value: "KomponistIn/ArrangeurIn"
                },
                {
                    text: "LehrerIn von TeilnehmerIn",
                    value: "LehrerIn von TeilnehmerIn"
                },
                {
                    text: "Sonstige",
                    value: "Sonstige"
                }
            ],
            onFilter: (value, record) => record.rolle.indexOf(value) >= 0
        },
        {
            title: "Wettbewerbskontext",
            dataIndex: "wettbewerbskontext"
        }
    ]

    return(
        
        <div>
            <h3>Beteiligte</h3>
            <Table columns={columns} dataSource={participants} />
        </div>
    );

}