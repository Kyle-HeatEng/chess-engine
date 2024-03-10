import { API_URL } from "../../config.js";

export type ChessBoard = {
  id: string;
  fen: string;
  lastMove: string;
  status: string;
  turn: string;
  winner: string;
};


export const createChessGame = {
  queryKey: ["createChessGame"],
  queryFn: async (): Promise<ChessBoard> => {
    const response = await fetch(`${API_URL}/chess/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (!response.ok) {
      // handle error
    }
    const data = await response.json();

    return data;
  },
};
