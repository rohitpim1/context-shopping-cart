import React from 'react'
import styled from 'styled-components'
import { FaCartPlus,FaMale } from "react-icons/fa";
import {Link} from 'react-router-dom';
import {useProduct} from '../context/ProductContext'
const Nav = styled.div`
position:fixed;
top:0;
right:0;
left:0;
z-index:1;
margin-bottom:50px;
max-width:100%;
height:60px;
display:flex;
justify-content:space-between;
align-items:center;
background:#ffff;
box-shadow:1px 2px 2px grey;
padding:0 50px;
`;
const Heading = styled.h2`
padding-left:10px;
color:blue;
cursor:pointer;
text-decoration:none;
`;
const NavList= styled.div`
`;
const NavListItem = styled.a`
display:inline-block;
margin-right:10px;
font-size:1.2rem;
background:#fff;
padding:5px;
cursor:pointer;
color:grey;
transition:background 2s ease;
&:hover{
 background:grey;
 color:black;
}
`;

const NavIcon = styled.div``;
const Icon = styled.a`
display:inline-block;
margin-right:10px;

background:#fff;
padding:5px;
cursor:pointer;
color:grey;
transition:background 2s ease;
&:hover{
 background:grey;
 color:black;
}
`;

const Navbar = () =>{
  const state = useProduct();
 const length = state.state.cart.length;
  return(
    <Nav>
  <Link to="/" style={{textDecoration:"none"}}> <Heading>RoCommerce</Heading></Link>
   <NavList>
   <Link to="/" style={{textDecoration:"none"}}>   <NavListItem>Products</NavListItem></Link>
   <Link to="/About" style={{textDecoration:"none"}}>    <NavListItem>About</NavListItem></Link>
   <Link to="/Contact" style={{textDecoration:"none"}}>   <NavListItem>Contact</NavListItem></Link>
    </NavList>
    <NavIcon>
    <Link to="/Profile" style={{textDecoration:"none"}}>     <Icon><FaMale fontSize="1.4rem"/></Icon></Link>
    <Link to="/Cart" style={{textDecoration:"none"}}>    <Icon ><FaCartPlus fontSize="1.4rem"/><span>{length}</span></Icon></Link>

    </NavIcon>
    </Nav>
  )
}

export default Navbar;