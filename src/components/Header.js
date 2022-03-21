const headerStyle = {
  textAlign: "center",
  height: "10vh",
};

const h1Style = {
  marginTop: "0",
};

const Header = () => {
  return (
    <div style={headerStyle}>
      <h1 style={h1Style}>Wordle</h1>
    </div>
  );
};

export default Header;
