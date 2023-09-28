import React from "react";
import i18next from 'i18next';
import Africa from "./Africa";
import Europe from "./Europe";
import Asia from "./Asia";
import ArabStates from "./ArabStates";
import Latin from "./Latin";

function Body() {
  return (
    <main>
      <Africa />
      <Europe />
      <Asia />
      <ArabStates />
      <Latin />
    </main>
  );
}

export default Body;
