import { Route, Routes } from "react-router";
import "./app.css";

import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
};

export default App;