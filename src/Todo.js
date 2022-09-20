import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoForm from './components/TodoForm';
import Button from './components/Button';
import TodoList from './components/TodoList';

const todoList = ReactDOM.createRoot(document.getElementById('todoList'));
const btnProp = ['모두보기', '미완료 일정', '완료된 일정'];
let type = 0;
let list = [];

function Todo(props) {
    return (<>
    <TodoForm func={addTodo} />
    <Button property={btnProp} type={type} func={onClickBtn}/>
    <TodoList type={type} list={list} actionCheck={actionCheck} actionDelete={actionDelete} />
    </>);
}

function onClickBtn(n) {
    type = n;
    renderList();
};

function addTodo(todo) {
    const tmp = {
        value: todo,
        status: false,
    };
    list.push(tmp);
    renderList();
};

function actionCheck(i) {
    list[i].status = !list[i].status;
    renderList();
}

function actionDelete(i) {
    list.splice(i, 1);
    renderList();
}

function renderList() {
    todoList.render(<TodoList type={type} list={list} actionCheck={actionCheck} actionDelete={actionDelete} />);
}

export default Todo;