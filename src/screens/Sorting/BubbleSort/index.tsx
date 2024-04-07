import { useEffect, useRef, useState } from "react";
import { swapElementsInArray, wait } from "../../../utils";
import Chart from "../Chart";

const code = `const swap = (array, firstIndex, secondIndex) => {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

const bubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
};

console.log(bubbleSort([9, 3, 2, 2, 1]));`;

export default function BubbleSort({
  data,
  delay = 250,
}: {
  data: number[];
  delay?: number;
}) {
  const [localData, setLocalData] = useState([...data]);
  const dataRef = useRef(localData);
  const stopRef = useRef(false);
  const delayRef = useRef(delay);

  useEffect(() => {
    return () => {
      stopRef.current = true;
    };
  }, []);

  useEffect(() => {
    delayRef.current = delay;
  }, [delay]);

  useEffect(() => {
    const start = async () => {
      setLocalData(data);
      dataRef.current = [...data];
      const currentData = dataRef.current;
      for (let i = 0; i < currentData.length; i++) {
        if (stopRef.current) break;
        for (let j = 0; j < currentData.length - i - 1; j++) {
          if (currentData[j] > currentData[j + 1]) {
            const swappedArray = swapElementsInArray(
              currentData,
              j,
              j + 1,
              true,
            );
            console.log(swappedArray);
            if (stopRef.current) break;
            await wait(delayRef.current);
            dataRef.current = swappedArray;
            setLocalData(swappedArray);
          }
        }
      }
    };
    start();
  }, [data]);
  return <Chart algorithmName="Bubble Sort" code={code} data={localData} />;
}
