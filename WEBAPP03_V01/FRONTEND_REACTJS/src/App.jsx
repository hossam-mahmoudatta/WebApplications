import React, {useState} from 'react'; // If you have not removed this
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Users from './components/Users'; // Adjust the path if necessary
import './App.css'

// Import the new pages
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import About from './pages/About';


const App = () => {
  // Step 1: Add theme state
  const [theme, setTheme] = useState('light');

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      {/* Pass theme and toggleTheme as props to Navbar */}
      <div className={`app-container ${theme}-theme`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
          <h1>Shopping App</h1>
          <Users /> {/* Render Users component on every page */}
        <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App
















// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
