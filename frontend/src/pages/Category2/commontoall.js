import React from 'react';
import { useNavigate } from 'react-router-dom';


const products = [
  {
    id: 1,
    name: '1 BHK',
    image: 'https://www.contractorbhai.com/wp-content/uploads/2012/08/space-saving-floor-plan-for-1-bhk-.jpg',
  },
  {
    id: 2,
    name: '2 BHK',
    image: 'https://imagecdn.99acres.com//microsite/wp-content/blogs.dir/6161/files/2023/12/2BHK-flat-design-plan_-3D-floor-plan-for-2BHK-with-large-area_pinterest_Behance.jpg',
  },
  {
    id: 3,
    name: '3 BHK',
    image: 'https://housing.com/news/wp-content/uploads/2022/12/3D-Floor-Plans-scaled.jpg',
  },
  {
    id: 4,
    name: '4 BHK',
    image: 'https://www.balajideepcleaning.com/assets/img/service/4%20bhk.jpg',
  },

];



function Category() {

    const navigate = useNavigate();

  const handleBuyNow = (productId) => {
    localStorage.setItem('redirectProductId', productId);

    navigate('/login');
  }
  return (
    <div className="product-section">
    <h1 className="product-section-title">Product Listing</h1>
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <button className="buy-button" onClick={() => handleBuyNow(product.id)}>
            Buy Now
          </button>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Category;
