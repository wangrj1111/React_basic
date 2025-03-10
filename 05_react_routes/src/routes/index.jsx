// src/routes/index.jsx
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/dashboard/Profile";
import Setting from "../pages/dashboard/Setting";
import Fans from "../pages/dashboard/Fans";
import Follow from "../pages/dashboard/Follow";
import Login from "../pages/Login";
import Book from "../pages/Book";
import NavBar from "../components/NavBar";
import BlogDetail from "../pages/BlogDetail";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/login' && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/book/:bookId" element={<Book />} />
        <Route path="/blog/:blogIndex" element={<BlogDetail />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />}>
            <Route index element={<Fans />} />
            <Route path="fans" element={<Fans />} />
            <Route path="follow" element={<Follow />} />
          </Route>
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default AppRoutes;