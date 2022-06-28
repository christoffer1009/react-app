import Note from "./Note";

const NoteList = (props) => {
  const { noteList } = props;

  return (
    <div className='note-list'>
      <h1>Note List</h1>

      {noteList.map(({ id, title, text }) => (
        <Note key={id} title={title} text={text} />
      ))}

      <Note title='Title of the note' text='This is some text to display' />
      <Note title='Title other note' text='This is some other note display' />
    </div>
  );
};

export default NoteList;
