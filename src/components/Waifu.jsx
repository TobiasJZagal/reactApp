import React from "react";

export default function TrashWaifus(props) {
  /* const idol = props.idol ? <p>Idol: {props.idol}</p> : ""; */
  return (
    <article className="waifu">
      <header>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
      </header>
      {props.idol && <p>Idol: {props.idol}</p>}
      <h2>Hobbies{props.hobbies}</h2>
    </article>
  );
}
