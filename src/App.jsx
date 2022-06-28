import { useState } from "react";
import Note from "./components/Note";
import NoteList from "./components/NoteList";

const list = [
  { id: 0, title: "Note 01", text: "This is the text in the note 01" },
  { id: 1, title: "Note 02", text: "This is the text in the note 02" },
];

function App() {
  return (
    <div className='App'>
      <h1>Hello React.js</h1>
      <NoteList noteList={list} />
    </div>
  );
}

export default App;
