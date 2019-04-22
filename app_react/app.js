import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import TreeView from './component/tree_view.jsx';


//Получаем xml с публичного ресурса
axios.get(`/xml/okpd2.xml`)
    .then(res => {
        const data = res.data;

        var parseString = require('xml2js').parseString;
        parseString(data, function (err, result) {
            console.log(result);
        });

        // Дерево
        ReactDOM.render(<TreeView data={data} color={"#428bca"} />, document.getElementById("app"));

    });

