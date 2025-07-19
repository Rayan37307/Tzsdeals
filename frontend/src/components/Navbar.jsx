
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Lock, LogOut } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/Dropdown";
const Navbar = () => {
	const { user, logout } = useUserStore();
	const isAdmin = user?.role === "admin";
	const { cart } = useCartStore();
  
	return (
	  <header className="fixed top-0 left-0 w-full bg-white z-40 shadow-sm mt-[34px] border-b-2 border-b-gray-300 z-50">
		<div className="container mx-auto px-4 py-3 flex items-center justify-between">
		  
		  {/* Left: Logo */}
		  <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
			<img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
			{/* Optional: <span className="text-2xl font-bold text-emerald-400">YourBrand</span> */}
		  </Link>
  
		  {/* Center: Menu */}
		  <nav className="flex-1">
			<ul className="flex justify-center space-x-8 text-black font-medium">
			  <li>
				<Link to="/" className="hover:text-emerald-500 transition">
				  Home
				</Link>
			  </li>
			  <li>
				<Link to="/about" className="hover:text-emerald-500 transition">
				  About
				</Link>
			  </li>
			  <li>
				<Link to="/contact" className="hover:text-emerald-500 transition">
				  Contact
				</Link>
			  </li>
			  <li>
				<Link to="/signup" className="hover:text-emerald-500 transition">
				  Sign Up
				</Link>
			  </li>
			</ul>
		  </nav>
  
		  {/* Right: Cart + Dropdown */}
		  <div className="flex items-center space-x-6 flex-shrink-0">
			{user && (
			  <Link to="/cart" className="relative text-black hover:text-emerald-500 transition">
				<ShoppingCart size={24} />
				{cart.length > 0 && (
				  <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
					{cart.length}
				  </span>
				)}
			  </Link>
			)}
			{user && (
					<DropdownMenu>
					<DropdownMenuTrigger asChild>
					  <User className="text-white cursor-pointer bg-blue-500 rounded-full w-8 h-8 p-[5px]" size={24} />
					</DropdownMenuTrigger>
		
					<DropdownMenuContent className="bg-transparent backdrop-blur-md border border-gray-200 rounded-md shadow-md p-2">

					  {isAdmin && (
						<DropdownMenuItem asChild>
						  <Link
							to="/secret-dashboard"
							className="flex items-center px-3 py-2 rounded-md text-black hover:text-gray-800 cursor-pointer transition"
						  >
							<Lock className="mr-2" size={18} />
							<span className="hidden sm:inline">Dashboard</span>
						  </Link>
						</DropdownMenuItem>
					  )}
		
					  {user && (
						<DropdownMenuItem asChild>
						  <button
							onClick={logout}
							className="flex items-center px-4 py-2 rounded-md text-black hover:text-gray-800 cursor-pointer transition"
						  >
							<LogOut size={18} />
							<span className="hidden sm:inline ml-2">Log Out</span>
						  </button>
						</DropdownMenuItem>
					  )}
					</DropdownMenuContent>
				  </DropdownMenu>
			)}
  
		
		  </div>
		</div>
	  </header>
	);
  };

  export default Navbar;