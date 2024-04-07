import { useEffect, useRef, useState } from "react";
import { swapElementsInArray, wait } from "../../../utils";
import Chart from "../Chart";

const code = `const swap = (array, firstIndex, secondIndex) => {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

const selectionSort = (array) => {
  let minIndex = 0;
  for (let i = 0; i < array.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) minIndex = j;
    }
    swap(array, minIndex, i);
  }
  return array;
};

console.log(selectionSort([9, 3, 2, 2, 1]));`;

export default function SelectionSort({
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
      let minIndex = 0;
      const currentData = dataRef.current;
      for (let i = 0; i < currentData.length; i++) {
        minIndex = i;
        for (let j = i + 1; j < currentData.length; j++) {
          if (currentData[j] < currentData[minIndex]) {
            minIndex = j;
          }
        }
        const swappedArray = swapElementsInArray(
          currentData,
          minIndex,
          i,
          true,
        );
        if (stopRef.current) break;
        await wait(delayRef.current);
        dataRef.current = swappedArray;
        setLocalData(swappedArray);
      }
    };
    start();
  }, [data, delay]);

  return <Chart algorithmName="Selection Sort" code={code} data={localData} />;
}
