const URL = "https://api.coingecko.com/api/v3";

export async function fetchCoins() {
    const res = await fetch(`${URL}/coins/markets?vs_currency=usd`
    );
    if (!res.ok) {
        throw new Error("Failed API to fatch coins");
    }
    return res.json();
}

export async function fetchCoinDetails(id) {
    const res = await fetch(`${URL}/coins/${id}`);
    if (!res.ok) {
        throw new Error("Failed to fetch coin");
    }

    return res.json();
}