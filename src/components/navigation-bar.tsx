import { Link } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <div className="bg-[#6C0345] p-6 ">
      <div className="max-w-7xl mx-auto">
        <Link to={"/"}>
          <h1 className="text-3xl font-bold text-white">
            DELICIOUS<span className="text-[#A34343]">Food</span>
          </h1>
        </Link>
      </div>
    </div>
  );
};
