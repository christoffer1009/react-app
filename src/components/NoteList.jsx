import { useState } from "react";
import Note from "./Note";

const NoteList = (props) => {
  const [notes, setNotes] = useState(props.data);

  const create = () => {
    let newNote = {
      id: 5,
      title: "nota de teste",
      text: "um texto bem legal para ler",
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className='note-list grid gap-4 grid-cols-3'>
      {notes.map(({ id, title, text }) => (
        <Note key={id} title={title} text={text} />
      ))}
      <button className='btn-secondary' onClick={create}>
        TESTE
      </button>
    </div>
  );
};

export default NoteList;
