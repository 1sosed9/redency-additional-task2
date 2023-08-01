import React from "react";
import AddNoteHandler from "./components/AddNoteHandler";
import NotesList from "./components/NotesList";
import SummaryTable from "./components/SummaryTable";

const App: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mt-8">Notes App</h1>
      <AddNoteHandler />
      <table className="w-full border-collapse border border-gray-300 mt-8">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 py-2 px-4">Time of Creation</th>
            <th className="border border-gray-300 py-2 px-4">Note Content</th>
            <th className="border border-gray-300 py-2 px-4">Note Category</th>
            <th className="border border-gray-300 py-2 px-4">Dates Mentioned</th>
            <th className="border border-gray-300 py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <NotesList />
        </tbody>
      </table>
      <table className="w-full border-collapse border border-gray-300 mt-8">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 py-2 px-4">Note Category</th>
            <th className="border border-gray-300 py-2 px-4">Active</th>
            <th className="border border-gray-300 py-2 px-4">Archived</th>
          </tr>
        </thead>
        <tbody>
          <SummaryTable />
        </tbody>
      </table>
    </div>
  );
};

export default App;
