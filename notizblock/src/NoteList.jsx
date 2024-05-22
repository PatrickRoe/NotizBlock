import { useState } from 'react';
import Note from './Note.jsx';

const NoteList = ({ notes, deleteNote, updateNote }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (index, text) => {
    setEditIndex(index);
    setEditText(text);
  };

  const handleUpdate = () => {
    updateNote(editIndex, editText);
    setEditIndex(null);
    setEditText('');
  };

  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <Note
          key={index}
          index={index}
          note={note}
          deleteNote={deleteNote}
          handleEdit={handleEdit}
          editIndex={editIndex}
          editText={editText}
          setEditText={setEditText}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
};

export default NoteList;
