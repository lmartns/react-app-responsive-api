import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=10&limit=8")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="base-grid">
      {products.map((item) => (
        <div key={item.id}>
          <h1 className="flex justify-center text-[18px] font-semibold text-white">
            {item.author}
          </h1>
          <Link to="/Details">
            <img className="default-box" src={item.download_url} alt="" />
          </Link>
        </div>
      ))}
    </section>
  );
}

export default Products;
