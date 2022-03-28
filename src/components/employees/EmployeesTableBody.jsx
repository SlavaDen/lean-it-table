import { useContext, useEffect, useState } from "react";
import { TableRow, TableCell } from "components/common";
import { ContextEmployees } from "state/employees-reducer";
import sortingEmployees from "helpers/sortingEmployees";

const EmployeesTableBody = () => {
  const { state } = useContext(ContextEmployees);
  const {
    currentPage = 1,
    pageSize = 25,
    employees = [],
    searchText = "",
    sorting = {},
  } = state;

  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [currentEmployees, setCurrentEmployees] = useState([]);

  useEffect(() => {
    setFilteredEmployees(
      employees.reduce((acc, employee) => {
        let isSearch = false;

        Object.values(employee).map((value) => {
          if (value.toLowerCase().includes(searchText.toLowerCase())) {
            isSearch = true;
          }
        });

        if (isSearch) {
          acc.push(employee);
        }
        return acc;
      }, [])
    );
  }, [employees, searchText]);

  useEffect(() => {
    filteredEmployees.sort((a, b) => sortingEmployees(a, b, sorting));
  }, [filteredEmployees, sorting]);

  useEffect(() => {
    const startSlice = currentPage * pageSize - pageSize;
    const endSlice = currentPage * pageSize;

    setCurrentEmployees(filteredEmployees.slice(startSlice, endSlice));
  }, [filteredEmployees, currentPage, pageSize, sorting]);

  return (
    <tbody>
      {currentEmployees.map((employee) => (
        <TableRow key={employee.id}>
          <TableCell>{employee.id}</TableCell>
          <TableCell>{employee.surname}</TableCell>
          <TableCell>{employee.firstName}</TableCell>
        </TableRow>
      ))}
    </tbody>
  );
};

export default EmployeesTableBody;
