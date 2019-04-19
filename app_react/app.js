import React from 'react';
import ReactDOM from 'react-dom';

import TreeView from './component/tree_view.jsx';


import axios from 'axios';

//Получаем xml с публичного ресурса
axios.get(`/xml/okpd2.xml`)
    .then(res => {
        const data = res.data;

        var parseString = require('xml2js').parseString;
        parseString(data, function (err, result) {
            console.log(result);
        });


        React.render(
            <TreeView data={data} color={"#428bca"} />,

        );


    });

