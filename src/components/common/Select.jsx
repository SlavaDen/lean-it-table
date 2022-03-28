import styles from "consts/styles";

const Select = ({ children, ...props }) => {
  const styleSelect = {
    border: `1px solid ${styles.borderColor}`,
    borderRadius: styles.borderRadiusMedium,
    padding: styles.paddingSmall,
  };

  return (
    <select style={styleSelect} {...props}>
      {children}
    </select>
  );
};

export { Select };
export default Select;
