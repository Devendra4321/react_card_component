import Product from "./Product.jsx";

function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
  };
  return (
    <div style={styles}>
      <Product title="Logitech MX Master" idx={0} />
      <Product title="Apple pencil (2nd Gen)" idx={1} />
      <Product title="Zebronics Zed-transformer" idx={2} />
      <Product title="Petronics Toad 23" idx={3} />
    </div>
  );
}

export default ProductTab;
