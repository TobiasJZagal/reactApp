import React from "react";
import WaifuDump from "./Waifu.jsx";

export default function App() {
  const data = [
    {
      name: "Nico",
      hobbies: ["idol faggetry", "dresses maybe"],
      email: "nicoInc@gmail.com",
      idol: "yes"
    },
    {
      name: "Rei",
      hobbies: ["reading", "I don't fucking know tbh"],
      email: "Rei@gmail.com"
    },
    {
      name: "Megumin",
      hobbies: ["explosions", "more eksplosions"],
      email: "ekesplooosion@gmail.com"
    }
  ];

  const waifus = data.map(waifu => {
    return <WaifuDump key={waifu.email} {...waifu} />;
  });

  return (
    <div id="App">
      <header>Header</header>
      {waifus}
      <footer>Footer</footer>
    </div>
  );
}
