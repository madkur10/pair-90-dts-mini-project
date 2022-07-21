// import logo from './logo.svg';
// import './App.css';
import Homepage from "./containers/Homepage";
import DetailFilm from "./containers/DetailFilm";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="detail" element={<DetailFilm />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
