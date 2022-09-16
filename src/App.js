import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
