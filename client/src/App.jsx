import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";

import Feed from "./pages/Feed";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
