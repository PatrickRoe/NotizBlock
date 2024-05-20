import Note from './Note.jsx';

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <Note key={index} index={index} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
};

export default NoteList;
