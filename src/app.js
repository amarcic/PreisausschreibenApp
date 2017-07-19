//main file for react application for the DFG funded project: Musikalische Preisausschreiben 1800 bis 1871: Grundriss und Datenbank
import React from 'react';
import ReactDOM from 'react-dom';

import Layout from "./Layout";

console.log("it works!");
const app = document.getElementById('mount');

ReactDOM.render(
    <Layout/>,
    app
);
