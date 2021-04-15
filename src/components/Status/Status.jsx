import React from 'react';

function PokeStatus(props) {
    return (
        <div className="status">
          <b>Status:</b> {props.pokeStatus}
        </div>
    )
}

export default PokeStatus;