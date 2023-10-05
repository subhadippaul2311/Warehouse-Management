import {
  SEARCH_WAREHOUSE,
  FILTER_WAREHOUSE,
  EDIT_WAREHOUSE,
} from '../constants/ActionTypes';
import warehouseData from '../warehouse.json';

const initialState = {
  warehouses: warehouseData,
  filteredWarehouses: warehouseData,
};

const warehouseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_WAREHOUSE:
      const searchQuery = action.payload.toLowerCase();
      const filteredBySearch = state.warehouses.filter((warehouse) =>
        warehouse.name.toLowerCase().includes(searchQuery)
      );
      return { ...state, filteredWarehouses: filteredBySearch };

    case FILTER_WAREHOUSE:
      const { city, cluster, spaceAvailable } = action.payload;
      const filteredByFilters = state.warehouses.filter((warehouse) => {
        return (
          (!city || warehouse.city === city) &&
          (!cluster || warehouse.cluster === cluster) &&
          (!spaceAvailable || warehouse.space_available >= spaceAvailable)
        );
      });
      return { ...state, filteredWarehouses: filteredByFilters };

    case EDIT_WAREHOUSE:
      const editedWarehouses = state.warehouses.map((warehouse) =>
        warehouse.id === action.payload.id ? action.payload : warehouse
      );
      return {
        ...state,
        warehouses: editedWarehouses,
        filteredWarehouses: editedWarehouses,
      };

    default:
      return state;
  }
};

export default warehouseReducer;
