import { Link } from "react-router-dom";

interface CardProps {
  id: string | number;
  image: string;
  title: string;
  summary: string;
}

export const Card = ({ id, image, title, summary }: CardProps) => {
  return (
    <div className="flex flex-col w-80  bg-gray-100 rounded-xl hover:transition hover:scale-105 transition-all hover:bg-gray-200">
      <div>
        <img src={image} className="w-80 h-64 rounded-t-xl" />
      </div>
      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold text-gray-900 min-h-24">{title}</h1>
        <p
          className="text-gray-500 line-clamp-3 "
          dangerouslySetInnerHTML={{ __html: summary }}
        />
      </div>
      <div className="p-4">
        <Link to={`/recipe/${id}`} className="cursor-pointer">
          <button className="font-bold flex items-center text-xl bg-[#A34343] text-white px-6 py-2 rounded-lg">
            Go
          </button>
        </Link>
      </div>
    </div>
  );
};
