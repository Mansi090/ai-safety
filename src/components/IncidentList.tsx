import React, { useState } from 'react';
import { Incident } from '../types/Incident';
import { X, Trash2 } from 'lucide-react'; // Import Trash2 icon for deletion

interface Props { 
  incidents: Incident[]; 
  darkMode: boolean; 
  setIncidents: React.Dispatch<React.SetStateAction<Incident[]>>; // Add setIncidents prop for deleting incidents
}

const IncidentList: React.FC<Props> = ({ incidents, darkMode, setIncidents }) => {
  const [selected, setSelected] = useState<Incident | null>(null);

  // Handle incident deletion
  const handleDelete = (id: number) => {
    setIncidents(incidents.filter(incident => incident.id !== id)); // Delete incident by ID
  };

  return (
    <>
      {incidents.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400">No incidents found.</p>
      )}
      <div className="grid gap-6 md:grid-cols-2">
        {incidents.map((inc) => (
          <div
            key={inc.id}
            className={`p-4 rounded-xl shadow-lg transition transform hover:scale-105 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } border-l-4 ${
              inc.severity === 'High'
                ? 'border-red-500'
                : inc.severity === 'Medium'
                ? 'border-yellow-500'
                : 'border-green-500'
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{inc.title}</h3>
              
              {/* Trash Bin Icon for deletion */}
              <button
                onClick={() => handleDelete(inc.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>
            </div>

            <div className="flex items-center space-x-2 mb-4">
              {/* Severity as a label inline with the title */}
              <span className={`text-sm px-2 py-1 rounded-full ${
                inc.severity === 'High'
                  ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                  : inc.severity === 'Medium'
                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                  : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
              }`}>
                {inc.severity}
              </span>
              <p className="text-sm dark:text-gray-300">{new Date(inc.reported_at).toLocaleString()}</p>
            </div>

            <button
              onClick={() => setSelected(inc)}
              className="text-blue-600 dark:text-blue-400 font-medium"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className={`p-6 rounded-lg max-w-md w-full relative ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>  
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-2xl font-bold mb-2">{selected.title}</h2>
            <p className="text-sm mb-4 text-gray-500 dark:text-gray-400">{new Date(selected.reported_at).toLocaleString()}</p>
            <span className={`inline-block mb-4 px-3 py-1 rounded-full text-sm ${
              selected.severity === 'High'
                ? 'bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-300'
                : selected.severity === 'Medium'
                ? 'bg-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                : 'bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-300'
            }`}>
              {selected.severity}
            </span>
            <p className="mb-4 dark:text-gray-300">{selected.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default IncidentList;
