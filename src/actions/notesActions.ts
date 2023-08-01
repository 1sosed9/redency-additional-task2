// src/actions/notesActions.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteData } from "../types";

const notesSlice = createSlice({
  name: "notes",
  initialState: [] as NoteData[],
  reducers: {
    addNote: (state, action: PayloadAction<NoteData>) => {
      state.push(action.payload);
    },
    editNote: (
      state,
      action: PayloadAction<{ id: number; newNoteContent: string }>
    ) => {
      const note = state.find((note) => note.id === action.payload.id);
      if (note) {
        note.noteContent = action.payload.newNoteContent.trim();
      }
    },
    archiveNote: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((note) => note.id === action.payload);
      if (index !== -1) {
        state[index].archived = true;
      }
    },
    unarchiveNote: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((note) => note.id === action.payload);
      if (index !== -1) {
        state[index].archived = false;
      }
    },
    removeNote: (state, action: PayloadAction<number>) => {
      return state.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, editNote, archiveNote, unarchiveNote, removeNote } =
  notesSlice.actions;

export default notesSlice.reducer;
