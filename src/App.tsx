import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ Change here
import Portfolio from './pages/Portfolio';
import BlogPost from './components/BlogPost';
import { portfolio } from './config/portfolio';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        {portfolio.blogs.map(blog => (
          <Route
            key={blog.id}
            path={`/blog/${blog.id}`}
            element={
              <BlogPost
                title={blog.title}
                content={blog.content}
                videoUrl={blog.videoUrl}
                date={blog.date}
              />
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
