import { useState } from "react";
import { useCalculator } from "../hooks/useCalculator";
import Display from "./Display";
import Keypad from "./Keypad";
import Panel from "./Panel";
import styles from "../styles/Calculator.module.css";

export default function Calculator() {
  const [showPanel, setShowPanel] = useState(false);
  const [activeTab, setActiveTab] = useState<"history" | "memory">("history");
  const calculator = useCalculator();

  const togglePanel = () => {
    setShowPanel((prev) => !prev);
  };

  return (
    <div className={styles.calculator}>
      <button className={styles.menu} onClick={togglePanel}>
        &#9776;
      </button>

      <Display
        value={calculator.state.display}
        result={calculator.state.result}
      />
      <Keypad
        onNumberClick={calculator.updateDisplay}
        onOperatorClick={calculator.updateDisplay}
        onClearAll={calculator.clearAll}
        onClearEnd={calculator.clearEnd}
        onBackspace={calculator.backspace}
        onCalculate={calculator.calculate}
        onMemoryStore={calculator.memoryStore}
        onMemoryRecall={calculator.memoryRecall}
        onMemoryAdd={calculator.memoryAdd}
        onMemorySubtract={calculator.memorySubtract}
        onMemoryClear={calculator.memoryClear}
      />
      {showPanel && (
        <Panel
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          history={calculator.state.history}
          memory={calculator.state.memory}
          onClearHistory={calculator.clearHistory}
          onMemoryClear={calculator.memoryClear}
          togglePanel={togglePanel}
        />
      )}
    </div>
  );
}
