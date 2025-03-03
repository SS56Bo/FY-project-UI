import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Tracker from "../pages/Tracker";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tracker" element={<Tracker />} />
      {/* <Route path="/dashboard/*" element={<Dashboard />} /> */}
      {/* <Route path="*" element={<NotFound />} /> 404 Page */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default AppRoutes;
