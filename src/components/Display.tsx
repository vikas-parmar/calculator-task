import styles from "../styles/Display.module.css";

interface DisplayProps {
  value: string;
  result: string;
}

const Display = ({ value, result }: DisplayProps) => {
  return (
    <div className={styles.display}>
      <div className={styles.input}>{value}</div>
      <div className={styles.result}>{result}</div>
    </div>
  );
};

export default Display;
