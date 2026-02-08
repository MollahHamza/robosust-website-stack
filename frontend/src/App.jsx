import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';
import Home from './pages/Home';
import Agp from './pages/Agp';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Forum from './pages/Forum';
import ForumPost from './pages/ForumPost';
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTopOnNavigate />
      <Preloader />
      <Routes>
        {/* Admin Routes - No Navbar/Footer */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/*" element={<AdminDashboard />} />

        {/* Public Routes */}
        <Route path="/*" element={
          <>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/agp" element={<Agp />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/forum" element={<Forum />} />
                <Route path="/forum/:id" element={<ForumPost />} />
              </Routes>
            </main>
            <Footer />
            <ScrollToTop />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
