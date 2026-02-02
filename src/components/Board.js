import { useState } from "react";

const Board = () => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);

  return (
    <div className="board">
      {snake.map((segment, index) => (
        <div
          key={index}
          className="snake"
          style={{
            gridColumn: segment.x,
            gridRow: segment.y
          }}
        />
      ))}
    </div>
  );
};
export default Board;
