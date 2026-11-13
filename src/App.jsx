import { Route, Routes } from "react-router";
import "./app.css";

import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;