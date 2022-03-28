import styles from "consts/styles";

const TextField = ({ children, ...props }) => {
  const styleTextField = {
    border: `1px solid ${styles.borderColor}`,
    borderRadius: styles.borderRadiusMedium,
    padding: styles.paddingSmall,
    fontSize: 16,
  };

  return (
    <input style={styleTextField} {...props}>
      {children}
    </input>
  );
};

export { TextField };
export default TextField;
