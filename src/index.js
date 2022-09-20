import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import reportWebVitals from './reportWebVitals';

const list = [];
let type = 0;
const todoList = ReactDOM.createRoot(document.getElementById('todoList'));

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      status: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" className="invisible"></input><br/>
        <button type="button" className="no-border-button" onClick={() => this.makeList(0)}>모두 보기</button>|
        <button type="button" className="no-border-button" onClick={() => this.makeList(1)}>미완료 일정</button>|
        <button type="button" className="no-border-button" onClick={() => this.makeList(2)}>완료 일정</button>
      </form>
    )
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    event.preventDefault();
    list.push(this.state);
    this.makeList();
    this.setState({value: ''});
  }
  
  handleClick(i) {
    list[i].status = !list[i].status;
    this.makeList();
  }

  actionDelete(i) {
    list.splice(i, 1);
    this.makeList();
  }

  makeList(n) {
    if(n != null) {
      type = n;
    }
    let listItems;
    if(type === 1) {
      listItems = list.map((item, i) =>
      item.status ? null : <li key={i} style={{marginTop: '1rem'}}><button className="no-border-button" onClick={() => this.handleClick(i)}>✔️</button>
       <b style={item.status ? {textDecoration:'line-through'} : {}}>{item.value}</b>
       <button className="no-border-button" onClick={() => this.actionDelete(i)}>❌</button></li>
      );
    } else if(type === 2) {
      listItems = list.map((item, i) =>
      item.status ? <li key={i} style={{marginTop: '1rem'}}><button className="no-border-button" onClick={() => this.handleClick(i)}>✔️</button>
       <b style={item.status ? {textDecoration:'line-through'} : {}}>{item.value}</b>
       <button className="no-border-button" onClick={() => this.actionDelete(i)}>❌</button></li> : null
      );
    } else {
      listItems = list.map((item, i) =>
      <li key={i} style={{marginTop: '1rem'}}><button className="no-border-button" onClick={() => this.handleClick(i)}>✔️</button>
       <b style={item.status ? {textDecoration:'line-through'} : {}}>{item.value}</b>
       <button className="no-border-button" onClick={() => this.actionDelete(i)}>❌</button></li>
      );
    }

    todoList.render(
      <ul>{listItems}</ul>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodoForm />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
