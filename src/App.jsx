
import Worldview from "./pages/worldview";
import City from "./pages/city";
import { Routes, Route } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/wordview" element={<Worldview />} />
        <Route path="/" element={<City />} />
      </Routes>
    </div>
  );
}

export default App;
