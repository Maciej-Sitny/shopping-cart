import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";


const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/shop" element={<Shop />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;