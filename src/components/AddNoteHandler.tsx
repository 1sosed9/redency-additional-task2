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
    <div className="mt-8">
      <label htmlFor="note-content" className="mr-2">
        Note Content:
      </label>
      <input
        type="text"
        id="note-content"
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
        className="border border-gray-300 px-2 py-1 rounded"
      />
      <label htmlFor="note-category" className="mx-4">
        Category:
      </label>
      <select
        id="note-category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border border-gray-300 px-2 py-1 rounded"
      >
        <option value="Task">Task</option>
        <option value="Idea">Idea</option>
        <option value="Random Thought">Random Thought</option>
      </select>
      <button
        onClick={handleAddNote}
        className="bg-blue-500 text-white px-2 py-1 rounded ml-2"
      >
        Add Note
      </button>
    </div>
  );
};

export default AddNoteHandler;
