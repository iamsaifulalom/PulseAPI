import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import NotFound from "./pages/NotFound"


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}
