//import React, { useState } from 'react';
import { useState } from 'react';
import './Chessboard.css';

const letters = ['a','b','c','d','e','f','g','h'];

export const Chessboard = () => {
    const [selected, setSelected] = useState<string | null>(null);

    const handleClick = (coord: string) => {
        console.log('Clicked', coord);
        setSelected(coord);
    }

    const squares = [];
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const isLight = (row + col) % 2 == 0;
            const letter = letters[col];
            const number = 8-row;
            const coord = letter + number;
            const isSelected = coord === selected;

            squares.push(
                <div
                    key={coord}
                    className={`square ${isLight ? 'light' : 'dark'} ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleClick(coord)}
                >
                    <span className="coord">{coord}</span>
                </div>
            );
        }
    }

    return <div className="board">{squares}</div>;
};
