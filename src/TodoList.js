import React, {Component, Fragment} from 'react';

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
                <div><input
                    onChange={this.handleInputChange.bind(this)}
                    value={this.state.inputValue} />
                    <button>submit</button>
                </div>
                <ul>
                    <li>学日语</li>
                    <li>Learning React</li>
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
}


export default TodoList;