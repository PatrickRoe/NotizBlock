import { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note) {
      addNote(note);
      setNote('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Notiz hinzufügen"
      />
      <button type="submit">Hinzufügen</button>
      
    </form>
  );
};

export default NoteForm;
