import {Routes, Route} from "react-router-dom"
import './components/styles/global.css';
import Landing from "./components/Landing";
import Draft from "./components/Draft";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/Drafts" element={<Draft />}></Route>
    </Routes>
    </>

  );
}

export default App;
