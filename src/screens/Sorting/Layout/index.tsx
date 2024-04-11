import { CodeBlock, dracula } from "react-code-blocks";
import React from "react";
import { Grid, Typography } from "@mui/material";

export default function Chart({
  algorithmName,
  code,
  children,
}: {
  algorithmName: string;
  code: string;
  children: React.ReactNode;
}) {
  return (
    <Grid container padding={1}>
      <Grid item xs={12} alignItems="center">
        <Typography variant="h5" textAlign="center">
          {algorithmName}
        </Typography>
      </Grid>
      <Grid item xs={12} container alignItems="flex-start" gap={2}>
        <Grid item xs={12} marginTop={2} justifyContent={"center"}>
          {children}
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
