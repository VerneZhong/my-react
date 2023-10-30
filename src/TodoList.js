import React, {Component, Fragment} from 'react';
import './style.css'
import TodoItem from "./TodoItem";

class TodoList extends Component {

    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '', list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
        return (<Fragment>
            <div>
                {// jsx注释
                    /*下面是input框*/
                    // 输入框
                }
                <label htmlFor='insertArea'>输入内容</label>
                <input id='insertArea'
                       className='input'
                       onChange={this.handleInputChange}
                       value={this.state.inputValue}/>
                <button onClick={this.handleBtnClick}>submit</button>
            </div>
            <ul>
                {this.getTodoItem()}
            </ul>
        </Fragment>)
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            // 父组件向子组件传递参数和函数
            // 通过属性的形式向子组件传递数据和方法
            return (
                <TodoItem
                    key={index}
                    content={item}
                    deleteItem={this.handleItemDelete}
                    index={index}/>
            )
        })
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))

        // 以下写法不推荐
        // this.setState({
        //     inputValue: e.target.value
        // })
    }

    handleBtnClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue], inputValue: ''
        }))

        // this.setState({
        //     list: [...this.state.list, this.state.inputValue], inputValue: ''
        // })
    }

    handleItemDelete(index) {
        // immutable
        // state 不允许我们做任何的改变
        // const list = [...this.state.list];
        // list.splice(index, 1);

        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list};
        })

        // this.setState({
        //     list: list
        // })
    }
}


export default TodoList;