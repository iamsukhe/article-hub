import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ArticleDetail } from './pages/ArticleDetail';
import { Topics } from './pages/Topics';
import { About } from './pages/About';
import { Header } from './components/Header';
import { Footer } from './components/Footer';


const App: React.FC = () => {

  return (
    <>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-900">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles/:id" element={<ArticleDetail />} />
              <Route path="/topics" element={<Topics />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>

  );
};

export default App;