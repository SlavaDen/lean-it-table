import styles from "consts/styles";

const IconButton = ({ children, ...props }) => {
  const styleButton = {
    border: `1px solid ${styles.borderColor}`,
    borderRadius: styles.borderRadiusLarge,
    padding: styles.paddingSample,
    cursor: "pointer",
  };

  return (
    <button style={styleButton} {...props}>
      {children}
    </button>
  );
};

export { IconButton };
export default IconButton;
