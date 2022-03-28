import { useContext, useState } from "react";
import { Button, TextField, Stack } from "components/common";
import SearchIcon from "assets/icons/Search.svg";
import s from "./index.module.css";
import { ContextEmployees } from "state/employees-reducer";

const EmployeesSearchForm = () => {
  const [searchText, setSearchText] = useState("");
  const { _, dispatch } = useContext(ContextEmployees);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_SEARCH_TEXT", payload: searchText });
  };

  return (
    <form autoComplete="off">
      <Stack>
        <TextField
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search"
        />
        <Button
          onClick={(e) => handleSearch(e)}
          className={s.employeesSearchForm_button}
        >
          <SearchIcon className={s.employeesSearchForm_icon} />
        </Button>
      </Stack>
    </form>
  );
};

export default EmployeesSearchForm;
