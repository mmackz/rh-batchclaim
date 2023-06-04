"use client";

import { ConnectKitProvider } from "connectkit";
import * as React from "react";
import { WagmiConfig } from "wagmi";

import { config } from "../wagmi";

export function Providers({ children }: { children: React.ReactNode }) {
   const [mounted, setMounted] = React.useState(false);
   React.useEffect(() => setMounted(true), []);
   return (
      <WagmiConfig config={config}>
         <ConnectKitProvider
            customTheme={{
               "--ck-connectbutton-font-size": "0.875rem",
               "--ck-connectbutton-border-radius": "0.5rem",
               "--ck-connectbutton-background": "hsla(0, 0%, 100%, 0.05)",
               "--ck-connectbutton-hover-background": "hsla(0, 0%, 100%, 0.11)",
               "--ck-connectbutton-active-background": "hsla(0, 0%, 100%, 0.15)"
            }}
            options={{ initialChainId: 0 }}
         >
            {mounted && children}
         </ConnectKitProvider>
      </WagmiConfig>
   );
}
