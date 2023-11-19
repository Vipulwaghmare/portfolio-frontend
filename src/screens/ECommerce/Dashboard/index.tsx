import { useState } from "react";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";

const EcommerceDashboard = () => {
  const [test, setTest] = useState<number[]>([]);

  const fetchData = async (count: number) => {
    console.log("called fetch data", test.length, count);
    await new Promise((r) => setTimeout(r, 2000));
    const newData: number[] = [];
    for (let i = 1; i <= 100; i++)
      newData.push((test[test.length - 1] || 0) + i);
    setTest((prev) => [...prev, ...newData]);
  };

  const { isLoading, observerTarget } = useInfiniteScroll({ fetchData });
  return (
    <>
      EcommerceDashboard
      {test.map((i) => (
        <div key={i}>{i}</div>
      ))}
      {isLoading && <div>LOADING...</div>}
      <div ref={observerTarget}></div>
    </>
  );
};

export default EcommerceDashboard;
