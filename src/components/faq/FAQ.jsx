import React, { useState } from "react";

export default function FAQ({ id, title, detail }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <article>
        <div>
          <h2>{title}</h2>
          <button
            style={{ width: "75px" }}
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? "see less" : "see answer"}
          </button>
        </div>
        {toggle && <p>{detail}</p>}
      </article>
    </div>
  );
}
