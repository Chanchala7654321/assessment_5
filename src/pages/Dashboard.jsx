import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import { fetchCoins } from "../api/cryptoApi";

export default function Dashboard() {
  const {
    data: coins,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["coins"],
    queryFn: fetchCoins,
    staleTime: 100000,
  });

  if (isLoading) {
    return <h2>Loading coins...</h2>;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {coins.map((coin) => (
          <Link key={coin.id} to={`/coin/${coin.id}`}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
                margin: "8px",
                width: "150px",
                textAlign: "center",
              }}
            >
              <img src={coin.image} alt={coin.name} width="60" />
              <h3>
                {coin.name} <br /> <span>{coin.symbol.toUpperCase()}</span>
              </h3>
              <p>{coin.current_price.toLocaleString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
