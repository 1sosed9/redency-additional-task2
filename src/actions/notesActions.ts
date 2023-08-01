import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteData } from "../types";

const notesSlice = createSlice({
  name: "notes",
  initialState: [
    {
      id: 1,
      timeOfCreation: new Date("2023-07-25T12:30:00").toISOString(),
      noteContent: "Remember to buy groceries on 26/7/2023",
      category: "Task",
      archived: false,
    },
    {
      id: 2,
      timeOfCreation: new Date("2023-07-24T18:45:00").toISOString(),
      noteContent: "Had an interesting idea today!",
      category: "Idea",
      archived: false,
    },
    {
      id: 3,
      timeOfCreation: new Date("2023-07-23T09:15:00").toISOString(),
      noteContent: "What if we implement a new feature?",
      category: "Random Thought",
      archived: false,
    },
    // ... інші записи ...
  ] as NoteData[],
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
