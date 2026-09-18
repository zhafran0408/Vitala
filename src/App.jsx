import { BrowserRouter, Route, Routes } from "react-router-dom";

import GuestLayout from "./layouts/GuestLayout";
import AuthLayout from "./layouts/AuthLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Benefits from "./pages/Benefits";
import FAQ from "./pages/FAQ";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import AdminHome from "./pages/admin/AdminHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuestLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/faq" element={<FAQ />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
