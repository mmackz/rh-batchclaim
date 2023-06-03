import { createConfig, configureChains } from "wagmi";
import { polygon, mainnet, optimism } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY;
const { chains, publicClient, webSocketPublicClient } = configureChains(
   [mainnet, polygon, optimism],
   [alchemyProvider({ apiKey, priority: 0 }), publicProvider({ priority: 1 })]
);

// Set up client
export const config = createConfig({
   autoConnect: true,
   connectors: [
      new MetaMaskConnector({ chains: [polygon, optimism] }),
      new CoinbaseWalletConnector({
         chains: [polygon, optimism],
         options: {
            appName: "Rabbithole Rewards Batch Claim",
            jsonRpcUrl: `https://polygon-mainnet.g.alchemy.com/v2/${apiKey}`,
            headlessMode: true
         }
      }),
      new WalletConnectConnector({
         chains: [polygon, optimism],
         options: {
            qrcode: true,
            rpc: {
               1: `https://polygon-mainnet.g.alchemy.com/v2/${apiKey}`
            },
            projectId: "871a52cdf1d5b8bcb30d0490cf4ab586"
         }
      }),
      new InjectedConnector({
         chains: [polygon, optimism],
         options: {
            name: "Injected",
            shimDisconnect: true
         }
      })
   ],
   publicClient,
   webSocketPublicClient
});