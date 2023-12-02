
import Worldview from "./pages/worldview";
import City from "./pages/city";
import { Routes, Route } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<City />} />
        <Route path="/wordview" element={<Worldview />} />
      </Routes>
    </div>
  );
}

export default App;
