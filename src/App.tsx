import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import AppLayout from "./components/layout/AppLayout"
import AppDashboard from "./components/dashboard/AppDashboard"


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<AppDashboard />} />
        </Route>
      </Routes>
    </Router>
  )
}
