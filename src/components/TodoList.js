import React from 'react';

function TodoList(props) {
    const type = props.type;
    const list = props.list;
    const actionCheck = props.actionCheck;
    const actionDelete = props.actionDelete;

    if(type === 1) {
        return list.map((item, i) =>
        item.status ? null : <li key={i} style={{marginTop: '1rem'}}><button className="no-border-button" onClick={() => actionCheck(i)}>✔️</button>
        <b style={item.status ? {textDecoration:'line-through'} : {}}>{item.value}</b>
        <button className="no-border-button" onClick={() => actionDelete(i)}>❌</button></li>
        );
    } else if(type === 2) {
        return list.map((item, i) =>
        item.status ? <li key={i} style={{marginTop: '1rem'}}><button className="no-border-button" onClick={() => actionCheck(i)}>✔️</button>
        <b style={item.status ? {textDecoration:'line-through'} : {}}>{item.value}</b>
        <button className="no-border-button" onClick={() => actionDelete(i)}>❌</button></li> : null
        );
    } else {
        return list.map((item, i) =>
        <li key={i} style={{marginTop: '1rem'}}><button className="no-border-button" onClick={() => actionCheck(i)}>✔️</button>
        <b style={item.status ? {textDecoration:'line-through'} : {}}>{item.value}</b>
        <button className="no-border-button" onClick={() => actionDelete(i)}>❌</button></li>
        );
    }
  }

  export default TodoList;