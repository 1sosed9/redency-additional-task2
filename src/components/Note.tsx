// src/components/Note.tsx
import React from "react";
import { useDispatch } from "react-redux";
import {
  editNote,
  archiveNote,
  unarchiveNote,
  removeNote,
} from "../store/notesReducer";
import { NoteData } from "../types";
import { formatDate } from "../utils/utils";

interface NoteProps {
  note: NoteData;
}

const Note: React.FC<NoteProps> = ({ note }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = React.useState(false);
  const [editedContent, setEditedContent] = React.useState(note.noteContent);

  const handleEditNote = () => {
    setIsEditing(true);
  };

  const handleSaveNote = () => {
    if (editedContent.trim() !== "") {
      dispatch(
        editNote({
          id: note.id,
          newNoteContent: editedContent,
        })
      );
    }
    setIsEditing(false);
  };

  const handleArchiveNote = () => {
    dispatch(archiveNote(note.id));
  };

  const handleUnarchiveNote = () => {
    dispatch(unarchiveNote(note.id));
  };

  const handleRemoveNote = () => {
    dispatch(removeNote(note.id));
  };

  return (
    <tr className="text-center">
      <td>{formatDate(note.timeOfCreation)}</td>
      <td>
        {isEditing ? (
          <div className="flex">
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ml-2"
              onClick={handleSaveNote}
            >
              Save
            </button>
          </div>
        ) : (
          <div>{note.noteContent}</div>
        )}
      </td>
      <td>{note.category}</td>
      <td>
        {note.noteContent &&
          note.noteContent.match(/\d{1,2}\/\d{1,2}\/\d{4}/g)?.join(", ")}
      </td>
      <td className="flex justify-center items-center">
        {!note.archived && (
          <div>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={handleEditNote}
            >
              Edit
            </button>
            <button
              className="bg-gray-500 text-white py-2 px-2 rounded hover:bg-gray-600 ml-2"
              onClick={handleArchiveNote}
            >
              Archive
            </button>
          </div>
        )}
        {note.archived && (
          <button
            className="bg-green-500 text-white py-2 px-2 rounded hover:bg-green-600"
            onClick={handleUnarchiveNote}
          >
            Unarchive
          </button>
        )}
        <button
          className="bg-red-500 text-white py-2 px-2 rounded hover:bg-red-600 ml-2"
          onClick={handleRemoveNote}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default Note;
