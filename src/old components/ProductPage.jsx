import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const { state } = useContext(GlobalContext);
  const product = state.selectedProduct;
  const navigate = useNavigate();

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <button
        onClick={() => navigate('/')}
        className="mb-4 p-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md hover:from-indigo-700 hover:to-purple-700"
      >
        Back to Home
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
        <div>
          <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            {product.title}
          </h1>
          <p className="text-3xl text-green-600">${product.price}</p>
          <p className="my-4 text-gray-700 dark:text-gray-300">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
