import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Item = () => {
  const { category } = useParams(); // Get the category parameter from URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products based on the category from your backend
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://ecommerce-backend-six-silk.vercel.app/api/${category}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts(); // Fetch products when component mounts or when category changes
  }, [category]); // Dependency on category ensures useEffect runs when category changes

  return (
    <div className="bg-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${category}/${product.product_id}`} className="group">
              <div className="w-full h-80 overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={product.Image}
                  alt={product.imageAlt}
                  className="h-200 w-full object-contain object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.Title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.MRP}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Item;
