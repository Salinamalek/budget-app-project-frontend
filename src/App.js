import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import NavBar from "./components/navbar";
import Index from "./pages/index";
import Details from "./components/details";
import NewForm from "./components/newForm";
import EditForm from "./components/editForm";
import Error from "./components/error";
// import "./index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
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
