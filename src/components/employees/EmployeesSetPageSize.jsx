import { Select, Stack } from "components/common";
import { useContext } from "react";
import s from "./index.module.css";
import { ContextEmployees } from "state/employees-reducer";

const EmployeesSetPageSize = () => {
  const { state, dispatch } = useContext(ContextEmployees);
  const { pageSize = 25 } = state;

  const handleSetPageSize = (pageSize) => {
    dispatch({ type: "SET_PAGE_SIZE", payload: pageSize });
  };

  return (
    <Stack>
      <label className={s.employeesSetPageSize_label}>Rows per page: </label>
      <Select
        value={pageSize}
        onChange={(e) => handleSetPageSize(e.target.value)}
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </Select>
    </Stack>
  );
};

export default EmployeesSetPageSize;
