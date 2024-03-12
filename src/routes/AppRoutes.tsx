import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../modules/login/Login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<>Profile</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
