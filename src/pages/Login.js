// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here (e.g., authentication check)
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded" />
        </div>
        <button onClick={handleLogin} className="bg-blue-500 text-white w-full py-2 rounded">Log In</button>
      </form>
    </div>
  );
};

export default Login;

//#########################################################

// // src/pages/Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

  
// const handleLogin = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await fetch('http://localhost:5000/api/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       localStorage.setItem('token', data.token); // Save token
//       alert('Login successful');
//       navigate('/');
//     } else {
//       const error = await response.json();
//       alert(error.message || 'Login failed');
//     }
//   } catch (error) {
//     console.error('Error during login:', error);
//     alert('An error occurred during login.');
//   }
// };

//   // const handleLogin = (e) => {
//   //   e.preventDefault();
//   //   // Add login logic here (e.g., authentication check)
//   //   navigate('/');
//   // };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form className="bg-white p-8 rounded shadow-md w-80">
//         <h2 className="text-2xl font-bold mb-6">Login</h2>
//         <div className="mb-4">
//           <label className="block text-gray-700">Email</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded" />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700">Password</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded" />
//         </div>
//         <button onClick={handleLogin} className="bg-blue-500 text-white w-full py-2 rounded">Log In</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

