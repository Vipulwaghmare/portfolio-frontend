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
      <Grid xs={12} alignItems="center">
        <Typography variant="h5" textAlign="center">
          {algorithmName}
        </Typography>
      </Grid>
      <Grid item xs={12} container alignItems="flex-start" gap={2}>
        <Grid item xs={12} marginTop={2} justifyContent={"center"}>
          <div className="chart-container">
            {data.map((i, index) => (
              <div
                className="chart"
                key={index}
                style={{
                  height: `${i * 2}px`,
                }}
                data-number={i}
              ></div>
            ))}
            {tempElement === undefined ? null : (
              <div
                className="chart tempElement"
                style={{
                  height: `${tempElement * 2}px`,
                }}
                data-number={tempElement}
              ></div>
            )}
          </div>
        </Grid>
        <Grid item xs={12}>
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
