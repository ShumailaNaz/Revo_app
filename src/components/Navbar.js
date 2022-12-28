import React from 'react'
import styled from 'styled-components'
import logo from '../assets/navbar/logo1.png'
export default function Navbar() {
  return (
    <Container>
    <div className='navbar'>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="search">
          <input type="text" placeholder='Search' />
          <button>Post a Review</button>
        </div>
    </div>
    </Container>
  )
}
const Container=styled.div`
max-width:100vw;
background-color:#f2f2f2;
box-shadow:1px 1px 1px 1px ;rgba(0,0,0,0.5);
padding:20px;
.navbar{
  display:flex;
  justify-content:space-around;
}
.search{

}
img{
  width:200px;
}
input,button{
  margin-right:20px;
  padding:10px;
  background:none;
  border:none;
  box-shadow:0px 0px  1px 2px rgba(0,0,0,0.5);
  border-radius:10px;
  font-size:16px;
}
input:focus{
  border:none;
  outline:0;
}

`