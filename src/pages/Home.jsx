import React, { useEffect, useState } from 'react'
import basicOps from '../components/utility/basicOps';
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

function Home({cart, setCart}) {
    const [products, setProduct] = useState([]);
    const [categories, setCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        (
            async function name() {
                const repo = await fetch('https://fakestoreapi.com/products/categories');
                const data = await repo.json();
                setCategory(data);
                setLoading(false)
            })()
    }, [])

    useEffect(() => {
        (
            async function name() {
                const repo = await fetch('https://fakestoreapi.com/products');
                const data = await repo.json();
                setProduct(data);
                setLoading(false)
            })()
    }, [])


    const filteredProducts = basicOps(products, searchTerm, selectedCategory);

    const addProducts = (productId) => {
        setCart((prev) => ({
            ...prev, [productId]: (cart[productId] || 0) + 1

        }))
    }

    const removeProducts = (productId) => {
        setCart(prev => {
            if (!prev[productId]) return prev;
            const updated = { ...prev };
            if (updated[productId] === 1) {
                delete updated[productId];
            } else {
                updated[productId] -= 1;
            }
            return updated;
        });
    };


    return (
        <>
            <main className='home-container'>
                <div className="search-input-container">
                    <input type='search' onChange={(e) => setSearchTerm(e.target.value)} className='search-input' placeholder='eg: mens shirt'/>
                </div>
                <section className='category-buttons'>
                    <button onClick={() => setSelectedCategory("all")}>All</button>
                    {categories.map((category) => (
                        <button key={category} onClick={() => setSelectedCategory(category)} >{category}</button>
                    ))}
                </section>
                <div className='product-container'>
                    {loading ? <p>Loading...</p> : (
                        filteredProducts.length === 0 ? <p>Oops! Sorry 😓! Product Not Found.</p> : (
                            filteredProducts.map((product) => (
                                <section className='product-card' key={product.id}>
                                    <section className='product-img-container'>
                                        <img className='product-img' src={product.image} alt={product.image} />
                                    </section>
                                    <section className='product-content'>
                                        <h1 className='product-title'>{product.title}</h1>
                                        <div className='price-container'>
                                            <p className='product-price'>${product.price}</p>
                                            <div className='add-cart'>
                                                <FaCirclePlus onClick={() => addProducts(product.id)} className='icon' />
                                                <p className='quantity'>{cart[product.id] || 0}</p>
                                                <FaCircleMinus onClick={() => removeProducts(product.id)} className='icon' />
                                            </div>
                                        </div>
                                        <p className='product-des'>{product.description}</p>
                                    </section>
                                </section>
                            ))
                        )
                    )}
                </div>
            </main>
        </>
    )
}

export default Home