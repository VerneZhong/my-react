import React, {Component} from "react";

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return <div onClick={this.handleClick}>{this.props.content}</div>
    }

    handleClick() {
        // 子组件通过this.props来接收父组件传递的参数和方法
        this.props.deleteItem(this.props.index);
    }
}

export default TodoItem;