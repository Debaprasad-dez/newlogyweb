import ProductDisplay from "./products/ProductDisplay";

function Products() {
  return (
    <div className="pt-5">
      <div className="bg-grad aboutusheader text-center ">
        <h1 className="display-5 fw-normal">Our Products</h1>
      </div>
      <div className="bg-sky"></div>
      <div className="bg-darkblue"></div>
      <div className="bg-sky"></div>
      <ProductDisplay />
    </div>
  );
}

export default Products;
