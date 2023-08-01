"use client";
import Header from "@/components/Header";
import RewardList from "@/components/RewardList";
import { useAccount } from "@/modules/wagmi/dist/index";

function Page() {
   const { address, isConnected } = useAccount();

   return (
      <>
         <Header />
         {isConnected ? (
            <RewardList address={address} />
         ) : (
            <div
               style={{
                  width: "fit-content",
                  padding: "1rem",
                  background: "white",
                  borderRadius: "0.5rem",
                  border: "3px solid black",
                  margin: "2rem auto"
               }}
            >
               Please Connect Your Wallet
            </div>
         )}
      </>
   );
}

export default Page;
