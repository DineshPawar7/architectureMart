import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: '1 BHK',
    image: 'https://www.contractorbhai.com/wp-content/uploads/2012/08/space-saving-floor-plan-for-1-bhk-.jpg',
    src: '/BuyPageOne'
  },
  {
    id: 2,
    name: '2 BHK',
    image: 'https://imagecdn.99acres.com//microsite/wp-content/blogs.dir/6161/files/2023/12/2BHK-flat-design-plan_-3D-floor-plan-for-2BHK-with-large-area_pinterest_Behance.jpg',
    src: '/2bhk'
  },
  {
    id: 3,
    name: '3 BHK',
    image: 'https://housing.com/news/wp-content/uploads/2022/12/3D-Floor-Plans-scaled.jpg',
    src: '/3bhk'
  },
  {
    id: 4,
    name: '4 BHK',
    image: 'https://www.balajideepcleaning.com/assets/img/service/4%20bhk.jpg',
    src: '/commontoall'
  },
  {
    id: 5,
    name: 'Studio Apartment',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnWJnYA9vFq_O8VL44IvkbKA4Vrj1kXj6riw&s',
    src: '/commontoall'
  },
  {
    id: 6,
    name: 'Penthouse',
    image: 'https://architizer-prod.imgix.net/media/mediadata/uploads/1550925614070Luxury-penthouse-3d-floor-plan-design-rendering-ideas.jpg?w=1680&q=60&auto=format,compress&cs=strip',
    src: '/commontoall'
  },
  {
    id: 7,
    name: 'Duplex',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/6/GD/XB/FR/33343279/regular-duplex-house-design.JPG',
    src: '/commontoall'
  },
  {
    id: 8,
    name: 'Villa',
    image: 'https://i.pinimg.com/736x/c2/25/17/c2251742e11b9ba63a43169f08b3da9b.jpg',
    src: '/commontoall'
  },
];

function Category() {
  const navigate = useNavigate();

  const handleBuyNow = (productSrc) => {
    navigate(productSrc);
  }

  return (
    <div className="product-section">
      <h1 className="product-section-title">Product Listing</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <button className="buy-button" onClick={() => handleBuyNow(product.src)}>
              See More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
