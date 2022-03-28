const TableRow = ({ children, ...props }) => {
  return <tr {...props}>{children}</tr>;
};

export { TableRow };
export default TableRow;
