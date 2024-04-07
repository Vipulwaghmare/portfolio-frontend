import { CodeBlock, dracula } from "react-code-blocks";
import { Grid, Typography } from "@mui/material";

export default function Chart({
  data,
  algorithmName,
  code,
  tempElement,
}: {
  data: number[];
  algorithmName: string;
  code: string;
  tempElement?: number;
}) {
  return (
    <Grid container padding={1}>
      <Grid item xs={12} container alignItems="center" gap={1}>
        <Typography variant="h5">{algorithmName}</Typography>
        <div>{JSON.stringify(data)}</div>
      </Grid>
      <Grid item xs={12} container>
        <Grid item xs={4}>
          <div className="chart-container">
            {data.map((i, index) => (
              <div
                className="chart"
                key={index}
                style={{
                  height: `${i * 2}px`,
                }}
              ></div>
            ))}
            {tempElement === undefined ? null : (
              <div
                className="chart tempElement"
                style={{
                  height: `${tempElement * 2}px`,
                }}
              ></div>
            )}
          </div>
        </Grid>
        <Grid item xs={8}>
          <CodeBlock
            text={code}
            language="javascript"
            showLineNumbers={true}
            theme={dracula}
            startingLineNumber={1}
            // codeBlock={{ lineNumbers: false, wrapLines: true }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
