const Grid = ({ children, ...props }) => {
  const styleGrid = {
    display: "grid",
    gap: 10,
  };

  return (
    <div style={styleGrid} {...props}>
      {children}
    </div>
  );
};

export { Grid };
export default Grid;
