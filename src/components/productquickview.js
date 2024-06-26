// If 'Radio' and 'RadioGroup' are not used, remove the import
// import { Radio, RadioGroup } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/20/solid';
import { Radio, RadioGroup } from '@headlessui/react';
import { useCart } from "./CartContext"


const Item = {
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true },
    ],
    description:
        'This elegant saree is crafted from a premium lycra blend fabric, which offers a luxurious feel, providing a soft and comfortable drape that flatters your figure. The lycra blend ensures that the saree retains its shape and resists wrinkles, making it a practical choice. The fabric blend also offers a slight stretch, adding ease of movement and flexibility, ensuring you feel at ease throughout the day or evening.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The saree boasts an eye-catching ruffled design along the outer edge, imparting an aura of elegance and grace. This unique design detail elevates the saree overall appearance, making it a statement piece for special occasions and fashionable events. The ruffles add volume and movement to the saree, giving it a distinct and glamorous touch that sets it apart from traditional sarees.',
}
const reviews = {
    href: '#',
    average: 4,
    totalCount: 117
};


export default function ViewProduct() {
    const { categoryId, productId } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const { addToCart} = useCart();


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://ecommerce-backend-six-silk.vercel.app/api/${categoryId}/${productId}`);
                const productData = response.data;

                setProduct(productData);
                setSelectedColor(productData.colors ? productData.colors[0] : null); // Default to first color if exists
                setSelectedSize(productData.sizes ? productData.sizes.find(size => size.inStock) : null); // Default to first in-stock size if exists

                console.log('Fetched Product:', productData);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [categoryId, productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleAddToCart = (event) => {
        event.preventDefault();
        addToCart({
            id: productId,
            name: product.Title,
            price: parseInt(product.MRP, 10),
            color: selectedColor,
            size: selectedSize,
            imageSrc: product.Image,
            quantity: 1
        });
    };


    return (
        <div className="bg-gray-200">
            <div className="pt-16 pb-32">
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img
                            src={product.Image}
                            className="h-full w-full object-cover object-center"
                            alt={product.title}
                        />
                    </div>
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.Title}</h1>
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <div className="mt-6">
                                <p class="text-3xl mb-4 tracking-tight text-gray-900">{product.MRP}</p>
                                <h3 className="sr-only">Reviews</h3>

                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                className={`h-5 w-5 ${reviews.average > rating ? 'text-gray-900' : 'text-gray-200'}`}
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                                    <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        {reviews.totalCount} reviews
                                    </a>
                                </div>
                            </div>

                            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-8 lg:pr-8 lg:pt-6">
                                <div>
                                    <div className="space-y-6">
                                        <p className="text-base text-gray-900">{Item.description}</p>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <h2 className="text-sm font-medium text-gray-900">Details</h2>
                                    <div className="mt-4 space-y-6">
                                        <p className="text-base text-gray-900">{Item.details}</p>
                                    </div>
                                </div>
                            </div>

                            <form className="mt-0" onSubmit={handleAddToCart} >
                                {/*                                 
                                <RadioGroup value={selectedColor} onChange={setSelectedColor}>
                                    <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                                    <div className="flex items-center space-x-3">
                                        {product.colors && product.colors.map((color) => (
                                            <RadioGroup.Option
                                                key={color.name}
                                                value={color}
                                                className={({ active, checked }) =>
                                                    `${color.class} ${checked ? 'ring ring-offset-2' : ''} ${active ? 'ring' : ''} -m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none`
                                                }
                                            >
                                                <RadioGroup.Label as="span" className="sr-only">
                                                    {color.name}
                                                </RadioGroup.Label>
                                                <span
                                                    aria-hidden="true"
                                                    className={`h-8 w-8 ${color.class} border border-black border-opacity-10 rounded-full`}
                                                />
                                            </RadioGroup.Option>
                                        ))}
                                    </div>
                                </RadioGroup> */}

                                {/* <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                                    <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                        {product.sizes && product.sizes.map((size) => (
                                            <RadioGroup.Option
                                                key={size.name}
                                                value={size}
                                                disabled={!size.inStock}
                                                className={({ active, checked }) =>
                                                    `${size.inStock ? 'cursor-pointer focus:outline-none' : 'cursor-not-allowed opacity-25'} ${checked ? 'ring-2 ring-indigo-500' : ''} ${active ? 'ring-2 ring-offset-2 ring-indigo-500' : ''} border rounded-md py-2 px-4 text-center font-medium text-sm`
                                                }
                                            >
                                                <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                            </RadioGroup.Option>
                                        ))}
                                    </div>
                                </RadioGroup> */}

                                <button
                                    type="submit"
                                    className="mt-0 flex w-60 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    
                                >
                                    Add to bag
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
