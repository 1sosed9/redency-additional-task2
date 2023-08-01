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
    <tr>
      <td>{formatDate(note.timeOfCreation)}</td>
      <td>
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
            <button onClick={handleSaveNote}>Save</button>
          </>
        ) : (
          <div>{note.noteContent}</div>
        )}
      </td>
      <td>{note.category}</td>
      <td>
        {note.noteContent &&
          note.noteContent.match(/\d{1,2}\/\d{1,2}\/\d{4}/g)?.join(", ")}
      </td>
      <td>
        {!note.archived && (
          <>
            <button onClick={handleEditNote}>Edit</button>
            <button onClick={handleArchiveNote}>Archive</button>
          </>
        )}
        {note.archived && (
          <button onClick={handleUnarchiveNote}>Unarchive</button>
        )}
        <button onClick={handleRemoveNote}>Remove</button>
      </td>
    </tr>
  );
};

export default Note;
