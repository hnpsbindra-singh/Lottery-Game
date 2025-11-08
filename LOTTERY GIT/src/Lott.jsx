import { useState } from "react"
 
export default function Lott() {
    let [tck, settck] = useState([0,0,0])
    let[win, setwin] = useState("")

   
    function generate() {
         let ar = []
        for(let i = 0; i<3;i=i+1)
        {
          ar[i] = Math.floor(Math.random() * 10)
        }
        console.log(ar)
        settck(ar)
    }
    function check() {
        let sum = 0
        tck.forEach((i)=>{
            sum = sum + i  
            
        }
    )
        if(sum == 15)
        {
            setwin("YOU WON ")
        }
        else
        {
            setwin(" YOU LOST ")
        }
    

        
    }
    return(
        <>
        <h1>Lottery Game Starts</h1>
        <p>Click the button to generate New ticket <button onClick={generate} style={{margin:5}}>Generate</button></p> 
        <p>Click the button to Check if you WON <button onClick={check} style={{margin:5}}>check</button></p> 
        <h4>Your Ticket Number Is {tck}</h4>
        <h4>{win}</h4>
        
        
        
        </>
    )
    
}