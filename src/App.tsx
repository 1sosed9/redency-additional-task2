import React from "react";
import AddNoteHandler from "./components/AddNoteHandler";
import NotesList from "./components/NotesList";
import SummaryTable from "./components/SummaryTable";
import "./App.css"

const App: React.FC = () => {
  return (
    <div>
      <AddNoteHandler />
      <table>
        <thead>
          <tr>
            <th>Time of Creation</th>
            <th>Note Content</th>
            <th>Note Category</th>
            <th>Dates Mentioned</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <NotesList />
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Note Category</th>
            <th>Active</th>
            <th>Archived</th>
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
