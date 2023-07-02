import styles from "@/styles/Quest.module.css";
import Image from "next/image";

function Quest({ quest, selected, onSelect }) {
   const handleClick = () => {
      onSelect(quest);
   };

   const questClass = `${styles.quest} ${selected ? styles.selected : ""}`;

   return (
      <div className={questClass} onClick={handleClick}>
         <div className={styles.description}>
            <img className={styles["quest-icon"]} src={quest.questIcon} alt={quest.name} />
            <div className={styles["reward-info"]}>
               <div className={styles.reward}>
                  <p>Reward: {quest.reward.amount}</p>
                  <img
                     src={quest.reward.icon}
                     alt={quest.name + "icon"}
                     height={16}
                     width={16}
                  />
               </div>
               <p>~${(quest.reward.token.usdValue * quest.reward.amount).toFixed(2)}USD</p>
            </div>
         </div>
      </div>
   );
}

export default Quest;
