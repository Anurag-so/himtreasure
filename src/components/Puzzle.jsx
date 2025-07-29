import React from 'react';

function Puzzle({ color }) {
    return (
        <div className={`puzzle ${color}`}></div>
    );
}

export default Puzzle;