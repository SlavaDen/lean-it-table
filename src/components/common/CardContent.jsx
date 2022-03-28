import styles from "consts/styles";

const CardContent = ({ children, ...props }) => {
  const styleCardContent = {
    padding: styles.paddingMedium,
  };

  return (
    <div style={styleCardContent} {...props}>
      {children}
    </div>
  );
};

export { CardContent };
export default CardContent;
