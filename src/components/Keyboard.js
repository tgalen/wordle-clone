const keyboardStyle = {
  height: "40vh",
};

const keyboardWrapper = {
  width: "50vw",
  maxWidth: "700px",
  height: "100%",
  margin: "auto",
};

const keyboardRow = {
  display: "flex",
  height: "30%",
  margin: "auto",
};

const letterButton = {
  height: "90%",
  width: "9%",
  backgroundColor: "gray",
  margin: "auto",
  borderRadius: "2px",
  textAlign: "center",
};

const wingButton = {
  height: "90%",
  width: "15%",
  margin: "auto",
  borderRadius: "2px",
  backgroundColor: "gray",
  textAlign: "center",
};

const Keyboard = () => {
  return (
    <div style={keyboardStyle}>
      <div style={keyboardWrapper}>
        <div style={keyboardRow}>
          <div style={letterButton}>Q</div>
          <div style={letterButton}>W</div>
          <div style={letterButton}>E</div>
          <div style={letterButton}>R</div>
          <div style={letterButton}>T</div>
          <div style={letterButton}>Y</div>
          <div style={letterButton}>U</div>
          <div style={letterButton}>I</div>
          <div style={letterButton}>O</div>
          <div style={letterButton}>P</div>
        </div>
        <div style={keyboardRow}>
          <div style={letterButton}>A</div>
          <div style={letterButton}>S</div>
          <div style={letterButton}>D</div>
          <div style={letterButton}>F</div>
          <div style={letterButton}>G</div>
          <div style={letterButton}>H</div>
          <div style={letterButton}>J</div>
          <div style={letterButton}>K</div>
          <div style={letterButton}>L</div>
        </div>
        <div style={keyboardRow}>
          <div style={wingButton}>Enter</div>
          <div style={letterButton}>Z</div>
          <div style={letterButton}>X</div>
          <div style={letterButton}>C</div>
          <div style={letterButton}>V</div>
          <div style={letterButton}>B</div>
          <div style={letterButton}>N</div>
          <div style={letterButton}>M</div>
          <div style={wingButton}>BS</div>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
