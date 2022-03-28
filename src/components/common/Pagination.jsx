import s from "./index.module.css";
import { PaginationItem } from "./PaginationItem";
import ChevronRight from "./icons/ChevronRight.svg";
import ChevronRightDuo from "./icons/ChevronRightDuo.svg";
import ChevronLeft from "./icons/ChevronLeft.svg";
import ChevronLeftDuo from "./icons/ChevronLeftDuo.svg";

const Pagination = (props) => {
  const {
    currentPage = 1,
    pageSize = 25,
    totalCount = 25,
    portionNumber = 1,
    setPortionNumber = Function.prototype,
    onPageChanged = Function.prototype,
  } = props;

  const portionSize = 10;
  let pagesCount = Math.ceil(totalCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  const styleCurrentPage = {
    width: 25,
    height: 25,
    color: "red",
  };

  return (
    <ul>
      {portionNumber > 1 && (
        <>
          <PaginationItem
            onClick={() => {
              setPortionNumber(1);
            }}
          >
            <ChevronLeftDuo className={s.pagination_icon} />
          </PaginationItem>
          <PaginationItem
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
          >
            <ChevronLeft className={s.pagination_icon} />
          </PaginationItem>
        </>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return currentPage === p ? (
            <PaginationItem disabled key={p}>
              {p}
            </PaginationItem>
          ) : (
            <PaginationItem
              key={p}
              onClick={() => {
                onPageChanged(p);
              }}
            >
              {p}
            </PaginationItem>
          );
        })}
      {portionCount > portionNumber && (
        <>
          <PaginationItem
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            <ChevronRight className={s.pagination_icon} />
          </PaginationItem>
          <PaginationItem
            onClick={() => {
              setPortionNumber(portionCount);
            }}
          >
            <ChevronRightDuo className={s.pagination_icon} />
          </PaginationItem>
        </>
      )}
    </ul>
  );
};

export { Pagination };
export default Pagination;
