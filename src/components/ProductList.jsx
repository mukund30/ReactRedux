import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

function ProductList() {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Add to Product cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;