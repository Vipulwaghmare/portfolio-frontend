import { useEffect, useId, useRef, useState } from "react";
import { swapElementsInArray, wait } from "../../../utils";
import ChartLayout from "../Layout";

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
  const randomId = useId();
  const [localData, setLocalData] = useState<
    {
      id: string;
      number: number;
    }[]
  >([]);
  const dataRef = useRef(localData);
  const stopRef = useRef(false);
  const delayRef = useRef(delay);
  const [minId, setMinId] = useState("");
  const [current, setCurrent] = useState("");
  // const [selected, setSelected] = useState<Set<string>>(new Set([]));
  const [done, setDone] = useState<Set<string>>(new Set([]));

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
      const newData = data.map((number, i) => ({ id: randomId + i, number }));
      setLocalData(newData);
      dataRef.current = [...newData];
      let minIndex = 0;
      const currentData = dataRef.current;
      for (let i = 0; i < currentData.length; i++) {
        minIndex = i;
        setMinId(currentData[minIndex].id);
        await wait(delayRef.current / 2);
        for (let j = i + 1; j < currentData.length; j++) {
          setCurrent(currentData[j].id);
          await wait(delayRef.current / 2);
          if (currentData[j].number < currentData[minIndex].number) {
            minIndex = j;
            setMinId(currentData[minIndex].id);
            await wait(delayRef.current / 2);
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
        setDone((prev) => new Set([...prev, currentData[i].id]));
      }
    };
    start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <ChartLayout algorithmName="Selection Sort" code={code}>
      <div className="chart-container">
        {localData.map(({ number, id }) => (
          <div
            className={`chart ${current === id ? "selected" : ""} ${
              minId === id ? "highlight" : ""
            } ${done.has(id) ? "done" : ""} `}
            key={id}
            style={{
              height: `${number * 2}px`,
            }}
            data-number={number}
          ></div>
        ))}
      </div>
    </ChartLayout>
  );
}
