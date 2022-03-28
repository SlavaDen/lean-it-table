const sortingEmployees = (a = {}, b = {}, sorting = {}) => {
  const firstNameA = a.firstName.toUpperCase();
  const firstNameB = b.firstName.toUpperCase();
  const surnameA = a.surname.toUpperCase();
  const surnameB = b.surname.toUpperCase();
  const idA = a.id.toUpperCase();
  const idB = b.id.toUpperCase();

  if (sorting.firstName) {
    return sortHandler(firstNameA, firstNameB, sorting.firstName);
  }
  if (sorting.surname) {
    return sortHandler(surnameA, surnameB, sorting.surname);
  }
  if (sorting.id) {
    return sortHandler(idA, idB, sorting.id);
  }
};

const sortHandler = (aValue, bValue, sort) => {
  switch (sort) {
    case "asc":
      if (aValue > bValue) {
        return 1;
      } else if (aValue < bValue) {
        return -1;
      }
      return 0;
    case "desc":
      if (aValue < bValue) {
        return 1;
      } else if (aValue > bValue) {
        return -1;
      }
      return 0;
    default:
      break;
  }
};

export default sortingEmployees;
