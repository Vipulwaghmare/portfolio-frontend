import { Button, TextField } from "@mui/material";
import { useState } from "react";
import "./index.scss";
import SelectionSort from "./SelectionSort";
import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";

export default function Sorting() {
  const [number, setNumber] = useState(0);
  const [array, setArray] = useState<number[]>([
    55, 88, 97, 56, 48, 32, 22, 11, 2,
  ]);

  return (
    <div>
      <form>
        <TextField
          value={number}
          type="number"
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <Button
          onClick={(e) => {
            e.preventDefault();
            setArray([...array, number]);
            setNumber(0);
          }}
          type="submit"
        >
          Add
        </Button>
        <Button onClick={() => setArray([])} type="button">
          Clear
        </Button>
      </form>
      {/* <Button>Sort</Button> */}
      <div>{JSON.stringify(array)}</div>
      <div>
        <SelectionSort data={array} />
      </div>
      <div>
        <BubbleSort data={array} />
      </div>
      <div>
        <InsertionSort data={array} />
      </div>
    </div>
  );
}
