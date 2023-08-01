import React from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../actions/notesActions";

const AddNoteHandler: React.FC = () => {
  const dispatch = useDispatch();
  const [noteContent, setNoteContent] = React.useState("");
  const [category, setCategory] = React.useState("Task");
  


  const handleAddNote = () => {
    if (noteContent.trim() === "") {
      alert("Note content cannot be empty!");
      return;
    }

    dispatch(
      addNote({
        id: new Date().getTime(),
        timeOfCreation: new Date().toISOString(),
        noteContent: noteContent.trim(),
        category,
        archived: false,
      })
    );

    setNoteContent("");
  };

  return (
    <div>
      <label htmlFor="note-content">Note Content:</label>
      <input
        type="text"
        id="note-content"
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
      />
      <label htmlFor="note-category">Category:</label>
      <select
        id="note-category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Task">Task</option>
        <option value="Idea">Idea</option>
        <option value="Random Thought">Random Thought</option>
      </select>
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default AddNoteHandler;
