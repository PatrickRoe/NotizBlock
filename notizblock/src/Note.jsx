const Note = ({ note, index, deleteNote, handleEdit, editIndex, editText, setEditText, handleUpdate }) => {
  const isEditing = editIndex === index;

  return (
    <div className="note">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleUpdate}>Speichern</button>
        </>
      ) : (
        <>
          <p>{note}</p>
          <div className="note-buttons">
            <button onClick={() => handleEdit(index, note)}>Bearbeiten</button>
            <button onClick={() => deleteNote(index)}>Löschen</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Note;
