import { useState } from 'react';

function Square({ value, onClick, style, isXNext }) {
  const [isHovered, setIsHovered] = useState(false);

  let displayValue = value;
  if (!value && isHovered) {
    displayValue = isXNext ? 'X' : 'O';
  }

  return (
    <button
      className="square"
      onClick={onClick}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={!value && isHovered ? 'ghost' : ''}>
        {displayValue}
      </span>
    </button>
  );
}

export default Square;