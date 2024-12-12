// // // // // // // import jwt from 'jsonwebtoken';

// // // // // // // // Protect middleware to check for valid JWT token
// // // // // // // export const protect = (req, res, next) => {
// // // // // // //   let token;
  
// // // // // // //   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
// // // // // // //     try {
// // // // // // //       token = req.headers.authorization.split(' ')[1];
// // // // // // //       const decoded = jwt.verify(token, process.env.JWT_SECRET);
// // // // // // //       req.user = decoded;
// // // // // // //       return next();
// // // // // // //     } catch (error) {
// // // // // // //       return res.status(401).json({ message: 'Not authorized, token failed' });
// // // // // // //     }
// // // // // // //   }

// // // // // // //   return res.status(401).json({ message: 'Not authorized, no token' });
// // // // // // // };

// // // // // // // // Admin middleware to check for admin role
// // // // // // // export const admin = (req, res, next) => {
// // // // // // //   if (req.user && req.user.role === 'admin') {
// // // // // // //     return next();
// // // // // // //   } else {
// // // // // // //     return res.status(401).json({ message: 'Not authorized, admin only' });
// // // // // // //   }
// // // // // // // };


// // // // // // // backend/middleware/auth.js
// // // // // // import jwt from 'jsonwebtoken';

// // // // // // // Protect middleware to check for valid JWT token
// // // // // // export const protect = (req, res, next) => {
// // // // // //   let token;
  
// // // // // //   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
// // // // // //     try {
// // // // // //       token = req.headers.authorization.split(' ')[1];
// // // // // //       const decoded = jwt.verify(token, process.env.JWT_SECRET);
// // // // // //       req.user = decoded;
// // // // // //       return next();
// // // // // //     } catch (error) {
// // // // // //       return res.status(401).json({ message: 'Not authorized, token failed' });
// // // // // //     }
// // // // // //   }

// // // // // //   return res.status(401).json({ message: 'Not authorized, no token' });
// // // // // // };
// // // // // // // Admin middleware to check for admin role
// // // // // // export const admin = (req, res, next) => {
// // // // // //   if (req.user && req.user.role === 'admin') {
// // // // // //     return next();
// // // // // //   } else {
// // // // // //     return res.status(401).json({ message: 'Not authorized, admin only' });
// // // // // //   }
// // // // // // };

// // // // // // backend/middleware/auth.js
// // // // // import jwt from 'jsonwebtoken';

// // // // // // Protect middleware to check for valid JWT token
// // // // // export const protect = (req, res, next) => {
// // // // //   let token;
  
// // // // //   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
// // // // //     try {
// // // // //       token = req.headers.authorization.split(' ')[1];
// // // // //       const decoded = jwt.verify(token, process.env.JWT_SECRET);
// // // // //       req.user = decoded;

// // // // //       console.log('Token:', token); // Log the token
// // // // //       console.log('Decoded:', decoded); // Log the decoded token
// // // // //       console.log('User:', req.user); // Log the user

// // // // //       return next();
// // // // //     } catch (error) {
// // // // //       console.error('Token verification failed:', error); // Log the error
// // // // //       return res.status(401).json({ message: 'Not authorized, token failed' });
// // // // //     }
// // // // //   }

// // // // //   console.error('No token provided'); // Log when no token is provided
// // // // //   return res.status(401).json({ message: 'Not authorized, no token' });
// // // // // };

// // // // // // Admin middleware to check for admin role
// // // // // export const admin = (req, res, next) => {
// // // // //   if (req.user && req.user.role === 'admin') {
// // // // //     return next();
// // // // //   } else {
// // // // //     return res.status(401).json({ message: 'Not authorized, admin only' });
// // // // //   }
// // // // // };


// // // // // backend/middleware/auth.js
// // // // import jwt from 'jsonwebtoken';

// // // // // Protect middleware to check for valid JWT token
// // // // export const protect = (req, res, next) => {
// // // //   let token;
  
// // // //   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
// // // //     try {
// // // //       token = req.headers.authorization.split(' ')[1];
// // // //       console.log('Token:', token); // Log the token
// // // //       const decoded = jwt.verify(token, process.env.JWT_SECRET);
// // // //       req.user = decoded;

// // // //       console.log('Decoded:', decoded); // Log the decoded token
// // // //       console.log('User:', req.user); // Log the user

// // // //       return next();
// // // //     } catch (error) {
// // // //       console.error('Token verification failed:', error); // Log the error
// // // //       return res.status(401).json({ message: 'Not authorized, token failed' });
// // // //     }
// // // //   }

// // // //   console.error('No token provided'); // Log when no token is provided
// // // //   return res.status(401).json({ message: 'Not authorized, no token' });
// // // // };

// // // // // Admin middleware to check for admin role
// // // // export const admin = (req, res, next) => {
// // // //   if (req.user && req.user.role === 'admin') {
// // // //     return next();
// // // //   } else {
// // // //     return res.status(401).json({ message: 'Not authorized, admin only' });
// // // //   }
// // // // };



// // // // // // import jwt from 'jsonwebtoken';

// // // // // // // Protect middleware to check for valid JWT token
// // // // // // export const protect = (req, res, next) => {
// // // // // //   let token;
  
// // // // // //   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
// // // // // //     try {
// // // // // //       token = req.headers.authorization.split(' ')[1];
// // // // // //       const decoded = jwt.verify(token, process.env.JWT_SECRET);
// // // // // //       req.user = decoded;
// // // // // //       return next();
// // // // // //     } catch (error) {
// // // // // //       return res.status(401).json({ message: 'Not authorized, token failed' });
// // // // // //     }
// // // // // //   }

// // // // // //   return res.status(401).json({ message: 'Not authorized, no token' });
// // // // // // };

// // // // // // // Admin middleware to check for admin role
// // // // // // export const admin = (req, res, next) => {
// // // // // //   if (req.user && req.user.role === 'admin') {
// // // // // //     return next();
// // // // // //   } else {
// // // // // //     return res.status(401).json({ message: 'Not authorized, admin only' });
// // // // // //   }
// // // // // // };


// // // // // // backend/middleware/auth.js
// // // // // import jwt from 'jsonwebtoken';

// // // // // // Protect middleware to check for valid JWT token
// // // // // export const protect = (req, res, next) => {
// // // // //   let token;
  
// // // // //   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
// // // // //     try {
// // // // //       token = req.headers.authorization.split(' ')[1];
// // // // //       const decoded = jwt.verify(token, process.env.JWT_SECRET);
// // // // //       req.user = decoded;
// // // // //       return next();
// // // // //     } catch (error) {
// // // // //       return res.status(401).json({ message: 'Not authorized, token failed' });
// // // // //     }
// // // // //   }

// // // // //   return res.status(401).json({ message: 'Not authorized, no token' });
// // // // // };
// // // // // // Admin middleware to check for admin role
// // // // // export const admin = (req, res, next) => {
// // // // //   if (req.user && req.user.role === 'admin') {
// // // // //     return next();
// // // // //   } else {
// // // // //     return res.status(401).json({ message: 'Not authorized, admin only' });
// // // // //   }
// // // // // };

// // // // // backend/middleware/auth.js
// // // // import jwt from 'jsonwebtoken';

// // // // // Protect middleware to check for valid JWT token
// // // // export const protect = (req, res, next) => {
// // // //   let token;
  
// // // //   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
// // // //     try {
// // // //       token = req.headers.authorization.split(' ')[1];
// // // //       const decoded = jwt.verify(token, process.env.JWT_SECRET);
// // // //       req.user = decoded;

// // // //       console.log('Token:', token); // Log the token
// // // //       console.log('Decoded:', decoded); // Log the decoded token
// // // //       console.log('User:', req.user); // Log the user

// // // //       return next();
// // // //     } catch (error) {
// // // //       console.error('Token verification failed:', error); // Log the error
// // // //       return res.status(401).json({ message: 'Not authorized, token failed' });
// // // //     }
// // // //   }

// // // //   console.error('No token provided'); // Log when no token is provided
// // // //   return res.status(401).json({ message: 'Not authorized, no token' });
// // // // };

// // // // // Admin middleware to check for admin role
// // // // export const admin = (req, res, next) => {
// // // //   if (req.user && req.user.role === 'admin') {
// // // //     return next();
// // // //   } else {
// // // //     return res.status(401).json({ message: 'Not authorized, admin only' });
// // // //   }
// // // // };


// // // // backend/middleware/auth.js
// // // import jwt from 'jsonwebtoken';

// // // // Protect middleware to check for valid JWT token
// // // export const protect = (req, res, next) => {
// // //   let token;
  
// // //   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
// // //     try {
// // //       token = req.headers.authorization.split(' ')[1];
// // //       console.log('Token:', token); // Log the token
// // //       const decoded = jwt.verify(token, process.env.JWT_SECRET);
// // //       req.user = decoded;

// // //       console.log('Decoded:', decoded); // Log the decoded token
// // //       console.log('User:', req.user); // Log the user

// // //       return next();
// // //     } catch (error) {
// // //       if (error.name === 'TokenExpiredError') {
// // //         console.error('Token expired:', error); // Log the error
// // //         return res.status(401).json({ message: 'Token expired, please log in again' });
// // //       }
// // //       console.error('Token verification failed:', error); // Log the error
// // //       return res.status(401).json({ message: 'Not authorized, token failed' });
// // //     }
// // //   }

// // //   console.error('No token provided'); // Log when no token is provided
// // //   return res.status(401).json({ message: 'Not authorized, no token' });
// // // };

// // // // Admin middleware to check for admin role
// // // export const admin = (req, res, next) => {
// // //   if (req.user && req.user.role === 'admin') {
// // //     return next();
// // //   } else {
// // //     return res.status(401).json({ message: 'Not authorized, admin only' });
// // //   }
// // // };




// // import jwt from 'jsonwebtoken';

// // // Protect middleware to check for valid JWT token
// // export const protect = (req, res, next) => {
// //   let token;
  
// //   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
// //     try {
// //       token = req.headers.authorization.split(' ')[1];
// //       console.log('Token:', token); // Log the token
// //       const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //       req.user = decoded;

// //       console.log('Decoded:', decoded); // Log the decoded token
// //       console.log('User:', req.user); // Log the user

// //       return next();
// //     } catch (error) {
// //       if (error.name === 'TokenExpiredError') {
// //         console.error('Token expired:', error); // Log the error
// //         return res.status(401).json({ message: 'Token expired, please log in again' });
// //       }
// //       console.error('Token verification failed:', error); // Log the error
// //       return res.status(401).json({ message: 'Not authorized, token failed' });
// //     }
// //   }

// //   console.error('No token provided'); // Log when no token is provided
// //   return res.status(401).json({ message: 'Not authorized, no token' });
// // };

// // // Admin middleware to check for admin role
// // export const admin = (req, res, next) => {
// //   if (req.user && req.user.role === 'admin') {
// //     return next();
// //   } else {
// //     return res.status(401).json({ message: 'Not authorized, admin only' });
// //   }
// // };



// // Protect middleware to check for valid JWT token
// import jwt from 'jsonwebtoken';

// export const protect = (req, res, next) => {
//   let token;
  
//   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//     try {
//       token = req.headers.authorization.split(' ')[1];
//       console.log('Token:', token); // Log the token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = decoded;

//       console.log('Decoded:', decoded); // Log the decoded token
//       console.log('User:', req.user); // Log the user

//       return next();
//     } catch (error) {
//       if (error.name === 'TokenExpiredError') {
//         console.error('Token expired:', error); // Log the error
//         return res.status(401).json({ message: 'Token expired, please log in again' });
//       }
//       console.error('Token verification failed:', error); // Log the error
//       return res.status(401).json({ message: 'Not authorized, token failed' });
//     }
//   }

//   console.error('No token provided'); // Log when no token is provided
//   return res.status(401).json({ message: 'Not authorized, no token' });
// };

// // Admin middleware to check for admin role
// export const admin = (req, res, next) => {
//   if (req.user && req.user.role === 'admin') {
//     return next();
//   } else {
//     return res.status(401).json({ message: 'Not authorized, admin only' });
//   }
// };



// backend/middleware/auth.js
import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
let token;

if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
 try {
   token = req.headers.authorization.split(' ')[1];
   const decoded = jwt.verify(token, process.env.JWT_SECRET);
   req.user = decoded;
   return next();
 } catch (error) {
   if (error.name === 'TokenExpiredError') {
     return res.status(401).json({ message: 'Token expired, please log in again' });
   }
   return res.status(401).json({ message: 'Not authorized, token failed' });
 }
}
return res.status(401).json({ message: 'Not authorized, no token' });
};

export const admin = (req, res, next) => {
 if (req.user && req.user.role === 'admin') {
     return next();
 } else {
     return res.status(401).json({ message: 'Not authorized, admin only' });
 }
};