import Note from "./Note";

const NoteList = (props) => {
  const { noteList } = props;

  return (
    <div className='note-list grid gap-4 grid-cols-3'>
      {noteList.map(({ id, title, text }) => (
        <Note key={id} title={title} text={text} />
      ))}
    </div>
  );
};

export default NoteList;
