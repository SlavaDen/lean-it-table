import styles from "consts/styles";

const PaginationItem = ({ children, ...props }) => {
  console.log();
  const stylePaginationItem = {
    border: `1px solid ${styles.borderColor}`,
    borderRadius: styles.borderRadiusSmall,
    padding: styles.paddingSmall,
    cursor: "pointer",
    display: "inline",
    marginRight: "4px",
  };
  const stylePaginationItemDisabled = {
    border: `1px solid ${styles.gray}`,
    borderRadius: styles.borderRadiusSmall,
    padding: styles.paddingSmall,
    backgroundColor: styles.gray,
    color: "white",
    display: "inline",
    marginRight: "4px",
  };

  return (
    <li
      style={props.disabled ? stylePaginationItemDisabled : stylePaginationItem}
      {...props}
    >
      {children}
    </li>
  );
};

export { PaginationItem };
export default PaginationItem;
