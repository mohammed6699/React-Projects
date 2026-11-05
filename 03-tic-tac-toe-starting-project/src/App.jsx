import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

function driveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
const INTIAL_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function driveWinner(gameBoard, players) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const first = combination[0];
    const second = combination[1];
    const third = combination[2];

    const firstSquareSymbol = gameBoard[first.row][first.column];
    const secondSquareSymbol = gameBoard[second.row][second.column];
    const thirdSquareSymbol = gameBoard[third.row][third.column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
      break;
    }
  }
  return winner;
}

function driveGameboard(gameTurns) {
  let gameBoard = [...INTIAL_BOARD.map((item) => [...item])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}
const playersData = {
  X: "player 1",
  O: "player 2",
};
function App() {
  // handle the players name to be displayed when won or draw
  const [players, setPlayers] = useState(playersData);
  // lefiting state up
  // now I need to stop using this state and depend on the gameturns only
  // const [activePlayer, setActiveplayer] = useState('X');
  const [gameTurns, setGameturns] = useState([]);
  const activePlayer = driveActivePlayer(gameTurns);
  // winner state
  // const [hasWinner, setHasWinner] = useState(false)
  const gameBoard = driveGameboard(gameTurns);
  const winner = driveWinner(gameBoard, players);
  // here we check as I have nine places to add symbol in so ican case I fill them all and not win that a draw
  const draw = gameTurns.length === 9 && !winner;
  function handleSelect(rowIndex, colIndex) {
    setGameturns((prevTurns) => {
      const currentPlayer = driveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  function handleRematch() {
    setGameturns([]);
  }

  function handlePlayer(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }
  return (
    <main>
      <div id="game-container">
        {/* players area */}
        <ol id="players" className="highlight-player">
          <Player
            name={playersData.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayer}
          />
          <Player
            name={playersData.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayer}
          />
        </ol>
        {(winner || draw) && (
          <GameOver winner={winner} clickEvent={handleRematch} />
        )}
        <GameBoard onSelectSquare={handleSelect} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
