import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './Room.css';

function Room() {
    const [isLit,setLit] = useState(true);
    let [temp1,setTemp] = useState(23);

    
    // Alterative way of typing the same code as above
    /* const state = React.useState(true);
        isLit = state[0];
        setLit = state[1]; */
  return (
      <div className = {`room ${isLit ? 'lit' : 'dark'}`}>
  <h2>Currently the room is {isLit ? 'Lit' : 'Dark'}</h2>
  <br></br>
  <button onClick = { ()=> {setLit(!isLit)} } className = {'button1'}>Toggle</button>
  <br></br>
  <h2 style={{color:'blue'}}>Adjust the temperature of the room</h2>
  <h3>Current temperature: {temp1} degree Celsius</h3>
  <button onClick={()=> {setTemp(++temp1);} } className={'button1'}>+</button>
  <button onClick={()=> {setTemp(--temp1);} }className={'button1'}>-</button>

  </div>
  );
}

export default Room;
