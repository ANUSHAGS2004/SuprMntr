import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to my React multi-page application.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This application demonstrates routing using React Router.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>Email: example@email.com</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <div style={{textAlign:"center"}}>

        <h1>React Multi-Page App</h1>

        <nav>
          <Link to="/">Home</Link> |
          <Link to="/about"> About</Link> |
          <Link to="/contact"> Contact</Link>
        </nav>

        <hr/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;