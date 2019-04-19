import React, { Component } from 'react';
import TreeNode from './tree_node.jsx';


export default class TreeView extends Component {

    constructor(props) {
        super(props);
    }

    handleEvent = () => {
        console.log(this.props);
    }

    render() {

        var children = [];
        if (data) {
            var _this = this;
            data.forEach(function (node) {
                children.push(<TreeNode node={node}
                                        level={1}
                                        visible={true}
                                        options={_this.props}/>);
            });
        }


        return (
            <div id='treeview' className='treeview'>
                <ul className='list-group'>
                    {children}
                </ul>
            </div>
        );
    }
}
