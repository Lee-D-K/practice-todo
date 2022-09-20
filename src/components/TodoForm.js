import React, { useState } from 'react';

function TodoForm(props) {
    const func = props.func;
    const [input, setInput] = useState({
      value: "",
    });
    
    const {value} = input;

    const displayText = (e) => {
      const {value, name} = e.target;
      setInput({
        ...input,
        [name] : value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      func(value);
      setInput({
        value : "",
      });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" value={value} name="value" onChange={displayText} />
        </label>
        <input type="submit" className="invisible"></input><br/>
      </form>
    );
}

export default TodoForm;