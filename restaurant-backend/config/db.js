// // // const mongoose = require('mongoose');

// // // const connectDB = async () => {
// // //   try {
// // //     await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// // //     console.log('MongoDB Connected');
// // //   } catch (err) {
// // //     console.error(err.message);
// // //     process.exit(1);
// // //   }
// // // };

// // // module.exports = connectDB;


// // import mongoose from 'mongoose';

// // const connectDB = async () => {
// //   try {
// //     await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// //     console.log('MongoDB Connected');
// //   } catch (err) {
// //     console.error(err.message);
// //     process.exit(1);
// //   }
// // };

// // export default connectDB;


// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

// const connectDB = async () => {
//   try {
//     mongoose.connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,      
//     });
//     console.log('Connected to MongoDB successfully');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
//     process.exit(1);
//   }
// };

// export default connectDB;



// backend/config/db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

export default connectDB;