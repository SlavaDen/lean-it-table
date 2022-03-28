import styles from "consts/styles";

const Button = ({ children, ...props }) => {
  const styleButton = {
    border: `1px solid ${styles.borderColor}`,
    borderRadius: styles.borderRadiusMedium,
    padding: styles.paddingSmall,
    cursor: "pointer",
    fontSize: "16px",
  };

  const styleButtonBlue = {
    ...styleButton,
    color: "white",
    backgroundColor: styles.blue400,
    border: `1px solid ${styles.blue400}`,
  };

  const { variant = "" } = props;

  switch (variant) {
    case "blue":
      return (
        <button style={styleButtonBlue} {...props}>
          {children}
        </button>
      );
    default:
      return (
        <button style={styleButton} {...props}>
          {children}
        </button>
      );
  }
};

export { Button };
export default Button;
