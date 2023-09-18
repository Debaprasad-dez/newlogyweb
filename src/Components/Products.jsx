import ProductDisplay from "./products/ProductDisplay";
import ourp from "../Images/ourp.svg";

function Products() {
  return (
    <div className="pt-5">
      <div className="bg-grad aboutusheader text-center ">
        <img src={ourp} alt="" />
      </div>
      <div className="bg-sky"></div>
      <div className="bg-darkblue"></div>
      <div className="bg-sky"></div>
      <ProductDisplay />
    </div>
  );
}

export default Products;
