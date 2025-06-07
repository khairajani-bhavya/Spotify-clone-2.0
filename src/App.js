import { Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import CalendarPage from "./pages/CalendarPage";
import KanbanPage from "./pages/KanbanPage";
import ThemeProvider from "./theme/ThemeProvider";
import './App.css';

export default function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/kanban" element={<KanbanPage />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}
