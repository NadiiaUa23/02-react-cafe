// import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";

function App() {
  return (
    <div className={css.app}>
      <div>
        <CafeInfo />
      </div>
      <VoteOptions />
      <VoteStats />
    </div>
  );
}

export default App;
