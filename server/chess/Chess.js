import { Chess } from "chess.js";
import { Router } from 'express';

// const chess = new Chess();

// while (!chess.isGameOver()) {
//   const moves = chess.moves();
//   const move = moves[Math.floor(Math.random() * moves.length)];
//   chess.move(move);
// }
// console.log(chess.ascii());
// console.log(chess.pgn());


export const chessRouter = Router()
  .post("/init", (req, res) => {
    const chess = new Chess();

    return res.json({
      chessboard: {
        board: chess.ascii(),
        pgn: chess.pgn(),
        moves: chess.moves(),
        fen: chess.fen(),
      },
    });

  })
  .post("/move", (req, res) => {
    const { chessboard, move } = req.body;

    const chess = new Chess(chessboard.fen);
    
    chess.move(move);

    return res.json({
      chessboard: {
        board: chess.ascii(),
        pgn: chess.pgn(),
        moves: chess.moves(),
        fen: chess.fen(),
      },
    });
  });