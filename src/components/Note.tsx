import React from "react";
import { useDispatch } from "react-redux";
import { editNote, archiveNote, unarchiveNote, removeNote } from "../actions/notesActions";
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
    <tr className="border border-gray-300">
      <td className="border border-gray-300 px-4 py-2">{formatDate(note.timeOfCreation)}</td>
      <td className="border border-gray-300 px-4 py-2">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="border border-gray-300 px-2 py-1 rounded"
            />
            <button
              onClick={handleSaveNote}
              className="bg-green-500 text-white px-2 py-1 rounded ml-2"
            >
              Save
            </button>
          </>
        ) : (
          <div>{note.noteContent}</div>
        )}
      </td>
      <td className="border border-gray-300 px-4 py-2">{note.category}</td>
      <td className="border border-gray-300 px-4 py-2">
        {note.noteContent &&
          note.noteContent.match(/\d{1,2}\/\d{1,2}\/\d{4}/g)?.join(", ")}
      </td>
      <td className="border border-gray-300 px-4 py-2">
        {!note.archived && (
          <>
            <button
              onClick={handleEditNote}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={handleArchiveNote}
              className="bg-blue-500 text-white px-2 py-1 rounded ml-2"
            >
              Archive
            </button>
          </>
        )}
        {note.archived && (
          <button
            onClick={handleUnarchiveNote}
            className="bg-yellow-500 text-white px-2 py-1 rounded"
          >
            Unarchive
          </button>
        )}
        <button
          onClick={handleRemoveNote}
          className="bg-red-500 text-white px-2 py-1 rounded ml-2"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default Note;
