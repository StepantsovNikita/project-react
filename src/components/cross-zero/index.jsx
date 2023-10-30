import styles from './styled.module.css'
import React, { useState } from "react";

const CrossZero = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (winner || board[index]) return

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    if (checkWinner(newBoard, currentPlayer)) {
      setWinner(currentPlayer);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const checkWinner = (board, player) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] === player && board[b] === player && board[c] === player) {
        return true;
      }
    }

    return false;
  };
<div className={styles.X} ></div>
  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <div className={styles.App}>
      <h1 className={styles.text} >Крестики-нолики</h1>
      <div className={styles.board}>
        {board.map((cell, index) => (
          <div
            key={index}
            className={styles.cell}
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      {winner && (
        <div className={styles.winner}>
          Победитель: <span>{winner}</span>
        </div>
      )}
      {!winner && board.every((cell) => cell !== "") && (
        <div className={styles.draw}>Ничья!</div>
      )}
      <button className={styles.resetBtn} onClick={resetGame}>
        Начать заново
      </button>
      
    </div>
  
  );
  
};


export default CrossZero;
