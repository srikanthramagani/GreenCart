# 🛒 Grocery E-Commerce Application

A full-stack MERN (MongoDB, Express, React, Node.js) e-commerce application for grocery shopping with seller dashboard, online payments, and more.

## ✨ Features

### Customer Features
- 🔐 User authentication (Register/Login)
- 🛍️ Browse products by category
- 🔍 Search products
- 🛒 Shopping cart management
- 📍 Multiple shipping addresses
- 💳 Payment options (Cash on Delivery & Online Payment via Stripe)
- 📦 Order tracking
- 💰 Tax calculation (2%)

### Seller Features
- 🔐 Secure seller authentication
- ➕ Add new products with images (Cloudinary)
- 📋 Manage product list
- 📊 View and manage orders
- 🖼️ Multiple product image upload

## 🚀 Tech Stack

### Frontend
- **React** with Vite
- **React Router** for navigation
- **Axios** for API calls
- **React Hot Toast** for notifications
- **Tailwind CSS** for styling

### Backend
- **Node.js** & **Express.js**
- **MongoDB** with Mongoose
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Cloudinary** for image storage
- **Stripe** for payment processing
- **Cookie-parser** for session management

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Cloudinary account
- Stripe account

### 1. Clone the repository
\`\`\`bash
git clone https://github.com/YOUR_USERNAME/Grocery.git
cd Grocery
\`\`\`

### 2. Setup Server
\`\`\`bash
cd server
npm install
\`\`\`

Create a \`.env\` file in the \`server\` directory:
\`\`\`env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
SELLER_EMAIL=admin@example.com
SELLER_PASSWORD=your_admin_password
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
PORT=4000
NODE_ENV=development
\`\`\`

Start the server:
\`\`\`bash
npm run server
\`\`\`

### 3. Setup Client
\`\`\`bash
cd ../client
npm install
\`\`\`

Create a \`.env\` file in the \`client\` directory:
\`\`\`env
VITE_BACKEND_URL=http://localhost:4000
VITE_CURRENCY=$
\`\`\`

Start the client:
\`\`\`bash
npm run dev
\`\`\`

## 🌐 Usage

1. **Server** runs on `http://localhost:4000`
2. **Client** runs on `http://localhost:5173` or `http://localhost:5174`
3. Access seller dashboard at `/seller/login`

### Default Seller Credentials
Use the email and password you set in the server `.env` file.

## 📁 Project Structure

\`\`\`
Grocery/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── context/       # React Context (AppContext)
│   │   ├── pages/         # Page components
│   │   └── assets/        # Images and static files
│   └── package.json
│
├── server/                # Node.js backend
│   ├── controllers/       # Business logic
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── middleware/       # Authentication middleware
│   ├── configs/          # Database & Cloudinary config
│   └── package.json
│
└── README.md
\`\`\`

## 🔌 API Endpoints

### User Routes
- `POST /api/user/register` - Register new user
- `POST /api/user/login` - User login
- `GET /api/user/is-auth` - Check authentication
- `GET /api/user/logout` - User logout

### Seller Routes
- `POST /api/seller/login` - Seller login
- `GET /api/seller/is-auth` - Check seller authentication
- `GET /api/seller/logout` - Seller logout

### Product Routes
- `GET /api/product/list` - Get all products
- `POST /api/product/add` - Add product (seller only)
- `POST /api/product/delete` - Delete product (seller only)

### Cart Routes
- `POST /api/cart/update` - Update cart items

### Address Routes
- `POST /api/address/add` - Add shipping address
- `GET /api/address/get` - Get user addresses

### Order Routes
- `POST /api/order/cod` - Place COD order
- `POST /api/order/stripe` - Place online order
- `GET /api/order/user` - Get user orders
- `GET /api/order/seller` - Get all orders (seller)

## 🔒 Security Features

- JWT token authentication
- HTTP-only cookies
- Password hashing with bcryptjs
- CORS protection
- Environment variables for sensitive data

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Your Name - [GitHub Profile](https://github.com/YOUR_USERNAME)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Made with ❤️ using MERN Stack
