// src/components/SummaryTable.tsx
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
        <td className="text-center">Task</td>
        <td className="text-center">{getCategoryCount("Task", false)}</td>
        <td className="text-center">{getCategoryCount("Task", true)}</td>
      </tr>
      <tr>
        <td className="text-center">Idea</td>
        <td className="text-center">{getCategoryCount("Idea", false)}</td>
        <td className="text-center">{getCategoryCount("Idea", true)}</td>
      </tr>
      <tr>
        <td className="text-center">Random Thought</td>
        <td className="text-center">{getCategoryCount("Random Thought", false)}</td>
        <td className="text-center">{getCategoryCount("Random Thought", true)}</td>
      </tr>
    </>
  );
};

export default SummaryTable;
