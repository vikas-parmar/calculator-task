import styles from "../styles/Panel.module.css";

interface PanelProps {
  activeTab: "history" | "memory";
  setActiveTab: (tab: "history" | "memory") => void;
  history: string[];
  memory: number[];
  onClearHistory: () => void;
  onMemoryClear: () => void;
  togglePanel: () => void;
}
const Panel = ({
  activeTab,
  setActiveTab,
  history,
  memory,
  onClearHistory,
  onMemoryClear,
  togglePanel,
}: PanelProps) => {
  return (
    <div className={styles.panel}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeTab === "history" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("history")}
        >
          History
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "memory" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("memory")}
        >
          Memory
        </button>
      </div>
      {activeTab === "history" && (
        <div>
          <ul>
            {history.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
          <button onClick={onClearHistory}>Clear History</button>
        </div>
      )}
      {activeTab === "memory" && (
        <div>
          <ul>
            {memory.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
          <button onClick={onMemoryClear}>Clear Memory</button>
        </div>
      )}

      <button className={styles.menu} onClick={togglePanel}>
        X
      </button>
    </div>
  );
};

export default Panel;
