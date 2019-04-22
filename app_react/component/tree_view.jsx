import React, {Component} from 'react';


export default class TreeView extends Component {
    render() {
        //Получаем данные bиз свойства
        const data = this.props.data;

        var children = [];

        //Массив каталогов
        var catalog = data.catalog;

        if (catalog) {
            var _this = this;

            //По первым 100 элементам, чтобы сильно не грузить браузер
            for (var i = 0; i < 100; i++) {
                var node = catalog.array[i];

                //Кладем элемент li список
                children.push(<li className='list-group-item'
                                  key={node.global_id}
                >
                    {node.Name}({node.Nomdescr})
                </li>);

            }

            //Возвращаем список
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
