const Table = ({ children, ...props }) => {
  const tableStyle = {
    width: "100%",
  };

  return (
    <table style={tableStyle} {...props}>
      {children}
    </table>
  );
};

export { Table };
export default Table;
