import { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './utils/calculateWinner';
import './App.css';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) return;
  
    const newSquares = [...squares];
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };
  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? 'Draw!'
    : '';

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="game-container">
      <h1>Tic Tac Toe</h1>
      <p className="status" style={{ visibility: status ? 'visible' : 'hidden' }}>
        {status}
      </p>
      <Board squares={squares} onClick={handleClick} xIsNext={xIsNext}/>
      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default App;