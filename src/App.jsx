/** @format */

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GuestLayout from "./layouts/GuestLayout";
import AuthLayout from "./layouts/AuthLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Trips from "./pages/Trips";
import Shop from "./pages/Shop";
import FAQ from "./pages/FAQ";
import Profile from "./pages/Profile";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import AdminHome from "./pages/admin/AdminHome";
import AdminSettings from "./pages/admin/AdminSettings";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* ================= USER ================= */}

        <Route element={<GuestLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/trips' element={<Trips />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/profile' element={<Profile />} />
        </Route>

        {/* ================= AUTH ================= */}

        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Route>

        {/* ================= ADMIN ================= */}

        <Route element={<AdminLayout />}>
          <Route path='/admin' element={<AdminHome />} />
          <Route path='/admin/settings' element={<AdminSettings />} />
        </Route>

        {/* ================= UNKNOWN ROUTE ================= */}

        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
