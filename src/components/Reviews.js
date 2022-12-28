import React from 'react'
import Navbar from './Navbar'
import pic from '../assets/navbar/logo1.png'
import styled from 'styled-components'
export default function Reviews() {
  return (
    <div>
        <Navbar />
        {/* <Container>
        <div className="reviews">
          <div className="review">
            <div className="left">
          <img src={pic} alt="" />
            </div>
            <div className="right">
            <div className="user">
              <div className="profile">UN</div>
              <div className="info">
              <h4>User Name</h4>
              <p>Restaurant Location</p>
              </div>
              
            </div>
            <div className="ratings">
              <div className="rate"></div>
              <div className="rate"></div>
              <div className="rate"></div>
              <div className="rate"></div>
              <div className="rate"></div>
            </div>
            <div className="comment">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ducimus nemo autem ratione possimus iusto.</p>
            </div>
            </div>
          </div>
        </div>
        
      
        </Container> */}
          </div>
  )
}
const Container=styled.div`
// *{
//   margin:0;
//   padding:0;
// }
// display:flex;
// justify-content:center;
// .left{
//   width:20%;
//   margin-right:10px;
// }
// .right{
//   width:80%;
// }
// img{
//   width:200px;
// }
// .reviews{
//  border:2px solid black 
// }
// .review{
//   display:flex;
// }
// .ratings{
//   display:flex;
  
// }
// .rate{
//  margin:5px;
//   width:20px;
//   height:20px;
//   background-color:black;
//   border-radius:50%;
// }
// .user{
//   display:flex
// }
`