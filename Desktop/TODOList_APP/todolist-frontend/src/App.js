import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Todos from "./pages/Todos";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setToken={setToken} />} />
        <Route path="/todos" element={token ? <Todos token={token} /> : <Login setToken={setToken} />} />
      </Routes>
    </Router>
  );
};

export default App;