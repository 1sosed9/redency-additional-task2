// src/stories/Note.stories.tsx
import React from "react";
import { NoteData } from "../types";
import { formatDate } from "../utils/utils";
import { action } from "@storybook/addon-actions";
import Note from "../components/Note";

export default {
  title: "Components/Note",
  component: Note,
};

const note: NoteData = {
  id: 1,
  timeOfCreation: new Date().toISOString(),
  noteContent: "This is a sample note",
  category: "Task",
  archived: false,
};

export const Default = () => (
  <table>
    <tbody>
      <Note note={note} />
    </tbody>
  </table>
);

export const Archived = () => (
  <table>
    <tbody>
      <Note note={{ ...note, archived: true }} />
    </tbody>
  </table>
);

export const Editing = () => (
  <table>
    <tbody>
      <Note note={{ ...note }} />
    </tbody>
  </table>
);
