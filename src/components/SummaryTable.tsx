import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { NoteData } from "../types";

const SummaryTable: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes);

  const getCategoryCount = (category: string, archived: boolean): number => {
    return notes.filter(
      (note: NoteData) =>
        note.category === category && note.archived === archived
    ).length;
  };

  return (
    <>
      <tr>
        <td>Task</td>
        <td>{getCategoryCount("Task", false)}</td>
        <td>{getCategoryCount("Task", true)}</td>
      </tr>
      <tr>
        <td>Idea</td>
        <td>{getCategoryCount("Idea", false)}</td>
        <td>{getCategoryCount("Idea", true)}</td>
      </tr>
      <tr>
        <td>Random Thought</td>
        <td>{getCategoryCount("Random Thought", false)}</td>
        <td>{getCategoryCount("Random Thought", true)}</td>
      </tr>
    </>
  );
};

export default SummaryTable;