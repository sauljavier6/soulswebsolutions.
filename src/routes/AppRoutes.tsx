import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SystemDetail from "../pages/SystemDetail";
import ContactPage from "../pages/ContactPage";
import SolutionsPage from "../pages/SolutionsPage";
import BlogPage from "../pages/BlogPage";
import BlogPost from "../pages/BlogPost";
import ErrorPage from "../pages/ErrorPage";


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sistemas/pos" element={<SystemDetail />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/sistemas" element={<SolutionsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* Redirección */}
        <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
