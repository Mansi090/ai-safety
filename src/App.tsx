// 🌟 PREMIUM UI: Luxury Design + Animated Elements
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Incident } from './types/Incident';
import IncidentListPage from './pages/IncidentListPage';
import AddIncidentPage from './pages/AddIncidentPage';

const App = () => {
  const [incidents, setIncidents] = useState<Incident[]>([
    { 
      id: 1, 
      title: 'Biased Recommendation Algorithm', 
      description: 'Algorithm consistently favored certain demographics in job recommendations', 
      severity: 'Medium', 
      reported_at: '2025-03-15T10:00:00Z',
      status: 'Under Review',
      assigned_to: 'Safety Team Alpha'
    },
    { 
      id: 2, 
      title: 'LLM Hallucination in Critical Info', 
      description: 'LLM provided incorrect medical information that could have serious consequences', 
      severity: 'High', 
      reported_at: '2025-04-01T14:30:00Z',
      status: 'Critical',
      assigned_to: 'Emergency Response'
    },
    { 
      id: 3, 
      title: 'Minor Data Leak via Chatbot', 
      description: 'Chatbot inadvertently exposed non-sensitive user metadata through API response', 
      severity: 'Low', 
      reported_at: '2025-03-20T09:15:00Z',
      status: 'Resolved',
      assigned_to: 'Data Protection Unit'
    }
  ]);
  
  const [filter, setFilter] = useState<'All' | 'Low' | 'Medium' | 'High'>('All');
  const [sortOrder, setSortOrder] = useState<'Newest' | 'Oldest'>('Newest');
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [toast, setToast] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('incidents');
    if (stored) setIncidents(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('incidents', JSON.stringify(incidents));
  }, [incidents]);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  return (
    <Router>
      <div className={`min-h-screen flex flex-col font-['Inter'] transition-all duration-500 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-blue-50'}`}>
        
        {/* LUXURY NAVBAR */}
        <nav className={`px-8 py-5 sticky top-0 z-50 backdrop-blur-lg ${darkMode ? 'bg-gray-900/80 border-b border-gray-700' : 'bg-white/90 border-b border-gray-200'}`}>
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${darkMode ? 'bg-blue-600/20 border border-blue-500/30' : 'bg-blue-100 border border-blue-200'}`}>
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                AI Safety Sentinel
              </h1>
            </div>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center space-x-6">
              <div className={`relative ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'} rounded-full px-4 py-2 w-64`}>
                <input
                  type="text"
                  placeholder="Search incidents..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className={`w-full bg-transparent focus:outline-none ${darkMode ? 'placeholder-gray-500 text-white' : 'placeholder-gray-400 text-gray-800'}`}
                />
                <svg className={`absolute right-3 top-2.5 w-5 h-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <Link 
                to="/" 
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${darkMode ? 'hover:bg-gray-800 text-gray-300 hover:text-white' : 'hover:bg-gray-100 text-gray-700'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span>Dashboard</span>
              </Link>
              
              <Link 
                to="/add" 
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-400/30'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>Report Incident</span>
              </Link>

              <button
                onClick={toggleDarkMode}
                className={`p-2.5 rounded-full transition-all duration-300 ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-amber-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button 
              className="md:hidden p-2 rounded-lg focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* MOBILE MENU */}
          {isMenuOpen && (
            <div className={`md:hidden mt-4 pb-4 space-y-3 ${darkMode ? 'bg-gray-900/80' : 'bg-white/90'} rounded-lg`}>
              <div className={`relative mx-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-full px-4 py-2`}>
                <input
                  type="text"
                  placeholder="Search incidents..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className={`w-full bg-transparent focus:outline-none ${darkMode ? 'placeholder-gray-500 text-white' : 'placeholder-gray-400 text-gray-800'}`}
                />
                <svg className={`absolute right-3 top-2.5 w-5 h-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <Link 
                to="/" 
                className={`block px-5 py-3 mx-2 rounded-lg font-medium transition-all ${darkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              
              <Link 
                to="/add" 
                className={`block px-5 py-3 mx-2 rounded-lg font-medium transition-all ${darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Report Incident
              </Link>

              <button
                onClick={toggleDarkMode}
                className={`block w-full text-left px-5 py-3 mx-2 rounded-lg font-medium transition-all ${darkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-700'}`}
              >
                {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              </button>
            </div>
          )}
        </nav>

        {/* PREMIUM TOAST NOTIFICATION */}
        {toast && (
          <div className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-full font-medium shadow-xl animate-fade-in-down flex items-center space-x-2 ${darkMode ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>{toast}</span>
          </div>
        )}

        {/* MAIN CONTENT AREA */}
        <main className="flex-grow max-w-7xl mx-auto px-6 py-8 w-full">
          <Routes>
            <Route
              path="/"
              element={
                <IncidentListPage
                  incidents={incidents}
                  setIncidents={(data) => { setIncidents(data); showToast('Incident resolved successfully'); }}
                  filter={filter}
                  setFilter={setFilter}
                  sortOrder={sortOrder}
                  setSortOrder={setSortOrder}
                  search={search}
                  darkMode={darkMode}
                />
              }
            />
            <Route
              path="/add"
              element={
                <AddIncidentPage
                  setIncidents={(data) => { setIncidents(data); showToast('New incident reported!'); }}
                  darkMode={darkMode}
                />
              }
            />
          </Routes>
        </main>

        {/* FLOATING ACTION BUTTON */}
        <Link 
          to="/add"
          className={`fixed bottom-8 right-8 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </Link>
      </div>
    </Router>
  );
};

export default App;