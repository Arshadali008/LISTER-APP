//err1

// import React, { useEffect, useState } from 'react';
// import { MdOutlineClose } from 'react-icons/md';
// import { Link, useParams } from 'react-router-dom';

// const ProductDetail = () => {
//   const { id } = useParams();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`https://dummyjson.com/products/${id}`);
//         const data = await response.json();
//         console.log('Product Data:', data);
//         setProducts(data.products || []);
//       } catch (error) {
//         console.error('Error fetching product:', error);
//       }
//     };
  
//     fetchProduct();
//   }, [id]);

//   return (
//     <div className='h-screen'>
//     <header className='flex justify-between px-2 pb-6 pt-2'>
//       <h1 className='text-3xl font-bold text-blue-500'>AsimCart</h1>
//       <button className='px-3 py-1 bg-blue-500 rounded text-white'>
//         <Link to='/'>
//           <MdOutlineClose />
//         </Link>
//       </button>
//     </header>

//     {products.length > 0 ? (
//       products.map((product) => (
//         <div className='flex items-center pt-14 justify-center' key={product.id}>
//           <div className='w-1/3'>
//             <img src={product.images[1]} alt='' />
//           </div>
//           <div className='px-3'>
//             <h1 className='text-2xl font-bold'>{product.brand}</h1>
//             <h3>{product.description}</h3>
//             <h3>price</h3>
//             <h1 className='text-3xl font-bold'>{product.price}</h1>
//           </div>
//         </div>
//       ))
//     ) : (
//       <p>Loading...</p>
//     )}
//   </div>
// );
// };


//eer2
// export default ProductDetail;
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ProductDetails = () => {
//   const [product, setProduct] = useState({});
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`https://dummyjson.com/products/${id}`);
//         const data = await response.json();
//         setProduct(data);
//         console.log(data);
//       } catch (error) {
//         console.error('Error fetching product:', error);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   return (
//     <div className='flex items-center pt-14 justify-center' key={product.id}>
//       <div className='w-1/3'>
//       <img src={product.images[0]} alt={product.title} />
//       </div>
//       <div className='px-3'>
//       <h1 className='text-2xl font-bold'>{product.brand}</h1>
//       <h3>{product.description}</h3>
//       <h3>price:</h3>
//       <h1 className='text-3xl font-bold'>{product.price}</h1>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;



import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import { MdOutlineClose } from 'react-icons/md';
import { CgSearchLoading } from "react-icons/cg";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/CartSlice';



const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className='bg-blue-400 p-2 h-screen'>
     <header className='flex justify-between pb-6 pt-2'>
        <h1 className='text-3xl font-bold text-white'>AsimCart</h1>
        <button className='px-3 py-1 bg-blue-500 rounded text-white'>
        <Link to='/'>
           <MdOutlineClose className='bg-blue-500 rounded' />
         </Link>
        </button>
      </header>
    <div className='md:flex grid items-center bg-white justify-center' key={product.id}>
      {product.images && product.images.length > 0 ? (
        <div>
        <div className='grid md:flex items-center md:p-28 p-2 justify-center'>
        <div className='md:w-1/3 flex w-full p-2 justify-center '>
          <img src={product.images[2]} alt={product.title} />
        </div>
      
      <div className='px-3'>
        <h1 className='text-2xl font-bold'>{product.brand}</h1>
        <h3>{product.description}</h3>
        <h3>price:</h3>
        <h1 className='text-3xl font-bold'>{'$'+product.price}</h1>
      </div>
      
      </div>
      <div className='md:flex grid justify-center place-content-center gap-2 p-3'>
      <button className='flex rounded w-72 mb-1 md:mb-0 p-2 bg-blue-500 justify-center cursor-pointer text-white hover:bg-blue-300 hover:text-gray-700 hover:shadow-lg'>Buy Now</button>
      <button
  className='flex rounded w-72 p-2 bg-blue-500 justify-center cursor-alias text-white hover:bg-blue-300 hover:text-gray-700 hover:shadow-lg'
  onClick={() => dispatch(addToCart({id:product.id, brand:product.brand, images:product.images[2], price:product.price }))}
>
  Add To Cart
</button>      </div>
      </div>
      ):(<CgSearchLoading className='flex justify-center w-14 h-96'/>)}
    </div>
    <footer className='w-full bg-blue-400'>
        <div className=''>
          <div className=' flex justify-center p-20 align-middle'>
              <h3>Copyright © 2024 Designed by Arshad Ali</h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetails;