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
      <h2>Admin Panel - Upload Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />

        <input type="file" multiple onChange={handleImageChange} accept="image/*" required />
        <input type="file" onChange={handlePdfChange} accept="application/pdf" required />

        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default AdminPanel;
