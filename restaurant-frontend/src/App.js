// // // src/App.js
// // import React,  { lazy, Suspense } from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Header from './components/Header';
// // // import Footer from './components/Footer';

// // import Menu from './pages/Menu';
// // import Cart from './pages/Cart';
// // import Checkout from './pages/Checkout';
// // import Login from './pages/Login';
// // import Register from './pages/Register';
// // const Home = lazy(() => import('./pages/Home'));
// // const RestaurantList = lazy(() => import('./pages/RestaurantList'));

// // function App() {
// //   return (
// //     <Router>
// //       <Header />
// //       <Suspense fallback={<div>Loading...</div>}>
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/restaurant-list" element={<RestaurantList />} />
// //         <Route path="/menu/:restaurantId" element={<Menu />} />
// //         <Route path="/cart" element={<Cart />} />
// //         <Route path="/checkout" element={<Checkout />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/register" element={<Register />} />
// //       </Routes>
// //       </Suspense>
// //       {/* <Footer /> */}
// //     </Router>
// //   );
// // }

// // export default App;


// // src/App.js
// import React,  { lazy, Suspense } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import { CartProvider } from './CartContext';


// import Menu from './pages/Menu';
// import Cart from './pages/Cart';
// import Checkout from './pages/Checkout';
// import Login from './pages/Login';
// import Register from './pages/Register';
// const Home = lazy(() => import('./pages/Home'));
// const RestaurantList = lazy(() => import('./pages/RestaurantList'));

// function App() {
//   return (
//     <CartProvider>
//     <Router>
//       <Header />
//       <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/restaurant-list" element={<RestaurantList />} />
//         <Route path="/menu/:restaurantId" element={<Menu />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//       </Suspense>
//     </Router>
//     </CartProvider>
//   );
// }

// export default App;

//######################

// src/App.js
import React,  { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { CartProvider } from './CartContext';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
const Home = lazy(() => import('./pages/Home'));
const RestaurantList = lazy(() => import('./pages/RestaurantList'));

function App() {
  return (
    <CartProvider>
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant-list" element={<RestaurantList />} />
        <Route path="/menu/:restaurantId" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </Suspense>
    </Router>
    </CartProvider>
  );
}

export default App;

