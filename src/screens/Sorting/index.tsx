import {
  Button,
  ButtonGroup,
  Grid,
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
  const [number, setNumber] = useState<number | "">("");
  const [error, setError] = useState("");
  const [current, setCurrent] = useState<AlgoNames | null>(null);
  const [array, setArray] = useState<number[]>([
    50, 40, 30, 20, 10, 100, 90, 80, 70, 60,
  ]);
  const [delay] = useState(1000);

  return (
    <Grid padding={2}>
      <form className="sort-input-form">
        <TextField
          value={number}
          type="number"
          label="Enter a number between 0 to 100"
          onChange={(e) => {
            const number = Number(e.target.value);
            if (number >= 0 && number <= 100) {
              setNumber(number);
            }
          }}
          style={{
            width: 300,
          }}
        />
        <Button
          onClick={(e) => {
            e.preventDefault();
            setCurrent(null);
            if (array.length <= 10) {
              if (number !== "") {
                setArray([...array, number]);
                setNumber("");
              }
              setError("");
            } else {
              setError("You can only add 10 elements");
            }
          }}
          type="submit"
          variant="outlined"
        >
          Add
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            setArray([]);
            setCurrent(null);
          }}
          type="button"
        >
          Clear
        </Button>
      </form>
      <Typography variant="h6" color="red" textAlign={"center"}>
        {error}
      </Typography>
      <div className="sort-numbers-list">
        {array.map((num, index) => (
          <div key={index}>{num}</div>
        ))}
      </div>
      <Grid container justifyContent="center">
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
      </Grid>
      {getAlgoComponent(current, array, delay)}
    </Grid>
  );
}
