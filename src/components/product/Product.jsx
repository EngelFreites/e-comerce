import "./products.css";
export default function Product({ products }) {
  console.log(products);
  return (
    <main className="products">
      <ul>
        {products.map((product) => (
          <li className="product" key={product.id}>
            <img src={product.images[1]} alt={product.title} />
            <div className="describe-product">
              <div className="price-and-name">
                <p>{product.title}</p>
                <p>${product.price}</p>
              </div>
              <div>
                <button>🛒</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
