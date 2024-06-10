import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Center = (props) => {
  const products = props.products;

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
      <aside className="w-full md:w-1/4 p-4 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul>
          <li className="mb-2">
            <a href="#category1" className="text-gray-600 hover:text-gray-900">
              Category 1
            </a>
          </li>
          <li className="mb-2">
            <a href="#category2" className="text-gray-600 hover:text-gray-900">
              Category 2
            </a>
          </li>
          <li className="mb-2">
            <a href="#category3" className="text-gray-600 hover:text-gray-900">
              Category 3
            </a>
          </li>
        </ul>
        <h2 className="text-xl font-bold mb-4 mt-6">Filters</h2>
        <ul>
          <li className="mb-2">
            <a href="#filter1" className="text-gray-600 hover:text-gray-900">
              Filter 1
            </a>
          </li>
          <li className="mb-2">
            <a href="#filter2" className="text-gray-600 hover:text-gray-900">
              Filter 2
            </a>
          </li>
          <li className="mb-2">
            <a href="#filter3" className="text-gray-600 hover:text-gray-900">
              Filter 3
            </a>
          </li>
        </ul>
      </aside>
      <main className="w-full md:w-3/4 p-4">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded shadow flex flex-col justify-between w-full max-w-xs mx-auto"
            >
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="font-bold text-lg">{product.title}</h3>
                <p className="text-gray-700">${product.price}</p>
              </div>
              <div className="flex items-center mt-2">
                <Rating
                  style={{ maxWidth: 100 }}
                  readOnly
                  value={product.rating.rate}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Center;
