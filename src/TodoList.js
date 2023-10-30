import React, {Component, Fragment} from 'react';
import './style.css'
import TodoItem from "./TodoItem";

class TodoList extends Component {

    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    {
                        // jsx注释
                        /*下面是input框*/
                        // 输入框
                    }
                    <label htmlFor='insertArea'>输入内容</label>
                    <input id='insertArea' className='input'
                        onChange={this.handleInputChange.bind(this)}
                        value={this.state.inputValue}/>
                    <button onClick={this.handleBtnClick.bind(this)}>submit</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            // 父组件向子组件传递参数和函数
                            // 通过属性的形式向子组件传递数据和方法
                            return <TodoItem content={item}
                                             deleteItem={this.handleItemDelete.bind(this)}
                                             index={index} />
                            // <li key={index}
                            //            onClick={this.handleItemDelete.bind(this, index)}
                            //             dangerouslySetInnerHTML={{__html: item}}
                            // >
                            // </li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    handleInputChange(e) {
        // console.log(this);
        this.setState({
            inputValue: e.target.value
        })
    }

    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleItemDelete(index) {
        // immutable
        // state 不允许我们做任何的改变
        const list = [...this.state.list];
        list.splice(index, 1);

        this.setState({
            list: list
        })
    }
}


export default TodoList;