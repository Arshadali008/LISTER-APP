import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Products from './Products';
import { RiShoppingCartFill } from "react-icons/ri";
import { UseSelector, useSelector } from 'react-redux';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(10);
  const limitOptions = [10, 20, 50, 100];
  const pageRange = 2;
  const user =JSON.parse(localStorage.getItem("user"));
  const cartItems= useSelector(state=>state.cart.cart)
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${(currentPage - 1) * limit}`);
        const data = await response.json();
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / limit));
        console.log(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [currentPage, limit]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleLimitChange = (newLimit) => {
    setLimit(newLimit);
    setCurrentPage(1);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = Math.max(1, currentPage - pageRange); i <= Math.min(totalPages, currentPage + pageRange); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.map((page) => (
      <button
        key={page}
        onClick={() => handlePageChange(page)}
        className={`px-3 py-1 mx-1 border ${page === currentPage ? 'bg-blue-500 text-white' : 'hover:bg-blue-200'}`}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className=' bg-blue-400 p-2'>
      <header className='flex justify-between pb-6 pt-2'>
        <h1 className='text-3xl font-bold text-white'>AsimCart</h1>
        <button className='px-3 py-1 bg-gray-800 rounded text-white'>
          <Link to='/counter'>Counter</Link>
        </button>
        <button className='px-3 py-1 bg-gray-800 rounded text-white'>
          <Link to='/cart'><RiShoppingCartFill />{cartItems.length}</Link>
        </button>
        <h3>Welcome Back {user && user.displayName}</h3>
        <button className='px-3 py-1 bg-gray-800 rounded text-white'>
          <Link to='/signin'>SignIn</Link>
        </button>
      </header>
      <div className='w-full items-center justify-center'>
        <section className='bg-gray-100 w-full p-2 grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>
          {products.map((product) => (
            <React.Fragment key={product.id}>
              <Products product={product} />
            </React.Fragment>
          ))}
        </section>
        <div className=' bg-white p-2 flex justify-between'>
        <div className="limit-dropdown mt-5">
          <label htmlFor="limit" className="text-sm">Show:</label>
          <select
            id="limit"
            onChange={(e) => handleLimitChange(parseInt(e.target.value))}
            value={limit}
            className="px-3 py-1 border"
          >
            {limitOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="pagination mt-4 flex justify-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 mx-1 border cursor-pointer bg-gray-200"
          >
            Previous
          </button>
          {renderPageNumbers()}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 mx-1 border bg-gray-200"
          >
            Next
          </button>
        </div>
        </div>
      </div>
      <footer className='w-full rounded-xl bg-blue-400'>
        <div className=''>
          <div className=' flex justify-center p-20 align-middle'>
              <h3>Copyright © 2024 Designed by Arshad Ali</h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;