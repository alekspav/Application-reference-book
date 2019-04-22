import React, {Component} from 'react';
import TreeNode from './tree_node.jsx';


export default class TreeView extends Component {
    render() {
        //Получаем данные
        const data = this.props.data;

        var children = [];
        var catalog = data.catalog;

        if (catalog) {
            var _this = this;
            for (var i = 0; i < 20; i++) {
                var node = catalog.array[i];
                children.push(<li className='list-group-item'
                                  key={node.global_id}
                >
                    {node.Name}
                </li>);

            }


            return (
                <div id='treeview' className='treeview'>
                    <ul className='list-group' class="tree">
                        {children}
                    </ul>
                </div>
            );
        }
    }
}
