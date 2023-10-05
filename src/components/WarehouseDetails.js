import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editWarehouse } from '../actions/warehouseActions';

const WarehouseDetails = ({ match }) => {
  const warehouseId = parseInt(match.params.id);

  const [warehouse, setWarehouse] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();
  const warehouses = useSelector((state) => state.warehouses);

  useEffect(() => {
    const selectedWarehouse = warehouses.find((wh) => wh.id === warehouseId);
    if (selectedWarehouse) {
      setWarehouse(selectedWarehouse);
    }
  }, [warehouseId, warehouses]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWarehouse({ ...warehouse, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    dispatch(editWarehouse(warehouse));
    setIsEditing(false);
  };

  return (
    <div>
      <h2>Warehouse Details</h2>
      {isEditing ? (
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={warehouse.name}
            onChange={handleInputChange}
          />
          <label>Cluster:</label>
          <input
            type="text"
            name="cluster"
            value={warehouse.cluster}
            onChange={handleInputChange}
          />
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={warehouse.city}
            onChange={handleInputChange}
          />
          <label>Space Available:</label>
          <input
            type="number"
            name="space_available"
            value={warehouse.space_available}
            onChange={handleInputChange}
          />
          <label>Live Status:</label>
          <input
            type="checkbox"
            name="is_live"
            checked={warehouse.is_live}
            onChange={handleInputChange}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <p>Name: {warehouse.name}</p>
          <p>Cluster: {warehouse.cluster}</p>
          <p>City: {warehouse.city}</p>
          <p>Space Available: {warehouse.space_available}</p>
          <p>Live Status: {warehouse.is_live ? 'Live' : 'Not Live'}</p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default WarehouseDetails;
