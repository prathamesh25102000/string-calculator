"use client";

import React, { useState } from "react";
import addNumbers from "@/utils/add-numbers";
import styles from "./calculator.module.scss";

function StringCalculator() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<null | number>(null);
  const [error, setError] = useState<any>(null);

  const calculateSum = (inputString: string) => {
    try {
      const sum = addNumbers(inputString.replace(/\\n/g, "\n"));
      setResult(sum);
      setError(null);
    } catch (err) {
      console.log(err);

      setError(err?.message || "");
      setResult(null);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>String Calulator</h2>
      <input
        type="text"
        onChange={(e) => {
          setInput(e?.target?.value || "");
        }}
        value={input}
        placeholder="Enter input"
        className={styles.input}
      />

      <button
        onClick={() => {
          calculateSum(input);
        }}
        className={styles.btn}
      >
        Calculate
      </button>
      {result !== null && <p className={styles.result}>Result : {result}</p>}
      {error && <p className={styles.error}>Error : {error}</p>}
    </div>
  );
}

export default StringCalculator;
