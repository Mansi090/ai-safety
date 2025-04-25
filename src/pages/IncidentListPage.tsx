import React from 'react';
import { Incident } from '../types/Incident';
import FilterSortControls from '../components/FilterSortControls';
import IncidentList from '../components/IncidentList';

type Props = {
  incidents: Incident[];
  setIncidents: React.Dispatch<React.SetStateAction<Incident[]>>;
  filter: 'All' | 'Low' | 'Medium' | 'High';
  setFilter: React.Dispatch<React.SetStateAction<'All' | 'Low' | 'Medium' | 'High'>>;
  sortOrder: 'Newest' | 'Oldest';
  setSortOrder: React.Dispatch<React.SetStateAction<'Newest' | 'Oldest'>>;
  search: string;
  darkMode: boolean;
};

const IncidentListPage: React.FC<Props> = ({
  incidents,
  setIncidents,
  filter,
  setFilter,
  sortOrder,
  setSortOrder,
  search,
  darkMode
}) => {
  // Filter + sort + search logic here...
  const filtered = incidents
    .filter(i =>
      (filter === 'All' || i.severity === filter) &&
      (i.title.toLowerCase().includes(search.toLowerCase()) ||
       i.description.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) =>
      sortOrder === 'Newest'
        ? new Date(b.reported_at).getTime() - new Date(a.reported_at).getTime()
        : new Date(a.reported_at).getTime() - new Date(b.reported_at).getTime()
    );

  return (
    <div className="lg:grid lg:grid-cols-3 gap-8">
      <section className="lg:col-span-1 space-y-6">
        <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Filter & Sort</h2>
        <FilterSortControls
          filter={filter}
          setFilter={setFilter}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          darkMode={darkMode}
        />
      </section>
      <section className="lg:col-span-2">
        <IncidentList
          incidents={filtered}
          darkMode={darkMode}
          setIncidents={setIncidents}
        />
      </section>
    </div>
  );
};

export default IncidentListPage;
