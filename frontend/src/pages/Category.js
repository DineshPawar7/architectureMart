import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: '1 BHK',
    image: 'https://www.contractorbhai.com/wp-content/uploads/2012/08/space-saving-floor-plan-for-1-bhk-.jpg',
    src: '/onebhk'
  },
  {
    id: 2,
    name: '2 BHK',
    image: 'https://imagecdn.99acres.com//microsite/wp-content/blogs.dir/6161/files/2023/12/2BHK-flat-design-plan_-3D-floor-plan-for-2BHK-with-large-area_pinterest_Behance.jpg',
    src: '/twobhk'
  },
  {
    id: 3,
    name: '3 BHK',
    image: 'https://housing.com/news/wp-content/uploads/2022/12/3D-Floor-Plans-scaled.jpg',
    src: '/threebhk'
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
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Product Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 animate-fadeIn">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg text-center transform transition-all hover:translate-y-[-10px]">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{product.name}</h2>
            <button
              className="px-6 py-2 bg-[#481E14] text-white font-semibold rounded-lg hover:bg-[#3e180f] transition-colors duration-300"
              onClick={() => handleBuyNow(product.src)}
            >
              See More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
