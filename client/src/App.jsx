import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
