//main file for react application for the DFG funded project: Musikalische Preisausschreiben 1800 bis 1871: Grundriss und Datenbank
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import deDE from 'antd/lib/locale-provider/de_DE';
//import 'antd/dist/antd.css';


import Layout from "./Layout";

console.log("it works!");
const app = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <LocaleProvider locale={deDE}>
            <Layout/>
        </ LocaleProvider>
    </BrowserRouter>,
    app
);
