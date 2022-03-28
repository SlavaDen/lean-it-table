import { TableHead, TableRow, TableCell } from "components/common";
import { useContext } from "react";
import { ContextEmployees } from "state/employees-reducer";
import EmployeesSortItem from "./EmployeesSortItem";
import Stack from "components/common/Stack";

const EmployeesTableHead = () => {
  const { state, dispatch } = useContext(ContextEmployees);
  const { sorting = {} } = state;

  const handleSetSorting = (key, value) => {
    const newSorting = {};

    Object.keys(sorting).map((sortKey) => {
      if (key === sortKey) {
        newSorting[key] = value;
      } else {
        newSorting[sortKey] = null;
      }
    });

    dispatch({ type: "SET_SORTING", payload: newSorting });
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell width="26%" variant="head" align="left">
          <Stack>
            <label>Id</label>
            <EmployeesSortItem
              sortId="id"
              sort="asc"
              setSort={handleSetSorting}
            />
            <EmployeesSortItem sortId="id" setSort={handleSetSorting} />
          </Stack>
        </TableCell>
        <TableCell width="37%" variant="head" align="left">
          <Stack>
            <label>Surname</label>
            <EmployeesSortItem
              sortId="surname"
              sort="asc"
              setSort={handleSetSorting}
            />
            <EmployeesSortItem sortId="surname" setSort={handleSetSorting} />
          </Stack>
        </TableCell>
        <TableCell width="37%" variant="head" align="left">
          <Stack>
            <label>First Name</label>
            <EmployeesSortItem
              sortId="firstName"
              sort="asc"
              setSort={handleSetSorting}
            />
            <EmployeesSortItem sortId="firstName" setSort={handleSetSorting} />
          </Stack>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default EmployeesTableHead;
