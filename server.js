// // import express from "express";
// // import dotenv from "dotenv";
// // import connectDB from "./config/db.js";
// // import menuRoutes from "./routes/menuRoutes.js";

// // dotenv.config();
// // connectDB();

// // const app = express();
// // app.use(express.json());

// // app.use("/api/menu", menuRoutes);

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// import express from 'express';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';
// import menuRoutes from './routes/menuRoutes.js';
// import cartRoutes from './routes/cartRoutes.js';
// import orderRoutes from './routes/orderRoutes.js';
// import authRoutes from './routes/authRoutes.js';

// dotenv.config();
// connectDB();

// const app = express();

// // Middleware
// app.use(express.json());  // Body parser middleware

// // Routes
// app.use('/api/menu', menuRoutes);
// app.use('/api/cart', cartRoutes);
// app.use('/api/orders', orderRoutes);
// app.use('/api/auth', authRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// backend/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import menuRoutes from './routes/menuRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import authRoutes from './routes/authRoutes.js';
import restaurantRoutes from './routes/restaurantRoutes.js'; // Import restaurant routes

dotenv.config();
connectDB();

const app = express();
// app.use(cors());
app.use(cors({ origin: 'http://localhost:3000' }));

// Middleware
app.use(express.json());  // Body parser middleware
app.use('/assets', express.static('public/assets'));// Serve static files

// Routes
app.use('/api/menu', menuRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/restaurants', restaurantRoutes); 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});