import { useRef, useState } from "react";
// import "./index.scss";

export default function AddList() {
  const [list, setList] = useState([]);

  const onClick = () => {
    list.push(1);
    setList(list);
  };

  return (
    <div>
      <h1>{JSON.stringify(list)}</h1>
      <button onClick={onClick}>Add</button>
    </div>
  );
}
