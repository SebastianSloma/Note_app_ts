import React from 'react';

import './App.css';
import { NewNoteInput } from './NewNoteInput';

function App() {
  return (
   <>
   <NewNoteInput addNote={alert}/>
   <hr />
   <ul>
    <li>SOME NOTE</li>
   </ul>
   </>
  );
}

export default App;
