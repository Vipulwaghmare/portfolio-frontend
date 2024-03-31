export function swapElementsInArray<T>(
  array: T[],
  i: number,
  j: number,
  returnCopy = false,
): T[] {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  if (returnCopy) return [...array];
  return array;
}

