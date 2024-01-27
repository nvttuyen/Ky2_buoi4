import React, { useState } from 'react'
import  './Style.css'
export default function Home() {
    const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSetItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className='todoList'>
      <h1>Todo List</h1>
      <div className='inputList'>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your task"
      />
      <button onClick={handleSetItem}>Set</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
