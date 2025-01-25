import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageNotFound from "./page/PageNotFound"
import TaskManager from "./page/TaskManager"
export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<TaskManager />} />
      <Route path="/task/:id" element={<TaskManager />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>

}
