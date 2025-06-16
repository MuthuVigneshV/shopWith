export default function basicOps(products,searchTerm,selectedCategory){
    let postProducts = products
    if (searchTerm != 0){
        postProducts = products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    const filteredProducts = selectedCategory === 'all' ? postProducts : postProducts.filter((product) =>  product.category === selectedCategory );

    return filteredProducts;
}