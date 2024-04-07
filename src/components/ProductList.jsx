import React, { useEffect, useState } from 'react'
import { getProducts } from '../helpers/api'
import { Link } from 'react-router-dom'

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        getProducts().then(data => {
            setProducts(data);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    useEffect(() => {
        if (products.data) {
          setFilteredProducts(
            products.data.filter(product =>
              product.title.toLowerCase().includes(search.toLowerCase())
            )
          );
        }
      }, [search, products]);

      return (
        <section className='max-w-[1600px] mx-auto p-8'>
          <h2 className='sr-only'>Products</h2>
          <label htmlFor='search' className='sr-only'>Search products</label>
          <input
            className='w-full p-4 mb-8 border-2 rounded-md'
            type="text"
            id='search'
            name='search'
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search products"
          />
          <div id='products' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8'>
            {filteredProducts && filteredProducts.map(product => (
              <Link to={`/product/${product.id}`} key={product.id} className='flex flex-col justify-between group gap-4'>
                <img src={product.image.url} alt={product.image.alt} className='w-full h-96 bg-white opacity-100 group-hover:opacity-80 object-cover object-center rounded-lg' />
                <h3 className='text-2xl font-black'>{product.title}</h3>
                <p className='text-md'>{product.description}</p>
                <h4 className='text-2xl font-bold'>${product.price}</h4>
              </Link>
            ))}
          </div>
        </section>
      )
}

export default ProductList