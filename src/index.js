import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import reportWebVitals from './reportWebVitals';

const list = [];
let type = 0;
let state = {
  value: '',
  status: false
}
const todoList = ReactDOM.createRoot(document.getElementById('todoList'));

function TodoForm(props) {
  const [input, setInput] = useState({
    value: "",
  });

  const {value} = input;

  const displayText = (e) => {
    const {value, name} = e.target;
    state.value = e.target.value;
    setInput({
      ...input,
      [name] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    list.push(state);
    state = {
      value: '',
      status: false
    }
    makeList();
    setInput({
      value : "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" value={value} name="value" onChange={displayText} />
      </label>
      <input type="submit" className="invisible"></input><br/>
      <button type="button" className="no-border-button" onClick={() => makeList(0)}>모두 보기</button>|
      <button type="button" className="no-border-button" onClick={() => makeList(1)}>미완료 일정</button>|
      <button type="button" className="no-border-button" onClick={() => makeList(2)}>완료 일정</button>
    </form>
  );
}
  
function handleClick(i) {
  list[i].status = !list[i].status;
  makeList();
}

function actionDelete(i) {
  list.splice(i, 1);
  makeList();
}

function makeList(n) {
  if(n != null) {
    type = n;
  }
  let listItems;
  if(type === 1) {
    listItems = list.map((item, i) =>
    item.status ? null : <li key={i} style={{marginTop: '1rem'}}><button className="no-border-button" onClick={() => handleClick(i)}>✔️</button>
      <b style={item.status ? {textDecoration:'line-through'} : {}}>{item.value}</b>
      <button className="no-border-button" onClick={() => actionDelete(i)}>❌</button></li>
    );
  } else if(type === 2) {
    listItems = list.map((item, i) =>
    item.status ? <li key={i} style={{marginTop: '1rem'}}><button className="no-border-button" onClick={() => handleClick(i)}>✔️</button>
      <b style={item.status ? {textDecoration:'line-through'} : {}}>{item.value}</b>
      <button className="no-border-button" onClick={() => actionDelete(i)}>❌</button></li> : null
    );
  } else {
    listItems = list.map((item, i) =>
    <li key={i} style={{marginTop: '1rem'}}><button className="no-border-button" onClick={() => handleClick(i)}>✔️</button>
      <b style={item.status ? {textDecoration:'line-through'} : {}}>{item.value}</b>
      <button className="no-border-button" onClick={() => actionDelete(i)}>❌</button></li>
    );
  }

  todoList.render(
    <ul>{listItems}</ul>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodoForm />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
