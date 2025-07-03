import css from "./VoteOptions.module.css";
import { VoteType, Votes } from "../../types/votes";

interface Props {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  votes: Votes;
}

export default function VoteOptions({ onVote, onReset, votes }: Props) {
  const hasVotes = votes.good + votes.neutral + votes.bad > 0;

  return (
    <div>
      <div className={css.container}>
        <button className={css.button} onClick={() => onVote("good")}>
          Good
        </button>
        <button className={css.button} onClick={() => onVote("neutral")}>
          Neutral
        </button>
        <button className={css.button} onClick={() => onVote("bad")}>
          Bad
        </button>
        {hasVotes && (
          <button className={`${css.button} ${css.reset}`} onClick={onReset}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
