import styles from "./VoteStats.module.css";
import { Votes } from "../../types/votes";

interface Props {
  votes: Votes;
}

export default function VoteStats({ votes }: Props) {
  const total = votes.good + votes.neutral + votes.bad;
  const positive = total ? Math.round((votes.good / total) * 100) : 0;
  return (
    <div>
      <div className={styles.container}>
        <p className={styles.stat}>
          Good: <strong>{votes.good}</strong>
        </p>
        <p className={styles.stat}>
          Neutral: <strong>{votes.neutral}</strong>
        </p>
        <p className={styles.stat}>
          Bad: <strong>{votes.bad}</strong>
        </p>
        <p className={styles.stat}>
          Total: <strong>{total}</strong>
        </p>
        <p className={styles.stat}>
          Positive: <strong>{positive}%</strong>
        </p>
      </div>
    </div>
  );
}
