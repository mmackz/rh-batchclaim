import { createPublicClient, http } from "viem";
import { optimism, mainnet } from "viem/chains";

export const publicClientOP = createPublicClient({
   chain: optimism,
   transport: http()
});

export const publicClientETH = createPublicClient({
   chain: mainnet,
   transport: http()
});

function calculateTxDataGas(txData) {

   if (txData.startsWith("0x")) {
      txData = txData.slice(2);
   }
   const bytes = txData.match(/.{1,2}/g);

   let zeroBytes = 0;
   let nonZeroBytes = 0;
   for (let byte of bytes) {
      if (byte === "00") {
         zeroBytes++;
      } else {
         nonZeroBytes++;
      }
   }

   const txDataSize = zeroBytes * 4 + nonZeroBytes * 16;
   return BigInt(txDataSize + 1920);
}

async function getGasCost() {
   const l1GasUsed = calculateTxDataGas("0x4e71d92d");
   const gasPriceETH = await publicClientETH.getGasPrice();
   const l1Fee = l1GasUsed * gasPriceETH;
   return (Number(l1Fee) * 0.684);
}

export default getGasCost;
