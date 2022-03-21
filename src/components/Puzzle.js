const puzzleStyle = {
  height: "50vh",
};

const puzzleWrapper = {
  width: "40vw",
  height: "100%",
  margin: "auto",
  maxWidth: "500px",
};

const row = {
  width: "98%",
  height: "16%",
  display: "flex",
  margin: "1%",
  textAllign: "center",
};

const letterBox = {
  height: "98%",
  width: "18%",
  margin: ".9%",
  backgroundColor: "white",
};

const Puzzle = () => {
  return (
    <div style={puzzleStyle}>
      <div style={puzzleWrapper}>
        <div style={row}>
          <div style={letterBox}></div>
          <div style={letterBox}></div>
          <div style={letterBox}></div>
          <div style={letterBox}></div>
          <div style={letterBox}></div>
        </div>
        <div style={row}>
          <div style={letterBox}></div>
          <div style={letterBox}></div>
          <div style={letterBox}></div>
          <div style={letterBox}></div>
          <div style={letterBox}></div>
        </div>
        <div style={row}>
          <div style={letterBox}></div>
          <div style={letterBox}></div>
          <div style={letterBox}></div>
          <div style={letterBox}></div>
          <div style={letterBox}></div>
        </div>
        <div style={row}>
          <div style={letterBox}></div>
          <div style={letterBox}></div>
          <div style={letterBox}></div>
          <div style={letterBox}></div>
          <div style={letterBox}></div>
        </div>
        <div style={row}>
          <div style={letterBox}></div>
          <div style={letterBox}></div>
          <div style={letterBox}></div>
          <div style={letterBox}></div>
          <div style={letterBox}></div>
        </div>
      </div>
    </div>
  );
};

export default Puzzle;
