"use client";

import React, { useState } from "react";
import addNumbers from "@/utils/add-numbers";
import styles from "./calculator.module.scss";

function StringCalculator() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<null | number>(null);
  const [error, setError] = useState<any>(null);
  const [isResultInThrottle, setIsResultInThrottle] = useState<boolean>(false);

  const calculateSum = (inputString: string) => {

    if (!isResultInThrottle) {
      setIsResultInThrottle(true);

      setTimeout(() => {
        try {
          const sum = addNumbers(inputString.replace(/\\n/g, "\n"));
          setResult(sum);
          setError(null);
        } catch (err) {
          setError(err?.message || "");
          setResult(null);
        } finally {
          setIsResultInThrottle(false);
        }
      }, 700);
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
        disabled={isResultInThrottle}
        data-type={isResultInThrottle ? "inactive" : "active"}
      >
        {isResultInThrottle ? "Calculating..." : "Calculate"}
      </button>
      {result !== null && !isResultInThrottle && (
        <p className={styles.result}>Result : {result}</p>
      )}
      {error && !isResultInThrottle && (
        <p className={styles.error}>Error : {error}</p>
      )}
    </div>
  );
}

export default StringCalculator;
