// src/componets/AddNoteHandler.tsx
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
    <div className="p-4">
      <label htmlFor="note-content" className="block mb-2">
        Note Content:
      </label>
      <input
        type="text"
        id="note-content"
        className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
      />
      <label htmlFor="note-category" className="block mb-2">
        Category:
      </label>
      <select
        id="note-category"
        className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Task">Task</option>
        <option value="Idea">Idea</option>
        <option value="Random Thought">Random Thought</option>
      </select>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleAddNote}
      >
        Add Note
      </button>
    </div>
  );
};

export default AddNoteHandler;
