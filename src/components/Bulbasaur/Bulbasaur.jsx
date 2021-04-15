import React from 'react';
import BulbasaurImg from './Images/Bulbasaur.png'

function Bulbasaur(props){
    return (
        <div className="bulbasaur">
            <h3>HP: {props.bulbasaurHP} </h3>
            <img src={BulbasaurImg}></img><br/>
            <button onClick={()=>{props.bulbaAttack()}}>Attack</button>
        </div>
    )
}

export default Bulbasaur;