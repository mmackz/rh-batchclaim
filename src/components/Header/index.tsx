"use client";
import { ConnectKitButton } from "@/components/wagmi/ConnectKitButton";
import rhlogo from "@/public/images/rh-logo.svg";
import rhlogo_sm from "@/public/images/rh-logo-sm.svg";
import Image from "next/image";
import styles from "@/styles/Header.module.css";
import { useState } from "react";

function Header(props) {
   const { address } = props;

   return (
      <header className={styles.header}>
         <div className={styles.inner}>
            <div className={styles["header-container"]}>
               <div
                  className={styles["logo-container"]}
                  onClick={() => (window.location.href = "https://rabbithole.gg/quests")}
               >
                  <Image
                     src={rhlogo}
                     fill
                     alt="rabbithole logo"
                     className={styles.logo_big}
                  />
                  <Image
                     src={rhlogo_sm}
                     fill
                     alt="rabbithole logo"
                     className={styles.logo_sm}
                  />
               </div>
            </div>

            <div className={`${styles["header-container"]} ${styles["header-right"]}`}>
               <div className={styles["connect-button"]} >
                  <ConnectKitButton />
               </div>
            </div>
         </div>
      </header>
   );
}

export default Header;
