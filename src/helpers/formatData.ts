import getUsdPrices from "./getUsdPrices";

async function formatData(data) {
   const usdValues = await getUsdPrices(data);
   console.log(data);
   return {
      eth_price: usdValues.find((value) => value.id === "ethereum").usdValue,
      data: data.map((reward) => ({
         name: reward.quest.name,
         network: reward.quest.network,
         contractAddress: reward.quest.contractAddress,
         claimed: reward.rewardClaim.isClaimed,
         questId: reward.quest.id,
         questIcon: reward.quest.iconOption,
         reward: {
            network: reward.nftReceipt.network,
            icon: reward.quest.rewards[0].s3Link,
            amount: reward.nftReceipt.tokenAmount / 10 ** reward.quest.rewards[0].decimals,
            token: {
               name: reward.quest.rewards[0].token,
               symbol: reward.quest.rewards[0].tokenSymbol,
               contract: reward.quest.rewards[0].tokenContractAddress,
               usdValue: usdValues.find(
                  (value) => value.address === reward.quest.rewards[0].tokenContractAddress
               ).usdValue
            }
         }
      }))
   };
}

export default formatData;
