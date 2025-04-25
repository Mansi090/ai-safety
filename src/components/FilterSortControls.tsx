import React from 'react';

interface Props {
  filter: 'All' | 'Low' | 'Medium' | 'High';
  setFilter: React.Dispatch<React.SetStateAction<'All' | 'Low' | 'Medium' | 'High'>>;
  sortOrder: 'Newest' | 'Oldest';
  setSortOrder: React.Dispatch<React.SetStateAction<'Newest' | 'Oldest'>>;
  darkMode: boolean;
}

const FilterSortControls: React.FC<Props> = ({ filter, setFilter, sortOrder, setSortOrder, darkMode }) => {
  return (
    <div className={`space-y-4 ${darkMode ? 'text-white' : 'text-black'}`}>
      <div>
        <label htmlFor="filter" className="block text-sm">Filter by Severity</label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value as 'All' | 'Low' | 'Medium' | 'High')}
          className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div>
        <label htmlFor="sortOrder" className="block text-sm">Sort Order</label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as 'Newest' | 'Oldest')}
          className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSortControls;
