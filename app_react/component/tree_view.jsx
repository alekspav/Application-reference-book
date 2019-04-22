import React, { Component } from 'react';
import TreeNode from './tree_node.jsx';


export default class TreeView extends Component {
    render() {
        //Получаем данные
        const  data = this.props.data;

        var children = [];
        var catalog = data.catalog;

        if (catalog) {
            var _this = this;
            catalog.forEach(function (node) {
                children.push(<TreeNode node={node}
                                        level={1}
                                        visible={true}
                                        options={_this.props}/>);
            });
        }


        return "";/*(
            <div id='treeview' className='treeview'>
                <ul className='list-group'>
                    {children}
                </ul>
            </div>
        );*/
    }
}
