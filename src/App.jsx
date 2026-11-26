import { Route, Routes } from "react-router";
import "./App.css";

import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import ShipMultipleAddresses from "./pages/ShipMultipleAddresses";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/ship-multiple-addresses" element={<ShipMultipleAddresses />} />
    </Routes>
  );
};

export default App;