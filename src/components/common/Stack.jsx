const Stack = ({ children, ...props }) => {
  const styleStack = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <div style={styleStack} {...props}>
      {children}
    </div>
  );
};

export { Stack };
export default Stack;
