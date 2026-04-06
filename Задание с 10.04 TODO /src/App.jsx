import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TodosList from "./pages/TodosList";
import TodoDetail from "./pages/TodoDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/todos" />} />
        <Route path="/todos" element={<TodosList />} />
        <Route path="/todos/:id" element={<TodoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;