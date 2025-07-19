import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import { useState } from 'react';

const ProductCard = ({ product }) => {
	const { user } = useUserStore();
	const { addToCart } = useCartStore();
	const [isHovered, setIsHovered] = useState(false);

	const handleAddToCart = () => {
		if (!user) {
			toast.error("Please login to add products to cart", { id: "login" });
			return;
		} else {
			// add to cart
			addToCart(product);
		}
	};

	return (
		<div 
			className="relative group bg-white rounded-lg overflow-hidden transition-shadow duration-300"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Product Image */}
			<div className="relative aspect-square overflow-hidden rounded-lg">
				<img
					src={product?.image}
					alt={product?.name}
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
				/>
				
				{/* Add to Cart Button - Visible on hover (desktop) and always on mobile */}
				<button 
					className={`
						absolute bottom-0 left-1/2 -translate-x-1/2 
						bg-black text-white w-full py-2 
						flex items-center gap-2 whitespace-nowrap
						justify-center rounded-b-lg
						transition-all duration-300 transform
						${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
						md:group-hover:opacity-100 md:group-hover:translate-y-0
						md:opacity-0 md:translate-y-4
					`}
					onClick={handleAddToCart}
				>
					<span>Add to Cart</span>
				</button>
			</div>

			{/* Product Info */}
			<div className="p-4">
				<h3 className="font-medium text-gray-900 truncate">{product?.name}</h3>
				<div className="mt-2 flex justify-between items-center">
					<span className="text-lg font-semibold text-blue-600">
						${product?.price.toFixed(2)}
					</span>
				</div>
				<div className="flex justify-start gap-4">
					<div className=' flex items-center justify-between mt-[5px]'>
						<p>
							<span className='text-[12px] text-blue-500 font-bold'>${product?.price}</span>
						</p>
					</div>
					<div className='flex items-center mt-[5px]'>
						<div className=' flex'>
							{[...Array(Math.floor(product?.rating || 3)).keys()].map((i) => (
								<svg
									key={i}
										xmlns='http://www.w3.org/2000/svg'
										className='h-3 w-3 text-yellow-500'
										fill='orange'
										viewBox='0 0 24 24'
										stroke='orange'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
										/>
									</svg>
								))}
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};
export default ProductCard;
