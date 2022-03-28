import s from "./index.module.css";
import ChevronDown from "assets/icons/ChevronDown.svg";
import ChevronUp from "assets/icons/ChevronUp.svg";
import IconButton from "components/common/IconButton";

const EmployeesSortItem = (props) => {
  const { sortId = "", sort = "", setSort = Function.prototype } = props;

  switch (sort) {
    case "asc":
      return (
        <IconButton
          onClick={() => setSort(sortId, "asc")}
          className={s.employeesSortItem_button}
        >
          <ChevronUp className={s.employeesSortItem_icon} />
        </IconButton>
      );
    default:
      return (
        <IconButton
          onClick={() => setSort(sortId, "desc")}
          className={s.employeesSortItem_button}
        >
          <ChevronDown className={s.employeesSortItem_icon} />
        </IconButton>
      );
  }
};

export default EmployeesSortItem;
