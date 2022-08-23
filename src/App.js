import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const [input, setInput] = useState("")
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const increment = () =>{
    dispatch({type:'INC'})
  }
  const decrement = () =>{
    dispatch({type:'DEC'})
  }
  const addBy = () =>{
    dispatch({type:'ADD',payload:input})
  }
  const addInput = (e) =>{
    setInput(e.target.value)
  }
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <input  onChange={addInput}></input>
      <button onClick={addBy}>Add value</button>
      
      
    </div>
  );
}

export default App;
