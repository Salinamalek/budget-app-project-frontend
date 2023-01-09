import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/home";
import NavBar from "./components/navbar";
import Index from "./pages/index";
import Details from "./components/details";
import NewForm from "./components/newForm";
import EditForm from "./components/editForm";
import Error from "./components/error";
// import "./index.css";
import "./components/darkMode.css";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <Router>
        <NavBar />
        <main>
          <button className="theme" onClick={toggleTheme}>
            ☾
          </button>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Index />} />
            <Route path="/transactions/:index" element={<Details />} />
            <Route path="/transactions/new" element={<NewForm />} />
            <Route path="/transactions/:index/edit" element={<EditForm />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
