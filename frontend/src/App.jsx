import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import PurchaseSuccessPage from "./pages/PurchaseSuccessPage";
import PurchaseCancelPage from "./pages/PurchaseCancelPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";

import { Toaster } from "react-hot-toast";
import { useUserStore } from "./stores/useUserStore";
import { useCartStore } from "./stores/useCartStore";

import { useEffect } from "react";

function App() {
	const { user, checkAuth, checkingAuth } = useUserStore();
	const { getCartItems } = useCartStore();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	useEffect(() => {
		if (!user) return;
		getCartItems();
	}, [getCartItems, user]);

	if (checkingAuth) return <LoadingSpinner />;

	return (
		<>
			{/* 🔥 Promo Bar */}
			<div className="bg-black text-white w-full fixed top-0 left-0 z-50">
				<p className="text-sm text-center py-2 px-4">
					Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
					<span className="underline mx-1 cursor-pointer">SHOP NOW</span>
				</p>
			</div>

			{/* 🌐 Main App Content */}
					<Navbar />
			<div className="pt-12 min-h-screen flex flex-col justify-between text-black max-w-7xl mx-auto">
				<div className="z-40">

					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/signup" element={!user ? <SignUpPage /> : <Navigate to="/" />} />
						<Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
						<Route
							path="/secret-dashboard"
							element={user?.role === "admin" ? <AdminPage /> : <Navigate to="/login" />}
						/>
						<Route path="/category/:category" element={<CategoryPage />} />
						<Route path="/cart" element={user ? <CartPage /> : <Navigate to="/login" />} />
						<Route
							path="/purchase-success"
							element={user ? <PurchaseSuccessPage /> : <Navigate to="/login" />}
						/>
						<Route path="/purchase-cancel" element={user ? <PurchaseCancelPage /> : <Navigate to="/login" />} />
					</Routes>
				</div>

				{/* 🍞 Toast & Footer */}
				<Toaster position="top-center" />
			</div>

			<Footer />
		</>
	);
}

export default App;
