import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useProductStore } from "../stores/useProductStore";

export default function ProductsEx() {
    const { products, fetchAllProducts } = useProductStore();
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8; // Show 8 products per page
    
    useEffect(() => {
        fetchAllProducts();
    }, [fetchAllProducts]);

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const currentProducts = products.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    const nextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
    };

    const prevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
    };
    
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex items-center gap-4 mb-4">
                <span className="w-[20px] h-[40px] bg-blue-500 rounded-md"></span>
                <p className="text-blue-500 text-[16px]">Our Products</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Explore Our Products</h2>
                <div className="flex items-center gap-2">
                    <button 
                        onClick={prevPage}
                        disabled={currentPage === 0}
                        className={`p-2 rounded-full ${currentPage === 0 ? 'bg-gray-200' : 'bg-blue-500 text-white hover:bg-blue-600'} transition-colors`}
                        aria-label="Previous page"
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <span className="px-4">
                        Page {currentPage + 1} of {totalPages}
                    </span>
                    <button 
                        onClick={nextPage}
                        disabled={currentPage >= totalPages - 1}
                        className={`p-2 rounded-full ${currentPage >= totalPages - 1 ? 'bg-gray-200' : 'bg-blue-500 text-white hover:bg-blue-600'} transition-colors`}
                        aria-label="Next page"
                    >
                        <ArrowRight size={24} />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentProducts.length > 0 ? (
                    currentProducts.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-8">
                        <p className="text-gray-500 text-lg">No products available at the moment.</p>
                    </div>
                )}
            </div>
        </div>
    );
}