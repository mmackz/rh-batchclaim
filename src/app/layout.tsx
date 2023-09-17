import "@/styles/reset.css";
import "@/styles/globals.css";
import { Providers } from "./providers";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";

const font = localFont({
   src: [
      { path: "../fonts/CircularStd-Book.otf", weight: "400" },
      { path: "../fonts/circular-std-medium-500.ttf", weight: "500" },
      { path: "../fonts/CircularStd-Bold.ttf", weight: "700" }
   ]
});

const dmSans = DM_Sans({ weight: "500", subsets: ["latin"], variable: "--address-font" });

export const metadata = {
   title: "Rabbithole Receipt Rewards",
   description: "An app to claim Rabbithole Rewards from Receipts on Optimism and Polygon"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={`${font.className} ${dmSans.variable}`}>
            <Providers>{children}</Providers>
         </body>
      </html>
   );
}
