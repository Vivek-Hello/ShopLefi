# ShopLefi 🛒  

ShopLefi is a full-stack eCommerce web application built with the MERN (MongoDB, Express.js, React, Node.js) stack. It provides a complete shopping experience with user authentication, product management, a shopping cart, coupons, and secure payment integration.

---

## Features 🚀  

- **User Authentication**  
  - Secure login, signup, and logout functionality.  
  - JWT-based authentication with automatic token refresh.  

- **Product Management**  
  - Browse and search products with detailed information.  
  - Admin dashboard for creating, updating, and deleting products.  

- **Shopping Cart**  
  - Add products to the cart and manage quantities.  
  - Persisted cart data for logged-in users.  

- **Coupon System**  
  - Apply discount coupons during checkout.  

- **Secure Payments**  
  - Integrated Stripe for secure and real-time payment processing.  

- **Responsive UI**  
  - Fully responsive design using Tailwind CSS.  

---

## Tech Stack 💻  

### Frontend  
- React  
- Zustand (State Management)  
- Tailwind CSS  
- React Router  

### Backend  
- Node.js  
- Express.js  
- MongoDB (via Mongoose ORM)  

### Additional Tools  
- Stripe API (for payments)  
- dotenv (environment variable management)  

---

## Installation and Setup 🛠️  

1. **Clone the Repository**  
   ```bash  
   git clone https://github.com/Vivek-Hello/ShopLefi.git  
   cd ShopLefi  

2. **Install Dependencies** 

-Backend
    -cd backend  
    -npm install  
    
-Frontend
    -cd frontend  
    -npm install  


3. **Environment Variables**

-Create a .env file in the backend directory and add the following variables:

    -PORT=8000  
    -MONGO_URI=your_mongodb_connection_string  
    -JWT_SECRET=your_jwt_secret  
    -STRIPE_SECRET_KEY=your_stripe_secret_key  
    

4. **Start the Application**

-Backend
    -cd backend  
    -npm run dev  

-Frontend
    -cd frontend  
    -npm run dev 

---

## Folder Structure 🗂️


**Backend**

-backend/  
-├── controllers/  
-├── models/  
-├── routes/  
-├── lib/  
-├── middleware/  
-└── server.js  


**Frontend**

-frontend/  
-├── src/  
-│   ├── components/  
-│   ├── pages/  
-│   ├── store/  
-│   ├── lib/  
-│   └── App.jsx  
-├── public/  
-└── vite.config.js  

---

## Contributing ✨
-Contributions are welcome! Feel free to submit a Pull Request or open an Issue for feedback or suggestions.

---

## License 📄
-This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgments 🙏
-React
-Node.js
-MongoDB
-Stripe
