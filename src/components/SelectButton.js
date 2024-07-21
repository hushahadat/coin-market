const SelectButton = ({ children, selected, onClick }) => {
  const selectButtonStyles = {
    border: "1px solid #A91D3A",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Montserrat",
    cursor: "pointer",
    backgroundColor: selected ? "#A91D3A" : "",
    color: selected ? "black" : "",
    fontWeight: selected ? 700 : 500,
    "&:hover": {
      backgroundColor: "#A91D3A",
      color: "black",
    },
    width: "22%",
  };

  return (
    <span onClick={onClick} style={selectButtonStyles}>
      {children}
    </span>
  );
};

export default SelectButton;
