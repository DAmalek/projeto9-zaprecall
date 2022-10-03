import styled from "styled-components"
import miniLogo from "../assets/img/logo-pequeno.png"
import data from "../data/dados"
import Card from "./Card"


export default function Game(){
    return(
        <>
            <StyledGame>
                <StyledHeader>
                    <img src={miniLogo} alt="logo"/>
                    <h1>ZapRecall</h1>
                </StyledHeader>
                <StyledContainer>
                    {data.map((value, index)=> <Card key={index}
                     index={index} data={value}/>)}
            
                </StyledContainer>
            </StyledGame> 
            <Footer />
        </>
    )
}


function Footer(){
    return(
        <StyledFooter></StyledFooter>
    )
}


const StyledGame = styled.div`
    background-color: #FB6B6B;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Righteous', cursive;
    color: white;
    font-size: 38px;
    margin-right: 35px;
    
    img {
    margin: 0 15px;
}
`

const StyledContainer = styled.div`
    height: 70%;
    margin: 40px 40px;
    background-color: #FB6B6B;
    width: 300px;
    overflow-y: scroll;

`

const StyledFooter = styled.div`
    height: 90px;
    width: 100vw;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.15);
    font-family: 'Recursive', sans-serif;
`
