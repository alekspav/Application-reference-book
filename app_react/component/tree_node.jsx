import React, { Component } from 'react';


export default class TreeNode extends Component {

    render() {
        var children = [];
        if (node.nodes) {
            var _this = this;
            node.nodes.forEach(function (node) {
                children.push(<li className='list-group-item'
                                  style={style}
                                  onClick={this.toggleSelected.bind(this, node.nodeId)}
                                  key={node.nodeId}>
                    {children}
                </li>);
            });
        }

        return (
            <li className='list-group-item'
                style={style}
                onClick={this.toggleSelected.bind(this, node.nodeId)}
                key={node.nodeId}>
                {children}
            </li>
        );
    }

}