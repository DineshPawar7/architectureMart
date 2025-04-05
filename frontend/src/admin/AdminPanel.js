import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [pdf, setPdf] = useState(null);
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);

  const [password, setPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState("");

  const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD;

const handlePasswordSubmit = (e) => {
  e.preventDefault();

  if (password === ADMIN_PASSWORD) {
    setAccessGranted(true);
  } else {
    setError("Incorrect password, please try again.");
  }
};


  
  useEffect(() => {
    if (accessGranted) {
      fetchProducts();
    }
  }, [accessGranted]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://architecturemart.onrender.com/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setImages([...e.target.files]);
    }
  };

  const handlePdfChange = (e) => {
    if (e.target.files.length > 0) {
      setPdf(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !price || images.length === 0 || !pdf || !category) {
      alert("Please fill all the fields and upload required files.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);

    images.forEach((image) => {
      formData.append("images", image);
    });

    formData.append("pdf", pdf);

    try {
      const response = await axios.post("https://architecturemart.onrender.com/api/products/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Product uploaded successfully!");
      fetchProducts();

      setTitle("");
      setDescription("");
      setPrice("");
      setImages([]);
      setPdf(null);
      setCategory("");

      document.getElementById("imageInput").value = "";
      document.getElementById("pdfInput").value = "";
    } catch (error) {
      console.error("Error uploading product:", error);
      alert("Something went wrong while uploading!");
    }
  };

  const handleDelete = async (id) => {
    console.log("Deleting product with ID:", id);

    try {
      const response = await axios.delete(`https://architecturemart.onrender.com/api/products/${id}`);

      console.log(response.data);

      setProducts(products.filter((product) => product._id !== id));
      alert("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product", error);
      alert("Error deleting product");
    }
  };

  if (!accessGranted) {
    return (
      <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Panel Login</h2>
        <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded"
            required
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="bg-primaryColor text-white py-2 rounded hover:bg-hoverColor transition duration-200"
          >
            Enter Admin Panel
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Admin Panel - Upload Product</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 rounded"
          required
        />

        {/* Category Selector */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
          required
        >
          <option value="">Select Category</option>
          <option value="onebhk">1BHK</option>
          <option value="twobhk">2BHK</option>
          <option value="villa">Villa</option>
        </select>

        <input
          id="imageInput"
          type="file"
          multiple
          onChange={handleImageChange}
          accept="image/*"
          className="border p-2 rounded"
          required
        />
        <input
          id="pdfInput"
          type="file"
          onChange={handlePdfChange}
          accept="application/pdf"
          className="border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-primaryColor text-white py-2 rounded hover:bg-hoverColor transition duration-200"
        >
          Upload
        </button>
      </form>

      <h3 className="text-xl font-semibold mt-6">Uploaded Products</h3>
      {products.length === 0 ? (
        <p>No products uploaded yet.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product._id} className="flex justify-between items-center mt-4">
              <div>
                <h4 className="font-semibold">{product.title}</h4>
                <p>₹{product.price}</p>
              </div>
              <button
                onClick={() => handleDelete(product._id)}
                className="bg-primaryColor text-white py-1 px-4 rounded hover:bg-hoverColor transition duration-200"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminPanel;
