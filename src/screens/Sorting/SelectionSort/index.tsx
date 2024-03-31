import { Button } from "@mui/material";
import { useRef, useState } from "react";
import { swapElementsInArray, wait } from "../../../utils";

export default function SelectionSort({
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
    let minIndex = 0;
    const currentData = dataRef.current;
    for (let i = 0; i < currentData.length; i++) {
      minIndex = i;
      for (let j = i + 1; j < currentData.length; j++) {
        if (currentData[j] < currentData[minIndex]) {
          minIndex = j;
        }
      }
      const swappedArray = swapElementsInArray(currentData, minIndex, i, true);
      await wait(delay);
      dataRef.current = swappedArray;
      setLocalData(swappedArray);
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
