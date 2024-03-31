import { Button } from "@mui/material";
import { useRef, useState } from "react";
import { swapElementsInArray, wait } from "../../../utils";

export default function BubbleSort({
  data,
  delay = 250,
}: {
  data: number[];
  delay?: number;
}) {
  const [localData, setLocalData] = useState(data);
  const dataRef = useRef(localData);

  const onSort = async () => {
    setLocalData(data);
    dataRef.current = data;
    const currentData = dataRef.current;
    for (let i = 0; i < currentData.length; i++) {
      for (let j = 0; j < currentData.length - i - 1; j++) {
        if (currentData[j] > currentData[j + 1]) {
          const swappedArray = swapElementsInArray(currentData, j, j + 1, true);
          console.log(swappedArray);
          await wait(delay);
          dataRef.current = swappedArray;
          setLocalData(swappedArray);
        }
      }
    }
  };
  return (
    <>
      <Button onClick={onSort}>Sort</Button>
      <div>{JSON.stringify(localData)}</div>
      <div className="chart-container">
        {localData.map((i, index) => (
          <div
            className="chart"
            key={index}
            style={{
              height: `${i * 5}px`,
            }}
          ></div>
        ))}
      </div>
    </>
  );
}
