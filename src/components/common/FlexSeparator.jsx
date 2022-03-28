const FlexSeparator = ({ children, ...props }) => {
  const styleFlexSeparator = {
    flexGrow: 1,
  };

  return (
    <div style={styleFlexSeparator} {...props}>
      {children}
    </div>
  );
};

export { FlexSeparator };
export default FlexSeparator;
