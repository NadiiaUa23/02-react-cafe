// import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "./CafeInfo/CafeInfo";

function App() {
  return (
    <div className={css.app}>
      <div>
        <CafeInfo />
      </div>
      <p>кнопки</p>
      <p>отзывы</p>
    </div>
  );
}

export default App;
