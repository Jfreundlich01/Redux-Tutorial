import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index';
import './App.css';

function App() {
  const [input, setInput] = useState("")
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const increment = () =>{
    dispatch(actions.increment())
  }
  const decrement = () =>{
    dispatch(actions.decrement())
  }
  const addBy = () =>{
    dispatch(actions.addBy(input))
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
