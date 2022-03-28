import styles from "consts/styles";

const TableCell = ({ children, ...props }) => {
  const { variant = "body" } = props;

  switch (variant) {
    case "head":
      const styleTableCellHead = {
        borderBottom: `1px solid ${styles.borderColor}`,
        padding: styles.paddingSmall,
      };
      return (
        <th style={styleTableCellHead} {...props}>
          {children}
        </th>
      );
    default:
      const styleTableCell = {
        borderBottom: `1px solid ${styles.borderColor}`,
        padding: styles.paddingSmall,
      };
      return (
        <td style={styleTableCell} {...props}>
          {children}
        </td>
      );
  }
};

export { TableCell };
export default TableCell;
