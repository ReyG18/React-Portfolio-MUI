import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Layout from "./components/Layout";

export default function App() {
  return(
    <Routes>
      <Route path="/" element={
        <Layout>
          <Home />
        </Layout>} />
      <Route path="/about" element={
        <Layout>
          <About />
        </Layout>} />
      <Route path="/projects" element={
        <Layout>
          <Projects />
        </Layout>} />
      <Route path="/contact" element={
        <Layout>
          <Contact />
        </Layout>} />
    </Routes>
  );
};


