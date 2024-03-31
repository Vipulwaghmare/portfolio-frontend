import { Button } from "@mui/material";
import { useRef, useState } from "react";
import { wait } from "../../../utils";

export default function InsertionSort({
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
      const currentElement = currentData[i];
      let prevIndex = i - 1;
      while (prevIndex >= 0 && currentData[prevIndex] > currentElement) {
        currentData[prevIndex + 1] = currentData[prevIndex];
        prevIndex = prevIndex - 1;
        await wait(delay);
        dataRef.current = [...currentData];
        setLocalData([...currentData]);
      }
      currentData[prevIndex + 1] = currentElement;
      await wait(delay);
      dataRef.current = [...currentData];
      setLocalData([...currentData]);
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
