import { useEffect } from "react";
import styles from "@/styles/Overlay.module.css";

const Overlay = ({ children, show }) => {
   useEffect(() => {
      if (show) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "auto";
      }
      // Cleanup function to revert the style change when the component unmounts
      return () => {
         document.body.style.overflow = "auto";
      };
   }, [show]);

   if (!show) {
      return null;
   }

   return <div className={styles.overlay}>{children}</div>;
};

export default Overlay;
