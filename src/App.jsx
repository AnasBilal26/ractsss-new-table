
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Screen/Home";
import Createuser from "./Screen/Createuser";
import EditUser from "./Screen/EditUser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/createuser" element={<Createuser />} />
        <Route path="/edit/:id" element={<EditUser />} /> {}
      </Routes>
    </>
  );
}

export default App;
