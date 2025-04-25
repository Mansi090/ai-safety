import React, { useState } from 'react';
import { Incident } from '../types/Incident';

interface Props {
  setIncidents: React.Dispatch<React.SetStateAction<Incident[]>>;
  darkMode: boolean;
}

const IncidentForm: React.FC<Props> = ({ setIncidents, darkMode }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<'Low' | 'Medium' | 'High'>('Low');
  const [status, setStatus] = useState('Under Review');
  const [assignedTo, setAssignedTo] = useState('Unassigned');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newIncident = {
      id: Date.now(),
      title,
      description,
      severity,
      reported_at: new Date().toISOString(),
    };
    setIncidents(prev => [
      ...prev,
      {
        id: Date.now(),
        title,
        description ,
        severity,
        reported_at: new Date().toISOString(),
        status,
        assigned_to: assignedTo
      }
    ]);
    
    setTitle('');
    setDescription('');
    setSeverity('Low');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className={`block text-sm ${darkMode ? 'dark:text-white' : 'text-black'}`}>
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className={`block text-sm ${darkMode ? 'dark:text-white' : 'text-black'}`}>
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
      </div>

      <div>
        <label htmlFor="severity" className={`block text-sm ${darkMode ? 'dark:text-white' : 'text-black'}`}>
          Severity
        </label>
        <select
          id="severity"
          value={severity}
          onChange={(e) => setSeverity(e.target.value as 'Low' | 'Medium' | 'High')}
          className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-900"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default IncidentForm;
