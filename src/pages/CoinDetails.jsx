import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { fetchCoinDetails } from "../api/cryptoApi";

function CoinDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    data: coin,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["coin", id],
    queryFn: () => fetchCoinDetails(id),

    staleTime: 300000,
    refetchInterval: 10000,
  });

  if (isLoading) {
    return <h2>Loading coin details...</h2>;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div style={{textAlign: "center", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", maxWidth: "400px", margin: "20px auto"}}>
      <button onClick={() => navigate("/")}>Go Back</button>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1>{coin.name}</h1>
        <span>{coin.symbol.toUpperCase()}</span>
      </div>

      <img src={coin.image.large} alt={coin.name} width="100" />

      <p>Market Rank: {coin.market_cap_rank}</p>

      <h2>
        Current Price: ${coin.market_data.current_price.usd.toLocaleString()}
      </h2>

      <p>Market Cap: ${coin.market_data.market_cap.usd.toLocaleString()}</p>

      <p>24h High: ${coin.market_data.high_24h.usd.toLocaleString()}</p>

      <p>24h Low: ${coin.market_data.low_24h.usd.toLocaleString()}</p>
    </div>
  );
}



export default CoinDetails;