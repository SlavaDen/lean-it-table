import styles from "consts/styles";

const Card = ({ children, ...props }) => {
  const styleCard = {
    border: `1px solid ${styles.borderColor}`,
    borderRadius: styles.borderRadiusMedium,
  };

  return (
    <div style={styleCard} {...props}>
      {children}
    </div>
  );
};

export { Card };
export default Card;
