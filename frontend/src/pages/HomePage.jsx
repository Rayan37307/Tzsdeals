import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import FreshSales from "../components/FreshSales";
import ProductsEx from "../components/ProductsEx";
import Services from "../components/Services";
import Banner from "../components/Banner";

const HomePage = () => {
	const { fetchFeaturedProducts } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<>
			<Hero />
			<FreshSales />
			<ProductsEx />
			<Banner />
			<Services />
		</>
	);
};
export default HomePage;
