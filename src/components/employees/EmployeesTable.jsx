import EmployeesTableHead from "./EmployeesTableHead";
import EmployeesTableBody from "./EmployeesTableBody";
import Table from "components/common/Table";

const EmployeesTable = () => {
  return (
    <Table>
      <EmployeesTableHead />
      <EmployeesTableBody />
    </Table>
  );
};

export default EmployeesTable;
