import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useProductStore } from "../stores/useProductStore";

export default function FreshSales() {
    const { featuredProducts, fetchFeaturedProducts } = useProductStore();
    const [currentSlide, setCurrentSlide] = useState(0);
    const itemsPerPage = 4;
    
    useEffect(() => {
        fetchFeaturedProducts();
    }, [fetchFeaturedProducts]);

    const nextSlide = () => {
        setCurrentSlide(prev => 
            prev >= Math.ceil((featuredProducts?.length || 0) / itemsPerPage) - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide(prev => 
            prev <= 0 ? Math.ceil((featuredProducts?.length || 0) / itemsPerPage) - 1 : prev - 1
        );
    };
    
    const visibleProducts = featuredProducts?.slice(
        currentSlide * itemsPerPage,
        (currentSlide + 1) * itemsPerPage
    ) || [];

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex items-center gap-4 mb-4">
                <span className="w-5 h-10 bg-blue-600 rounded"></span>
                <p className="text-blue-600 font-medium">Today's</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold">Flash Sales</h2>
                    <div className="mt-2 flex items-center gap-4">
                        <span className="text-red-500 font-medium">
                            Ending in: 24h 00m 00s
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-4 md:mt-0">
                    <button 
                        onClick={prevSlide}
                        className="p-2 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white transition-colors"
                        aria-label="Previous slide"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="p-2 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white transition-colors"
                        aria-label="Next slide"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
            <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {visibleProducts.length > 0 ? (
                        visibleProducts.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))
                    ) : (
                        <p className="text-gray-500">No flash sale items available at the moment.</p>
                    )}
                </div>
            </div>
        </div>
    );
}