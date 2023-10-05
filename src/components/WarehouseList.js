import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchWarehouse, filterWarehouse } from '../actions/warehouseActions';

const WarehouseList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ city: '', cluster: '', spaceAvailable: '' });

  const warehouses = useSelector((state) => state.warehouses);
  const filteredWarehouses = useSelector((state) => state.filteredWarehouses);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    dispatch(searchWarehouse(query));
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    dispatch(filterWarehouse({ ...filters, [name]: value }));
  };

  // Get unique cities and clusters from the warehouse data
  const uniqueCities = [...new Set(warehouses.map((warehouse) => warehouse.city))];
  const uniqueClusters = [...new Set(warehouses.map((warehouse) => warehouse.cluster))];

  return (
    <div>
      <h2>Warehouse List</h2>
      <input
        type="text"
        placeholder="Search by Warehouse Name"
        value={searchQuery}
        onChange={handleSearch}
      />
      <select name="city" value={filters.city} onChange={handleFilterChange}>
        <option value="">All Cities</option>
        {uniqueCities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
      <select name="cluster" value={filters.cluster} onChange={handleFilterChange}>
        <option value="">All Clusters</option>
        {uniqueClusters.map((cluster, index) => (
          <option key={index} value={cluster}>
            {cluster}
          </option>
        ))}
      </select>
      <input
        type="number"
        name="spaceAvailable"
        placeholder="Minimum Space Available"
        value={filters.spaceAvailable}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredWarehouses.map((warehouse) => (
          <li key={warehouse.id}>
            <h3>{warehouse.name}</h3>
            <p>City: {warehouse.city}</p>
            <p>Cluster: {warehouse.cluster}</p>
            <p>Space Available: {warehouse.space_available}</p>
            <p>Live Status: {warehouse.is_live ? 'Live' : 'Not Live'}</p>
            <a href={`/warehouse/${warehouse.id}`}>View Details</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WarehouseList;
