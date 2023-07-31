import cache from "memory-cache";

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
   const coinGeckoIds = {
      WETH: "weth",
      ETH: "ethereum",
      LDO: "lido-dao",
      BAL: "balancer",
      OP: "optimism",
      rETH: "rocket-pool-eth",
      USDC: "usd-coin"
   };

   let values = cache.get("coinGeckoValues");

   if (!values) {
      const response = await fetch(
         `https://api.coingecko.com/api/v3/simple/price?ids=${Object.values(
            coinGeckoIds
         ).join()}&vs_currencies=usd`
      );
      values = await response.json();

      cache.put("coinGeckoValues", values, 600000);
   }

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
         item.id = coinGeckoIds[item.symbol];
      }
      ids.push(item.id);
   }

   uniqueCoins.push({ id: "ethereum" });
   return uniqueCoins.map((coin) => ({ ...coin, usdValue: values[coin.id]?.usd }));
}

export default getUsdPrices;
