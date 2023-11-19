import { useEffect, useRef, useState } from "react";

interface propsInterface {
  fetchData(count: number): Promise<void>;
}

const useInfiniteScroll = ({ fetchData }: propsInterface) => {
  const [isLoading, setIsLoading] = useState(false);
  const calledCount = useRef(1);
  const loadingRef = useRef(false);
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting && !loadingRef.current) {
          setIsLoading(true);
          loadingRef.current = true;
          await fetchData(calledCount.current);
          calledCount.current = calledCount.current + 1;
          setIsLoading(false);
          loadingRef.current = false;
        }
      },
      { threshold: 1 },
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, fetchData]);

  return { isLoading, observerTarget };
};

export default useInfiniteScroll;
