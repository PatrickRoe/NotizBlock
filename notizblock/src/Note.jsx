const Note = ({ note, index, deleteNote }) => {
    return (
      <div className="note">
        <p>{note}</p>
        <button onClick={() => deleteNote(index)}>Löschen</button>
      </div>
    );
  };
  
  export default Note;
  