import { useQuery } from "@tanstack/react-query";
import { createChessGame } from "./api/chess/index.js";

function App() {
  const { isPending, error, data } = useQuery(createChessGame);
  if (isPending) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const { id, fen, lastMove, status, turn, winner } = data;

  return (
    <div>
      {fen?.split(" ")?.map((row, i) => (
        <div key={i}>
          {row?.split("")?.map((cell, j) => (
            <div key={j}>{cell}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
