import React from 'react';

import './App.css';
import { NewNoteInput } from './NewNoteInput';
import { useSelector } from 'react-redux';
import { NotesState } from './notesReducer';

function App() {
  const notes = useSelector<NotesState, NotesState['notes']>((state) => state.notes)

  const addNote=(note:string) => {
    dispatch({type: "ADD NOTE", payload: note })
  }
  return (
   <>
   <NewNoteInput addNote={alert}/>
   <hr />
   <ul>
    {notes.map(()=>{
      return <li key={note}>{note}</li>
    })}
   </ul>
   </>
  );
}

export default App;
