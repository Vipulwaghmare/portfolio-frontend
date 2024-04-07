import {
  Button,
  ButtonGroup,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "./index.scss";
import SelectionSort from "./SelectionSort";
import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";

enum AlgoNames {
  selection,
  bubble,
  insertion,
}

const algoList = [
  {
    name: "Selection",
    value: AlgoNames.selection,
  },
  {
    name: "Bubble",
    value: AlgoNames.bubble,
  },
  {
    name: "Insertion",
    value: AlgoNames.insertion,
  },
];

const getAlgoComponent = (
  algoName: AlgoNames | null,
  array: number[],
  delay: number,
): JSX.Element | null => {
  switch (algoName) {
    case AlgoNames.selection:
      return <SelectionSort data={array} delay={delay} />;
    case AlgoNames.bubble:
      return <BubbleSort data={array} delay={delay} />;
    case AlgoNames.insertion:
      return <InsertionSort data={array} delay={delay} />;
    default:
      return null;
  }
};

export default function Sorting() {
  const [number, setNumber] = useState(0);
  const [error, setError] = useState("");
  const [current, setCurrent] = useState<AlgoNames | null>(null);
  const [array, setArray] = useState<number[]>([
    55, 88, 97, 56, 48, 32, 22, 11, 2,
  ]);
  const [delay, setDelay] = useState(1000);

  return (
    <div>
      <form>
        <TextField
          value={number}
          type="number"
          inputProps={{
            type: "number",
            min: 0,
            max: 100,
          }}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <Button
          onClick={(e) => {
            e.preventDefault();
            setCurrent(null);
            if (array.length <= 10) {
              setArray([...array, number]);
              setNumber(0);
              setError("");
            } else {
              setError("You can only add 10 elements");
            }
          }}
          type="submit"
        >
          Add
        </Button>
        <Button
          onClick={() => {
            setArray([]);
            setCurrent(null);
          }}
          type="button"
        >
          Clear
        </Button>
      </form>
      <Slider
        // aria-label="Delay"
        // defaultValue={1000}
        // valueLabelDisplay="auto"
        // shiftStep={30}
        step={10}
        // marks
        min={100}
        max={1000}
        value={delay}
        onChange={(_, v) => setDelay(v as number)}
      />
      <Typography variant="h6" color="red">
        {error}
      </Typography>
      <div>{JSON.stringify(array)}</div>
      <ButtonGroup>
        {algoList.map(({ name, value }) => (
          <Button
            key={value}
            onClick={() => setCurrent(value)}
            variant={current === value ? "contained" : "outlined"}
          >
            {name}
          </Button>
        ))}
      </ButtonGroup>
      {getAlgoComponent(current, array, delay)}
    </div>
  );
}
