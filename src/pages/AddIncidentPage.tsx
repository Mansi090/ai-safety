import React, { useState } from 'react';
import { Incident } from '../types/Incident';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

type Props = {
  setIncidents: React.Dispatch<React.SetStateAction<Incident[]>>;
  darkMode: boolean;
};

const AddIncidentPage: React.FC<Props> = ({ setIncidents, darkMode }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('Under Review');
  const [assignedTo, setAssignedTo] = useState('Unassigned');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<'Low'|'Medium'|'High'>('Low');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIncidents(prev => [
      ...prev,
      {
        id: Date.now(),
        title,
        description,
        severity,
        reported_at: new Date().toISOString(),
        status,
        assigned_to: assignedTo
      }
    ]);
    
    navigate('/');
  };

  return (
    <div className={`min-h-screen py-12 px-4 transition-all duration-500 ${darkMode ? 'bg-gray-950' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
      <div className="max-w-lg mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className={`text-4xl font-bold mb-3 bg-clip-text ${darkMode ? 'text-transparent bg-gradient-to-r from-blue-400 to-purple-400' : 'text-transparent bg-gradient-to-r from-blue-600 to-purple-600'}`}>
            Report New Incident
          </h2>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Quickly document security issues with our streamlined form
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className={`rounded-2xl p-0.5 ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-blue-200 to-purple-200'}`}
        >
          <div className={`rounded-[15px] p-8 backdrop-blur-sm ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Incident Title
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-offset-2 focus:outline-none shadow-sm transition-all duration-300 ${
                      darkMode 
                        ? 'bg-gray-800 text-white focus:ring-blue-500/50 placeholder-gray-500' 
                        : 'bg-white text-gray-900 focus:ring-blue-400/30 placeholder-gray-400'
                    }`}
                    placeholder="e.g. Unauthorized Access Detected"
                    required
                  />
                  <div className={`absolute inset-0 rounded-xl pointer-events-none -z-10 ${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-blue-100 to-purple-100'}`}></div>
                </div>
              </div>

              <div className="space-y-2">
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Detailed Description
                </label>
                <div className="relative">
                  <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-offset-2 focus:outline-none shadow-sm transition-all duration-300 ${
                      darkMode 
                        ? 'bg-gray-800 text-white focus:ring-blue-500/50 placeholder-gray-500' 
                        : 'bg-white text-gray-900 focus:ring-blue-400/30 placeholder-gray-400'
                    }`}
                    placeholder="Describe what happened..."
                    required
                  />
                  <div className={`absolute inset-0 rounded-xl pointer-events-none -z-10 ${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-blue-100 to-purple-100'}`}></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Severity Level
                  </label>
                  <div className="relative">
                    <select
                      value={severity}
                      onChange={e => setSeverity(e.target.value as 'Low'|'Medium'|'High')}
                      className={`w-full px-4 py-3 rounded-xl appearance-none border-0 focus:ring-2 focus:ring-offset-2 focus:outline-none shadow-sm transition-all duration-300 ${
                        darkMode 
                          ? 'bg-gray-800 text-white focus:ring-blue-500/50' 
                          : 'bg-white text-gray-900 focus:ring-blue-400/30'
                      }`}
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div className={`absolute inset-0 rounded-xl pointer-events-none -z-10 ${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-blue-100 to-purple-100'}`}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Current Status
                  </label>
                  <div className="relative">
                    <select
                      value={status}
                      onChange={e => setStatus(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl appearance-none border-0 focus:ring-2 focus:ring-offset-2 focus:outline-none shadow-sm transition-all duration-300 ${
                        darkMode 
                          ? 'bg-gray-800 text-white focus:ring-blue-500/50' 
                          : 'bg-white text-gray-900 focus:ring-blue-400/30'
                      }`}
                    >
                      <option value="Under Review">Under Review</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div className={`absolute inset-0 rounded-xl pointer-events-none -z-10 ${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-blue-100 to-purple-100'}`}></div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Assign To
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={assignedTo}
                    onChange={e => setAssignedTo(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-offset-2 focus:outline-none shadow-sm transition-all duration-300 ${
                      darkMode 
                        ? 'bg-gray-800 text-white focus:ring-blue-500/50 placeholder-gray-500' 
                        : 'bg-white text-gray-900 focus:ring-blue-400/30 placeholder-gray-400'
                    }`}
                    placeholder="Team member name"
                  />
                  <div className={`absolute inset-0 rounded-xl pointer-events-none -z-10 ${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-blue-100 to-purple-100'}`}></div>
                </div>
              </div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pt-4"
              >
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl shadow-lg text-white font-medium bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 transition-all duration-300"
                >
                  <span className="drop-shadow-sm">Submit Incident Report</span>
                </button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AddIncidentPage;