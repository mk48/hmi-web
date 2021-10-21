import { useState } from "react";

const template = [
  { type: "circle", radius: { designval: 5, runtimeval: "val2" }, color: "blue", x: { designval: 6, runtimeval: "val2" }, y: 7 },
  { type: "rect", width: { designval: 5 }, height: 4 },
];

const View = () => {
  const [data, setData] = useState({ val1: 20, val2: 5 });

  const onButtonClick = () => {
    setData((d) => {
      return { ...d, val2: d.val2 + 1 };
    });
  };

  return (
    <div>
      <button onClick={onButtonClick}>+</button>
      <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        {template.map((temp, idx) => {
          if (temp.type === "circle") {
            return <circle cx="10" cy="10" r={data[temp.radius.runtimeval]} />;
          } else if (temp.type === "rect") {
            return <rect cx="10" cy="10" r={data[temp.radius]} />;
          }
        })}
      </svg>
    </div>
  );
};

export default View;
