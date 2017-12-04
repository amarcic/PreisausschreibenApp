import React from 'react';

import { Table, Layout } from 'antd';

export default function PersonPage( props ) {

    const data = props.requestData;

    return(
        <Layout>hallo {data.name.vorname} {data.name.nachname}!</Layout>
    );
}