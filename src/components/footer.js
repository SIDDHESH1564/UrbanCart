import React from "react";
export default function Footer() {
  return (
    <footer className="mt-auto text-gray-100 body-font dark bg-gray-200  ">
      <div className="container px-5 py-24 mx-0 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-2 md:mt-0 mt-1 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">Categories</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-black">Men's Clothing</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-black">Women's Clothing</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-black">Kid's Clothing</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-black">Accessories</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">Fashion</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-black">Shoes</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-black">Bags</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-black">Jewelry</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-black">Beauty</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">Home & Lifestyle</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-black">Electronics</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-black">Home Decor</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-black">Sports</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-black">Books</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">Health & Entertainment</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-black">Health & Wellness</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-black">Toys & Games</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-black">Automotive</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-black">Pet Supplies</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}