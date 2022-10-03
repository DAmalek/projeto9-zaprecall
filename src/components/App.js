import logo from "../assets/img/logo.png";
import React, { useState } from "react";
import Game from "./Game";
import styled from "styled-components";

export default function App() {

  const[visible, setVisible] = useState(false)

  return (
    <>
      {visible ? <Game /> :
      <StyledHome>
        <img src={logo} alt="logo"/>
          <h1>ZapRecall</h1>
        <button onClick={()=> setVisible(true)}>Iniciar Recall!</button>
      </StyledHome>}
    </>
  );
}


const StyledHome = styled.div` 
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1;
    background-color: #FB6B6B;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Righteous', cursive;
    color: white;
    font-size: 36px;
    font-weight: 400;

    button{
    width: 240px;
    height: 50px;
    color: #D70900;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin: 30px 0;
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
    }

    button:hover{
    background-color: #e9e9e9;
    transition: all 0.4s ease;
    cursor:pointer;
}

    button:active{
    transform: translateY(3px)
}

    img{
    width: 100px;
    height: 140px;
    margin: 15px 0;
}
`
