import Square from './Square';

function Board({ squares, onClick, xIsNext }) {
  const renderSquare = (i) => {
    const style = {
      borderTop: i < 3 ? 'none' : '4px solid black',
      borderLeft: i % 3 === 0 ? 'none' : '4px solid black',
    };
  
    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => onClick(i)}
        style={style}
        isXNext={xIsNext}
      />
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row"> 
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;