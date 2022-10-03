import { useState } from "react";
import styled from "styled-components";
import play from "../assets/img/play-outline-icon.svg";
import setinha from "../assets/img/setinha.png"






function Card({index,data}){
    const[visible, setVisible] = useState(false);

    
    function BackCard({data, setVisible}){
        const [turned,setTurn] = useState(true);
        return(
            <>
                <StyledBackCard>
                    {!turned ?
                    <>
                    <CardTitle>{data.back}</CardTitle>
                    <AnwserContainer>
                        <div className="anwser-box wrong" onClick={()=> setVisible(false)}>Não lembrei</div>
                        <div className="anwser-box almost" onClick={()=> setVisible(false)}>Quase não lembrei</div>
                        <div className="anwser-box zap" onClick={()=> setVisible(false)}>Zap!</div> 
                    </AnwserContainer>
                    </>
                    :
                    <>
                    <div className="card-title">{data.front}</div>
                    <img onClick={()=> setTurn(false)} src={setinha} alt="setinha" />
                    </>
                    }
                
                </StyledBackCard>
            </>
        )
    }



    return(
        <>
        {visible ? <BackCard key={index} index={index} data={data} setVisible={setVisible}/> :
           <StyledCard>
           {`Pergunta ${index+1}`}
          <img onClick={()=>setVisible(true)} src={play} alt="play" />
   
       </StyledCard>}
        </>
    )   
}

export default Card


const StyledCard = styled.div`
    width: 100%;
    height: 65px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    font-family: "Recursive", sans-serif;
    font-size: 16px;
    display: flex;
    align-items: center;
    padding: 14px 14px;
    justify-content: space-between;

    img {
    width: 20px;
    height: 20px;
}
`

const StyledBackCard = styled.div`
width: 100%;
    height: 130px;
    background-color: #FFFFD4;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    font-family: "Recursive", sans-serif;
    font-size: 16px;
    display: flex;
    align-items: center;
    padding: 14px 14px;
    justify-content: space-between;
    position: relative;
    flex-direction: column;
    
    img {
    position: absolute;
    bottom: 10px;
    right: 10px;
}

`
const CardTitle = styled.div`
    
    width: 100%;

`

const AnwserContainer = styled.div`
     display: flex;
`

const AnwserBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85.17px;
    height: 37.17px;
    border-radius: 5px;
    color: white;
    font-size: 14px;
    margin: 0 5px;
`
