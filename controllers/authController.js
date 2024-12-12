// // // import User from "../models/User.js";
// // // import bcrypt from "bcryptjs";  // or bcrypt if you're using that
// // // import jwt from 'jsonwebtoken';

// // // // Register User
// // // export const registerUser = async (req, res) => {
// // //   try {
// // //     const { name, email, password } = req.body;
// // //     console.log(name, email, password)
// // //     const existingUser = await User.findOne({ email });
// // //     if (existingUser) {
// // //       return res.status(400).json({ message: "User already exists" });
// // //     }

// // //     const newUser = new User({
// // //       name,
// // //       email,
// // //       password,
// // //     });

// // //     await newUser.save();
// // //     console.log('New User:', newUser); // Add this line to check
// // //     res.status(201).json({ message: "User registered successfully" });
// // //   } catch (error) {
// // //     res.status(500).json({ message: "Error registering user", error: error.message });
// // //   }
// // // };

// // // // Login User
// // // export const loginUser = async (req, res) => {
// // //   try {
// // //     const { email, password } = req.body;

// // //     const user = await User.findOne({ email });
// // //     if (!user) {
// // //       return res.status(404).json({ message: "User not found" });
// // //     }

// // //     const isPasswordValid = await bcrypt.compare(password, user.password);
// // //     if (!isPasswordValid) {
// // //       return res.status(400).json({ message: "Invalid credentials" });
// // //     }

// // //     // Generate a JWT token
// // //     const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

// // //     res.status(200).json({ message: "Login successful", token });
// // //   } catch (error) {
// // //     res.status(500).json({ message: "Error logging in user", error: error.message });
// // //   }
// // // };

// // // // Get User Profile
// // // export const getUserProfile = async (req, res) => {
// // //   try {
// // //     const { userId } = req.params;
// // //     const user = await User.findById(userId);

// // //     if (!user) {
// // //       return res.status(404).json({ message: "User not found" });
// // //     }

// // //     res.status(200).json({ user });
// // //   } catch (error) {
// // //     res.status(500).json({ message: "Error fetching user profile", error: error.message });
// // //   }
// // // };


// // // // backend/controllers/authController.js
// // // import User from "../models/User.js";
// // // import bcrypt from "bcryptjs";  // or bcrypt if you're using that
// // // import jwt from 'jsonwebtoken';

// // // // Register User
// // // export const registerUser = async (req, res) => {
// // //     try {
// // //         const { name, email, password } = req.body;
// // //         console.log(name, email, password)
// // //         const existingUser = await User.findOne({ email });
// // //         if (existingUser) {
// // //             return res.status(400).json({ message: "User already exists" });
// // //         }

// // //         const newUser = new User({
// // //             name,
// // //             email,
// // //             password,
// // //         });

// // //         await newUser.save();
// // //         console.log('New User:', newUser); // Add this line to check
// // //         res.status(201).json({ message: "User registered successfully" });
// // //     } catch (error) {
// // //         res.status(500).json({ message: "Error registering user", error: error.message });
// // //     }
// // // };

// // // // Login User
// // // export const loginUser = async (req, res) => {
// // //     try {
// // //         const { email, password } = req.body;

// // //         const user = await User.findOne({ email });
// // //         if (!user) {
// // //             return res.status(404).json({ message: "User not found" });
// // //         }

// // //         const isPasswordValid = await bcrypt.compare(password, user.password);
// // //         if (!isPasswordValid) {
// // //             return res.status(400).json({ message: "Invalid credentials" });
// // //         }

// // //         // Generate a JWT token
// // //         const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

// // //         res.status(200).json({ message: "Login successful", token });
// // //     } catch (error) {
// // //         res.status(500).json({ message: "Error logging in user", error: error.message });
// // //     }
// // // };

// // // // Get User Profile
// // // export const getUserProfile = async (req, res) => {
// // //     try {
// // //         const { userId } = req.params;
// // //         const user = await User.findById(userId);

// // //         if (!user) {
// // //             return res.status(404).json({ message: "User not found" });
// // //         }

// // //         res.status(200).json({ user });
// // //     } catch (error) {
// // //         res.status(500).json({ message: "Error fetching user profile", error: error.message });
// // //     }
// // // };



// // import User from "../models/User.js";
// // import bcrypt from "bcryptjs";
// // import jwt from 'jsonwebtoken';

// // // Register User
// // export const registerUser = async (req, res) => {
// //     try {
// //         const { name, email, password } = req.body;
// //         console.log(name, email, password)
// //         const existingUser = await User.findOne({ email });
// //         if (existingUser) {
// //             return res.status(400).json({ message: "User already exists" });
// //         }
// //         const hashedPassword = await bcrypt.hash(password, 10);
// //         const newUser = new User({
// //             name,
// //             email,
// //             password: hashedPassword,
// //             role: 'admin'
// //         });

// //         await newUser.save();
// //         console.log('New User:', newUser); // Add this line to check
// //         res.status(201).json({ message: "User registered successfully" });
// //     } catch (error) {
// //         res.status(500).json({ message: "Error registering user", error: error.message });
// //     }
// // };

// // // Login User
// // export const loginUser = async (req, res) => {
// //     try {
// //         const { email, password } = req.body;

// //         const user = await User.findOne({ email });
// //         if (!user) {
// //             return res.status(404).json({ message: "User not found" });
// //         }

// //         const isPasswordValid = await bcrypt.compare(password, user.password);
// //         if (!isPasswordValid) {
// //             return res.status(400).json({ message: "Invalid credentials" });
// //         }

// //         // Generate a JWT token
// //       const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
// //       res.json({ token, success: true });
// //     } catch (error) {
// //         res.status(500).json({ message: "Error logging in user", error: error.message });
// //     }
// // };

// // // Get User Profile
// // export const getUserProfile = async (req, res) => {
// //     try {
// //         const { userId } = req.params;
// //         const user = await User.findById(userId);

// //         if (!user) {
// //             return res.status(404).json({ message: "User not found" });
// //         }

// //         res.status(200).json({ user });
// //     } catch (error) {
// //         res.status(500).json({ message: "Error fetching user profile", error: error.message });
// //     }
// // };



// import User from "../models/User.js";
// import bcrypt from "bcryptjs";
// import jwt from 'jsonwebtoken';

// // Register User
// export const registerUser = async (req, res) => {
//     try {
//         const { name, email, password } = req.body;
//         console.log(name, email, password)
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: "User already exists" });
//         }
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = new User({
//             name,
//             email,
//             password: hashedPassword,
//             role: 'admin'
//         });

//         await newUser.save();
//         console.log('New User:', newUser); // Add this line to check
//         res.status(201).json({ message: "User registered successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Error registering user", error: error.message });
//     }
// };

// // Login User
// export const loginUser = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const user = await User.findOne({ email });
//         console.log("user found", user)
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }
//       console.log("password sent", password)
//         const isPasswordValid = await bcrypt.compare(password, user.password);
//           console.log("password match result", isPasswordValid)

//         if (!isPasswordValid) {
//             return res.status(400).json({ message: "Invalid credentials" });
//         }

//         // Generate a JWT token
//       const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
//       res.json({ token, success: true });
//     } catch (error) {
//         res.status(500).json({ message: "Error logging in user", error: error.message });
//     }
// };

// // Get User Profile
// export const getUserProfile = async (req, res) => {
//     try {
//         const { userId } = req.params;
//         const user = await User.findById(userId);

//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         res.status(200).json({ user });
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching user profile", error: error.message });
//     }
// };


import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

// Register User
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name, email, password)
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
         console.log('Hashed Password Before Save:', hashedPassword); // Added logging
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role: 'admin'
        });

        await newUser.save();
        console.log('New User:', newUser); // Add this line to check
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
};

// Login User
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
         console.log("Email:", email, "Password:", password); // Log email and password
        const user = await User.findOne({ email });
        console.log("user found", user)
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
      console.log("password sent", password)
      console.log('Hashed Password from DB:', user.password); // Log from DB
        const isPasswordValid = await bcrypt.compare(password, user.password);
          console.log("password match result", isPasswordValid)

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate a JWT token
      const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token, success: true });
    } catch (error) {
        res.status(500).json({ message: "Error logging in user", error: error.message });
    }
};

// Get User Profile
export const getUserProfile = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: "Error fetching user profile", error: error.message });
    }
};