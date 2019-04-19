import React, { Component } from 'react';


export default class TreeNode extends Component {
    constructor(props) {
        super(props);
    }

    handleEvent = () => {
        console.log(this.props);
    }

    render() {
        var children = [];
        if (node.nodes) {
            var _this = this;
            node.nodes.forEach(function (node) {
                children.push(<TreeNode node={node}
                                        level={_this.props.level + 1}
                                        visible={_this.state.expanded && _this.props.visible}
                                        options={options}/>);
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