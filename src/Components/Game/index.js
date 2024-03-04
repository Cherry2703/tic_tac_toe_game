import React, { useRef, useState} from "react";


import circle_icon from "../Assets/circle.png"
import cross_icon from "../Assets/cross.png"

import "./index.css"

let data=['','','','','','','','','']



const Game=()=>{

let box_1=useRef(null)
let box_2=useRef(null)
let box_3=useRef(null)
let box_4=useRef(null)
let box_5=useRef(null)
let box_6=useRef(null)
let box_7=useRef(null)
let box_8=useRef(null)
let box_9=useRef(null)

let boxes_array=[box_1,box_2,box_3,box_4,box_5,box_6,box_7,box_8,box_9]

    let [count,setCount]=useState(0)
    let [lock,setLock]=useState(false)

   let result=useRef(null);

    const playerWinner=(data)=>{
        setLock(true)
        if(data==="X"){
            result.current.innerHTML=`Congratulations Player_1   X, you won`
        }else{
            result.current.innerHTML=`Congratulations Player_2   O, you won`
        } 
    }


    const checkWin=()=>{
        if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
            playerWinner(data[8])
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
            playerWinner(data[6])
        }
        else if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            playerWinner(data[2]) 
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
            playerWinner(data[5])
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
            playerWinner(data[8])
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
            playerWinner(data[6])
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
            playerWinner(data[7])
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
            playerWinner(data[8])
        }
    }

    const toggle=(e,num)=>{
        if(lock){
            return 0
        }
        if(count%2===0){
            e.target.innerHTML=`<img src='${cross_icon}'/>`
            data[num]="X"
            setCount(++count)
        }else{
            e.target.innerHTML=`<img src='${circle_icon}'/>`
            data[num]="O"
            setCount(++count)
        }
        checkWin()
    }


    const onReset=()=>{
        setLock(false)
        data=['','','','','','','','','']
        result.current.innerHTML=""
        boxes_array.map((each)=>{
            return each.current.innerHTML=""
        })
    }


    return(
        <div className="game-container">
            <h1>TIC-TAC-TOE</h1>
            <div>
                <p>Player_1 is   X</p>
                <p>Player_2 is   O</p>
            </div>
            <div className="game-board-container">
                <div className="row-1">
                    <div className="boxes" ref={box_1} onClick={(e)=>{toggle(e,0)}}></div>
                    <div className="boxes" ref={box_2} onClick={(e)=>{toggle(e,1)}}></div>
                    <div className="boxes" ref={box_3} onClick={(e)=>{toggle(e,2)}}></div>
                </div>
                <div className="row-2">
                    <div className="boxes" ref={box_4} onClick={(e)=>{toggle(e,3)}}></div>
                    <div className="boxes" ref={box_5} onClick={(e)=>{toggle(e,4)}}></div>
                    <div className="boxes" ref={box_6} onClick={(e)=>{toggle(e,5)}}></div>
                </div>
                <div className="row-3">
                    <div className="boxes" ref={box_7} onClick={(e)=>{toggle(e,6)}}></div>
                    <div className="boxes" ref={box_8} onClick={(e)=>{toggle(e,7)}}></div>
                    <div className="boxes" ref={box_9} onClick={(e)=>{toggle(e,8)}}></div>
                </div>
            </div>
            <p ref={result}>
            </p>
            <button type="button" className="reset-btn" onClick={()=>{onReset()}}>Reset</button>
        </div>
    )
}

export default Game