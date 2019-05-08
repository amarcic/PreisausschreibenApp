import React from 'react';
import { Table, Input, Button, Icon, Drawer, Badge } from 'antd';
import { Link } from 'react-router-dom';

export default class ParticipantSegment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
    }

    getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{padding: 8}} >
                <Input
                    ref={ node => {this.searchInput = node } } 
                    placeholder={ 'Search ' + dataIndex }
                    value={ selectedKeys[0] }
                    onChange={ event => setSelectedKeys( event.target.value ? [event.target.value] : [] ) }
                    onPressEnter={ () => this.handleSearch(selectedKeys, confirm) } 
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={ () => this.handleSearch(selectedKeys, confirm) }
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >Search</Button>
                <Button
                    onClick={() => this.handleReset(clearFilters)}
                    size="small"
                    style={{ width: 90 }}
                >Reset</Button>
            </div>
        ),
        filterIcon: filtered => <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible)=> {
            if(visible) {
                setTimeout( () => this.searchInput.select() );
            }
        },
        render: (text, record) => <Link to={"/dokumente/" + record.identifier[0] } >{text}</Link>
    })

    handleSearch = ( selectedKeys, confirm) => {
        confirm();
        this.setState( {searchText: selectedKeys[0]} )
    }

    handleReset = (clearFilters) => {
        clearFilters();
        this.setState( {searchText: ''} );
    }

    render() {

        const columns = [
            {
                title: "Name",
                dataIndex: "name",
                key: "name",
                sorter: (a, b) =>  {if ( a.name > b.name ) {return 1;} 
                                    if ( a.name < b.name ) {return -1;}
                                    return 0;},
                sortDirection: ['descend', 'ascend'],
                ...this.getColumnSearchProps('name')
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
                <h2>Beteiligte { this.props.comments && this.props.comments.length>0 ? <span style={{float: "right"}} ><Badge count={this.props.comments.length} ><Button type="normal" onClick={this.props.showDrawer} >Ergänzende Informationen</Button></Badge></span> : "" }</h2>
                <Table columns={columns} dataSource={this.props.participants} />
                { this.props.comments && this.props.comments.length>0 && <Drawer 
                    title="Ergänzende Informationen zu den Ereignissen"
                    placement="right"
                    closable={false}
                    onClose={this.props.onClose}
                    visible={this.props.visible}
                    width="30%"
                    
                >
                    {this.props.comments.map( (comment, index) => <p key={index}>{comment.text}</p> )}
                </Drawer>}
            </div>
        );
    }
}