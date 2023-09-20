import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Timer from "./pages/Timer";
import Calculator from "./pages/Calculator";
import Dictionary from "./pages/Dictionary";
import Grade from "./pages/Grade";
import GPA from "./pages/GPA";
import Test from "./pages/Test";
import Nav from "./components/Nav/Nav";

export default function App(props) {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/timer" element={<Timer />} />
        <Route exact path="/calculator" element={<Calculator />} />
        <Route exact path="/dictionary" element={<Dictionary />} />
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/notes" element={<Notes />} />
        <Route exact path="/gpa" element={<GPA />} />
        <Route exact path="/grade" element={<Grade />} />
      </Routes>
    </div>
  );
}

