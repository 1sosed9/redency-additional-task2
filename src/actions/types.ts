// src/actions/types.ts
import { NoteData } from '../types';

export const ADD_NOTE = 'ADD_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const ARCHIVE_NOTE = 'ARCHIVE_NOTE';
export const UNARCHIVE_NOTE = 'UNARCHIVE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

interface AddNoteAction {
  type: typeof ADD_NOTE;
  payload: NoteData;
}

interface EditNoteAction {
  type: typeof EDIT_NOTE;
  payload: NoteData;
}

interface ArchiveNoteAction {
  type: typeof ARCHIVE_NOTE;
  payload: number;
}

interface UnarchiveNoteAction {
  type: typeof UNARCHIVE_NOTE;
  payload: number;
}

interface RemoveNoteAction {
  type: typeof REMOVE_NOTE;
  payload: number;
}

export type NoteAction =
  | AddNoteAction
  | EditNoteAction
  | ArchiveNoteAction
  | UnarchiveNoteAction
  | RemoveNoteAction;
