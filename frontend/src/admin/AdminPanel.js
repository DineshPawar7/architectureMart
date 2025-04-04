import React, { useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [pdf, setPdf] = useState(null);

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
  
    if (!title || !description || !price || images.length === 0 || !pdf) {
      alert("Please fill all the fields and upload required files.");
      return;
    }
  
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
  
    images.forEach((image) => {
      formData.append("images", image);
    });
  
    formData.append("pdf", pdf);
  
    try {
      const response = await axios.post("https://architecturemart.onrender.com/api/products/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
  
      alert("Product uploaded successfully!");
      console.log(response.data);
  
      setTitle("");
      setDescription("");
      setPrice("");
      setImages([]);
      setPdf(null);
  
      document.getElementById("imageInput").value = "";
      document.getElementById("pdfInput").value = "";
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };
  
  

  return (
    <div>
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
</div>

    </div>
  );
};

export default AdminPanel;
