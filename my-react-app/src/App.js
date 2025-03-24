import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";  // This is the component
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Count from "./pages/count";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} /> {/* Path "mkt" maps to Blogs component */}
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="count" element={<Count />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
