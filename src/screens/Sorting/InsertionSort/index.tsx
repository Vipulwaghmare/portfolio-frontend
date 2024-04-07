import { useEffect, useRef, useState } from "react";
import { wait } from "../../../utils";
import Chart from "../Chart";

const code = `const insertionSort = (array) => {  
  for (let i = 1; i < array.length; i++) {  
      let currentElement = array[i];  
      let j = i - 1;
      while (j >= 0 && array[j] > currentElement) {  
          array[j + 1] = array[j];  
          j = j - 1;  
      }  
      array[j + 1] = currentElement;  
  } 
  return array;
}  

console.log(insertionSort([9,3,2,2,1]))`;

export default function InsertionSort({
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
  const [tempElement, setTempElement] = useState<number | undefined>();

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
        const currentElement = currentData[i];
        setTempElement(currentElement);
        let prevIndex = i - 1;
        while (prevIndex >= 0 && currentData[prevIndex] > currentElement) {
          currentData[prevIndex + 1] = currentData[prevIndex];
          prevIndex = prevIndex - 1;
          if (stopRef.current) break;
          await wait(delayRef.current);
          dataRef.current = [...currentData];
          setLocalData([...currentData]);
        }
        currentData[prevIndex + 1] = currentElement;
        if (stopRef.current) break;
        await wait(delayRef.current);
        setTempElement(undefined);
        dataRef.current = [...currentData];
        setLocalData([...currentData]);
        await wait(delayRef.current);
      }
    };
    start();
  }, [data]);
  return (
    <Chart
      algorithmName="Insertion Sort"
      code={code}
      data={localData}
      tempElement={tempElement}
    />
  );
}
