import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios";

export const useProductStore = create((set, get) => ({
    // State
    products: [],
    featuredProducts: [],
    loading: false,
    error: null,

    // Actions
    setProducts: (products) => set({ products }),
    
    // Fetch all products
    fetchAllProducts: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get("/products");
            set({ 
                products: response.data.products || [], 
                loading: false 
            });
            return response.data.products || [];
        } catch (error) {
            const errorMsg = error.response?.data?.error || "Failed to fetch products";
            set({ 
                error: errorMsg, 
                loading: false 
            });
            toast.error(errorMsg);
            throw error;
        }
    },

    // Fetch featured products
    fetchFeaturedProducts: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get("/products/featured");
            set({ 
                featuredProducts: Array.isArray(response.data) ? response.data : [], 
                loading: false 
            });
            return response.data || [];
        } catch (error) {
            console.error("Error fetching featured products:", error);
            const errorMsg = error.response?.data?.message || "Failed to fetch featured products";
            set({ 
                error: errorMsg, 
                loading: false 
            });
            toast.error(errorMsg);
            return [];
        }
    },

    // Fetch products by category
    fetchProductsByCategory: async (category) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`/products/category/${category}`);
            set({ 
                products: response.data.products || [], 
                loading: false 
            });
            return response.data.products || [];
        } catch (error) {
            const errorMsg = error.response?.data?.error || `Failed to fetch ${category} products`;
            set({ 
                error: errorMsg, 
                loading: false 
            });
            toast.error(errorMsg);
            throw error;
        }
    },

    // Create product
    createProduct: async (productData) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.post("/products", productData);
            set((state) => ({
                products: [response.data, ...state.products],
                loading: false,
            }));
            toast.success("Product created successfully");
            return response.data;
        } catch (error) {
            const errorMsg = error.response?.data?.error || "Failed to create product";
            set({ error: errorMsg, loading: false });
            toast.error(errorMsg);
            throw error;
        }
    },

    // Delete product
    deleteProduct: async (productId) => {
        set({ loading: true, error: null });
        try {
            await axios.delete(`/products/${productId}`);
            set((state) => ({
                products: state.products.filter((p) => p._id !== productId),
                featuredProducts: state.featuredProducts.filter((p) => p._id !== productId),
                loading: false,
            }));
            toast.success("Product deleted successfully");
        } catch (error) {
            const errorMsg = error.response?.data?.error || "Failed to delete product";
            set({ error: errorMsg, loading: false });
            toast.error(errorMsg);
            throw error;
        }
    },

    // Toggle featured status
    toggleFeaturedProduct: async (productId) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.patch(`/products/${productId}`, {
                isFeatured: !get().products.find(p => p._id === productId)?.isFeatured
            });
            
            const updatedProduct = response.data;
            
            set((state) => ({
                products: state.products.map((p) =>
                    p._id === updatedProduct._id ? updatedProduct : p
                ),
                featuredProducts: updatedProduct.isFeatured 
                    ? [...state.featuredProducts.filter(p => p._id !== updatedProduct._id), updatedProduct]
                    : state.featuredProducts.filter(p => p._id !== updatedProduct._id),
                loading: false,
            }));
            
            toast.success(
                `Product ${updatedProduct.isFeatured ? 'added to' : 'removed from'} featured`
            );
            return updatedProduct;
        } catch (error) {
            const errorMsg = error.response?.data?.error || "Failed to update product";
            set({ error: errorMsg, loading: false });
            toast.error(errorMsg);
            throw error;
        }
    },
}));
