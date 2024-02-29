export default function Price({ oldPrices, newPrices }) {
  let oldStyles = { textDecorationLine: "line-through" };
  let newStyles = { fontWeight: "bold" };
  let styles = {
    backgroundColor: "#e0c367",
    height: "40px",
    borderBottomLeftRadius: "14px",
    borderBottomRightRadius: "14px",
    color: "black",
  };
  return (
    <div style={styles}>
      <span style={oldStyles}>{oldPrices}</span>&nbsp;&nbsp;
      <span style={newStyles}>{newPrices}</span>
    </div>
  );
}
