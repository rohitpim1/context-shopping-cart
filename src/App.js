import React from "react";
import "./style.css";
import styled from 'styled-components'
import {Routes,Route,useNavigate} from 'react-router-dom'

import {ErrorBoundary} from 'react-error-boundary'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import About from './pages/About'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import NoRoutePage from './pages/NoRoutePage'
import Product from './components/Product'
import ErrorFallback from "./ErrorFallback";

const Container = styled.div`

`;
export default function App() {
  const navigate = useNavigate();
  function ErrorFallback({error, resetErrorBoundary}) {
    return (
      <div role="alert" style={{marginTop:"100px"}}>
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    )
  }
  return (
    <Container>
      <Navbar/>
      <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      navigate("/")
    }}
  >
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Cart" element={<Cart/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Profile" element={<Profile/>}/>
        <Route exact path="/Contact" element={<Contact/>}/>
        <Route exact path="/products/product/:id" element={<Product/>}/> 
        <Route path="*" element={<NoRoutePage/>}/>
      </Routes>
      </ErrorBoundary>
    </Container>
  );
}
