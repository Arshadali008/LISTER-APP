import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoRemoveCircle } from "react-icons/io5";
import { removeFromCart } from '../Redux/CartSlice';

const Cart = () => {
  const orders = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch()

  return (
    <div className='bg-blue-400 p-2 h-screen'>
      {/* Header code ... */}

      <div className="w-full my-8 p-8 bg-gray-100 shadow-md rounded-md">
        <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>
        {orders.length === 0 ? (
          <p className="text-gray-500">No orders in the cart.</p>
        ) : (
          <ul className="list-none">
            {orders.map((order) => (
              <li key={order.id} className="mb-2">
                <div className="flex items-center">
                  <img src={order.images} alt="" className="w-10 h-10 mr-2" />
                  <div className='flex'>
                    <span className="font-semibold">{order.brand}</span>
                    <p>${order.price}</p>
                    <button onClick={()=>dispatch(removeFromCart({id:order.id}))}><IoRemoveCircle className='text-3xl cursor-pointer' /></button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer code ... */}
    </div>
  );
};

export default Cart;