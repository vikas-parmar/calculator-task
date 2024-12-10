import { useState, useEffect } from "react";

interface CalculatorState {
  display: string;
  result: string;
  memory: number[];
  history: string[];
}

export function useCalculator() {
  const [state, setState] = useState<CalculatorState>(() => {
    const savedState = localStorage.getItem("calculatorState");
    return savedState
      ? JSON.parse(savedState)
      : {
          display: "0",
          result: "0",
          memory: [],
          history: [],
        };
  });

  useEffect(() => {
    localStorage.setItem("calculatorState", JSON.stringify(state));
  }, [state]);

  const updateDisplay = (value: string) => {
    setState((prevState) => ({
      ...prevState,
      display: prevState.display === "0" ? value : prevState.display + value,
    }));
  };

  const clearAll = () => {
    setState((prevState) => ({
      ...prevState,
      display: "0",
      result: "0",
    }));
  };

  const clearEnd = () => {
    setState((prevState) => ({
      ...prevState,
      display: prevState.display.slice(0, -1) || "0",
    }));
  };

  const backspace = () => {
    setState((prevState) => ({
      ...prevState,
      display: prevState.display.slice(0, -1) || "0",
    }));
  };

  const calculate = () => {
    try {
      const calculatedResult = new Function(`return ${state.display}`)();
      setState((prevState) => ({
        ...prevState,
        result: calculatedResult.toString(),
        history: [
          ...prevState.history,
          `${prevState.display}=${calculatedResult}`,
        ],
      }));
    } catch {
      setState((prevState) => ({
        ...prevState,
        result: "Error",
      }));
    }
  };

  const memoryStore = () => {
    setState((prevState) => ({
      ...prevState,
      memory: [parseFloat(prevState.result), ...prevState.memory],
    }));
  };

  const memoryRecall = () => {
    if (state.memory.length > 0) {
      setState((prevState) => ({
        ...prevState,
        display: prevState.memory[0].toString(),
      }));
    }
  };

  const memoryAdd = () => {
    if (state.memory.length > 0) {
      setState((prevState) => ({
        ...prevState,
        memory: [
          prevState.memory[0] + parseFloat(prevState.result),
          ...prevState.memory.slice(1),
        ],
      }));
    }
  };

  const memorySubtract = () => {
    if (state.memory.length > 0) {
      setState((prevState) => ({
        ...prevState,
        memory: [
          prevState.memory[0] - parseFloat(prevState.result),
          ...prevState.memory.slice(1),
        ],
      }));
    }
  };

  const memoryClear = () => {
    setState((prevState) => ({
      ...prevState,
      memory: [],
    }));
  };

  const clearHistory = () => {
    setState((prevState) => ({
      ...prevState,
      history: [],
    }));
  };

  return {
    state,
    updateDisplay,
    clearAll,
    clearEnd,
    backspace,
    calculate,
    memoryStore,
    memoryRecall,
    memoryAdd,
    memorySubtract,
    memoryClear,
    clearHistory,
  };
}
