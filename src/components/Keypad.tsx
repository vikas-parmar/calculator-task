import styles from "../styles/Keypad.module.css";

interface KeypadProps {
  onNumberClick: (value: string) => void;
  onOperatorClick: (value: string) => void;
  onClearAll: () => void;
  onClearEnd: () => void;
  onBackspace: () => void;
  onCalculate: () => void;
  onMemoryStore: () => void;
  onMemoryRecall: () => void;
  onMemoryAdd: () => void;
  onMemorySubtract: () => void;
  onMemoryClear: () => void;
}

export default function Keypad({
  onNumberClick,
  onOperatorClick,
  onClearAll,
  onClearEnd,
  onBackspace,
  onCalculate,
  onMemoryStore,
  onMemoryRecall,
  onMemoryAdd,
  onMemorySubtract,
  onMemoryClear,
}: KeypadProps) {
  return (
    <div className={styles.keypad}>
      <button onClick={onMemoryClear}>MC</button>
      <button onClick={onMemoryRecall}>MR</button>
      <button onClick={onMemoryAdd}>M+</button>
      <button onClick={onMemorySubtract}>M-</button>
      <button onClick={onMemoryStore}>MS</button>
      <button onClick={onClearEnd}>CE</button>
      <button onClick={onClearAll}>C</button>
      <button onClick={onBackspace}>&larr;</button>
      <button onClick={() => onOperatorClick("/")}>/</button>
      <button onClick={() => onNumberClick("7")}>7</button>
      <button onClick={() => onNumberClick("8")}>8</button>
      <button onClick={() => onNumberClick("9")}>9</button>
      <button onClick={() => onOperatorClick("*")}>*</button>
      <button onClick={() => onNumberClick("4")}>4</button>
      <button onClick={() => onNumberClick("5")}>5</button>
      <button onClick={() => onNumberClick("6")}>6</button>
      <button onClick={() => onOperatorClick("-")}>-</button>
      <button onClick={() => onNumberClick("1")}>1</button>
      <button onClick={() => onNumberClick("2")}>2</button>
      <button onClick={() => onNumberClick("3")}>3</button>
      <button onClick={() => onOperatorClick("+")}>+</button>
      <button onClick={() => onNumberClick("0")}>0</button>
      <button onClick={() => onNumberClick(".")}>.</button>
      <button onClick={onCalculate}>=</button>
    </div>
  );
}
