import { useEffect, useRef, useState, useId } from "react";
import { swapElementsInArray, wait } from "../../../utils";
import ChartLayout from "../Layout";

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
  const [selected, setSelected] = useState<Set<string>>(new Set([]));
  const [maxId, setMaxId] = useState("");
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
      const currentData = dataRef.current;
      for (let i = 0; i < currentData.length; i++) {
        if (stopRef.current) break;
        for (let j = 0; j < currentData.length - i - 1; j++) {
          setSelected(new Set([currentData[j].id, currentData[j + 1].id]));
          await wait(delayRef.current / 2);
          setMaxId(
            currentData[j].number > currentData[j + 1].number
              ? currentData[j].id
              : currentData[j + 1].id,
          );
          await wait(delayRef.current / 2);
          if (currentData[j].number > currentData[j + 1].number) {
            const swappedArray = swapElementsInArray(
              currentData,
              j,
              j + 1,
              true,
            );
            if (stopRef.current) break;
            await wait(delayRef.current);
            dataRef.current = swappedArray;
            setLocalData(swappedArray);
            setSelected(new Set([]));
            setMaxId("");
            await wait(delayRef.current / 2);
          }
        }
        setDone(
          (prev) =>
            new Set([...prev, currentData[currentData.length - i - 1].id]),
        );
      }
    };
    start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <ChartLayout algorithmName="Bubble Sort" code={code}>
      <div className="chart-container">
        {localData.map(({ number, id }) => (
          <div
            className={`chart ${selected.has(id) ? "selected" : ""} ${
              maxId === id ? "highlight" : ""
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
