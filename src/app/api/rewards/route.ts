import { NextRequest, NextResponse } from "next/server";
import { isAddress } from "viem";
import formatData from "helpers/formatData";
type Address = string | undefined;

export async function GET(req: NextRequest) {
   const address: Address = req.nextUrl.searchParams.get("address");
   if (!address || !isAddress(address)) {
      return new Response("Bad Request: A valid Ethereum address is required", {
         status: 400
      });
   }

   try {
      const res = await fetch(`https://api.rabbithole.gg/v1/rewards/${address}`);
      if (!res.ok) {
         throw new Error(`API request failed with status ${res.status}`);
      }
      const data = await res.json();
      const formattedData = await formatData(data.rewards);
      return NextResponse.json(formattedData);
   } catch (err) {
      console.error(err);
      return new Response("Internal Server Error", { status: 500 });
   }
}
