import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TodoList from './TodoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
// JSX语法
root.render(
    <React.StrictMode>
        {/*<App/>*/}
        <TodoList/>
    </React.StrictMode>
);

