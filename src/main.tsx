import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.scss";
import router from "./utils/router";
import queryClient from "./utils/queryClient";
import ErrorBoundary from "./components/ErrorBoundary";
import setupSentry from "./utils/setupSentry";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

setupSentry();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <RouterProvider router={router} />
            <ReactQueryDevtools />
          </ThemeProvider>
        </QueryClientProvider>
      </LocalizationProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
