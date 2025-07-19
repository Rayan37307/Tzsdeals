import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const CategoryItemForHero = ({ category }) => {
    return (
            <ul className="pr-2 flex items-center gap-2 justify-start flex">
                <li className="py-2">
                <Link to={"/category" + category.href}>
                  <p className="flex items-center justify-between w-[200px]">{category.name} <ArrowRight size={24} /></p>
            </Link>
            </li>
            </ul>
    );
};

export default CategoryItemForHero;
