import { Link } from "react-router-dom";
import CategoryItemForHero from "./CategoryItemForHero";
import { ArrowRight } from "lucide-react";
const categories = [
	{ href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
	{ href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
	{ href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
	{ href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
	{ href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
	{ href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
	{ href: "/bags", name: "Bags", imageUrl: "/bags.jpg" },
];

const Hero = () => {
	return (
		<div className="flex items-center justify-between flex-wrap py-20">
            {/* categories listed */}
			<div className="border-r-2 border-r-gray-300">
                {categories.map((category) => (
                    <CategoryItemForHero key={category.name} category={category} />
                ))}
            </div>
            {/* banner */}
            <div className="m-4 bg-black z-[-1] text-white flex flex-1 h-96">
                <div className="flex flex-col justify-center p-4 pl-12">
                    <h3 className="text-[4rem] font-bold">Up to 50% <br />Off Voucher</h3>
                    <p className="text-[1rem]">Use code: <span>VOUCHER50</span></p>
                    <Link to="/category/jeans" className="flex items-center gap-2 underline text-white ">Shop Now <ArrowRight size={24} /></Link>
                </div>
                <div className="flex items-center justify-center">
                <img src="/heroimg.jpg" alt="" className="w-[90%] h-[90%] object-cover mt-4"/>
                </div>

            </div>
		</div>
	);
};

export default Hero;