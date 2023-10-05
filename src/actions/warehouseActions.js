import {
  SEARCH_WAREHOUSE,
  FILTER_WAREHOUSE,
  EDIT_WAREHOUSE,
} from '../constants/ActionTypes';

export const searchWarehouse = (query) => ({
  type: SEARCH_WAREHOUSE,
  payload: query,
});

export const filterWarehouse = (filters) => ({
  type: FILTER_WAREHOUSE,
  payload: filters,
});

export const editWarehouse = (warehouse) => ({
  type: EDIT_WAREHOUSE,
  payload: warehouse,
});
