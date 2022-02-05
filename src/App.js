import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favories from "./pages/Favories";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favories" element={<Favories />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
