import './App.css';
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

  const updateNote = (index, updatedText) => {
    const newNotes = notes.map((note, i) => (i === index ? updatedText : note));
    setNotes(newNotes);
  };

  return (
    <div className="app">
      <Header />
      <div className="app1">
        <NoteForm addNote={addNote} />
        <NoteList notes={notes} deleteNote={deleteNote} updateNote={updateNote} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
