import React from 'react'
import useProductStore from '../store/product-store'
import ProductCard from '../component/ProductCard';

function MyCart() {
    //javascript
    const cart = useProductStore((state) => state.cart);
    const actionClear = useProductStore((state) => state.actionClear);
    console.log(cart)
    return (
        <div>
            <button className='bg-red-700 p-2'
            onClick={actionClear}
            >Clear

            </button>
        {
            cart.map((product)=>{
                return <ProductCard 
                key={product.id} 
                product={product}/>;
                    
            })}
        </div>
    )
}

export default MyCart