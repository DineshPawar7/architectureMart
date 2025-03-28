# ArchitectureMart - The Home Architecture Design Marketplace

---

## [Deployment Link](https://architecture-mart07.vercel.app/)

---

#### Project Overview  
Home ArchitectureMart is a web-based platform where users can browse, purchase, and download architectural designs. The website includes authentication, a pricing section, and an integrated Razorpay payment gateway. The entire platform is fully responsive for seamless access across devices.  


### Features  

✅ **User Authentication**  
- Secure user login and registration system  
- Data storage in **MongoDB**  
- Authentication handling with **JWT**  

✅ **Pricing Section**  
- Clear pricing for different design packages  
- User-friendly UI for easy selection  

✅ **Razorpay Payment Gateway**  
- Secure and seamless payment integration  
- Users can pay via multiple methods  

✅ **Responsive Design**
Fully optimized for mobile, tablet, and desktop screens
Built with React.js for a dynamic and fast UI
Styled using CSS & TailwindCSS (or any other CSS framework if used) 


### Tech Stack  
Frontend: React.js, CSS (or TailwindCSS/Styled Components)
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT
Payment Gateway: Razorpay 


### Installation & Setup  

1️⃣ **Clone the Repository**  
```bash
git clone https://github.com/DineshPawar7/architectureMart.git
cd architectureMart
```

2️⃣ **Install Dependencies**  
```bash
npm install
```

3️⃣ **Setup Environment Variables**  
Create a `.env` file and add:  
```
MONGO_URI=your_mongodb_connection_string
RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
JWT_SECRET=your_jwt_secret
```

4️⃣ **Run the Server**  
```bash
npm start
```


### Future Enhancements  
🔹 **Admin Dashboard for Design Management**  
🔹 **Wishlist & Favorites Feature**  
🔹 **Advanced Search & Filtering**  


💡 **Contributions & Feedback**  
Feel free to contribute or report issues! 🚀  


🛠️ **Project Status: Work in Progress**
This project is currently under development. Some features may be incomplete or subject to change. Stay tuned for updates! 🚀
