import miniLogo from "../assets/img/logo-pequeno.png"
import data from "../data/dados"
import Card from "./Card"


export default function Game(){
    return(
        <>
            <div className="game">
                <div className="header">
                    <img src={miniLogo} alt="logo"/>
                    <h1>ZapRecall</h1>
                </div>
                <div className="container">
                    {data.map((value, index)=> <Card key={index}
                     index={index} data={value}/>)}
            
                </div>
            </div> 
            <Footer />
        </>
    )
}


function Footer(){
    return(
        <div className="footer"></div>
    )
}

