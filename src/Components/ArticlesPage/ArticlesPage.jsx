import Articles from "./Articles";
import anp from "../../Images/anp.svg";

function ArticlesPage() {
  return (
    <div className="pt-5">
      <div className="bg-grad aboutusheader text-center ">
        <img src={anp} alt="" />
      </div>
      <div className="bg-sky"></div>
      <div className="bg-darkblue"></div>
      <div className="bg-sky"></div>
      <Articles />
    </div>
  );
}

export default ArticlesPage;
