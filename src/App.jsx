import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayout";

import About from "./pages/About";
import Benefits from "./pages/Benefits";
import Classes from "./pages/Classes";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuestLayout />}>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/classes"
            element={<Classes />}
          />

          <Route
            path="/benefits"
            element={<Benefits />}
          />

          <Route
            path="/faq"
            element={<FAQ />}
          />
        </Route>

        <Route element={<AuthLayout />}>
          <Route
            path="/sign-in"
            element={<SignIn />}
          />

          <Route
            path="/sign-up"
            element={<SignUp />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
