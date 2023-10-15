/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Square from "./Components/Square";

function Board() {
   const [squares, setSquares] = useState(Array(9).fill(null));
   const [xIsNext, setXIsNext] = useState(false);
   const handleClick = (i) => {
      if (calculateWinner(squares) || squares[i]) {
         return;
      }
      const nextSquares = squares.slice();
      xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");

      setSquares(nextSquares);
      setXIsNext(!xIsNext);
   };

   console.log(squares);
   return (
      <div className="grid p-10 border-2 bg-white rounded-xl w-fit">
         <div>
            <Square
               value={squares[0]}
               onSquareClick={() => handleClick(0)}
            ></Square>
            <Square
               value={squares[1]}
               onSquareClick={() => handleClick(1)}
            ></Square>
            <Square
               value={squares[2]}
               onSquareClick={() => handleClick(2)}
            ></Square>
         </div>
         <div>
            <Square
               value={squares[3]}
               onSquareClick={() => handleClick(3)}
            ></Square>
            <Square
               value={squares[4]}
               onSquareClick={() => handleClick(4)}
            ></Square>
            <Square
               value={squares[5]}
               onSquareClick={() => handleClick(5)}
            ></Square>
         </div>
         <div>
            <Square
               value={squares[6]}
               onSquareClick={() => handleClick(6)}
            ></Square>
            <Square
               value={squares[7]}
               onSquareClick={() => handleClick(7)}
            ></Square>
            <Square
               value={squares[8]}
               onSquareClick={() => handleClick(8)}
            ></Square>
         </div>
      </div>
   );
}
const calculateWinner = (square) => {
   const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
   ];
   for (let i = 0 ; i< lines.length; i++)
   {
      const [a,b,c] = lines[i];
      if (square [a] && square [a] === square[b] && square[a] === square[c]) {
         return square[a]
      }
   }
   return null ; 
};
export default Board;
