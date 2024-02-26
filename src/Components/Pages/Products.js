import React from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingCartFill } from "react-icons/ri";

const Products = (props) => {
  const getProductLink = (productId) => `/product/${productId}`;

  return (
    <div className='bg-blue-200 w-80 h-80 p-2 flex flex-col gap-1 rounded cursor-pointer hover:shadow-2xl hover:duration-500 relative'>
      <Link to={getProductLink(props.product.id)} key={props.product.id}>
        <div className=''>
          <div className='w-full h-40 bg-blue-500 overflow-hidden flex justify-center items-center'>
            <img className='' src={props.product.images[0]} alt='' />
          </div>
          <h1 className='text-xl'>{props.product.brand}</h1>
          <h1 className='text-xs'>{props.product.description?.substring(0, 90).concat('...')}</h1>
          <h3>Price:</h3>
          <h3 className='text-2xl'>{'$'+props.product.price}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Products;