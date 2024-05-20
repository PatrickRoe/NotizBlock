import { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import NoteList from './NoteList.jsx';
import NoteForm from './NoteForm.jsx';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((note, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="app">
      <Header />
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
      <Footer />
    </div>
  );
};

export default App;
