import { useState } from 'react'
import './App.css'
import  LoginForm  from "../src/pages/login";
import  Product  from "../src/pages/products";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

   return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  )
}

export default App
