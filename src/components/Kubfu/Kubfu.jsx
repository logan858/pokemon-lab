import React from 'react';
import KubfuImg from './Images/Kubfu.png'

function Kubfu(props){
    return (
        <div className="kubfu">
            <h3>HP: {props.kubfuHP}</h3>
            <img src={KubfuImg}></img><br/>
            <button onClick={()=>{props.kubfuAttack()}}>Attack</button>
        </div>
    )
}

export default Kubfu;