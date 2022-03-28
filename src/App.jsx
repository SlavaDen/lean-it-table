import surnames from "./data/surnames.json";
import firstNames from "./data/firstNames.json";
import id from "./data/id.json";
import { useEffect, useReducer } from "react";
import getRandomInt from "helpers/getRandomInt";
import {
  Card,
  CardContent,
  FlexSeparator,
  Pagination,
  Stack,
  Preloader,
  Grid,
} from "components/common";
import EmployeesTable from "components/employees/EmployeesTable";
import EmployeesSetPageSize from "components/employees/EmployeesSetPageSize";
import EmployeesToolbar from "components/employees/EmployeesToolbar";
import {
  ContextEmployees,
  employeesReducer,
  initialStateEmployees,
} from "state/employees-reducer";

const App = () => {
  const [state, dispatch] = useReducer(employeesReducer, initialStateEmployees);

  const {
    currentPage = 1,
    pageSize = 25,
    totalCount = 1000000,
    portionNumber = 1,
    loading = false,
  } = state;

  const handleSetPortionNumber = (portionNumber) => {
    dispatch({ type: "SET_PORTION_NUMBER", payload: portionNumber });
  };

  const handlePageChanged = (page) => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: page });
  };

  const handleGenerationData = () => {
    dispatch({ type: "SET_LOADING", payload: true });
    const employees = [];

    for (let i = 0; i < totalCount; i++) {
      const employee = {
        id: `${i}${id[getRandomInt(0, 99)]}`,
        surname: surnames[getRandomInt(0, 99)],
        firstName: firstNames[getRandomInt(0, 99)],
      };
      employees.push(employee);
    }

    dispatch({ type: "SET_EMPLOYEES", payload: employees });
    setTimeout(() => dispatch({ type: "SET_LOADING", payload: false }), [1000]);
  };

  useEffect(() => {
    handleGenerationData();
  }, [dispatch]);

  return (
    <ContextEmployees.Provider value={{ dispatch, state }}>
      <Grid>
        <h1>Employees Table </h1>
        <EmployeesToolbar onGenerationData={handleGenerationData} />
        <Card>
          <CardContent>
            <EmployeesTable />
            <Stack>
              <EmployeesSetPageSize />
              <FlexSeparator />
              <Pagination
                currentPage={currentPage}
                pageSize={pageSize}
                totalCount={totalCount}
                portionNumber={portionNumber}
                setPortionNumber={handleSetPortionNumber}
                onPageChanged={handlePageChanged}
              />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      {loading && <Preloader />}
    </ContextEmployees.Provider>
  );
};

export default App;
