import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import Subcounter from "./Subcounter";

const Counter: React.FC = () => {
  const [text, setText] = useState("Hello");
  const [count, setCount] = useState(0);

  const getData = () => 1;

  return (
    <Box
      sx={{
        width: "500px",
        height: "500px",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>{count}</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount(count + 1)}
        sx={{ mb: 2 }}
      >
        Increment
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setText(Math.random().toString(36).substring(7));
        }}
        sx={{ mb: 2 }}
      >
        Random string
      </Button>
      <Subcounter text={text} getData={getData} />
    </Box>
  );
};

export default Counter;
