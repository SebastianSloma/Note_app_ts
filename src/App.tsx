import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <>
   <div>
    <input type='text' name='note' placeholder='Note'/>
    <button>Add note</button>
   </div>
   <hr />
   <ul>
    <li>SOME NOTE</li>
   </ul>
   </>
  );
}

export default App;
