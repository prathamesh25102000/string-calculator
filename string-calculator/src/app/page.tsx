import StringCalculator from "./components/calculator";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <StringCalculator />
      </main>
    </div>
  );
}
