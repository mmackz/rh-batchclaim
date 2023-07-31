import { useNetwork, useSwitchNetwork } from "@/modules/wagmi/dist/index";
import { useState, useEffect, useRef } from "react";
import styles from "@/styles/SwitchChains.module.css";
import Image from "next/image";
import opIcon from "@/public/images/icons/op.svg";
import polygonIcon from "@/public/images/icons/polygon.svg";

function SwitchChains() {
   const [open, setOpen] = useState(false);
   const { chain } = useNetwork();
   const { chains, error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork();
   const logo = chain && chain.id === 10 ? opIcon : polygonIcon;

   const outerRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      function handleClickOutside(event) {
         if (outerRef.current && !outerRef.current.contains(event.target)) {
            setOpen(false);
         }
      }
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   return (
      <>
         {chain && (
            <>
               <div
                  ref={outerRef}
                  className={styles.outer}
                  onClick={() => setOpen((prev) => !prev)}
               >
                  <div className={styles.container}>
                     <Image
                        className={styles.logo}
                        src={logo}
                        alt="logo"
                        width={24}
                        height={24}
                     />
                     <p className={styles.text}>{chain.name}</p>
                     <div className={`${styles.arrow} ${open && styles.active}`}></div>
                  </div>

                  <div className={`${styles.dropdown} ${open && styles.open}`}>
                     <div
                        className={`${styles["dropdown-item"]} ${
                           chain?.id === 10 && styles.selected
                        }`}
                        onClick={() => switchNetwork?.(10)}
                     >
                        <Image
                           className={styles.logo}
                           src={opIcon}
                           alt="logo"
                           width={21}
                           height={21}
                        />
                        <p className={styles.text}>Optimism</p>
                     </div>
                     <div
                        className={`${styles["dropdown-item"]} ${
                           chain?.id === 137 && styles.selected
                        }`}
                        onClick={() => switchNetwork?.(137)}
                     >
                        <Image
                           className={styles.logo}
                           src={polygonIcon}
                           alt="logo"
                           width={21}
                           height={21}
                        />
                        <p className={styles.text}>Polygon</p>
                     </div>
                  </div>
               </div>
            </>
         )}
      </>
   );
}

export default SwitchChains;
