import React from "react";

const initialStateEmployees = {
  employees: [],
  currentPage: 1,
  pageSize: 25,
  totalCount: 1000000,
  portionNumber: 1,
  searchText: "",
  loading: false,
  sorting: {
    id: null,
    firstName: null,
    surname: null,
  },
};

const employeesReducer = (state, action) => {
  switch (action.type) {
    case "SET_EMPLOYEES":
      return { ...state, employees: action.payload };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    case "SET_PAGE_SIZE":
      return {
        ...state,
        currentPage: 1,
        portionNumber: 1,
        pageSize: action.payload,
      };
    case "SET_TOTAL_COUNT":
      return { ...state, totalCount: action.payload };
    case "SET_PORTION_NUMBER":
      return { ...state, portionNumber: action.payload };
    case "SET_SEARCH_TEXT":
      return { ...state, searchText: action.payload };
    case "SET_SORTING":
      return { ...state, sorting: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
export const ContextEmployees = React.createContext();
export { employeesReducer, initialStateEmployees };
