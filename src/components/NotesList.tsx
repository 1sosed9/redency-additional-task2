// src/componets/NotesList.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Note from "./Note";

const NotesList: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes);

  return (
    <>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </>
  );
};

export default NotesList;
