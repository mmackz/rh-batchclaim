function getNetwork(network: string): string | null {
   switch (network) {
      case "opt-mainnet":
         return "optimistic-ethereum";
      case "polygon-mainnet":
         return "polygon-pos";
      case "eth-mainnet":
         return "ethereum";
      default:
         return null;
   }
}

async function getUsdPrices(data) {
   const res = await fetch("https://api.coingecko.com/api/v3/coins/list");
   const coinGeckoIds = await res.json();

   const uniqueCoins = [];

   for (const item of data) {
      if (
         !uniqueCoins.some(
            (coin) =>
               coin.network === getNetwork(item.quest.rewards[0].network.name) &&
               coin.address === item.quest.rewards[0].tokenContractAddress
         )
      ) {
         const coin = {
            network: getNetwork(item.quest.rewards[0].network.name),
            address: item.quest.rewards[0].tokenContractAddress,
            symbol: item.quest.rewards[0].tokenSymbol,
            id: null
         };
         // check for rETH and give it proper coingecko id
         if (coin.symbol === "rETH") {
            coin.id = "rocket-pool-eth";
         }
         uniqueCoins.push(coin);
      }
   }
   const ids = [];
   for (let item of uniqueCoins) {
      if (!item.id) {
         item.id = coinGeckoIds.find(
            (x) => x.symbol.toLowerCase() === item.symbol.toLowerCase()
         ).id;
      }
      ids.push(item.id);
   }

   const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=ethereum,${ids.join()}&vs_currencies=usd`
   );
   const values = await response.json();
   uniqueCoins.push({ id: "ethereum" });
   return uniqueCoins.map((coin) => ({ ...coin, usdValue: values[coin.id].usd }));
}

export default getUsdPrices;
