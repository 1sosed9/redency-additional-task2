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
      <tr className="border border-gray-300">
        <td className="border border-gray-300 px-4 py-2">Task</td>
        <td className="border border-gray-300 px-4 py-2">{getCategoryCount("Task", false)}</td>
        <td className="border border-gray-300 px-4 py-2">{getCategoryCount("Task", true)}</td>
      </tr>
      <tr className="border border-gray-300">
        <td className="border border-gray-300 px-4 py-2">Idea</td>
        <td className="border border-gray-300 px-4 py-2">{getCategoryCount("Idea", false)}</td>
        <td className="border border-gray-300 px-4 py-2">{getCategoryCount("Idea", true)}</td>
      </tr>
      <tr className="border border-gray-300">
        <td className="border border-gray-300 px-4 py-2">Random Thought</td>
        <td className="border border-gray-300 px-4 py-2">{getCategoryCount("Random Thought", false)}</td>
        <td className="border border-gray-300 px-4 py-2">{getCategoryCount("Random Thought", true)}</td>
      </tr>
    </>
  );
};

export default SummaryTable;
