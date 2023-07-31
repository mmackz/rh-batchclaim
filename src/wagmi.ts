import { createConfig, configureChains } from "wagmi";
import { mainnet, optimism, polygon } from "wagmi/chains";
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
   [optimism, polygon],
   // @ts-ignore
   [alchemyProvider({ apiKey, priority: 0 }), publicProvider({ priority: 1 })]
);

// Set up client
export const config = createConfig({
   autoConnect: true,
   connectors: [
      new MetaMaskConnector({ chains }),
      new CoinbaseWalletConnector({
         chains,
         options: {
            appName: "Rabbithole Rewards Batch Claim",
            headlessMode: true
         }
      }),
      new WalletConnectConnector({
         chains,
         options: {
            projectId: "871a52cdf1d5b8bcb30d0490cf4ab586"
         }
      })
   ],
   publicClient,
   webSocketPublicClient
});
