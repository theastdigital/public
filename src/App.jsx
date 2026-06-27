import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return window.localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="topbar">
          <NavLink to="/" className="brand-mark" aria-label="AST Digital home">
            <span className="brand-mark__text">
              <span className="brand-mark__name">AST</span>
              <span className="brand-mark__tag">Digital</span>
            </span>
          </NavLink>

          <div className="topbar__actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? '☀︎' : '☾'}
            </button>
            <nav className="nav-links" aria-label="Primary navigation">
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>hr@theastdigital.com</p>
          <p>© 2026 AST Digital</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
